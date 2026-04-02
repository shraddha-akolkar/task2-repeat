import React from "react";
import "./Contact.css";
import SubmitIcon from "../../../assets/svg/Submit";
const Contact = () => {
  return (
    <section className="main-section">
      <div className="wrapper">
        <div className="wrapper-heading">
          <p className="h5">VTP Volare</p>
          <p className="h2">Enquire Now</p>
        </div>

        <form>
          <input type="text" placeholder="First Name*" />
          <input type="text" placeholder="Last Name*" />
          <input type="email" placeholder="Enter Email*" className="email" />

          <div className="phone-row">
            <select>
              <option>India (+91)</option>
            </select>
            <input type="tel" placeholder="Enter Phone No*" />
          </div>

          <label className="checkbox-row">
            <input type="checkbox" defaultChecked />I hereby authorize to send
            notification on SMS, Calls, RCS, WhatsApp.
          </label>

          <div className="submit-btn">
            <button type="submit">
              Submit
              <SubmitIcon />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
