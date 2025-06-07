import React from "react";
import automotive from '../assets/automotive-removebg-preview.webp';
import industry from '../assets/industrylogo.webp';
import electronic from '../assets/electronic.webp';
import renew from '../assets/renew.webp';

const logos = [
  automotive,
  industry,
  renew,
  electronic,
  automotive,
  industry,
  renew,
  electronic
];

export const LogoSlider = () => {
  return (
    <div className="industries-section text-center">
      <h2 className="section-title heading">Industries Served</h2>
      <p className="section-description">
        Our wire harnesses are trusted across a wide range of industries:
      </p>

      <div className="logo-slider">
        <div className="slider-track">
          {logos.concat(logos).map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
