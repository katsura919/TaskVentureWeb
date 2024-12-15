import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profileImage from '../../../assets/profile-user.png'
import './RatingDisplay.css';

const RatingsDisplay = () => {
  const apiBaseURL = `https://moodybluesserver.onrender.com`;
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await axios.get(`${apiBaseURL}/api/ratings`);
        setRatings(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching ratings:', error);
        setLoading(false);
      }
    };

    fetchRatings();
  }, []);

  if (loading) return <div className="ratings-display__loading">Loading...</div>;

  // Sort ratings by rating score in descending order and select the top 3
  const topRatings = ratings.sort((a, b) => b.rating - a.rating).slice(0, 3);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`ratings-display__star ${
            i < fullStars ? 'ratings-display__star--filled' : ''
          }`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="ratings-display__container">
      <h2 className="ratings-display__title">What Our Users Say</h2>
      <div className="ratings-display__cards">
        {topRatings.length === 0 ? (
          <p className="ratings-display__no-ratings">No ratings yet</p>
        ) : (
          topRatings.map((rating) => (
            <div key={rating.id} className="ratings-display__card">
              <div className="ratings-display__profile-picture">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="ratings-display__profile-picture"
                />
              </div>
              <div className="ratings-display__quote">
                “{rating.feedback.length > 100 
                    ? `${rating.feedback.slice(0, 100)}...` 
                    : rating.feedback}”
                </div>
              <h3 className="ratings-display__card-name">{rating.name}</h3>
              <div className="ratings-display__stars">{renderStars(rating.rating)}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RatingsDisplay;
