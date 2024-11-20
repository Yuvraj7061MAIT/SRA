import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Notes from './pages/Notes/Notes';
import Results from './pages/Results/Results';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import ChapterNotes from './pages/Notes/ChapterNotes';
import { auth } from './firebaseConfig'; // Firebase config
import { onAuthStateChanged } from 'firebase/auth'; // Firebase Auth listener

import './App.css';

const App = () => {
  return (
    <Router>
      <AppWithRouter />
    </Router>
  );
};

const AppWithRouter = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);

  // Firebase authentication state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    
    return () => unsubscribe(); // Clean up listener on component unmount
  }, []);

  return (
    <div>
      {/* Conditionally render Header based on the current route */}
      {location.pathname !== '/chapter-notes' && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={user ? <Courses /> : <Navigate to="/login" />} />
        <Route path="/notes" element={user ? <Notes /> : <Navigate to="/login" />} />
        <Route path="/chapter-notes" element={<ChapterNotes />} />
        <Route path="/results" element={user ? <Results /> : <Navigate to="/login" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />  {/* Redirect logged-in users to home */}
      </Routes>
    </div>
  );
};

export default App;
