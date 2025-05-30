import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom'; 
import FloatingScrollButtons  from './ScrollToTop';

function Home() {
  return (
    <div className="home-container">
      <div className="live-offer-banner">
        🛍️ Flash Sale: Get 20% Off on All Meals Today Only!
      </div>

      <h1 className="hero">Welcome To HiPie!</h1>

      <div className="special-menu">Today's Specials</div>

      <div className="menu-preview">
        <Link to="/breakfast" className="menu-card">
<img src={`${import.meta.env.BASE_URL}images/breakfast.png`} alt="Breakfast" loading="lazy" />
          <h3>Breakfast</h3>
        </Link>
        <Link to="/lunch" className="menu-card">
<img src={`${import.meta.env.BASE_URL}images/lunch.png`} alt="Lunch" loading="lazy" />
          <h3>Lunch</h3>
        </Link>
        <Link to="/dinner" className="menu-card">
<img src={`${import.meta.env.BASE_URL}images/dinner.png`} alt="Dinner" loading="lazy" />
          <h3>Dinner</h3>
        </Link>
      </div>

      <div className="testimonials">
        <h2>What Our Customers Say</h2>
        <p>"HiPie meals are always fresh and delicious!" - A Happy Customer</p>
      </div>

      <div className="stats">
        <div><strong>500+</strong><br />Meals Served</div>
        <div><strong>200+</strong><br />Happy Customers</div>
        <div><strong>4.9★</strong><br />Average Rating</div>
      </div>

      <div className="about">
        <h2>About HiPie</h2>
        <p>HiPie is your go-to meal delivery service with fresh ingredients and great taste!</p>
      </div>

      <div className="subscribe">
        <h2>Subscribe for Updates</h2>
        <p>Get our latest deals and menu updates straight to your inbox.</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>

      <footer>© 2025 HiPie. All rights reserved.</footer>
      <FloatingScrollButtons />

    </div>
  );
}

export default Home;
