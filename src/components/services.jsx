import React from "react";
import wireHarnessIcon from "../assets/wireharness.webp";
import service from "../assets/service1.webp";
import manufacture from "../assets/manufacturing.webp";
import delivery from "../assets/delivery (1).webp";
import testing from "../assets/testing.webp";
import "../css/Services.css";

export const Services = ({ data }) => {
  const iconMap = {
    "wire-harness": wireHarnessIcon,
    "Prototyping": service,
    "High": manufacture,
    "Testing & Quality Control": testing,
    "Packaging & Delivery": delivery,
  };

  return (
    <section id="our-services" className="services-section">
      <div className="services-container">
        <h2 className="services-title heading">Our Services</h2>
        <p className="services-subtitle">
          We offer end-to-end wire harness solutions for various industries.
        </p>
        <div className={`services-grid ${data?.length === 5 ? "five-cards" : ""}`}>
          {data
            ? data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="service-card">
                  <img
                    src={iconMap[d.icon]}
                    alt={d.name}
                    className="service-icon"
                  />
                  <h3 className="service-name">{d.name}</h3>
                  <p className="service-text">{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </section>
  );
};