import React from "react";
import "../css/Mission.css";
import { FaBullseye, FaEye, FaGem } from "react-icons/fa";

export const Mission = () => {
  return (
    <div className="mission-section">
      <h2 className="mission-title heading">Our Purpose</h2>

      <div className="mission-cards">
        {/* Mission Card */}
        <div className="mission-card">
          <FaBullseye className="mission-icon" />
          <h3>Mission</h3>
          <p>
            To be the most trusted partner in wire harness solutions by
            delivering customized, cost-effective, and high-quality products.
          </p>
        </div>

        {/* Vision Card */}
        <div className="mission-card">
          <FaEye className="mission-icon" />
          <h3>Vision</h3>
          <p>
            To connect industries with infinite possibilities through seamless
            wiring solutions.
          </p>
        </div>

        {/* Core Values Card */}
        <div className="mission-card">
          <FaGem className="mission-icon" />
          <h3>Core Values</h3>
          <ul>
            <li>Precision</li>
            <li>Reliability</li>
            <li>Innovation</li>
            <li>Client-Centric Approach</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
