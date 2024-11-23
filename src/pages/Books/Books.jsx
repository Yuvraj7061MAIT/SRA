import React from 'react';
import './Books.css';

const booksData = {
  Physics: [
    { name: "Concepts of Physics by H.C. Verma", link: "https://www.flipkart.com/search?q=Concepts%20of%20Physics%20by%20H.C.%20Verma&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off" },
    { name: "Fundamentals of Physics by Halliday, Resnick, and Walker", link: "https://www.flipkart.com/fundamentals-physics-class-12-cbse-iit-jee-neet-set-textbook-practice-book-with-cd-2013/p/itmevd2xzeqhj6qn?pid=9788126532452&lid=LSTBOK9788126532452RXQIVM&marketplace=FLIPKART&q=Fundamentals+of+Physics+by+Halliday%2C+Resnick%2C+and+Walker&store=bks&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=607e73c8-eb29-4a46-806e-1130ca25c206.9788126532452.SEARCH&ppt=sp&ppn=sp&ssid=8z1t8uvq1c0000001732278522861&qH=66909fff9a4727ea" },
    { name: "Problems in General Physics by I.E. Irodov", link: "https://www.flipkart.com/problems-general-physics-ie-irodov-s-vol-i-mechanics-thermodynamics-molecular/p/itm16a3e30f5e3cd?pid=9789311127309&lid=LSTBOK9789311127309LYHUTF&marketplace=FLIPKART&q=Problems+in+General+Physics+by+I.E.+Irodov&store=bks&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=fe61915c-12dc-45ad-9578-8a690f1eb3a7.9789311127309.SEARCH&ppt=sp&ppn=sp&ssid=9p1vdaag3k0000001732278569579&qH=5a6a3e1961f60674" },
  ],
  Chemistry: [
    { name: "Organic Chemistry by Morrison and Boyd", link: "https://www.flipkart.com/combo-organic-chemistry-morrison-inorganic-huheey-medhi/p/itmezacsxgyd9par?pid=9789332581104&lid=LSTBOK9789332581104SKLH9C&marketplace=FLIPKART&q=Organic+Chemistry+by+Morrison+and+Boyd&store=search.flipkart.com&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=fbafd1c6-15e7-4270-ac02-449d660a4394.9789332581104.SEARCH&ppt=sp&ppn=sp&ssid=b4zojgewsw0000001732278608570&qH=6d38609c9718fd25" },
    { name: "Concise Inorganic Chemistry by J.D. Lee", link: "https://www.flipkart.com/j-d-lee-concise-inorganic-chemistry-jee-main-advanced/p/itm849af092d01a3?pid=RBKFT3G4ZQGN2TAH&lid=LSTRBKFT3G4ZQGN2TAHYWSDLE&marketplace=FLIPKART&q=Concise+Inorganic+Chemistry+by+J.D.+Lee&store=bks&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=838a5f73-f0c6-4e9b-b0ac-a0b462c57293.RBKFT3G4ZQGN2TAH.SEARCH&ppt=sp&ppn=sp&ssid=3e96g6zws00000001732278685371&qH=829e70ba2b143b66" },
    { name: "Physical Chemistry by P.W. Atkins", link: "https://www.flipkart.com/atkins-physical-chemistry/p/itmf4hyh7yvvzngg?pid=9780199697403&lid=LSTBOK9780199697403KURGJZ&marketplace=FLIPKART&q=Physical+Chemistry+by+P.W.+Atkins&store=bks&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=ab454b54-d7be-4a23-a90e-6b4954de78e1.9780199697403.SEARCH&ppt=sp&ppn=sp&ssid=d83alw5vtc0000001732278710569&qH=93777076e14ee55a" },
  ],
  Maths: [
    { name: "IIT Mathematics by M.L. Khanna", link: "https://www.amazon.in/Mathematics-IIT-JEE-Main-Advanced-1-ebook/dp/B0BN848735/ref=sr_1_2?s=books&sr=1-2" },
    { name: "Higher Algebra by Hall and Knight", link: "https://www.amazon.in/HIGHER-ALGEBRA-Hall/dp/935176253X" },
    { name: "Problems in Calculus of One Variable by I.A. Maron", link: "https://www.amazon.in/Problems-CALCULUS-ONE-VARIABLE-Maron/dp/9388127374/ref=sr_1_1?nsdOptOutParam=true&s=books&sr=1-1" },
  ],
  Biology: [
    { name: "Biology by Campbell and Reece", link: "https://www.amazon.in/Campbell-Biology-Lisa-Urry/dp/0134093410" },
    { name: "Trueman’s Elementary Biology Vol 1 & 2", link: "https://www.amazon.in/Truemans-Elementary-Biology-Class-NEET/dp/8187223782" },
    { name: "Objective Biology by Dinesh", link: "https://www.amazon.in/Objective-Biology-Vol-III-booklet-2021-22/dp/8194915678/ref=sr_1_1?s=books&sr=1-1" },
  ],
};

const Books = () => {
  const handleBuyClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="books-page">
      <div className="header-strip">
        <h1>Books to Refer</h1>
      </div>
      <div className="books-container">
        {Object.keys(booksData).map((subject) => (
          <div key={subject} className="subject-section">
            <h2 className="subject-title">{subject}</h2>
            <div className="book-cards-container">
              {booksData[subject].map((book, index) => (
                <div key={index} className="book-card">
                  <div className="book-content">
                    <h5 className="book-title">{book.name}</h5>
                    <button
                      className="buy-button"
                      onClick={() => handleBuyClick(book.link)}
                    >
                      Buy
                    </button>
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
