// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import Notes from './pages/Notes/Notes'
import Results from './pages/Results/Results'
import Contact from './pages/Contact/Contact'
import './App.css';
import ChapterNotes from './pages/Notes/ChapterNotes';

const App = () => {
  return (
    <Router>
      <AppWithRouter />
    </Router>
  );
};

const AppWithRouter = () => {
  const location = useLocation();

  return (
    <div>
      {/* Conditionally render Header based on the current route */}
      {location.pathname !== '/chapter-notes' && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/chapter-notes" element={<ChapterNotes />} />
        <Route path="/results" element={<Results />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;