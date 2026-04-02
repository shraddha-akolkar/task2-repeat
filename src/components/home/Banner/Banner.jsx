import React from "react";
import "./Banner.css";

import bannerlogo from "../../../assets/images/bannerlogo.png";
import building from "../../../assets/images/bannerbuilding.png";

export default function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-building">
        <img src={building} alt="building" />
      </div>

      <div className="banner-content">
        <img src={bannerlogo} alt="VTP Volare" className="banner-logo" />

        <p>
          2 & 3 BED LUXURY RESIDENCES <br />
          AT HINJAWADI PH.1
        </p>
      </div>
    </div>
  );
}
