import React from "react";
import "./Philosophy.css";

import card1 from "../../../assets/images/Philosophycard.png";

const Philosophy = () => {
  return (
    <div className="Philosophy-container">
      <div className="philosophy-section">
        <div className="Philosophy-content">
          <h5>VTP VOLARE</h5>
          <h1 className="Philosophy-content-heading">
            VTP BRAND <br />
            PHILOSOPHY
          </h1>
        </div>

        <div className="brand-cards">
          <div className="card">
            <img src={card1} alt="care" />
            <h3>BETTER CARE</h3>
            <p>
              No transfer fee. Community Building programs after possession.
              Professionally- managed team facilitating leasing and resale of
              property. V-Care Customer Portal for single window communication
              with customers
            </p>
          </div>

          <div className="card">
            <img src={card1} alt="build" />
            <h3>BETTER BUILD</h3>
            <p>
              VTP Group has over 38 years of experience in construction material
              sourcing. Constructed close to 100 projects across the country
              Backward integration that allows easy access to the best
              construction materials. A pioneer to have used latest technology
              in India.
            </p>
          </div>

          <div className="card">
            <img src={card1} alt="design" />
            <h3>BETTER DESIGN</h3>
            <p>
              Layouts that maximize the potential of each room offering more
              usable space inside a home, upgraded premium specifications,
              amenities for every family members and better value for money.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
