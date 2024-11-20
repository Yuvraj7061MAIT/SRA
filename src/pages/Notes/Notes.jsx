import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import chapterData from "../../data/ChapterData2";
import "./Notes.css";
import Books from "../Books/Books";

const Notes = () => {
  const navigate = useNavigate(); // Initialize navigate function from react-router-dom
  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isPdfView, setIsPdfView] = useState(false);

  const handleExamClick = (exam) => {
    setSelectedExam(exam);
    setSelectedSubject(null);
    setSelectedClass(null);
    setPdfUrl(null);
    setIsPdfView(false);
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setSelectedClass(null);
    setPdfUrl(null);
    setIsPdfView(false);
  };

  const handleClassSelection = (classLevel) => {
    setSelectedClass(classLevel);
    setPdfUrl(null);
    setIsPdfView(false);
  };

  const navigateToChapterNotes = (chapter) => {
    if (chapter.pdf) {
      setPdfUrl(chapter.pdf);
      setIsPdfView(true);

      // Navigate to the new page with the PDF URL as a state
      navigate("/chapter-notes", { state: { pdfUrl: chapter.pdf } });
    }
  };

  const handleClosePdfView = () => {
    setIsPdfView(false);
  };

  return (
    <>
      <div className="notes-container">
        {!isPdfView && (
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
        )}

        {selectedExam && !isPdfView && (
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

        {selectedSubject && !isPdfView && (
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

        {selectedClass && !isPdfView && (
          <div className="notes-chapters-container">
            {chapterData[selectedExam][selectedSubject][selectedClass].map(
              (chapter, index) => (
                <div key={index} className="chapter-card">
                  <span className="chapter-title">{chapter.chapter}</span>
                  {chapter.pdf ? (
                    <button
                      className="notes-read-button"
                      onClick={() => navigateToChapterNotes(chapter)}
                    >
                      Read
                    </button>
                  ) : (
                    <span className="not-uploaded">Not yet uploaded</span>
                  )}
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
