import React from 'react';
import './Teachers.css';

const teachersData = {
  Physics: [
    { name: "Dr. H.C. Verma", image: "link_to_image1" },
    { name: "Prof. David Halliday", image: "link_to_image2" },
    { name: "Dr. I.E. Irodov", image: "link_to_image3" },
  ],
  Chemistry: [
    { name: "Dr. Morrison", image: "link_to_image4" },
    { name: "Prof. J.D. Lee", image: "link_to_image5" },
    { name: "Dr. P.W. Atkins", image: "link_to_image6" },
  ],
  Maths: [
    { name: "Prof. M.L. Khanna", image: "link_to_image7" },
    { name: "Dr. Hall", image: "link_to_image8" },
    { name: "Dr. I.A. Maron", image: "link_to_image9" },
  ],
  Biology: [
    { name: "Dr. Campbell", image: "link_to_image10" },
    { name: "Dr. Trueman", image: "link_to_image11" },
    { name: "Dr. Dinesh", image: "link_to_image12" },
  ],
};

const Teachers = () => {
    return (
      <div className="teachers-page">
        <div className="header-strip">
          <h1>Meet Our Teachers</h1>
        </div>
        <div className="teachers-container">
          {Object.keys(teachersData).map(subject => (
            <div key={subject} className="subject-section">
              <h2 className="subject-title">{subject}</h2>
              <div className="teacher-cards-container">
                {teachersData[subject].map((teacher, index) => (
                  <div key={index} className="teacher-card">
                    <div className="teacher-image" style={{ backgroundImage: `url(${teacher.image})` }}></div>
                    <div className="teacher-content">
                      <h5 className="teacher-name">{teacher.name}</h5>
                      <button className="contact-button">Contact</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Teachers;
