import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ChapterNotes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pdfUrl } = location.state || {}; // Get the PDF URL from the state passed via navigate

  const handleClosePdfView = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="pdf-viewer-container">
      <button className="close-pdf-button" onClick={handleClosePdfView}>
        Close PDF
      </button>
      {pdfUrl ? (
        <iframe
          src={pdfUrl}
          width="100%"
          height="600px"
          title="PDF Viewer"
        />
      ) : (
        <p>No PDF available</p>
      )}
    </div>
  );
};

export default ChapterNotes;
