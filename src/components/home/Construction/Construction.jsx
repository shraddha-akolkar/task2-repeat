import React from "react";
import "./Construction.css";
import bg from "../../../assets/images/bg.png";
import youtube from "../../../assets/images/youtube.png";

export default function Construction() {
  return (
    <section
      className="construction-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="construction-header">
        <p className="tag">VTP VOLARE</p>
        <h2 className="title">CONSTRUCTION UPDATE</h2>
      </div>

      <div className="video-wrapper">
        <div className="video-card">
          <div className="video-inner">
            <img src={youtube} alt="Construction Update" />

            <div className="play-btn-centered">
              <div className="play-icon-svg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
