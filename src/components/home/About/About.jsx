import React from "react";
import "./About.css";
import pdf from "../../../assets/images/pdf.png";
const About = () => {
  return (
    <section>
      <div className="left-split">
        <div className="centered">
          <h5>ABOUT</h5>
          <h1 className="heading">VTP volare</h1>
          <h5 className="heading-bottom">Live Central. Live Grand.</h5>
        </div>

        <div>
          <h2>
            Step Into <br />
            Splendor<br></br> Live Beyond Limits!
          </h2>
        </div>
      </div>

      <div className="right-split">
        <div className="centered">
          <p>
            VTP Volare, located in the prime location of Hinjawadi Phase 1,
            Pune, is an epitome of luxury living, developed by VTP Realty.
            Positioned as part of the World of Wow series, this project offers a
            perfect blend of premium residences and world-class amenities,
            catering to the needs of modern families. Walking distance from
            Infosys Circle and with easy access via the 4-lane Maan-Hinjawadi
            Road, it ensures unmatched connectivity for professionals and
            families alike.
          </p>

          <p>
            With a focus on maximizing livable area, the project ensures minimal
            wastage of space, providing spacious and intelligently designed
            homes. Enjoy complete privacy with no overlapping towers, giving
            residents an exclusive living experience. VTP Volare is surrounded
            by major IT hubs, reputed schools, and healthcare centers, ensuring
            a well-connected and convenient lifestyle for its residents.
          </p>

          <button className="button-btn">
            GET BROCHURE
            <img src={pdf} alt="PDF" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
