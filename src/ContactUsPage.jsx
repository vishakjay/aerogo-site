import React, { useState } from 'react';
import './ContactUs.css';
import StickyFooter from './StickyFooter';

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
   
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
    <div className="container">
      <h1 className="heading">Contact Us</h1>
      <div className="contact-item">
        <h2>Email</h2>
        <p>contact@aerogo.live</p>
      </div>
      <div className="contact-item">
        <h2>Phone</h2>
        <p>+1 123-456-7890</p>
      </div>
      <div className="contact-item">
        <h2>Address</h2>
        <p>123 Main Street, City, Country</p>
      </div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Send Us a Message</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
          required
        />
        <br />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="textarea-field"
          required
        ></textarea>
        <br />
        <button type="submit" className="button">Send</button>
      </form>
    </div>
    <StickyFooter />
    </>
  );
}

export default ContactUsPage;
