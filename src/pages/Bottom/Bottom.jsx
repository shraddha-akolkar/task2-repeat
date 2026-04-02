import React from "react";
// import qr from "../assets/images/qr-code.png";
import "./Bottom.css";

export default function Bottom() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-section">
        <div className="footer-main ">
          <img
            src="/public/images/qr-code.png"
            alt="QR Code"
            className="qr-image"
          />

          <p className="footer-project text">VTP Volare - PR1260248454844520</p>

          <p className="footer-area text">
            All projects are registered under MahaRERA and is available on
            website –
            <br />
            <a
              href="http://maharera.mahaonline.gov.in/"
              target="_blank
          "
              className="footer-area-link"
            >
              http://maharera.mahaonline.gov.in/
            </a>
          </p>
        </div>

        <div className="footer-bottom ">
          <p>© Copyright 2024 VTP Realty. All Rights Reserved.</p>

          <div className="footer-links ">
            <a href="#" className="">
              Privacy Policy | Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
