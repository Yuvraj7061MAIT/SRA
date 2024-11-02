// src/components/Header.jsx
import React from 'react';
import Navbar from '../Navbar/Navabar';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
