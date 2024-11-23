import React, { useState } from 'react';
import { auth } from './../../firebaseConfig'; // Import auth instance
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import './Login.css';

const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false); // Toggle between Login and Register

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert('Sign-in successful!');
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      alert('Sign-in failed. Please try again.');
    }
  };

  // Handle Email/Password Sign-In
  const handleEmailPasswordSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Sign-in successful!');
    } catch (error) {
      console.error('Error during email/password sign-in:', error);
      alert('Sign-in failed. Please check your credentials.');
    }
  };

  // Handle Email/Password Registration
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registration successful! Please sign in.');
      setIsRegister(false); // Switch back to Login after registration
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="crystal-login-page">
      <div className="crystal-login-container">
        <h2 className="crystal-login-title">{isRegister ? 'Register' : 'Sign In'}</h2>
        <form
          onSubmit={isRegister ? handleRegister : handleEmailPasswordSignIn}
          className="crystal-login-form"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="crystal-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="crystal-input"
            required
          />
          <button type="submit" className="crystal-button">
            {isRegister ? 'Register' : 'Sign in with Email'}
          </button>
        </form>
        {!isRegister && (
          <button className="crystal-google-button" onClick={handleGoogleSignIn}>
            Sign in with Google
          </button>
        )}
        <p className="crystal-toggle">
          {isRegister ? (
            <>
              Already have an account?{' '}
              <span onClick={() => setIsRegister(false)} className="crystal-link">
                Sign In
              </span>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <span onClick={() => setIsRegister(true)} className="crystal-link">
                Register
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
