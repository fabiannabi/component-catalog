import React from "react";

export const Cards = () => {
  return (
    <div className="card-showcase">
      <div className="card-container">
        <div className="card-body">
          <div className="card-content">
            <h3 className="card-content--title"> The mage </h3>
            <p className="card-content-body">figth for the glory of the gods</p>
          </div>
          <img src="/mage.png" alt="mage-stand" className="card-stand"></img>
        </div>
      </div>
    </div>
  );
};

export default Cards;
