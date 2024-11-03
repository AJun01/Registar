// server.js
const express = require('express');
const app = express();
const cors = require('cors'); // Import the cors package
const Stripe = require('stripe');
const stripe = Stripe('fakekey'); // Replace with your actual Stripe test secret key

app.use(express.static('public'));
app.use(express.json());

// Use the cors middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST'], // Allow these HTTP methods
  allowedHeaders: ['Content-Type'], // Allow these headers
}));

app.post('/create-payment-intent', async (req, res) => {
  try {
    // Create a PaymentIntent with the desired amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 5000, // Amount in cents (e.g., $50.00)
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Node server listening on port ${PORT}!`));