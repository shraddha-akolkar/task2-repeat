import React from "react";
import "./ProjectLayout.css";
import floorplan1 from "../../../assets/images/house.png";

const layouts = [
  { id: 1, bhk: "2\nBHK", img: floorplan1, sqft: "616 – 782\nSq.ft" },
  { id: 2, bhk: "SMART\n3BHK", img: floorplan1, sqft: "871\nSq.ft" },
  { id: 3, bhk: "3\nBHK", img: floorplan1, sqft: "948 – 968\nSq.ft" },
  { id: 4, bhk: "3\nBHK", img: floorplan1, sqft: "948 – 968\nSq.ft" },
  { id: 5, bhk: "3\nBHK", img: floorplan1, sqft: "948 – 968\nSq.ft" },
];

const ProjectLayout = () => {
  return (
    <section className="project-section">
      <div className="project-header">
        <p className="project-eyebrow">VTP VOLARE</p>
        <h2 className="project-title">PROJECT LAYOUT</h2>
      </div>

      <div className="layout-cards">
        {layouts.map((item) => (
          <div className="layout-card" key={item.id}>
            <div className="badge">{item.bhk}</div>

            <img src={item.img} alt={item.bhk} />

            <div className="card-bottom">
              <div className="text">
                <span>Project</span>
                <p>Configuration</p>
              </div>

              <div className="size-box">{item.sqft}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectLayout;
