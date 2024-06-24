import React, { useState, useEffect } from 'react';
import './Hero.css';
import image1 from '../../images/img1.jpeg';  
import image2 from '../../images/img2.jpg';  
import image3 from '../../images/img3.jpg';  
// import image2 from '../../images/pic.jpg';
const banners = [
  { id: 1, image: image1, alt: 'Banner1' ,heading: "Heading1", text: "This is text for image1"},
  // { id: 2, image: image2, alt: 'Banner2' },
  { id: 2, image: image2, alt: 'Banner2',heading: "Heading2", text: "This is text for image2" },
  { id: 3, image: image3, alt: 'Banner3',heading: "Heading3",  text: "This is text for image3" },
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
      <div className="slide-content">
      <div className="hero-text">
        <h1>{banner.heading}</h1>
        <p>{banner.text}!</p>
      </div>
      <div className="hero-img">
        <img src={banner.image} alt={banner.alt} className="banner-image" />
      </div>
      </div>
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