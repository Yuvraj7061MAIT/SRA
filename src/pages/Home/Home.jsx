// src/pages/Home/Home.jsx
import React from 'react';
import Banner from '../../components/Banner/Banner';
import PopularCourses from '../../components/PopularCourses/PopulerCourses';

const Home = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}> {/* Ensure no margin or padding */}
    <Banner />
    <PopularCourses />
    </div>
  );
};

export default Home;
