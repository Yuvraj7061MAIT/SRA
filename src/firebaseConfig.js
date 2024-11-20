// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDLkRhS1DjINHq3S-Uhu_2UjBsS0il5BKQ",
  authDomain: "sra98academy.firebaseapp.com",
  projectId: "sra98academy",
  storageBucket: "sra98academy.firebasestorage.app",
  messagingSenderId: "681087741814",
  appId: "1:681087741814:web:64ae92fd204c5816505457",
  measurementId: "G-45L85HCM8Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
