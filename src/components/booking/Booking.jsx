import React, { useState } from "react";
import "./booking.css";
import logo from '../../assets/barber.png';
import img from '../../assets/gender.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faLeftLong } from '@fortawesome/free-solid-svg-icons';

const BookingContainer = ({ toggleBooking }) => {
    const [gender, setGender] = useState(null);

    const renderGenderSelection = () => {
        return (
            <div className="gender-buttons-container">
                <h2>Choose your gender</h2>
                <img className="gender-picture" src={img} alt="" />
                <button className="female-button" onClick={() => setGender("female")}>♀️ Female</button>
                <button className="male-button" onClick={() => setGender("male")}>♂️ Male</button>
            </div>
        );
    };

    const renderMaleServices = () => {
        return (
            <div className="male-services">
                <div className="service-header">
                    <button className="service-back-button" onClick={() => setGender(null)}>
                        <FontAwesomeIcon icon={faLeftLong} />
                    </button>
                    <h3>💇🏻‍♂️ Services</h3>
                </div>

                <h3 className="service-type">Haricut</h3>
                <ul>
                    <li>Haircut - $25</li>
                    <li>Beard Trim - $15</li>
                    <li>Haircut - $25</li>
                    <li>Beard Trim - $15</li>
                </ul>

                <h3 className="service-type">Haricut</h3>
                <ul>
                    <li>Haircut - $25</li>
                    <li>Beard Trim - $15</li>
                </ul>

                <h3 className="service-type">Haricut</h3>
                <ul>
                    <li>Haircut - $25</li>
                    <li>Beard Trim - $15</li>
                </ul>

                <h3 className="service-type">Haricut</h3>
                <ul>
                    <li>Haircut - $25</li>
                    <li>Beard Trim - $15</li>
                </ul>
            </div>
        );
    };

    const renderFemaleServices = () => {
        return (
            <div className="female-services">
                <div className="service-header">
                    <button className="service-back-button" onClick={() => setGender(null)}>
                        <FontAwesomeIcon icon={faLeftLong} />
                    </button>
                    <h3>💇🏻‍♀️ Services</h3>
                </div>
                <h3 className="service-type">Haricut</h3>
                <ul>
                    <li>U. Coat : ₹200</li>
                    <li>Straight Cut : ₹150</li>
                    <li>Deep-U-Cut : ₹300</li>
                    <li>V-Cut : ₹300</li>
                </ul>

                <h3 className="service-type">Haricut</h3>
                <ul>
                    <li>Haircut - $25</li>
                    <li>Beard Trim - $15</li>
                </ul>

                <h3 className="service-type">Haricut</h3>
                <ul>
                    <li>Haircut - $25</li>
                    <li>Beard Trim - $15</li>
                </ul>
                
                <h3 className="service-type">Haricut</h3>
                <ul>
                    <li>Haircut - $25</li>
                    <li>Beard Trim - $15</li>
                </ul>
            </div>
        );
    };

    const renderContent = () => {
        if (gender === "male") {
            return renderMaleServices();
        } else if (gender === "female") {
            return renderFemaleServices();
        } else {
            return renderGenderSelection();
        }
    };

    return (
        <div className="booking-overlay">
            <div className="booking-container">
                <i>Speaker</i>
                <b>Camera</b>
                <div className="booking-header">
                    <img src={logo} alt="Logo" className="booking-logo" />
                    <button className="close-button" onClick={toggleBooking} style={{ "background-color": "#dedede" }}>
                        <FontAwesomeIcon icon={faXmark} style={{ "color": "gray" }} />
                    </button>
                </div>
                <hr />
                {renderContent()}
            </div>
        </div>
    );
};

export default BookingContainer;