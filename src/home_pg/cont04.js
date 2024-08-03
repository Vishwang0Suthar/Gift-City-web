import './cont04.css';
import React, { useState, useRef } from 'react';
import Polls from './polls'
// import Carousel from './carousel'


function Cont04() {

  const [poll] = useState([
    [`Do you own a laptop?`, `nuh`, `uh`, `yuh uh`, `lmeo`],
    [`Do you drive a car?`, `nuh`, `uh`, `yuh-uh`, `lmeo`],
    [`Is there a need for a garden?`, `nuh`, `uh`, `yuh uh`, `lmeo`],
    [`Do you rizz?`, `nuh`, `uh`, `yuh uh`, `lmeo`],
    [`Do you play Circket?`, `nuh`, `uh`, `yuh uh`, `lmeo`],
    [`Did bro cook?`, `nuh`, `uh`, `yuh uh`, `lmeo`],
  ]);

  return (
    <section className="cont04" id="polls">
      <p>Polls</p>

      <Polls polls={poll} />
    </section>
  )
}

export default Cont04