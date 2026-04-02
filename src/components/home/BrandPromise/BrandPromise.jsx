import React from "react";
import "./Brand.css";

import building from "../../../assets/images/brandbuilding.png";
import Cross from "../../../assets/svg/Cross";

const BrandPromise = () => {
  return (
    <div className="BrandPromise-main">
      <div className="brand-section">
        <div className="promise-header">
          <h5>VTP VOLARE</h5>
          <h2>BRAND PROMISE</h2>
        </div>

        <div className="promise-content">
          <div className="features">
            <div className="feature">
              <div className="icon1">
                <Cross />
              </div>
              <div className="icon-content">
                <h4>MLA ADVANTAGE OF BIGGER ROOMS</h4>
                <p>
                  Intelligent plan with zero wastage. Maximum usable spaces.
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="icon1">
                <Cross />
              </div>
              <div className="icon-content">
                <h4>CUSTOMER CENTRIC APPROACH</h4>
                <p>We aim for customer delight in every aspect.</p>
              </div>
            </div>

            <div className="feature">
              <div className="icon1">
                <Cross />
              </div>
              <div className="icon-content">
                <h4>POST SALES & POSSESSION SUPPORT</h4>
                <p>Hand-holding customers till they move in.</p>
              </div>
            </div>
          </div>

          <div className="building">
            <img src={building} alt="building" />
          </div>

          <div className="features">
            <div className="feature">
              <div className="icon1">
                <Cross />
              </div>
              <div className="icon-content">
                <h4>RIGHTPRICED PRODUCTS</h4>
                <p>Value creation at any price point.</p>
              </div>
            </div>

            <div className="feature">
              <div className="icon1">
                <Cross />
              </div>
              <div className="icon-content">
                <h4>HIGH QUALITY BUILD</h4>
                <p>Uncompromising approach towards quality.</p>
              </div>
            </div>

            <div className="feature">
              <div className="icon1">
                <Cross />
              </div>
              <div className="icon-content bottom-text">
                <h4>TRANSPARENT TRANSACTION</h4>
                <p>No hidden cost.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPromise;
