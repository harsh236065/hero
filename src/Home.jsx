import React from 'react';
import './App.css'; // Ensure this is imported to access the CSS styles

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img 
          // src="data:image/png;base64,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" 
          alt="Hero Banner" 
          className="hero-image" 
        />
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Website</h1>
          <p className="hero-description">
            We provide exceptional services to help your business thrive.
          </p>
          <a href="/services" className="hero-button">Explore Our Services</a>
        </div>
      </div>

      <div className="introduction">
        <h2 className="introduction-title">About Us</h2>
        <p className="introduction-text">
          We are a dedicated team committed to delivering innovative solutions that drive success and growth. Our mission is to provide exceptional services tailored to your needs.
        </p>
      </div>

      <div className="services-preview">
        <div className="service-card">
          <h3 className="service-title">Service One</h3>
          <p className="service-description">
            Brief description of Service One. We offer...
          </p>
        </div>
        <div className="service-card">
          <h3 className="service-title">Service Two</h3>
          <p className="service-description">
            Brief description of Service Two. Our expertise includes...
          </p>
        </div>
        <div className="service-card">
          <h3 className="service-title">Service Three</h3>
          <p className="service-description">
            Brief description of Service Three. We specialize in...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
