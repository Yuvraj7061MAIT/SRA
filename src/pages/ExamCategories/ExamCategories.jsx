import React from "react";
import "./ExamCategories.css";

const ExamCategories = () => {
  return (
    <>
      <div className="container">
        <div className="exam-title">
          <h2>Exam Categories</h2>
          <p>Discover our extensive examination options.</p>
        </div>
        <div className="exam-container">
          {/* Card 1 */}
          <div className="exam-card">
            <div className="exam-bg"></div>
            <div className="exam-blob"></div>
            <div className="exam-card-content">
              <div className="exam-card-title">IIT JEE</div>
              <div className="exam-card-buttons">
                <button>Class 11</button>
                <button>Class 12</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="exam-card">
            <div className="exam-bg"></div>
            <div className="exam-blob"></div>
            <div className="exam-card-content">
              <div className="exam-card-title">NEET</div>
              <div className="exam-card-buttons">
                <button>Class 11</button>
                <button>Class 12</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="exam-card">
            <div className="exam-bg"></div>
            <div className="exam-blob"></div>
            <div className="exam-card-content">
              <div className="exam-card-title">ICSE</div>
              <div className="exam-card-buttons">
                <button>Class 11</button>
                <button>Class 12</button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="exam-card">
            <div className="exam-bg"></div>
            <div className="exam-blob"></div>
            <div className="exam-card-content">
              <div className="exam-card-title">CBSE</div>
              <div className="exam-card-buttons">
                <button>Class 11</button>
                <button>Class 12</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamCategories;
