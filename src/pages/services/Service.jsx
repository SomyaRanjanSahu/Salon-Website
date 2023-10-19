import React, { useState } from 'react';
import './service.css';
import BookingContainer from '../../components/booking/Booking';
import Navbar from '../../components/navbar/Navbar';
import Menu from '../../components/menu/Menu';

const ServicePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleBooking = () => {
    setIsBookingOpen(!isBookingOpen);
  };

  return (
    <div className="service-page">
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className="background-image">
        <div className="blur">
          <div className="content">
            <h1>Elevated barbering and styling for all human kind.</h1>
            <p>A FRESH TAKE ON BARBERING & HAIRDRESSING SINCE 2015. LOCATED AT SILVASSA.</p>
            <a href="contact">CONTACT US</a>
          </div>
        </div>
      </div>
      <div className="book-now">
        <button onClick={toggleBooking}>Book Now</button>
      </div>
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {isBookingOpen && (
        <div className="booking-overlay">
          <BookingContainer toggleBooking={toggleBooking} />
        </div>
      )}
    </div>
  );
};

export default ServicePage;
