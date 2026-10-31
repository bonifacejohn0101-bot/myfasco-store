
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';

import signUpBanner from '../assets/Rectangle 19280 copy.png';
import googleIcon from '../assets/image 939.png';
import emailIcon from '../assets/image 940.png';

const SignUp = () => {
  const navigate = useNavigate();

  // Form states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Loading and message states
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Registration function
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage('');
    setMessageType('');

    // Check names
    if (!firstName.trim() || !lastName.trim()) {
      setMessage('Please enter your full name.');
      setMessageType('error');
      return;
    }

    // Check password length
    if (password.length < 8) {
      setMessage('Password must be at least 8 characters.');
      setMessageType('error');
      return;
    }

    // Check passwords
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      setMessageType('error');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        'http://localhost:3000/api/auth/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim().toLowerCase(),
            phone: phone.trim(),
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || 'Registration failed. Try again.'
        );
      }

      // Redirect after successful registration
      navigate('/signin', {
        state: {
          message: 'Account created successfully! Please sign in.',
        },
      });

    } catch (error) {
      setMessage(error.message || 'Something went wrong.');
      setMessageType('error');

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">

      {/* Main Card */}
      <div
        className="row w-100 shadow-sm bg-white overflow-hidden"
        style={{
          maxWidth: '1000px',
          borderRadius: '24px',
        }}
      >

        {/* Left Side: Image */}
        <div className="col-md-6 p-0 d-none d-md-block">
          <img
            src={signUpBanner}
            alt="FASCO Sign Up Banner"
            className="w-100 h-100"
            style={{
              objectFit: 'cover',
              minHeight: '600px',
            }}
          />
        </div>

        {/* Right Side: Sign Up Form */}
        <div className="col-md-6 d-flex flex-column justify-content-between p-5">

          {/* Logo */}
          <div className="text-center my-2">
            <h1
              className="fw-serif display-5 tracking-wide"
              style={{
                fontFamily: 'Georgia, serif',
                letterSpacing: '2px',
              }}
            >
              FASCO
            </h1>
          </div>

          {/* Form Wrapper */}
          <div className="mx-auto w-100" style={{ maxWidth: '420px' }}>

            <h5 className="text-center mb-4 fw-semibold text-dark">
              Create Account
            </h5>

            {/* Social Buttons */}
            <div className="row g-2 mb-4">

              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-outline-secondary w-100 py-2 d-flex align-items-center justify-content-center btn-sm text-nowrap"
                  style={{
                    borderColor: '#dcdcdc',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                  }}
                >
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
                <button
                  type="button"
                  className="btn btn-outline-secondary w-100 py-2 d-flex align-items-center justify-content-center btn-sm text-nowrap"
                  style={{
                    borderColor: '#dcdcdc',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                  }}
                >
                  <img
                    src={emailIcon}
                    alt="Email"
                    className="me-2"
                    style={{ width: '16px' }}
                  />
                  Sign up with Email
                </button>
              </div>

            </div>

            {/* Divider */}
            <div className="d-flex align-items-center my-4">
              <hr className="flex-grow-1 text-muted" />
              <span
                className="mx-3 text-muted fw-bold small"
                style={{ letterSpacing: '2px' }}
              >
                — OR —
              </span>
              <hr className="flex-grow-1 text-muted" />
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit}>

              {/* First Name and Last Name */}
              <div className="row mb-4">

                <div className="col-6">
                  <input
                    type="text"
                    required
                    className="form-control border-top-0 border-start-0 border-end-0 rounded-0 px-0 pb-2 shadow-none"
                    placeholder="First Name"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{
                      borderBottom: '1px solid #ccc',
                      fontSize: '0.85rem',
                    }}
                  />
                </div>

                <div className="col-6">
                  <input
                    type="text"
                    required
                    className="form-control border-top-0 border-start-0 border-end-0 rounded-0 px-0 pb-2 shadow-none"
                    placeholder="Last Name"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    style={{
                      borderBottom: '1px solid #ccc',
                      fontSize: '0.85rem',
                    }}
                  />
                </div>

              </div>

              {/* Email and Phone */}
              <div className="row mb-4">

                <div className="col-6">
                  <input
                    type="email"
                    required
                    className="form-control border-top-0 border-start-0 border-end-0 rounded-0 px-0 pb-2 shadow-none"
                    placeholder="Email Address"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      borderBottom: '1px solid #ccc',
                      fontSize: '0.85rem',
                    }}
                  />
                </div>

                <div className="col-6">
                  <input
                    type="tel"
                    required
                    className="form-control border-top-0 border-start-0 border-end-0 rounded-0 px-0 pb-2 shadow-none"
                    placeholder="Phone Number"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      borderBottom: '1px solid #ccc',
                      fontSize: '0.85rem',
                    }}
                  />
                </div>

              </div>

              {/* Password and Confirm Password */}
              <div className="row mb-5">

                <div className="col-6 position-relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={8}
                    autoComplete="new-password"
                    className="form-control border-top-0 border-start-0 border-end-0 rounded-0 px-0 pb-2 shadow-none pe-5"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      borderBottom: '1px solid #ccc',
                      fontSize: '0.85rem',
                    }}
                  />
                  <button
                    type="button"
                    className="btn btn-link position-absolute end-0 top-50 translate-middle-y p-0 text-muted"
                    style={{ fontSize: '0.7rem', textDecoration: 'none' }}
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>

                <div className="col-6 position-relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    minLength={8}
                    autoComplete="new-password"
                    className="form-control border-top-0 border-start-0 border-end-0 rounded-0 px-0 pb-2 shadow-none pe-5"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{
                      borderBottom: '1px solid #ccc',
                      fontSize: '0.85rem',
                    }}
                  />
                  <button
                    type="button"
                    className="btn btn-link position-absolute end-0 top-50 translate-middle-y p-0 text-muted"
                    style={{ fontSize: '0.7rem', textDecoration: 'none' }}
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showConfirmPassword ? 'Hide' : 'Show'}
                  </button>
                </div>

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-dark w-100 py-2 mb-3 fw-semibold shadow"
                style={{
                  borderRadius: '8px',
                  backgroundColor: '#000',
                  fontSize: '0.9rem',
                }}
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>

              {/* Error Message */}
              {message && (
                <p
                  className={`text-center mt-2 ${
                    messageType === 'error'
                      ? 'text-danger'
                      : 'text-success'
                  }`}
                >
                  {message}
                </p>
              )}

              {/* Login Link */}
              <div className="text-center mt-3">
                <span className="text-muted small">
                  Already have an account?{' '}
                </span>

                <NavLink
                  to="/signin"
                  className="text-decoration-none fw-semibold small"
                  style={{ color: '#4A60A1' }}
                >
                  Login
                </NavLink>
              </div>

            </form>
          </div>

          {/* Footer */}
          <div className="text-end mt-4">
            <small
              className="text-muted"
              style={{ fontSize: '0.75rem' }}
            >
              FASCO Terms & Conditions
            </small>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
