import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../public/images/sra_logo.jpg";
import { signOut, onAuthStateChanged } from "firebase/auth"; // Removed unused signInWithEmailAndPassword import
import { auth } from "../../firebaseConfig";
import "./Navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the current user state
    });
    return () => unsubscribe(); // Clean up listener on unmount
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    signOut(auth);
    navigate("/"); // Redirect to the homepage after logout
  };

  return (
    <nav>
      {/* Top Navbar (Horizontal for Desktop) */}
      <div className="top__navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="sra">
          <b>MATHS<span className="on">ON</ span>TIPS</b>
        </div>
        <div className="nav__btns primary__btn">
          {user ? (
            <button onClick={handleLogout} className="logout">
              Logout
            </button>
          ) : (
            <Link to="/login" className="login_nav__btn">
              Login
            </Link>
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="hamburger-menu" onClick={toggleSidebar}>
          &#9776; {/* Hamburger icon */}
        </button>
      </div>

      {/* Sidebar Menu for Mobile */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times; {/* Cross (X) icon */}
        </button>
        <ul className="navlist">
          <li>
            <Link to="/" className="navlink" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/courses" className="navlink" onClick={toggleSidebar}>
              Courses
            </Link>
          </li>
          <li>
            <Link to="/notes" className="navlink" onClick={toggleSidebar}>
              Notes
            </Link>
          </li>
          <li>
            <Link to="/results" className="navlink" onClick={toggleSidebar}>
              Our Results
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navlink" onClick={toggleSidebar}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Horizontal Navbar for Desktop */}
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
