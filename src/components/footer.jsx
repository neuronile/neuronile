import React from "react";
import logo from "../assets/NEURO.webp"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Company Info & Logo */}
          <div className="footer-section footer-brand">
            <div className="footer-logo-container">
              <img src={logo} alt="Neuronile Logo" className="footer-logo" />
              <h3 className="footer-brand-name">NEUR<strong style={{ color: "#f4c10f",fontFamily: "Universe" }}>O</strong>NILE</h3>
            </div>
            <p className="footer-description">
              Empowering connections with precision-engineered wire harness solutions.
            </p>
            <div className="footer-social">
             <a href="https://wa.me/18253335276" className="social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
  <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.01 2.004C8.281 2.004 2 8.285 2 16.014c0 2.82.74 5.472 2.02 7.773L2 30l6.387-2.004A13.915 13.915 0 0016.01 30c7.73 0 14.011-6.28 14.011-13.987 0-7.73-6.281-14.009-14.011-14.009zm0 25.378a11.29 11.29 0 01-5.727-1.56l-.408-.248-3.79 1.19 1.26-3.682-.264-.422a11.222 11.222 0 01-1.706-5.947c0-6.237 5.07-11.31 11.314-11.31 6.236 0 11.308 5.073 11.308 11.31 0 6.237-5.073 11.31-11.308 11.31zm6.188-8.466c-.34-.17-2.004-.992-2.316-1.106-.313-.113-.54-.17-.766.17-.227.34-.877 1.107-1.074 1.33-.198.226-.396.255-.736.085-.34-.17-1.437-.529-2.735-1.686-1.01-.9-1.69-2.01-1.887-2.35-.198-.34-.021-.524.148-.694.15-.148.34-.368.51-.552.17-.198.227-.34.34-.567.113-.227.057-.425-.028-.595-.085-.17-.765-1.843-1.05-2.52-.277-.666-.56-.574-.766-.584-.198-.01-.425-.01-.652-.01-.227 0-.595.085-.907.397-.312.312-1.19 1.163-1.19 2.837s1.22 3.29 1.39 3.518c.17.227 2.401 3.652 5.825 5.117 3.424 1.457 3.424.972 4.04.906.623-.057 2.004-.81 2.287-1.594.283-.783.283-1.457.198-1.594-.085-.14-.312-.227-.652-.397z"/>
  </svg>
</a>
<a href="tel:+18253335276" className="social-link" aria-label="Call" target="_blank" rel="noopener noreferrer">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.36 11.36 0 003.58.57 1 1 0 011 1v3.49a1 1 0 01-1 1A17.931 17.931 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.25 1.05l-2.2 2.16z"/>
  </svg>
</a>
<a href="https://www.facebook.com/share/1BddrSvvtW/?mibextid=qi2Omg" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
  <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 6h3V0h-3c-3.3 0-6 2.7-6 6v3h-3v6h3v17h6V15h4.2l.8-6H19V6c0-.6.4-1 1-1z"/>
  </svg>
</a>
<a href="https://x.com/neuronile" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
  <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 6.075a13.172 13.172 0 01-3.769 1.031A6.59 6.59 0 0031.115 4a13.17 13.17 0 01-4.169 1.594A6.573 6.573 0 0022.155 4c-3.633 0-6.577 2.944-6.577 6.577 0 .516.059 1.02.17 1.504C10.203 11.86 5.419 9.13 2.229 4.89a6.544 6.544 0 00-.891 3.305c0 2.281 1.162 4.29 2.927 5.472a6.553 6.553 0 01-2.978-.823v.082c0 3.183 2.263 5.838 5.266 6.439a6.599 6.599 0 01-2.971.112c.837 2.613 3.263 4.516 6.14 4.57a13.179 13.179 0 01-8.155 2.809c-.53 0-1.053-.031-1.566-.092A18.616 18.616 0 0010.064 28c12.072 0 18.676-10.003 18.676-18.675 0-.285-.007-.568-.02-.85A13.349 13.349 0 0032 6.075z"/>
  </svg>
</a>
<a href="https://www.linkedin.com/in/neuronile-pvt-ltd-707150369/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
  <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M29 0H3C1.343 0 0 1.343 0 3v26c0 1.657 1.343 3 3 3h26c1.658 0 3-1.343 3-3V3c0-1.657-1.342-3-3-3zM9.5 26H5V12h4.5v14zm-2.25-16.1c-1.4 0-2.25-.97-2.25-2.2C5 6.67 5.8 5.7 7.3 5.7S9.5 6.68 9.5 7.9c0 1.23-.85 2.2-2.25 2.2zm18.75 16.1h-4.5v-7.2c0-1.81-.65-3.05-2.27-3.05-1.24 0-1.97.83-2.29 1.63-.12.3-.15.73-.15 1.16V26h-4.5s.06-11.64 0-12.85h4.5v1.82c.6-.93 1.66-2.26 4.05-2.26 2.96 0 5.18 1.94 5.18 6.1V26z"/>
  </svg>
</a>



              
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#our-services">Services</a></li>
              <li><a href="#contact-us">Get In Touch</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#our-services">Custom Wire Harness Design</a></li>
              <li><a href="#our-services">Prototyping</a></li>
              <li><a href="#our-services">High & Low-Volume Manufacturing</a></li>
              <li><a href="#our-services">Testing & Quality Control</a></li>
              <li><a href="#our-services">Packaging & Delivery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Get in Touch</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <span>+1 825 333 5276</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>Info@neuronile.com</span>
              </div>
              {/* <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Calgary, Alberta, Canada</span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Neuronile. All Rights Reserved.</p>
            <div className="footer-bottom-links">
              {/* <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a> */}
              {/*  Developed by Mohd_Nishal. */}
            </div>
          </div>
        </div>
      </div>
{/* linear-gradient(135deg, #1e293b 0%, #0f172a 100%); */}
{/* linear-gradient(to right, #c1d7d3, #a2c9c0) */}
      <style jsx>{`
        .footer {
          background: #3E4A56;
          color: #e2e8f0;
          font-family:"Poppins" -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #ebcb54, transparent);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          padding: 60px 0 40px;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-brand {
          max-width: 300px;
        }

        .footer-logo-container {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          cursor:pointer;
        }

        .footer-logo {
             height: auto;
    width: 170px;
    margin-right: 15px;
        }

        .footer-brand-name {
          font-size: 24px;
          font-weight: 700;
          color: #fff;
          margin: 0;
          letter-spacing: 1px;
          font-family: 'Universe', sans-serif;
        }

        .footer-description {
          color: #e2e8f0;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 14px;
        }

        .footer-social {
          display: flex;
          gap: 15px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(251, 191, 36, 0.1);
          border: 1px solid rgba(251, 191, 36, 0.2);
          border-radius: 8px;
          color: #ebcb54;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #ebcb54;
          color: #1e293b;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(251, 191, 36, 0.3);
        }

        .footer-title {
          color: #f1f5f9;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
          position: relative;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 30px;
          height: 2px;
          background: #ebcb54;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-links a {
          color: #f1f5f9;;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 14px;
          display: inline-block;
        }

        .footer-links a:hover {
          color: #ebcb54;
          transform: translateX(5px);
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: color: #f1f5f9;;
          font-size: 14px;
        }

        .contact-item svg {
          color: #ebcb54;
          flex-shrink: 0;
        }

        .footer-bottom {
          border-top: 1px solid rgba(148, 163, 184, 0.1);
          padding: 25px 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-bottom-content p {
          margin: 0;
          color: color: #f1f5f9;;
          font-size: 14px;
        }

        .footer-bottom-links {
          display: flex;
          gap: 25px;
        }

        .footer-bottom-links a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 13px;
          transition: color 0.3s ease;
        }

        .footer-bottom-links a:hover {
          color: #ebcb54;
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 40px 0 30px;
            text-align: center;
          }

          .footer-brand {
            max-width: none;
          }

          .footer-title::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .footer-bottom-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            padding: 0 15px;
          }

          .footer-main {
            padding: 30px 0 20px;
          }

          .footer-bottom-links {
            flex-direction: column;
            gap: 10px;
          }
        }
          
      `}</style>
    </footer>
  );
};