import React from "react";
import "./LandingPage.css"; // Make sure to create this CSS file

const LandingPage = () => {
  return (
    <>
      <div className="container2">
        <div className="container3">
          <div className="landing-container">
            <h1 className="page-title">
              A Platform Trusted by Students
            </h1>
            <blockquote className="motivation-quote">
              "Education is the most powerful weapon which you can use to change
              the world."
            </blockquote>
            <div className="metrics-container">
              <MetricBox count="5,500+" label="HAPPY STUDENTS" />
              <MetricBox count="40+" label="VIDEO LECTURES" />
              <MetricBox count="12+" label="EXPERT FACULTY" />
              <MetricBox count="50+" label="TEST PAPERS" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MetricBox = ({ count, label }) => {
  return (
    <div className="metric-box">
      <div className="metric-content">
        <h2 className="metric-count">{count}</h2>
        <p className="metric-label">{label}</p>
      </div>
    </div>
  );
};


export default LandingPage;
