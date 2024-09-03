import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginContent from './Components/LoginContent/LoginContent';
import SignupContent from './Components/SignupContent/SignupContent';
import HomePage from './Components/Pages/HomePage';
import AboutPage from './Components/Pages/AboutPage';
import ContactPage from './Components/Pages/ContactPage';
import PettrainingPage from './Components/Pages/PettrainingPage';
import AdminPanel from './Components/Pages/AdminPanel'; // Import AdminPanel

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pet-training" element={<PettrainingPage />} />
        <Route path="/login" element={<LoginContent />} />
        <Route path="/signup" element={<SignupContent />} />
        
        {/* Admin routes */}
        <Route path="/admin/*" element={<AdminPanel />} /> 
      </Routes>
    </Router>
  );
}

export default App;
