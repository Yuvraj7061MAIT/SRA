// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/sra_logo.jpg";
import "./Navbar.css";


const login  = document.getElementsByClassName('login_nav__btn');
let currentMode = "Light";

const body = document.querySelector('body');

login.addEventListener

const Navbar = () => {
  return (
    <nav>
      {/* Top Navbar */}
      <div className="top__navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="sra">
          <b>SRA ACADEMY</b>
        </div>

        <div className="nav__btns primary__btn">
          <Link to="/login" className="login_nav__btn">
            Login
          </Link>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="header__navbar">
        <ul className="navlist">
          <li>
            <Link to="/" className="navlink">Home</Link>
          </li>
          <li>
            <Link to="/courses" className="navlink">Courses</Link>
          </li>
          <li>
            <Link to="/notes" className="navlink">Notes</Link>
          </li>
          <li>
            <Link to="/results" className="navlink">Our Results</Link>
          </li>
          <li>
            <Link to="/contact" className="navlink">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;