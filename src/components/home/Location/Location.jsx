import React from "react";
import "./Location.css";

import LocationIcon from "../../../assets/svg/LocationIcon";
import locationBuilding from "../../../assets/images/locationbuilding.png";
import OnlyIcon from "../../../assets/svg/OnlyIcon";
import map from "../../../assets/images/locationmap.png";
import Direction from "../../../assets/svg/Direction";
const Location = () => {
  return (
    <div className="location-container">
      <div className="location-content">
        <div className="location-left">
          <p className="location-subtitle">VTP VOLARE</p>
          <h1 className="location-title">LOCATION ADVANTAGES</h1>

          <div className="location-icons-row">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div className="location-icon-item" key={index}>
                <LocationIcon />
                <p>
                  5 Mins <br />
                  from Infosys Circle Ph-1
                </p>
              </div>
            ))}
          </div>

          <div className="location-map-row">
            <img src={map} alt="map" />

            <div className="location-map-content">
              <p className="location-map-text">
                All easily <br />
                Reachable <br />
                within a <br />
                <span>15-minutes</span> radius
              </p>

              <button className="location-map-btn">
                GET DIRECTION
                <Direction />
              </button>
            </div>
          </div>
        </div>

        <div className="location-building-box">
          <img src={locationBuilding} alt="building" />
        </div>
      </div>
    </div>
  );
};

export default Location;
