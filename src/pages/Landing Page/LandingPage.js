import React from 'react';
import Button from './components/Button';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
            <h1 className="game-title">TaskVenture</h1>
            <p className="tagline">"Forge your destiny, one task at a time."</p>
            <p className="subtitle">
            Embark on your daily quest. Turn productivity into an adventure with TaskVenture.
            </p>
            <div className='btn-container'>
                <Button/>
            </div>
                
        
        </div>
       </section>


      {/* Featured Games Section */}
      <section className="featured-games">
        <h2 className="section-title">Featured Games</h2>
        <div className="games-list">
          <div className="game-card">
          
          </div>
          <div className="game-card">
              <h1>NIGGA</h1>
          </div>
          <div className="game-card">
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
