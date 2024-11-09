import React from 'react';
import './Contact.css';  // Import the custom styles

const Contact = () => {
  return (
    <div className="contact-page py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
        <div className="contact-details bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Address</h2>
          <p className="text-lg text-gray-700 mb-6">
            A-88 SECOND FLOOR, MALIK COMPLEX, Madhu Vihar Market Main Rd, Madhu Vihar, I.P. Extension, Patparganj, Delhi, 110092
          </p>
        </div>
        <div className="social-icons mt-6 flex justify-center space-x-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-square text-3xl text-gray-600 hover:text-blue-600"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-3xl text-gray-600 hover:text-blue-700"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter-square text-3xl text-gray-600 hover:text-blue-400"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
