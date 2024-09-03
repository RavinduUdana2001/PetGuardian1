import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SignupContent.css'; // Import the CSS file
import backpic from '../../assets/backpic3.jpg';

function SignupContent() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [petType, setPetType] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Handle form submission logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Pet Type:', petType);

    // Reset the form
    setUsername('');
    setEmail('');
    setPassword('');
    setRepeatPassword('');
    setPetType('');

    // Redirect to login page after successful sign up
    navigate('/login');
  };

  const handleLoginRedirect = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className='row'>
      <div className='col-lg-6 col-md-12 col-sm-12'>
        <div className="signup-container">
          <div className="signup-form-wrapper">
            <h2 className="signup-header fs-1">Sign Up</h2>
            <form onSubmit={handleSubmit} className="signup-form">
              <div className="signup-form-group">
                <label htmlFor="username" className="signup-form-label">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="signup-form-input"
                  required
                />
              </div>
              <div className="signup-form-group">
                <label htmlFor="email" className="signup-form-label">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="signup-form-input"
                  required
                />
              </div>
              <div className="signup-form-group">
                <label htmlFor="password" className="signup-form-label">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="signup-form-input"
                  required
                />
              </div>
              <div className="signup-form-group">
                <label htmlFor="repeat-password" className="signup-form-label">Repeat Password:</label>
                <input
                  type="password"
                  id="repeat-password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  className="signup-form-input"
                  required
                />
              </div>
              <div className="signup-form-group">
                <label htmlFor="pet-type" className="signup-form-label">Pet Type:</label>
                <select
                  id="pet-type"
                  value={petType}
                  onChange={(e) => setPetType(e.target.value)}
                  className="signup-form-select"
                  required
                >
                  <option value="">Select your pet type</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="bird">Bird</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button type="submit" className="signup-form-button mt-">Sign Up</button>
            </form>
            <p className='mt-3'>
              Already have an account? 
              <a href="#" onClick={handleLoginRedirect} className='login-link'> Login</a>
            </p>
          </div>
        </div>
      </div>
      <div className='col-lg-6 col-md-12 col-sm-12' style={{backgroundColor:"#e2e2e2"}}> 
        <div className='background-image' style={{ backgroundImage: `url(${backpic})` }}></div>
      </div>
    </div>
  );
}

export default SignupContent;
