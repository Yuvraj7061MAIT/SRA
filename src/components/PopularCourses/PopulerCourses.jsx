// src/components/PopularCourses.jsx
import React from 'react';
import './PopularCourses.css'; // Your custom styles

// Import your icon images
import IITIcon from '../../assets/image/IIT.jpg'; // Replace with your actual icon path
import ICSEIcon from '../../assets/image/icse.jpg'; // Replace with your actual icon path
import CBSEIcon from '../../assets/image/cbse.png'; // Replace with your actual icon path
import OtherIcon from '../../assets/image/neet.png'; // Replace with your actual icon path

const PopularCourses = () => {
    return (
        <section className="popular-courses">
            <h2>Popular Courses</h2>
            <p>Explore Top Courses Categories That Change Yourself</p>
            <div className="cards">
                <div className="card purple">
                    <img src={IITIcon} alt="EET Icon" className="icon" />
                    <p className="second-text">IITJEE</p>
                    <p className="course-code">Code: EET</p>
                </div>
                <div className="card blue">
                    <img src={ICSEIcon} alt="ICSE Icon" className="iconIcse" />
                    <p className="second-text">ICSE</p>
                    <p className="course-code">Code: ICSE</p>
                </div>
                <div className="card green">
                    <img src={CBSEIcon} alt="CBSE Icon" className="icon" />
                    <p className="second-text">CBSE</p>
                    <p className="course-code">Code: CBSE</p>
                </div>
                <div className="card yellow">
                    <img src={OtherIcon} alt="Other Icon" className="icon" />
                    <p className="second-text">NEET</p>
                    <p className="course-code">Code: Other</p>
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;
