import React, { useEffect, useRef, useCallback } from 'react';

const MessengerAnimation = ({ text, isHovered }) => {
  const elRef = useRef(null);
  let codeletters = "&#*+%?£@§$";
  let message = 0;
  let current_length = 0;
  let fadeBuffer = false;

  const generateRandomString = useCallback((length) => {
    let random_text = '';
    while (random_text.length < length) {
      random_text += codeletters.charAt(Math.floor(Math.random() * codeletters.length));
    }
    return random_text;
  }, [codeletters]);

  const animateIn = useCallback(() => {
    if (current_length < text.length) {
      current_length = current_length + 2;
      if (current_length > text.length) {
        current_length = text.length;
      }
      let updatedMessage = generateRandomString(current_length);
      elRef.current.innerHTML = updatedMessage;
      setTimeout(animateIn, 20);
    } else {
      setTimeout(animateFadeBuffer, 20);
    }
  }, [text, generateRandomString]);

  const animateFadeBuffer = () => {
    if (fadeBuffer === false) {
      fadeBuffer = [];
      for (let i = 0; i < text.length; i++) {
        fadeBuffer.push({ c: (Math.floor(Math.random() * 12)) + 1, l: text.charAt(i) });
      }
    }

    let do_cycles = false;
    let updatedMessage = '';

    for (let i = 0; i < fadeBuffer.length; i++) {
      let fader = fadeBuffer[i];
      if (fader.c > 0) {
        do_cycles = true;
        fader.c--;
        updatedMessage += codeletters.charAt(Math.floor(Math.random() * codeletters.length));
      } else {
        updatedMessage += fader.l;
      }
    }

    elRef.current.innerHTML = updatedMessage;

    if (do_cycles === true) {
      setTimeout(animateFadeBuffer, 50);
    } else {
      setTimeout(cycleText, 2000);
    }
  };

  const cycleText = () => {
    message = message + 1;
    if (message >= 4) { // assuming 4 messages in your array
      message = 0;
    }

    current_length = 0;
    fadeBuffer = false;
    elRef.current.innerHTML = '';
    setTimeout(animateIn, 200);
  };

  useEffect(() => {
    if (isHovered) {
      animateIn();
    }
  }, [isHovered, text, animateIn]); // Include animateIn in the dependency array

  return (
    <div ref={elRef}></div>
  );
};

export default MessengerAnimation;
