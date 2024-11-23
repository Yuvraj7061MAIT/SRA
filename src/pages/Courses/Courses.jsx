import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAuth , onAuthStateChanged } from "firebase/auth";
import { app as firebaseApp} from "../../firebaseConfig"
import chapterData from "../../data/ChapterData2"; // Adjust the path if needed
import "./Courses.css";

const ChapterSelection = () => {
  const [board, setBoard] = useState("IITJEE"); // Default board
  const [subject, setSubject] = useState("Physics"); // Default subject
  const [classLevel, setClassLevel] = useState("Class 11"); // Default class level
  const [showSubjectCard, setShowSubjectCard] = useState(false);
  const [showClassCard, setShowClassCard] = useState(false);
  const [showChapters, setShowChapters] = useState(false);
  const [user, setUser] = useState(null); // To track the user login status
  const navigate = useNavigate();

  // Firebase authentication state listener
  useEffect(() => {
    const auth = getAuth(firebaseApp); // Initialize Firebase Authentication
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the user state
    });

    return () => unsubscribe(); // Clean up listener on component unmount
  }, []);

  // Get the list of available subjects for the selected board
  const subjects = Object.keys(chapterData[board] || {});

  // Get the list of available classes for the selected subject and board
  const availableClasses = ["Class 11", "Class 12"];

  // Get chapters based on board, subject, and class level
  const chapters = chapterData[board]?.[subject]?.[classLevel] || [];

  const handleBoardClick = (boardName) => {
    setBoard(boardName);
    setShowSubjectCard(true);
    setShowClassCard(false); // Hide class card initially
    setSubject(Object.keys(chapterData[boardName])[0]); // Select first subject by default
    setClassLevel("Class 11");
    setShowChapters(false); // Hide chapters until all selections are made
  };

  const handleSubjectClick = (subjectName) => {
    setSubject(subjectName);
    setShowClassCard(true); // Show class card when subject is clicked
    setShowChapters(false); // Hide chapters until class is selected
  };

  const handleClassClick = (className) => {
    setClassLevel(className);
    setShowChapters(true); // Show chapters after class selection
  };

  const handleVideoClick = (chapter) => {
    if (!user) {
      // If not logged in, show alert and redirect to login page
      alert("Please log in to watch the full content.");
      navigate("/login");
      return;
    }

    // If logged in, allow to watch video
    window.open(chapter.youtubeLink, "_blank");
  };

  return (
    <div className="chapter-selection-container">
      <h1>Select Chapter</h1>

      {/* Board Selection */}
      <div className="card-container board-container">
        {Object.keys(chapterData).map((boardName) => (
          <div
            key={boardName}
            className="card board-card"
            onClick={() => handleBoardClick(boardName)}
          >
            {boardName}
          </div>
        ))}
      </div>

      {/* Subject Selection */}
      {showSubjectCard && (
        <div className="card-container">
          {subjects.map((subjectName) => (
            <div
              key={subjectName}
              className="card subject-card"
              onClick={() => handleSubjectClick(subjectName)}
            >
              {subjectName}
            </div>
          ))}
        </div>
      )}

      {/* Class Level Selection */}
      {showClassCard && (
        <div className="card-container">
          {availableClasses.map((className) => (
            <div
              key={className}
              className="card class-card"
              onClick={() => handleClassClick(className)}
            >
              {className}
            </div>
          ))}
        </div>
      )}

      {/* Display Chapters only after all selections */}
      {showChapters && (
        <div>
          <h2>
            Chapters for {subject} ({classLevel})
          </h2>
          {chapters.map((chapter, index) => (
            <div key={index} className="chapter-container">
              <div className="chapter-left">
                <h3>{chapter.chapter}</h3>
              </div>
              <div className="chapter-right">
                {chapter.youtubeLink ? (
                  <button
                    className="watch-video-button"
                    onClick={() => handleVideoClick(chapter)}
                  >
                    Watch Video
                  </button>
                ) : (
                  <span>In Process</span>
                )}
                {chapter.Intro ? (
                  <a
                    href={chapter.Intro}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Intro
                  </a>
                ) : (
                  <span>In Process</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChapterSelection;