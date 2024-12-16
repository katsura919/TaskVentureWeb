import React, { useState } from "react";
import axios from "axios";
import "./RateModal.css";

const RateModal = ({ isOpen, onClose }) => {
   const apiBaseURL = `https://moodyblues-server.onrender.com`;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    feedback: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle rating change
  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${apiBaseURL}/api/rate`, formData);
      console.log("Response from server:", response.data);
      onClose(); // Close modal after submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  if (!isOpen) return null;

  return (
    <div className="rate-modal__overlay" onClick={onClose}>
      <div
        className="rate-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="rate-modal__close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="rate-modal__title">RATE US</h2>
        <form onSubmit={handleSubmit} className="rate-modal__form">
          {/* Name */}
          <div className="rate-modal__form-group">
            <label htmlFor="name" className="rate-modal__label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="rate-modal__input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="rate-modal__form-group">
            <label htmlFor="email" className="rate-modal__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="rate-modal__input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Rating */}
          <div className="rate-modal__form-group">
            <label className="rate-modal__label">Rating</label>
            <div className="rate-modal__rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`rate-modal__star ${
                    formData.rating >= star
                      ? "rate-modal__star--selected"
                      : ""
                  }`}
                  onClick={() => handleRatingChange(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* Feedback */}
          <div className="rate-modal__form-group">
            <label htmlFor="feedback" className="rate-modal__label">
              Comments (Optional)
            </label>
            <textarea
              id="feedback"
              name="feedback"
              rows="4"
              className="rate-modal__textarea"
              value={formData.feedback}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <button type="submit" className="rate-modal__submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RateModal;
