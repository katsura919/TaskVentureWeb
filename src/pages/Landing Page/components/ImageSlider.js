import React, { useRef } from 'react';
import './ImageSlider.css'; // Import custom CSS for styling

// Import images
import image1 from '../../../assets/slider/image1.png';
import image2 from '../../../assets/slider/image2.png';
import image3 from '../../../assets/slider/image3.png';
import image4 from '../../../assets/slider/image4.png';
import image5 from '../../../assets/slider/image5.png';
import image6 from '../../../assets/slider/image6.png';
import image7 from '../../../assets/slider/image7.png';

const ImageRowSlider = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7]; // Array of images
  const sliderRef = useRef(null); // Ref to the image slider container

  // Function to go to the next set of images
  const nextSlide = () => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth; // Get the slider container width
      const scrollAmount = sliderRef.current.scrollLeft + sliderWidth; // Calculate how much to scroll
      sliderRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' }); // Smooth scroll to next
    }
  };

  // Function to go to the previous set of images
  const prevSlide = () => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth; // Get the slider container width
      const scrollAmount = sliderRef.current.scrollLeft - sliderWidth; // Calculate how much to scroll
      sliderRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' }); // Smooth scroll to previous
    }
  };

  return (
    <div className='wrapper'>
       <h2 className="image-display__title">Preview</h2>
    <div className='image-slider-container'>
    <div className="image-row-slider">
      <div className="slider-container" ref={sliderRef}>
        {/* Image row container */}
        <div className="image-row-slider__container">
          {images.map((img, index) => (
            <div key={index} className="image-row-slider__image-card">
              <img src={img} alt={`Slide ${index}`} className="image-row-slider__image" />
            </div>
          ))}
        </div>
      </div>

      {/* Always-visible Navigation buttons */}
      <button className="prev-button" onClick={prevSlide}>❮</button>
      <button className="next-button" onClick={nextSlide}>❯</button>
    </div>
    </div>
    </div>
  );
};

export default ImageRowSlider;
