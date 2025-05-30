import './About.css';
import FloatingScrollButtons from './ScrollToTop';

function About() {
  return (
    <>
      <div className="about-video-container">
<video className="about-bg-video" autoPlay loop muted playsInline>
  <source src={`${import.meta.env.BASE_URL}videos/about.mp4`} type="video/mp4" />

          Your browser does not support the video tag.
        </video>
      </div>

      <div className="about-us">
        <h1>About Us</h1>

        <h2>Welcome to HiPie – Where Flavor Meets Family</h2>
        <p>
          At <strong>HiPie</strong>, we believe that great food brings people together. 
          Nestled in the heart of <em>[City or Neighborhood]</em>, our restaurant is a place where 
          tradition meets taste, and every meal is made with passion, precision, and a pinch of love.
        </p>

        <h3>Our Story</h3>
        <p>
          Founded in 2006 by Minimum, <strong>HiPie</strong> began as a dream 
          to share authentic, homemade [Type of Cuisine] dishes with our community. 
          What started as a small family kitchen has grown into a beloved dining destination.
        </p>

        <h3>Our Philosophy</h3>
        <p>
          We pride ourselves on using the freshest ingredients, locally sourced whenever possible. 
          Our chefs craft each dish from scratch, combining traditional recipes with a modern twist 
          to deliver a memorable dining experience.
        </p>

        <h3>What We Offer</h3>
        <ul>
          <li>A diverse menu featuring dishes</li>
          <li>Vegetarian, vegan, and gluten-free options</li>
          <li>Cozy indoor seating and relaxing outdoor patio</li>
          <li>Friendly staff dedicated to top-notch service</li>
          <li>Catering and event hosting</li>
        </ul>

        <h3>Join Us</h3>
        <p>
          Come hungry, leave happy. At <strong>HiPie</strong>, you're not just a guest – 
          you're part of the family. We can’t wait to serve you.
        </p>
      </div>
            <FloatingScrollButtons />

    </>
  );
}

export default About;
