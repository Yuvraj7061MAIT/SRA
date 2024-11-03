// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import Notes from './pages/Notes/Notes'
import Teachers from './pages/Teachers/Teachers'
import Contact from './pages/Contact/Contact'
import './App.css';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
