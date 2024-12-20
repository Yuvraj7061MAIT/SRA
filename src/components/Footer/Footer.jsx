import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="contact-details">
                    <h3>CONTACT DETAILS</h3>
                    <p><strong>ADDRESS:</strong> A-88, 2ND FLOOR, MAIN MARKET, MADHU VIHAR, I.P. EXT., PATPARGANJ, DELHI-92</p>
                    <p><strong>PHONE:</strong> 9540064006</p>
                </div>
                <div className="useful-links">
                    <h3>USEFUL LINKS</h3>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/courses">COURSES</a></li>
                        <li><a href="/results">Results</a></li>
                        <li><a href="/notes">NOTES</a></li>
                        <li><a href="/contact">CONTACT</a></li>
                    </ul>
                </div>
            </div>
            <div className="academy-info">
                <p>Maths on Tips since 2007.</p>
            </div>
        </footer>
    );
};

export default Footer;
