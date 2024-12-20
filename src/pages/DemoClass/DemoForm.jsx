import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import "./DemoForm.css"; // Ensure your styles are updated accordingly

import v1 from "../../../public/videos/back1.mp4";

const DemoForm = () => {
  const videoRef = useRef(null);
  const videoSources = [v1]; // Video paths

  useEffect(() => {
    const videoElement = videoRef.current;
    let currentIndex = 0;

    const handleEnded = () => {
      currentIndex = (currentIndex + 1) % videoSources.length;
      videoElement.src = videoSources[currentIndex];
      videoElement.play();
    };

    videoElement.addEventListener("ended", handleEnded);

    videoElement.src = videoSources[currentIndex];
    videoElement.play();

    return () => {
      videoElement.removeEventListener("ended", handleEnded);
    };
  }, []);

  const [formData, setFormData] = useState({
    studentName: "",
    parentEmail: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      studentName: formData.studentName,
      parentEmail: formData.parentEmail,
      phoneNumber: formData.phoneNumber,
      message: formData.message,
    };

    emailjs
      .send(
        "service_nmprrt7", // Your EmailJS service ID
        "template_mot", // Your EmailJS template ID
        templateParams,
        "We8Ri2zdIRzvMEmOE" // Your EmailJS user/public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Thank you! Your message has been sent successfully.");
          setFormData({
            studentName: "",
            parentEmail: "",
            phoneNumber: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send your message. Please try again later.");
        }
      );
  };

  return (
    <div className="demo-bg">
      <video
        ref={videoRef}
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={v1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <h2 className="demo-title">Experience Our Demo Class</h2>
        <div className="demo-container">
          <form className="demo-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="studentName">Student's Name</label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
                placeholder="Enter student's name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="parentEmail">Parent's Email</label>
              <input
                type="email"
                id="parentEmail"
                name="parentEmail"
                value={formData.parentEmail}
                onChange={handleChange}
                required
                placeholder="Enter parent's email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                placeholder="Enter phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DemoForm;
