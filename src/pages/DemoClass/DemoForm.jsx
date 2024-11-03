import React, { useEffect, useRef } from 'react';
import './DemoForm.css'; // Ensure this file exists

import v1 from '../../assets/videos/back1.mp4';

const DemoForm = () => {
  const videoRef = useRef(null);
  const videoSources = [v1]; // Use the video paths directly
  
  useEffect(() => {
    const videoElement = videoRef.current;
    let currentIndex = 0;

    const handleEnded = () => {
      currentIndex = (currentIndex + 1) % videoSources.length;
      videoElement.src = videoSources[currentIndex];
      videoElement.play();
    };

    videoElement.addEventListener('ended', handleEnded);
    
    // Start playing the first video
    videoElement.src = videoSources[currentIndex];
    videoElement.play();

    // Cleanup event listener on component unmount
    return () => {
      videoElement.removeEventListener('ended', handleEnded);
    };
  }, []);

  const [formData, setFormData] = React.useState({
    studentName: '',
    parentEmail: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="demo-bg">
      <video ref={videoRef} className="background-video" autoPlay loop muted playsInline>
        <source src={v1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <h2 className="demo-title">Try Our Demo Class Once</h2>
        <div className="demo-container">
          <form className="demo-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="studentName">Student's Name:</label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="parentEmail">Parent's Email:</label>
              <input
                type="email"
                id="parentEmail"
                name="parentEmail"
                value={formData.parentEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any message you want to give"
              />
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DemoForm;
