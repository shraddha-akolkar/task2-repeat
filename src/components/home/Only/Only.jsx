import React from "react";
import "./Only.css";
import OnlyIcon from "../../../assets/svg/OnlyIcon";
const amenities = [
  {
    id: 1,
    icon: <OnlyIcon />,
    label: "4 Lush green individual party lawns",
  },
  {
    id: 2,
    icon: <OnlyIcon />,
    label: "Vehicle free zone of jogging & cycling track",
  },
  {
    id: 3,
    icon: <OnlyIcon />,
    label: "24/7 Light & Ventilation",
  },
  {
    id: 4,
    icon: <OnlyIcon />,
    label: "Temple to worship within project",
  },
  {
    id: 5,
    icon: <OnlyIcon />,
    label: "Two level glass facade clubhouse with party hall",
  },
  {
    id: 6,
    icon: <OnlyIcon />,
    label: "Multiple sports arenas for all age groups within project",
  },
  {
    id: 7,
    icon: <OnlyIcon />,
    label:
      "Multi level Security with video intercom to ensure safety & privacy",
  },
  {
    id: 8,
    icon: <OnlyIcon />,
    label: "Work from home space within project",
  },
];

const Only = () => {
  return (
    <section className="only-section">
      <div className="only-wrapper">
        <div className="only-top-section">
          <p className="only-heading ">ABOUT</p>
          <p className="only-title">Only At VTP</p>
        </div>
        <div className="only-container">
          {amenities.map((item) => (
            <div className="only-card" key={item.id}>
              <div className="only-icon-box">
                <span className="only-icon">{item.icon}</span>
              </div>
              <p className="only-label text">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Only;
