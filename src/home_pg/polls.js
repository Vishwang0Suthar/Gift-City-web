import React, { useState, useEffect, useRef } from 'react';
import './polls.css';
import { motion, useAnimation } from 'framer-motion';
import audio from '../sounds/00click.mp3';

const Polls = ({ polls }) => {
  const imageContainerRef = useRef(null);
  const carousel = useRef();
  const [width, setWidth] = useState(0);

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
  };

  const handleMouseUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };

  const audio_click = new Audio(audio);
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

  const percentageToMove = 20;

  const controls = useAnimation();
  const moveCarousel = (direction) => {
    const currentX = controls?.getBoundingClientRect()?.x || 0;

    const newX =
      direction === 'right'
        ? currentX - (width * percentageToMove) / 100
        : currentX + (width * percentageToMove) / 100;

    controls?.start({
      x: newX,
    });
  };

  // Initialize states for selected options, one for each box
  const [selectedOptions, setSelectedOptions] = useState(Array(polls.length).fill(null));

  const optionSelected = (boxIndex, optionIndex) => {
    // Copy the existing selected options array
    const newSelectedOptions = [...selectedOptions];

    // Check if the clicked option is already selected
    if (newSelectedOptions[boxIndex] === optionIndex) {
      // If so, deselect it by setting the selected option to null
      newSelectedOptions[boxIndex] = null;
    } else {
      // Otherwise, update the selected option for the specific box
      newSelectedOptions[boxIndex] = optionIndex;
    }

    // Set the new state
    setSelectedOptions(newSelectedOptions);
  };

  useEffect(() => {
    controls.start({
      x: 0,
    });
  }, [controls]);

  const handleLeftClick = () => {
    controls.start({ x: controls.get('x') + percentageToMove });
  };

  const handleRightClick = () => {
    controls.start({ x: controls.get('x') - percentageToMove });
  };

  return (
    <motion.div
      ref={carousel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className="polls"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="polls-container"
        ref={imageContainerRef}
      >
        {polls.map((img, boxIndex) => (
          <motion.div
            key={boxIndex}
            whileTap={{ cursor: 'grabbing' }}
            onMouseDown={audio_click_play}
            onMouseLeave={audio_click_pause}
            className="box"
          >
            <header>{img[0]}</header>
            {img.slice(1, 5).map((item, optionIndex) => (
              <p
                key={optionIndex}
                onMouseDown={() => optionSelected(boxIndex, optionIndex)}
                className={optionIndex === selectedOptions[boxIndex] ? 'selectedoption' : 'option'}
                style={{
                  color: optionIndex === selectedOptions[boxIndex] ? 'aliceblue' : '#000'
                }}
              >
                {item}
              </p>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Polls;