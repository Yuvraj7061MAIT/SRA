// src/components/Banner/Banner.jsx
import React from "react";
import "./Banner.css"; // Your custom styles

import banner1 from "../../../public/images/banner5.jpg";
import banner2 from "../../../public/images/banner2.jpg";
import banner3 from "../../../public/images//banner3.jpg";
import banner4 from "../../../public/images//banner4.jpg";

const Banner = () => {
    return (
        <section className="banner__section">
            <div className="banner__slides">
                <img src={banner1} alt="banner1" />
                <img src={banner2} alt="banner2" />
                <img src={banner3} alt="banner3" />
                <img src={banner4} alt="banner4" />
            </div>
        </section>
    );
};

export default Banner;
