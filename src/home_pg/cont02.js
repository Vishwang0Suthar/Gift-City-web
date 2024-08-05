import './cont02.css';
import React, { useState, useRef } from 'react';
import Carousel from './carousel';
import iconR from '../assets/right.png';

function Cont02() {

  const images = [
    "https://images.unsplash.com/photo-1702910682879-b5bea9c004f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2t5c2NyYXBlciUyMGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1520169178510-cc33b099a97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNreXNjcmFwZXJ8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1651332609816-1a253a45565a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjBjaXR5fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1714549132897-bfd89df21cee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXllJTIwb2YlMjBsb25kb258ZW58MHx8MHx8fDA%3D",
    require('../assets/slid_5.jpeg'),
    "https://plus.unsplash.com/premium_photo-1661923486056-00dee453272d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNreXNjcmFwZXIlMjBhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D",

    // Add more image paths as needed
  ];
  const [width, setwidth] = useState(0);
  const carousel = useRef();
  const imageContainerRef = useRef(null);




  return (
    <section className="cont02" id="news">
      <div className='title'><p>News</p><svg xmlns="http://www.w3.org/2000/svg" height={48} width={48} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
      </svg>
      </div>
      <Carousel images={images} />

    </section>
  )
}

export default Cont02