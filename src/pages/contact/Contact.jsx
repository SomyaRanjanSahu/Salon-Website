import React, { useState } from 'react';
import './contact.css';
import Navbar from '../../components/navbar/Navbar';
import Menu from '../../components/menu/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="contact-page">
      {/* Navbar  */}
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className="contact-section">
        {/*Contact header  */}
        <div className="contact-header">
          <h1 className="header-heading">Contact Us</h1>
          <div className="icon-row">
            <div className="icon-container">
              <FontAwesomeIcon className='icons' icon={faLocationDot} />
              <p className="icon-label">Address</p>
              <p className="icon-details">Silvassa, Gujarat</p>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className='icons' icon={faEnvelope} />
              <p className="icon-label">Email</p>
              <p className="icon-details">Naai@gmail.com</p>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className='icons' icon={faPhone} />
              <p className="icon-label">Phone</p>
              <p className="icon-details">+1 123-456-7890</p>
            </div>
          </div>
        </div>
        {/* Contact container  */}
        <div className="contact-map-container">
          <div className="contact-container">
            <p className="tagline">Book an appointment and experience our exceptional services</p>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Your Name" required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Your Email" required />
              <label htmlFor="message">Message:</label>
              <textarea id="message" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          {/* Map */}
          <div className="map-container">
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=20.27832694252488,%2073.00139442515155+(Sachin%20Salon)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Map"
              className="map-container">
            </iframe>
          </div>
        </div>
        {/* Menu  */}
        <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>      
    </div >
  );
};

export default ContactPage;
