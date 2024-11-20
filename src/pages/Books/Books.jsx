import React from 'react';
import './Books.css';

const booksData = {
  Physics: [
    { name: "Concepts of Physics by H.C. Verma" },
    { name: "Fundamentals of Physics by Halliday, Resnick, and Walker" },
    { name: "Problems in General Physics by I.E. Irodov" },
  ],
  Chemistry: [
    { name: "Organic Chemistry by Morrison and Boyd" },
    { name: "Concise Inorganic Chemistry by J.D. Lee" },
    { name: "Physical Chemistry by P.W. Atkins" },
  ],
  Maths: [
    { name: "IIT Mathematics by M.L. Khanna" },
    { name: "Higher Algebra by Hall and Knight" },
    { name: "Problems in Calculus of One Variable by I.A. Maron" },
  ],
  Biology: [
    { name: "Biology by Campbell and Reece" },
    { name: "Trueman’s Elementary Biology Vol 1 & 2" },
    { name: "Objective Biology by Dinesh" },
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
