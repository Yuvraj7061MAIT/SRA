// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import searchIcon from "../../assets/image/search_icon.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      {/* Top Navbar */}
      <div className="top__navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="search__box">
          <div className="search__icon">
            <img src={searchIcon} alt="search icon" />
          </div>
          <input
            type="search"
            maxLength="30"
            placeholder="What do you want to learn?"
            autoComplete="off"
            className="input__field"
          />
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
            <Link to="/" className="navlink">
              <span className="material-icons"></span> Home
            </Link>
          </li>
          <li>
            <Link to="/courses" className="navlink">
              <span className="material-icons"></span> Courses
            </Link>
          </li>
          <li>
            <Link to="/notes" className="navlink">
              <span className="material-icons"></span> Notes
            </Link>
          </li>
          <li>
            <Link to="/teachers" className="navlink">
              <span className="material-icons"></span> Our Teachers
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navlink">
              <span className="material-icons"></span> Contact
            </Link>
          </li>
          <li>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
