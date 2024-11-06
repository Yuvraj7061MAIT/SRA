import React, { useState } from "react";
import chapterData from "../../data/ChapterData";
import "./Notes.css";
import Books from "../Books/Books";

const Notes = () => {
  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);

  const handleExamClick = (exam) => {
    setSelectedExam(exam);
    setSelectedSubject(null);
    setSelectedClass(null);
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setSelectedClass(null); // Reset class selection on subject change
  };

  const handleClassSelection = (classLevel) => {
    setSelectedClass(classLevel);
  };

  return (
    <>
    <div className="notes-container">
      <div className="notes-cards-container">
        {Object.keys(chapterData).map((exam) => (
          <div
            key={exam}
            className="notes-exam-card"
            onClick={() => handleExamClick(exam)}
          >
            <div className="notes-card-content">
              <p className="notes-card-title">{exam}</p>
              <p className="notes-card-para">{`Preparation for ${exam}.`}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedExam && (
        <div className="notes-subjects-container">
          {Object.keys(chapterData[selectedExam]).map((subject) => (
            <div
              key={subject}
              className="glass-subject-card"
              onClick={() => handleSubjectClick(subject)}
            >
              <div className="glass-card-content">
                <p className="glass-card-title">{subject}</p>
                <p className="glass-card-para">{`${subject} notes for ${selectedExam}.`}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedSubject && (
        <div className="notes-class-selection">
          <h3>Select Class</h3>
          <button onClick={() => handleClassSelection("Class 11")}>
            Class 11
          </button>
          <button onClick={() => handleClassSelection("Class 12")}>
            Class 12
          </button>
        </div>
      )}

      {selectedClass && (
        <div className="notes-chapters-container">
          {chapterData[selectedExam][selectedSubject][selectedClass].map(
            (chapter, index) => (
              <div
                key={index}
                className="chapter-card"
                onClick={() => navigateToChapterNotes(chapter)}
              >
                <span className="chapter-title">{chapter}</span>
                <button className="notes-read-button">Read</button>
              </div>
            )
          )}
        </div>
      )}
    </div>
    <Books />
    </>
  );
};

export default Notes;
