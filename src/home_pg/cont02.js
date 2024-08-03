import './cont02.css';
import React, { useState, useRef } from 'react';
import Carousel from './carousel';
import iconR from '../images/right.png';

function Cont02() {

  const images = [
    "https://images.unsplash.com/photo-1702910682879-b5bea9c004f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2t5c2NyYXBlciUyMGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1520169178510-cc33b099a97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNreXNjcmFwZXJ8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1651332609816-1a253a45565a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjBjaXR5fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1714549132897-bfd89df21cee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXllJTIwb2YlMjBsb25kb258ZW58MHx8MHx8fDA%3D",
    require('../images/slid_5.jpeg'),
    "https://plus.unsplash.com/premium_photo-1661923486056-00dee453272d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNreXNjcmFwZXIlMjBhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D",

    // Add more image paths as needed
  ];
  const [width, setwidth] = useState(0);
  const carousel = useRef();
  const imageContainerRef = useRef(null);




  return (
    <section className="cont02" id="news">
      <p>News</p>
      <Carousel images={images} />
    </section>
  )
}

export default Cont02