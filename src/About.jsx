import React from 'react';
import './App.css'; // Ensure this is imported to access the CSS styles

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        We are a dedicated team committed to providing exceptional services to our clients. Our mission is to deliver innovative solutions that drive success and growth.
      </p>

      <h2 className="about-title">Meet Our Team</h2>
      <div className="about-team">
        <div className="team-member">
          <img src="https://via.placeholder.com/80" alt="Team Member" />
          <h3>John Doe</h3>
          <p>CEO</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/80" alt="Team Member" />
          <h3>Jane Smith</h3>
          <p>Lead Developer</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/80" alt="Team Member" />
          <h3>Emily Johnson</h3>
          <p>Marketing Manager</p>
        </div>
      </div>
    </div>
  );
};

export default About;
