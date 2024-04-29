import React, { useState, useEffect, useRef } from 'react';
import './carousel.css';
import { motion } from 'framer-motion';
import audio from '../sounds/00click.mp3';
import iconR from '../images/right.png';

const Carousel = ({ images }) => {
  const imageContainerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const audio_click = new Audio(audio);

  useEffect(() => {
    if (imageContainerRef.current) {
      setWidth(imageContainerRef.current.scrollWidth - imageContainerRef.current.offsetWidth);
    }
  }, []);

  const handleMouseDown = (e) => {
    setMouseDownAt(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const deltaPercentage = (mouseDelta / maxDelta) * 100;
    const nextPercentage = prevPercentage + deltaPercentage;

    setPercentage(Math.min(Math.max(nextPercentage, -100), 0));
  };

  const handleMouseUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };

  const audio_click_play = () => {
    audio_click.currentTime = 0.33;
    audio_click.play();
    audio_click.volume = 0.15;
  };

  const audio_click_pause = () => {
    if (audio_click.currentTime > 0.8) {
      audio_click.pause();
      audio_click.currentTime = 0;
    }
  };

  const percentageToMove = 50; // Adjust as needed

  const prevSlide = () => {
    setPercentage(Math.max(percentage - percentageToMove, -100));
  };

  const nextSlide = () => {
    setPercentage(Math.min(percentage + percentageToMove, 0));
  };

  return (
    <div>
      <div className="Navi">
        <img className="bgimg-1" onMouseDown={audio_click_play}
          onMouseLeave={audio_click_pause} draggable="false" onClick={prevSlide} src={iconR} alt="bgimg" />
        <img className="bgimg-2" onMouseDown={audio_click_play}
          onMouseLeave={audio_click_pause} draggable="false" onClick={nextSlide} src={iconR} alt="bgimg" />
      </div>
      <div
        id="carousel"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="carousel"
      >
        <div
          className="image-container"
          ref={imageContainerRef}
          style={{
            width: "100%",
            display: "flex",
            transform: `translateX(${percentage}%)`,
            transition: "transform 0.5s ease-in-out"
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`item`}
              onMouseDown={audio_click_play}
              onMouseLeave={audio_click_pause}
            >
              <img src={image} alt="imgs" />
              <h1>Gujarat’s GIFT City to get its first ‘twisted’ building...</h1>
              <p>
                The construction of the very first ‘twisted’ building in Gujarat’s GIFT City has been approved and will be built at a cost of Rs 700 crore
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
