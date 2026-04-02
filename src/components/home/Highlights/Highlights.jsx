import React from "react";
import "./Highlights.css";

import hightlightsBuilding from "../../../assets/images/highlightbuilding.png";
import OnlyIcon from "../../../assets/svg/OnlyIcon";
import Highlighticon from "../../../assets/images/highlighticon.png";
import pdf from "../../../assets/images/pdf.png";

const highlightsData = [
  [
    { line1: "5 Mins", line2: "from Infosys Circle Ph-1" },
    { line1: "5 Mins", line2: "from Infosys Circle Ph-1" },
    { line1: "5 Mins", line2: "from Infosys Circle Ph-1" },
    { line1: "", line2: "" },
  ],
  [
    { line1: "5 Mins", line2: "from Infosys Circle Ph-1" },
    { line1: "5 Mins", line2: "from Infosys Circle Ph-1" },
  ],
  [
    { line1: "5 Mins", line2: "from Infosys Circle Ph-1" },
    { line1: "5 Mins", line2: "from Infosys Circle Ph-1" },
  ],
];

const Highlights = () => {
  return (
    <div className="highlights-container">
      <div className="highlights-content">
        <div className="highlights-left">
          <p className="highlights-subtitle ">VTP VOLARE</p>
          <h1 className="highlights-title ">PROJECT HIGHLIGHTS</h1>

          <div className="icons-row">
            {highlightsData.map((group, i) => (
              <div className="icons-group" key={i}>
                {group.map((item, index) => (
                  <div className="icon-item" key={index}>
                    <img src={Highlighticon} alt="Highlight Icon" />

                    <p className="highlight-text">
                      <span className="line1">{item.line1}</span>
                      <span className="line2">{item.line2}</span>
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <button className="highlight-button-btn">
            UNLOCK THE DETAILS
            <img src={pdf} alt="PDF" />
          </button>
        </div>

        <div className="building-box">
          <img src={hightlightsBuilding} alt="building" />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
