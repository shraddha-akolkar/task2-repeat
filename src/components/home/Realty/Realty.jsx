import React from "react";
import "./Realty.css";
import building from "../../../assets/images/realtybuilding.png";

const topStats = [
  {
    id: 1,
    value: "19,000+",
    label: "HAPPY CUSTOMERS & ADDING\nMORE EVERY MONTH",
  },
  { id: 2, value: "38+", label: "YEARS OF EXPERIENCE\nIN CONSTRUCTION" },
  { id: 3, value: "23+", label: "PROJECTS DELIVERED\nUPTO 2024" },
];

const bottomStats = [
  { id: 4, value: "10 M", label: "SQFT DELIVERED\nIN 2023-2024" },
  { id: 5, value: "2.5 CRORE", label: "SQ.FT. OF SIMULTANEOUS\nCONSTRUCTION" },
];

const Realty = () => {
  return (
    <section className="realty">
      <div className="realty-content">
        <img src={building} alt="building" className="building-img" />

        <div className="realty-right">
          <div className="realty-text">
            <h2 className="realty-heading">ABOUTVTP REALTY</h2>
            <p>
              VTP Realty is Pune’s No.1 Real Estate Development Brand
              Consistently for 6 Years in a Row. The undisputed leaders that
              have not only set new benchmarks in business numbers but with
              stellar delivery line-up.Ranked Top 10 in India in terms of sales
              turnover, VTP Realty is a well-known skyrocketing success story
              despite being a single city developer.
            </p>
            <p>
              A brand that stands firmly on strong ethics and projects a
              trailblazing thought-leadership for the industry. The numerous
              awards winning brand prides itself in pioneering the MLA (Maximum
              Livable Area) Homes.
            </p>
          </div>

          <div className="stats-box">
            <div className="row top-row">
              {topStats.map((stat) => (
                <div className="stat" key={stat.id}>
                  <h3>{stat.value}</h3>

                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="row bottom-row">
              {bottomStats.map((stat) => (
                <div className="stat" key={stat.id}>
                  <h3>{stat.value}</h3>

                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Realty;
