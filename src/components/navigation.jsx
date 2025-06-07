import React, { useState, useEffect } from "react";
import logo from "../assets/NEURO.webp"

export const Navigation = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Change background after scrolling 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
// rgba(30, 41, 59, 0.95)
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: isScrolled ? '#3E4A56' : 'transparent',
      backdropFilter: isScrolled ? 'blur(15px)' : 'blur(10px)',
      zIndex: 1000,
      padding: '0',
      boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.2)' : '0 2px 20px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70px'
      }}>
        
        {/* Logo - Much clearer and bigger */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="#home" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            textDecoration: 'none',
            color: 'white'
          }}>
            {/* You can replace this with your actual logo image */}
            <img 
              src={logo} 
              alt="NEURONILE Logo" 
              style={{
                width: '170px',
                height: 'auto',
                marginRight: '25px',
                marginTop:'20px'
              }}
            />
            <span style={{
              fontSize: '28px',
              fontWeight: 'bold',
              letterSpacing: '1.5px',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              fontFamily:'Universe'
            }}>
              {/* NEUR<span style={{ color: '#fbbf24' }}>O</span>NILE */}
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div style={{
          display: isMobile ? 'none' : 'flex',
          alignItems: 'center',
          gap: '35px'
        }}>
          <a
            href="#home"
            style={{
              color: '#d1d5db',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              padding: '8px 0',
              position: 'relative',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#fbbf24'}
            onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
          >
            Home
          </a>
          <a
            href="#about-us"
            style={{
              color: '#d1d5db',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              padding: '8px 0',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#fbbf24'}
            onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
          >
            About Us
          </a>
          <a
            href="#our-services"
            style={{
              color: '#d1d5db',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              padding: '8px 0',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#fbbf24'}
            onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
          >
            Services
          </a>
          <a
            href="#contact-us"
            style={{
              color: '#d1d5db',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              padding: '8px 0',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#fbbf24'}
            onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button - Hamburger Icon */}
        <button
          onClick={toggleMobileMenu}
          style={{
            display: isMobile ? 'flex' : 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'none',
            border: 'none',
            color: '#d1d5db',
            cursor: 'pointer',
            padding: '8px',
            width: '40px',
            height: '40px',
            borderRadius: '6px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          {/* Hamburger Lines */}
          <div style={{
            width: '24px',
            height: '2px',
            backgroundColor: '#d1d5db',
            margin: '3px 0',
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }}></div>
          <div style={{
            width: '24px',
            height: '2px',
            backgroundColor: '#d1d5db',
            margin: '3px 0',
            transition: 'all 0.3s ease',
            opacity: isMobileMenuOpen ? '0' : '1'
          }}></div>
          <div style={{
            width: '24px',
            height: '2px',
            backgroundColor: '#d1d5db',
            margin: '3px 0',
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
          }}></div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && isMobile && (
        <div style={{
          backgroundColor: 'rgba(30, 41, 59, 0.98)',
          padding: '20px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          animation: 'slideDown 0.3s ease-out'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <a
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '500',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                transition: 'color 0.3s ease'
              }}
              onTouchStart={(e) => e.target.style.color = '#fbbf24'}
              onTouchEnd={(e) => e.target.style.color = '#d1d5db'}
            >
              Home
            </a>
            <a
              href="#about-us"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '500',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                transition: 'color 0.3s ease'
              }}
              onTouchStart={(e) => e.target.style.color = '#fbbf24'}
              onTouchEnd={(e) => e.target.style.color = '#d1d5db'}
            >
              About Us
            </a>
            <a
              href="#our-services"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '500',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                transition: 'color 0.3s ease'
              }}
              onTouchStart={(e) => e.target.style.color = '#fbbf24'}
              onTouchEnd={(e) => e.target.style.color = '#d1d5db'}
            >
              Services
            </a>
            <a
              href="#contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '500',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                transition: 'color 0.3s ease'
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}

      {/* Add some basic keyframes for animation */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};