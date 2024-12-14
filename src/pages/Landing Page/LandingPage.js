import React from 'react';
import Button from './components/Button';
import GooglePlay from './components/GooglePlay';
import Footer from './components/Footer';
import RatingsDisplay from './components/RatingDisplay';
import ImageSlider from './components/ImageSlider';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="game-title">TASKVENTURE</h1>
          <p className="subtitle">
            Embark on your daily quest. Turn productivity into an adventure with TaskVenture. Take on challenges, conquer tasks, and level up!
          </p>
          <div className="btn-container">
            <Button/>
          </div>
          <div className="btn-container">
            <GooglePlay/>
          </div>
        </div>
      </section>

      <ImageSlider/>
      <RatingsDisplay/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
