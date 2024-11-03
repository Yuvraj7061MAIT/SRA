// src/pages/Home/Home.jsx
import React from 'react';
import Banner from '../../components/Banner/Banner';
import PopularCourses from '../../components/PopularCourses/PopulerCourses';
import About from '../About/About';
import ExamCategories from '../ExamCategories/ExamCategories';
import DemoForm from '../DemoClass/DemoForm';
import LandingPage from '../LandingPage/LandingPage';

const Home = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}> {/* Ensure no margin or padding */}
    <Banner />
    <PopularCourses />
    <About />
    <ExamCategories />
    <DemoForm />
    <LandingPage />
    </div>
  );
};

export default Home;
