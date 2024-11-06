import React, { useState } from "react";
import "./Courses.css";
import Banner from "../../components/Banner/Banner";

// Import course data
import physicsCourses from "../../data/PhysicsCourses";
import chemistryCourses from "../../data/ChemistryCourses";
import biologyCourses from "../../data/BiologyCourses";
import mathsCourses from "../../data/MathsCourses"; // Assuming you have Maths course data

const Courses = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [courses, setCourses] = useState([]);
  const [hoveredTopic, setHoveredTopic] = useState(null);

  const topics = [
    { name: "IIT JEE", subCourses: ["Physics", "Chemistry", "Maths"] },
    { name: "NEET", subCourses: ["Physics", "Chemistry", "Biology"] },
    { name: "ICSE", subCourses: ["Physics", "Chemistry", "Biology", "Maths"] },
    { name: "CBSE", subCourses: ["Physics", "Chemistry", "Biology", "Maths"] },
  ];

  // Handle subject click and load corresponding courses
  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    if (subject === "Physics") {
      setCourses(physicsCourses);
    } else if (subject === "Chemistry") {
      setCourses(chemistryCourses);
    } else if (subject === "Biology") {
      setCourses(biologyCourses);
    } else if (subject === "Maths") {
      setCourses(mathsCourses);
    }
  };

  return (
    <>
      <Banner />
      <div className="courses-page">
        <div className="vertical-container">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="topic-item"
              onMouseEnter={() => setHoveredTopic(index)}
              onMouseLeave={() => setHoveredTopic(null)}
            >
              <h2>{topic.name}</h2>
              {hoveredTopic === index && (
                <div className="expanded">
                  {topic.subCourses.map((subCourse, idx) => (
                    <div
                      key={idx}
                      className="sub-course"
                      onClick={() => handleSubjectClick(subCourse)}
                    >
                      {subCourse}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="course-details">
          <h3>
            {selectedSubject
              ? `Courses for ${selectedSubject}`
              : "Select a subject to view courses"}
          </h3>
          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="floating-thumbnail">
                  <img
                    src={course.thumbnail}
                    alt={`${course.name}`}
                    className="course-image"
                  />
                </div>
                <div className="floating-text">
                  <span className="course-name">{course.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
