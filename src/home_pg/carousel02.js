import React, { useState, useEffect, useRef } from 'react';
import './carousel.css';
import { motion } from 'framer-motion';
import audio from '../sounds/00click.mp3';
const Carousel = ({ images }) => {
  const imageContainerRef = useRef(null);
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const audio_click = new Audio(audio);
  

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);

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
    const items = document.getElementsByClassName("item");
    for (const image of items) {
      console.log(percentage);
        image.style.objectPosition = `${percentage+100}% 50%`;
    }
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
  const obj = {
    objectPosition: `${{percentage}} 50%`,
  };
  // const elements = document.querySelectorAll(".item");
  // function hue() {
  //   elements.forEach((element) => {
  //     element.style.setProperty("--percent", percentage);
  //     console.log(percentage)
  //   });
  // }

  

  return (
    <motion.div
      ref={carousel}
      id="carousel"
      data-mouse-down-at="0"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      data-prev-percentage="0"
      className="carousel02"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="image-container02"
        id="image-container02"
        ref={imageContainerRef}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`item_2`}
            whileTap={{ cursor: 'grabbing' }}
            onMouseDown={audio_click_play}
            onMouseLeave={audio_click_pause}
            style={{ objectPosition: `${percentage + 100}% 50%` }}
          >
            <img src={image} style={obj} alt="imgs" />
            <h1>Gujarat’s GIFT City to get its first ‘twisted’ building...</h1>
            <p>
              The construction of the very first ‘twisted’ building in Gujarat’s GIFT City has been approved and will be built at a cost of Rs 700 crore
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

// export default Carousel;
