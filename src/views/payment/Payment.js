// src/components/Payment.js
import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

// Replace with your actual Stripe test publishable key
const stripePromise = loadStripe('fakekey');

function Payment() {
  const navigate = useNavigate();

  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create PaymentIntent on the backend
    fetch('http://localhost:4242/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`Error ${res.status}: ${errorText}`);
        }
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error('Error:', error));
  }, []);

  const appearance = {
    theme: 'flat',
    variables: {
      colorPrimary: '#e67e22',
      colorBackground: '#f9f9f9',
      colorText: '#2c3e50',
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      {clientSecret ? (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm navigate={navigate} />
        </Elements>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

function CheckoutForm({ navigate }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Redirect or display a success message
        return_url: window.location.origin + '/success',
      },
      redirect: 'if_required',
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Payment succeeded!');
      navigate('/goodbye');
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      {message && <div id="payment-message">{message}</div>}
      <button disabled={isProcessing || !stripe || !elements} id="submit">
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
}

export default Payment;