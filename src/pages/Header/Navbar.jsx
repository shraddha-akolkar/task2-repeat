import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/nav.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="main-nav">
        <div className="top-info-strip">
          BIGGEST LAUNCH OF PUNE | 10 ACRES LUXURY ORDERS | 4 ACRES OF AMENITIES
          | PRIME HINJEWADI PH 1
        </div>

        <div className="nav-main-wrapper">
          <div className="logo-box">
            <img src={logo} alt="VTP Realty Logo" />
          </div>

          {/* Hamburger Icon */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`bottom ${menuOpen ? "open" : ""}`}>
            <ul className="nav-menu">
              <li>PROJECT OVERVIEW</li>
              <li>PROJECT GALLERY</li>
              <li>CONFIGURATIONS</li>
              <li>ABOUT VTP</li>
              <li>CONTACT US</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
