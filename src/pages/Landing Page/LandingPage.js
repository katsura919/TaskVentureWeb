import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1 className="title">Welcome to the World of Riot Games</h1>
          <p className="subtitle">
            Explore our games, dive into the latest updates, and join a global community of players.
          </p>
          <a href="#explore" className="cta-button">
            Explore Now
          </a>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="featured-games">
        <h2 className="section-title">Featured Games</h2>
        <div className="games-list">
          <div className="game-card">
            <img
              src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9866119d2ba90703/5f7f85287e954b53811a3bc3/LOL-Header.jpg"
              alt="League of Legends"
            />
            <h3>League of Legends</h3>
          </div>
          <div className="game-card">
            <img
              src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt210d97f26537b7a8/5f7f8576a7b835538beaf138/VAL-Header.jpg"
              alt="Valorant"
            />
            <h3>Valorant</h3>
          </div>
          <div className="game-card">
            <img
              src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt55da4b9a47e4c0eb/5f7f857bc9a56d5385ff4e14/TFT-Header.jpg"
              alt="Teamfight Tactics"
            />
            <h3>Teamfight Tactics</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
