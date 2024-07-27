// App.jsx

import React, { useState, useEffect } from 'react';
import { Instagram, MapPin, ChevronLeft, ChevronRight, Github, Linkedin } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

import CrunchImage from './assets/Crunch.jpg';
import MightyImage from './assets/Mighty.jpg';
import SaucyWrapImage from './assets/Saucy-wrap.jpg';
import SpicyWrapImage from './assets/Spicy-wrap.jpg';
import TenderImage from './assets/Tender.jpg';
import LogoImage from './assets/Logo.jpg';
import ExtraCheeseImage from './assets/Cheese.jpeg';
import BaconStripsImage from './assets/Jalapenos.jpg';
import SpicySauceImage from './assets/Sauce-Dip.png';
import OnionRingsImage from './assets/Mushrooms.jpg';
import FrenchFriesImage from './assets/Fries.jpg';

const burgers = [
    { name: 'Tender Burger', price: 1.00, image: TenderImage, description: 'Tender chicken with fresh lettuce, Melted Cheese, With the hint of your fav sauces! PRICES ARE NOT CORRECTLY MENTIONED HERE' },
    { name: 'Crunch Burger', price: 1.00, image: CrunchImage, description: 'Crispy chicken with fresh lettuce, Melted Cheese, With the hint of your fav sauces! PRICES ARE NOT CORRECTLY MENTIONED HERE' },
    { name: 'Mighty Burger', price: 1.00, image: MightyImage , description: 'Double Crispy Chicken Zinger with fresh lettuce, Melted Cheese, With the hint of your fav sauces! PRICES ARE NOT CORRECTLY MENTIONED HERE' },
    { name: 'Saucy Wrap', price: 1.00, image: SaucyWrapImage, description: 'Saucy the Bossy! PRICES ARE NOT CORRECTLY MENTIONED HERE' },
    { name: 'Spicy Wrap', price: 1.00, image: SpicyWrapImage, description: 'A fiery blend of spices and fresh ingredients for a spicy kick! PRICES ARE NOT CORRECTLY MENTIONED HERE' },
  ];
  
  const addons = [
    { name: 'Cheese', image: ExtraCheeseImage, description: 'Add delesious cheese to your meal.', price: 0.99 },
    { name: 'Jalapenos', image: BaconStripsImage, description: 'Spicy Jalapenos to enhance your burger.', price: 1.99 },
    { name: 'Dip Sauce', image: SpicySauceImage, description: 'Get a blast of flavours with our special sauce.', price: 0.99 },
    { name: 'Mashrooms', image: OnionRingsImage, description: 'Add mashrooms in your meal to get more flavours.', price: 1.49 },
    { name: 'French Fries', image: FrenchFriesImage, description: 'Golden and crispy French fries.', price: 1.29 },
  ];
  
  const sauces = [
    { name: 'Sucide Sauce', image: SpicySauceImage },
    { name: 'Chipotle', image: SpicySauceImage },
    { name: 'Smokey BBQ', image: SpicySauceImage },
    { name: 'Honey Mustard', image: SpicySauceImage },
    { name: 'Jalapeno Ranch', image: SpicySauceImage },
  ];

const BurgerCard = ({ name, price, image, description, onPrev, onNext }) => (
  <div className="card card-custom rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl">
    <img src={image} alt={name} className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} />
    <div className="card-body">
      <h3 className="card-title text-2xl font-bold mb-2">{name}</h3>
      <p className="card-text mb-3">{description}</p>
      <p className="card-text text-xl font-semibold mb-4">PKR: {price.toFixed(2)}</p>
      <div className="d-flex justify-content-between">
        <button onClick={onPrev} className="btn btn-outline-dark rounded-circle p-2 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-110">
          <ChevronLeft size={24} />
        </button>
        <button onClick={onNext} className="btn btn-outline-dark rounded-circle p-2 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-110">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  </div>
);

const AddOnCard = ({ name, image, description }) => (
  <div className="addon-card">
    <img src={image} alt={name} className="card-img-top" />
    <div className="card-body">
      <h3 className="card-title">{name}</h3>
      <p className="card-text">{description}</p>
    </div>
  </div>
);

const SauceCard = ({ name, image }) => (
  <div className="addon-card">
    <img src={image} alt={name} className="card-img-top" />
    <div className="card-body">
      <h3 className="card-title">{name}</h3>
    </div>
  </div>
);

const AboutSection = () => (
  <section className="about-section py-5">
    <div className="container text-center ab-about">
      <div className="membership-card ab-text">
        <h1>About</h1>
        <h2>A personal project by Abdullah Shahid</h2>
        <div className='ab-des'> <header>
        <div className="container ab-h1">
            <h1>Welcome to My Zingo Pakistan-Inspired Project</h1>
        </div>
    </header>

    <div class="container">
        <section>
            <h2>Purpose</h2>
            <p>This project was created solely for educational purposes to practice web development skills. All product images and logos used are sourced from Zingo Pakistan's Instagram account and are used here for learning and demonstration purposes only.</p>
        </section>

        <section>
            <h2>Disclaimer</h2>
            <ul>
                <li>This is a non-commercial, educational project.</li>
                <li>The information provided about products on this site may not be accurate or up-to-date.</li>
                <li>This site does not offer any actual products or services.</li>
                <li>All intellectual property rights belong to their respective owners.</li>
            </ul>
        </section>

        <section>
            <h2>Legal Notice</h2>
            <p>If you represent Zingo Pakistan and have concerns about the use of your brand elements in this educational project, please contact me at <a href="mailto:back2abdullah@gmail.com">back2abdullah@gmail.com</a>. I will promptly address any issues and remove content as requested.</p>
        </section>

        <section>
            <h2>About the Developer</h2>
            <p>I am a web development enthusiast working on improving my skills through hands-on projects. This site demonstrates my current abilities in <strong>[ HTML, CSS, JavaScript, React, etc.]</strong>.</p>
        </section>

        <div class="contact">
            <p>Thank you for visiting my project site!</p>
        </div>
    </div>

    </div>
      </div>
    </div>
  </section>
);

const App = () => {
  const [currentBurger, setCurrentBurger] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');

  const nextBurger = () => {
    setSliding(true);
    setSlideDirection('right');
    setTimeout(() => {
      setCurrentBurger((prev) => (prev + 1) % burgers.length);
      setSliding(false);
    }, 500);
  };

  const prevBurger = () => {
    setSliding(true);
    setSlideDirection('left');
    setTimeout(() => {
      setCurrentBurger((prev) => (prev - 1 + burgers.length) % burgers.length);
      setSliding(false);
    }, 500);
  };

  const selectBurger = (index) => {
    if (index !== currentBurger) {
      setSliding(true);
      setSlideDirection(index > currentBurger ? 'right' : 'left');
      setTimeout(() => {
        setCurrentBurger(index);
        setSliding(false);
      }, 500);
    }
  };

  useEffect(() => {
    // Add Bootstrap CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const getPrevBurgerIndex = () => (currentBurger - 1 + burgers.length) % burgers.length;
  const getNextBurgerIndex = () => (currentBurger + 1) % burgers.length;

  return (
    <div className="min-vh-100 d-flex flex-column">
      <nav className="navbar navbar-expand-lg navbar-custom border-none">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={LogoImage} alt="Burger Palace Logo" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {/* <a className="nav-link navbar-link" href="#" onClick={() => console.log('Home clicked')}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-link" href="./About.jsx" onClick={() => console.log('About clicked')}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-link" href="#" onClick={() => console.log('Contact clicked')}>Contact</a> */}
              </li>
              {/* <li className="nav-item">
                <a className="nav-link navbar-link" href="#" onClick={() => console.log('Developed By clicked')}>Developed By</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      <header className="text-center py-5 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border-none" style={{ background: 'linear-gradient(to right, #FFA500, #FF8C00)' }}>
        <h1 className="display-4 text-white-bold">Explore Zingo Menu Here</h1>
        <p className="lead text-white-bold">Discover our delicious selection of meals</p>
      </header>

      <nav className="navbar navbar-expand-lg navbar-custom border-none">
        <div className="container">
          <ul className="navbar-nav mx-auto">
            {burgers.map((burger, index) => (
              <li key={index} className="nav-item">
                <button
                  className={`nav-link nav-link-custom btn ${index === currentBurger ? 'active fw-bold' : ''}`}
                  onClick={() => selectBurger(index)}
                  style={{ color: index === currentBurger ? 'black' : 'white' }}
                >
                  {burger.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="card-carousel col-md-8 position-relative">
              <div className="side-card" style={{ opacity: sliding ? 0 : 0.5 }}>
                <BurgerCard {...burgers[getPrevBurgerIndex()]} />
              </div>
              <div className={`main-card-container ${sliding ? `slide-${slideDirection}` : ''}`}>
                <div className={`main-card ${sliding ? `slide-${slideDirection}` : ''}`}>
                  <BurgerCard
                    {...burgers[currentBurger]}
                    onNext={nextBurger}
                    onPrev={prevBurger}
                  />
                </div>
              </div>
              <div className="side-card" style={{ opacity: sliding ? 0 : 0.5 }}>
                <BurgerCard {...burgers[getNextBurgerIndex()]} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="addons-section py-5">
        <div className="container">
          <h2 className="text-center text-white-bold mb-4">Add Ons</h2>
          <div className="row justify-content-center">
            {addons.map((addon, index) => (
              <div key={index} className="col-md-2">
                <AddOnCard {...addon} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sauces-section py-5">
        <div className="container">
          <h2 className="text-center text-white-bold mb-4">Sauces</h2>
          <div className="row justify-content-center">
            {sauces.map((sauce, index) => (
              <div key={index} className="col-md-2">
                <SauceCard {...sauce} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />

      <footer className="text-center py-3 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border-none" style={{ background: 'linear-gradient(to right, #FFA500, #FF8C00)' }}>
        <div className="container">
          <p className="text-white-normal">&copy; 2024 Abdullah Shahid. All rights reserved.</p>
          <div className="mt-3">
            <a href="https://github.com/rabdullahshahid" className="text-white-normal me-3"><Github size={20} />My Github</a>
            <a href="https://www.linkedin.com/in/muhammad-abdullah-a59298204/" className="text-white-normal me-3"><Linkedin size={20} /> Muhammad Abdullah </a>
            <a href="https://www.instagram.com/r.abdullahshahid/" className="text-white-normal me-3"><Instagram size={20} /> @r.abdullahshahid</a>
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
