import React, { useState } from 'react';
import {  NavLink, useNavigate } from 'react-router';
import signInBanner from '../assets/Rectangle 19280.png';
import googleIcon from '../assets/image 939.png';
import emailIcon from '../assets/image 940.png';

const Signin = () => {

  const navigate = useNavigate();

  // Store email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Store loading and error messages
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Login function
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(
        'http://localhost:3000/api/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.trim().toLowerCase(),
            password,
          }),
        }
      );

      const data = await response.json();
if (!response.ok) {
  throw new Error(data.message || 'Login failed');
}

if (!data.token) {
  throw new Error('Login token was not received.');
}

      // Save login token
      localStorage.setItem('token', data.token);

      // Save user information if returned
      if (data.user) {
        localStorage.setItem('user', JSON.stringify(data.user));
      }

      navigate('/shop');

    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      {/* Main Card Container */}
      <div 
        className="row w-100 shadow-sm bg-white overflow-hidden" 
        style={{ maxWidth: '1000px', borderRadius: '24px' }}
      >
        
        {/* Left Side: Image Banner */}
        <div className="col-md-6 p-0 d-none d-md-block">
          <img 
            src={signInBanner} 
            alt="FASCO Fashion" 
            className="w-100 h-100"
            style={{ objectFit: 'cover', minHeight: '550px' }}
          />
        </div>

        {/* Right Side: Auth Form */}
        <div className="col-md-6 d-flex flex-column justify-content-between p-5">
          
          {/* Top Brand Logo */}
          <div className="text-center my-3">
            <h1 className="fw-serif display-5 tracking-wide" style={{ fontFamily: 'Georgia, serif', letterSpacing: '2px' }}>
              FASCO
            </h1>
          </div>

          {/* Form Content Wrapper */}
          <div className="mx-auto w-100" style={{ maxWidth: '360px' }}>
            <h5 className="text-center mb-4 fw-semibold text-dark" style={{ fontSize: '1.1rem' }}>
              Sign In To FASCO
            </h5>

            {/* Social OAuth Buttons */}
            <div className="row g-2 mb-4">
              <div className="col-6">
                <button className="btn btn-outline-secondary w-100 py-2 d-flex align-items-center justify-content-center btn-sm text-nowrap" style={{ borderColor: '#dcdcdc', borderRadius: '6px', fontSize: '0.85rem' }}>
                  <img 
                    src={googleIcon} 
                    alt="Google" 
                    className="me-2" 
                    style={{ width: '16px' }} 
                  />
                  Sign up with Google
                </button>
              </div>
              <div className="col-6">
                <button className="btn btn-outline-secondary w-100 py-2 d-flex align-items-center justify-content-center btn-sm text-nowrap" style={{ borderColor: '#dcdcdc', borderRadius: '6px', fontSize: '0.85rem' }}>
                    <img src={emailIcon}
                     className='me-2'
                     style={{width: '16px'}}
                     />
                  <i className="bi bi-envelope-fill text-danger me-2" style={{ fontSize: '16px' }}></i>
                  Sign up with Email
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="d-flex align-items-center my-4">
              <hr className="flex-grow-1 text-muted" />
              <span className="mx-3 text-muted fw-bold small" style={{ letterSpacing: '2px' }}>— OR —</span>
              <hr className="flex-grow-1 text-muted" />
            </div>

            {/* Credential Inputs */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input 
                  type="email" 
                  required
                  className="form-control border-top-0 border-start-0 border-end-0 rounded-0 px-0 pb-2 shadow-none" 
                  placeholder="Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ borderBottom: '1px solid #ccc', fontSize: '0.9rem' }}
                />
              </div>
              <div className="mb-4 position-relative">
                <input 
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="form-control border-top-0 border-start-0 border-end-0 rounded-0 px-0 pb-2 shadow-none pe-5" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ borderBottom: '1px solid #ccc', fontSize: '0.9rem' }}
                />
                <button
                  type="button"
                  className="btn btn-link position-absolute end-0 top-50 translate-middle-y p-0 text-muted"
                  style={{ fontSize: '0.75rem', textDecoration: 'none' }}
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>

              {/* Action Buttons */}
             
              
              
<button
  type="submit"
  disabled={loading}
  className="btn btn-dark w-100 py-2.5 mb-2 fw-semibold"
  style={{
    borderRadius: '8px',
    backgroundColor: '#000',
    fontSize: '0.9rem'
  }}
>
  {loading ? 'Signing In...' : 'Sign In'}
</button>

{message && (
  <p className="text-danger text-center mt-2">
    {message}
  </p>
)}


<NavLink to="/signup" className="btn btn-outline-primary w-100">
  Create an Account
</NavLink>

              {/* Forgot Password Link */}
              <div className="text-end">
                <NavLink to='/ForgetPassword' className="text-decoration-none fw-semibold" style={{ color: '#4A60A1', fontSize: '0.85rem' }}>
                  Forgot Password?
                </NavLink>
              </div>
            </form>
          </div>

          {/* Footer Terms */}
          <div className="text-end mt-4">
            <small className="text-muted" style={{ fontSize: '0.75rem', cursor: 'pointer' }}>
              FASCO Terms & Codnitions
            </small>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signin;