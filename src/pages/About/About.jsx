import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import sraImage from '../../assets/image/rohit.png'; // Replace with your image path
import './About.css'; // Import the CSS file

const About = () => {
    return (
        <div className="about-container">
            <div className="glass-card">
                <div className="left-image">
                    <img src={sraImage} alt="SRA Academy" />
                </div>
                <div className="right-content">
                    <p>
                        Welcome to SRA Academy, where education transcends boundaries and excellence becomes a way of life. Established with a vision to redefine education, our institution stands as a beacon of knowledge and innovation, committed to nurturing the leaders and thinkers of tomorrow.
                    </p>
                    <p>
                        At SRA Academy, we believe in the transformative power of education. Our philosophy is centered around the idea that every student possesses immense potential waiting to be unlocked. We understand that education is not just about acquiring knowledge but about fostering critical thinking, creativity, and a lifelong love for learning.
                    </p>
                    <Link to="/contact">
                        <button>Know More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;