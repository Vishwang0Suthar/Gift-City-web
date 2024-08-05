import "./cont04.css";
import React, { useState, useRef } from "react";
import Polls from "./polls";
import BGvid from '../assets/good-bg.mp4'

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
      <div className="title"><p>Polls</p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" height={40} width={40} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
      </div>

      <Polls polls={poll} />
      {/* <video autoPlay loop muted playsInline>
        <source src={BGvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="moving-svg">
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,150 C 51.68588625493388,171.98856776556127 103.37177250986775,193.97713553112254 145,168 C 186.62822749013225,142.02286446887746 218.1987962154629,68.08002564107107 253,81 C 287.8012037845371,93.91997435892893 325.8330426282807,193.70276190459325 379,200 C 432.1669573717193,206.29723809540675 500.46903327141456,119.10892674055592 547,80 C 593.5309667285854,40.891073259444084 618.2908242860609,49.861531133183064 650,79 C 681.7091757139391,108.13846886681694 720.3676695843418,157.44494872671186 761,184 C 801.6323304156582,210.55505127328814 844.2384973765716,214.35867395996945 898,212 C 951.7615026234284,209.64132604003055 1016.6783409093725,201.12035543341025 1061,185 C 1105.3216590906275,168.87964456658975 1129.0481389859378,145.15990430638954 1173,133 C 1216.9518610140622,120.84009569361045 1281.129103146875,120.24002734103155 1329,125 C 1376.870896853125,129.75997265896845 1408.4354484265625,139.8799863294842 1440,150 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#000000" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
      </div>
    </section>
  );
}

export default Cont04;
