// LoginContent.jsx

import React, { useState } from 'react';
import './LoginContent.css';  // Import the CSS file
import backpic from '../../assets/backpic3.jpg'; // Correctly import the image

function LoginContent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Redirect to home page after login (if using React Router)
    // You might use a redirect function or hook like useNavigate here
  };

  return (
    <div className='container-fluid1'>
      <div className='row no-gutters'>
        <div className='col-lg-6 col-md-12 image-column'>
          <div className='background-image' style={{ backgroundImage: `url(${backpic})` }}></div>
        </div>
        <div className='col-lg-6 col-md-12 form-column'>
          <div className='form-container'>
            <h2 className='fs-1 text-center mb-4'>Login</h2>
            <form onSubmit={handleSubmit} className='login-form'>
              <div className='form-group'>
                <label htmlFor='username' className='form-label'>Username:</label>
                <input
                  type='text'
                  id='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='form-input'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password' className='form-label'>Password:</label>
                <input
                  type='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='form-input'
                  required
                />
              </div>
              <button type='submit' className='submit-button mt-3'>Login</button>
              <p className='mt-3 pdes'>Don't have an account? <a className='ades' href='/signup'>Register</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginContent;
