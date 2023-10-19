import React, { useState } from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScissors, faSmile } from '@fortawesome/free-solid-svg-icons';
import { Spring } from 'react-spring';
import Navbar from '../../components/navbar/Navbar';
import Menu from '../../components/menu/Menu';
import Video from '../../assets/shop_tour.mp4';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="home">
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <main>
        <section className="banner">
          <Spring
            from={{ opacity: 0, transform: 'translateY(-50px)' }}
            to={{ opacity: 1, transform: 'translateY(0)' }}
            config={{ duration: 1000 }}
          >
            {props =>
              <div style={props}>
                <h2>Get the perfect haircut</h2>
                <p>Our experienced barbers will give you the style that suits you best.</p>
                <a href="services" className="button">Book Now</a>
              </div>
            }
          </Spring>
        </section>
        <section className="services">
          <h2>Our Services</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faScissors} className="service-icon" />
              <h3>Haircut</h3>
              <p>Get the perfect haircut that suits your style.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faScissors} className="service-icon" />
              <h3>Beard Trim</h3>
              <p>Trim and shape your beard for a polished look.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faScissors} className="service-icon" />
              <h3>Shave</h3>
              <p>Experience a classic barber shop shave with a straight razor.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faSmile} className="service-icon" />
              <h3>Facial</h3>
              <p>Treat yourself to a relaxing facial treatment.</p>
            </li>
          </ul>
          <a href="services" className="button">Book Now</a>
        </section>
        <section className="about">
          <h2>About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Meet Our Team</h3>
              <img src="https://i.postimg.cc/7hsV6WNB/3725f34b-9296-4b4e-b958-eac4e10b4e15.png" alt="" width="200px" />
              <img src="https://i.postimg.cc/ydTnqd3C/6538a314-7215-4b7f-8158-26e948378f37.png" alt="" width="200px" />
              <img src="https://i.postimg.cc/bY3L3ZjQ/6d8f062f-c769-427d-8a7d-860631f412a6.png" alt="" width="200px" />
              <img src="https://i.postimg.cc/ZnKHJS6B/5e6b090a-9843-46bd-8c8d-b79f85ba86a9.png" alt="" width="200px" />
              <h3>Our Mission and Values</h3>
              <p>At our barbershop, we believe that everyone deserves to look and feel their best. We are committed to creating a welcoming and inclusive environment where all are welcome. We strive to build lasting relationships with our clients and to provide personalized service that meets your unique needs.</p>
              <h3>Virtual Tour</h3>
              <p>Take a virtual tour of our barbershop and see for yourself why we're the best in town. Play the video below to start the tour.</p>
              <video src={Video} width="428" height="300" controls></video>
            </div>
          </div>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>Silvassa, Gujarat<br />Salon@gmail.com<br />Phone: +1 123-456-7890</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Barber Shop, Made by <a href="https://somyasahu.netlify.app/">Somya Sahu</a></p>
      </footer>
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}

export default Home;