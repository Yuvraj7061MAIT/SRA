import React, { useState } from 'react';
import { auth } from './../../firebaseConfig'; // Import auth instance
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';

const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert('Sign-in successful!');
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      alert('Sign-in failed. Please try again.');
    }
  };

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

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Sign In</h2>
        <form onSubmit={handleEmailPasswordSignIn}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign in with Email</button>
        </form>
        <button className="google-signin-button" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
