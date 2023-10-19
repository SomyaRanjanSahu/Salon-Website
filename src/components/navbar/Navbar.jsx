import React from 'react';
import './navbar.css';
import logo from '../../assets/barber.png';

const Navbar = ({ toggleMenu, isMenuOpen }) => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="navbar__menu">
                <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;