import React from 'react';
import './App.css'; // Ensure this is imported to access the CSS styles

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Your Name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Your Email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" rows="4" placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: example@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main St, Anytown, USA</p>
      </div>
    </div>
  );
};

export default Contact;
