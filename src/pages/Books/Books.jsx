import React from 'react';
import './Books.css';

const booksData = {
  Physics: [
    { name: "Concepts of Physics by H.C. Verma", image: "link_to_image1" },
    { name: "Fundamentals of Physics by Halliday, Resnick, and Walker", image: "link_to_image2" },
    { name: "Problems in General Physics by I.E. Irodov", image: "link_to_image3" },
  ],
  Chemistry: [
    { name: "Organic Chemistry by Morrison and Boyd", image: "link_to_image4" },
    { name: "Concise Inorganic Chemistry by J.D. Lee", image: "link_to_image5" },
    { name: "Physical Chemistry by P.W. Atkins", image: "link_to_image6" },
  ],
  Maths: [
    { name: "IIT Mathematics by M.L. Khanna", image: "link_to_image7" },
    { name: "Higher Algebra by Hall and Knight", image: "link_to_image8" },
    { name: "Problems in Calculus of One Variable by I.A. Maron", image: "link_to_image9" },
  ],
  Biology: [
    { name: "Biology by Campbell and Reece", image: "link_to_image10" },
    { name: "Trueman’s Elementary Biology Vol 1 & 2", image: "link_to_image11" },
    { name: "Objective Biology by Dinesh", image: "link_to_image12" },
    
  ],
};

const Books = () => {
    return (
      <div className="books-page">
        <div className="header-strip">
          <h1>Books to refer</h1>
        </div>
        <div className="books-container">
          {Object.keys(booksData).map(subject => (
            <div key={subject} className="subject-section">
              <h2 className="subject-title">{subject}</h2>
              <div className="book-cards-container">
                {booksData[subject].map((book, index) => (
                  <div key={index} className="book-card">
                    <div className="book-image" style={{ backgroundImage: `url(${book.image})` }}></div>
                    <div className="book-content">
                      <h5 className="book-title">{book.name}</h5>
                      <button className="buy-button">Buy</button>
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

export default Books;
