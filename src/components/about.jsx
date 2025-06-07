import React from "react";
import "../css/About.css";
import wiringImage from "../assets/aboutimg.webp"; // Replace with your actual image

export const About = ({ data }) => {
  return (
    <div className="about-section" id="about-us">
     

      <div className="about-container">
        {/* Left: Image */}
        <div className="about-left">
          <img src={wiringImage} alt="Wiring Harness" />
        </div>

        {/* Right: Content */}
        <div className="about-right">
           <h2 className="about-heading heading">About Us</h2>
          <p>
            {data
              ? data.paragraph
              : "Our team specializes in creating wiring harnesses that are durable, efficient, and ready to integrate."}
          </p>

          <h3>Why Choose Us?</h3>
          <div className="why-choose-us">
            <ul>
              {data
                ? data.Why.map((item, index) => <li key={index}>{item}</li>)
                : "loading"}
            </ul>
            <ul>
              {data
                ? data.Why2.map((item, index) => <li key={index}>{item}</li>)
                : "loading"}
            </ul>
          </div>

          <button 
  className="about-btn"
  onClick={() => {
    document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });
  }}
>
  Get In Touch
</button>
        </div>
      </div>
    </div>
  );
};
