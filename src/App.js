import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './views/welcome/WelcomeScreen';
import IntakeForm from './views/intake/IntakeForm';
import TrainingProgramSelection from './views/trainingProgramSelection/TrainingProgramSelection';
import ProgramDates from './views/programDates/ProgramDates';
import UploadCertificate from './views/uplaod/UploadCertificate';
import Payment from './views/payment/Payment';
import GoodbyeScreen from './views/goodbye/GoodbyeScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} /> 
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/intake" element={<IntakeForm />} />
        <Route path="/trainingProgramSelection" element={<TrainingProgramSelection />} />
        <Route path="/programDates" element={<ProgramDates />} />
        <Route path="/UploadCertificate" element={<UploadCertificate />} />
        <Route path="/Payment" element={<Payment/>} />
        <Route path="/goodbye" element={<GoodbyeScreen/>} />
      </Routes>
    </Router>
  );
}

export default App;