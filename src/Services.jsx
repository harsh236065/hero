import React from 'react';
import './App.css'; // Ensure this is imported to access the CSS styles

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      
      <div className="service-item">
        <h2 className="service-title">Service One</h2>
        <p className="service-description">
          Description of Service One. This service helps you with...
        </p>
      </div>

      <div className="service-item">
        <h2 className="service-title">Service Two</h2>
        <p className="service-description">
          Description of Service Two. This service provides...
        </p>
      </div>

      <div className="service-item">
        <h2 className="service-title">Service Three</h2>
        <p className="service-description">
          Description of Service Three. This service specializes in...
        </p>
      </div>
    </div>
  );
};

export default Services;
