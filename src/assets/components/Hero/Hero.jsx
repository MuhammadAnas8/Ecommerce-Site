import React, { useState, useEffect } from 'react';
import './Hero.css';
import image1 from '../../images/brand.png'
const banners = [
  { id: 1, image: 'https://via.placeholder.com/800x400?text=Banner+1', alt: 'Banner 1' },
  { id: 2, image: 'https://via.placeholder.com/800x400?text=Banner+2', alt: 'Banner 2' },
  { id: 3, image: 'https://via.placeholder.com/800x400?text=Banner+3', alt: 'Banner 3' }
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="hero">
      <div className="slider">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`slide ${index === activeSlide ? 'active' : ''}`}
          >
            <img src={banner.image} alt={banner.alt} className="banner-image" />
          </div>
        ))}
      </div>
      <div className="dots">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
