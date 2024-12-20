// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyDLkRhS1DjINHq3S-Uhu_2UjBsS0il5BKQ",
//   authDomain: "sra98academy.firebaseapp.com",
//   projectId: "sra98academy",
//   storageBucket: "sra98academy.firebasestorage.app",
//   messagingSenderId: "681087741814",
//   appId: "1:681087741814:web:64ae92fd204c5816505457",
//   measurementId: "G-45L85HCM8Y",
// };



const firebaseConfig = {
  apiKey: "AIzaSyAcoyxepDq3t7Oc63MzqdEbG68DmmCvu4A",
  authDomain: "mathsontips-99d0d.firebaseapp.com",
  projectId: "mathsontips-99d0d",
  storageBucket: "mathsontips-99d0d.firebasestorage.app",
  messagingSenderId: "440891433629",
  appId: "1:440891433629:web:c28a2afee281d69f2d2a74",
  measurementId: "G-KPHB2V72NG"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
