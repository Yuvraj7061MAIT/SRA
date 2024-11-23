import React from 'react';
import './Results.css';

// Import images from the assets/images folder
import image1 from '../../../public/images/banner1.jpg';
import image2 from '../../../public/images/banner1.jpg';
import image3 from '../../../public/images/banner1.jpg';
import image4 from '../../../public/images/banner1.jpg';
import image5 from '../../../public/images/banner1.jpg';
import image6 from '../../../public/images/banner1.jpg';
import image7 from '../../../public/images/banner1.jpg';
import image8 from '../../../public/images/banner1.jpg';
import image9 from '../../../public/images/banner1.jpg';
import image10 from '../../../public/images/banner1.jpg';
import image11 from '../../../public/images/banner1.jpg';
import image12 from '../../../public/images/banner1.jpg';

const teachersData = {
  IITJEE: [
    { name: "Dr. H.C. Verma", image: image1 },
    { name: "Prof. David Halliday", image: image2 },
    { name: "Dr. I.E. Irodov", image: image3 },
  ],
  NEET: [
    { name: "Dr. Morrison", image: image4 },
    { name: "Prof. J.D. Lee", image: image5 },
    { name: "Dr. P.W. Atkins", image: image6 },
  ],
  ICSE: [
    { name: "Prof. M.L. Khanna", image: image7 },
    { name: "Dr. Hall", image: image8 },
    { name: "Dr. I.A. Maron", image: image9 },
  ],
  CBSE: [
    { name: "Dr. Campbell", image: image10 },
    { name: "Dr. Trueman", image: image11 },
    { name: "Dr. Dinesh", image: image12 },
  ],
};

const Results = () => {
  return (
    <div className="teachers-page">
      <div className="header-strip">
        <h1>Our Rank Holders</h1>
      </div>
      <div className="teachers-container">
        {Object.keys(teachersData).map((subject) => (
          <div key={subject} className="subject-section">
            <h2 className="subject-title">{subject}</h2>
            <div className="teacher-cards-container">
              {teachersData[subject].map((teacher, index) => (
                <div key={`${subject}-${index}`} className="teacher-card">
                  <div
                    className="teacher-image"
                    style={{ backgroundImage: `url(${teacher.image})` }}
                    alt={`${teacher.name}'s profile`}
                  ></div>
                  <div className="teacher-content">
                    <h5 className="teacher-name">{teacher.name}</h5>
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

export default Results;
