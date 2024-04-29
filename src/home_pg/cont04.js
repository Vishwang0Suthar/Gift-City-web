import './cont04.css';
import React, { useState, useRef } from 'react';
import iconR from '../images/right.png';
import Polls from './polls'
// import Carousel from './carousel'


function Cont04() {

  const [poll] = useState([
    [`Do you own a laptop?`, `nuh`, `uh`, `yuh uh`, `lmeo`],
    [`Do you drive a car?`, `nuh`, `uh`, `yuh-uh`, `lmeo`],
    [`Do you edge?`, `nuh`, `uh`, `yuh uh`, `lmeo`],
    [`Do you rizz?`, `nuh`, `uh`, `yuh uh`, `lmeo`],
    [`Do you jizz?`, `nuh`, `uh`, `yuh uh`, `lmeo`],
    [`Do you rizz?`, `nuh`, `uh`, `yuh uh`, `lmeo`],
  ]);

  return (
    <div className="cont04" id="polls">
      <p>Polls</p>
      <div className="Navi">
        <img className="bgimg-1" draggable="false" src={iconR} alt="bgimg" />
        <img className="bgimg-2" draggable="false" src={iconR} alt="bgimg" />
      </div>
      <Polls polls={poll} />
    </div>
  )
}

export default Cont04