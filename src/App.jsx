import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginContent from './Components/LoginContent/LoginContent';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import SignupContent from './Components/SignupContent/SignupContent';
import HomePage from './Components/Pages/HomePage';
import AboutPage from './Components/Pages/AboutPage';
import PettrainingPage from './Components/Pages/PettrainingPage';
import ChannelPet from './Components/Pages/ChannelPet';
import AdminPanel from './Components/Pages/AdminPanel'; 

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pet-training" element={<PettrainingPage />} />
        <Route path="/channel-your-pet" element={<ChannelPet/>} />
        <Route path="/login" element={<LoginContent />} />
        <Route path="/signup" element={<SignupContent />} />
        
        {/* Admin routes */}
        <Route path="/admin/*" element={<AdminPanel />} /> 
      </Routes>
    </Router>
  );
}

export default App;
