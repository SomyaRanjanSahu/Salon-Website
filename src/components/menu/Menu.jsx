import React from "react";
import "./menu.css";

const Menu = ({ isOpen }) => {
    return (
        <div className={`menu ${isOpen ? 'open' : ''}`}>
            <ul>
                <li><a href="/" data-text="Home">Home</a></li>
                <li><a href="services" data-text="Services">Services</a></li>
                <li><a href="gallery" data-text="Gallery">Gallery</a></li>
                <li><a href="contact" data-text="Contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default Menu;