import './cont02.css';
import React, { useState, useRef } from 'react';
import Carousel from './carousel';
import iconR from '../images/right.png';

function Cont02() {

  const images = [
    require('../images/slid_1.jpeg'),
    require('../images/slid_2.jpeg'),
    require('../images/slid_6.png'),
    require('../images/slid_3.jpeg'),
    require('../images/slid_4.jpeg'),
    require('../images/slid_5.jpeg'),
    // Add more image paths as needed
  ];
  const [width, setwidth] = useState(0);
  const carousel = useRef();
  const imageContainerRef = useRef(null);




  return (
    <div className="cont02" id="news">
      <p>News</p>
      <Carousel images={images} />
    </div>
  )
}

export default Cont02