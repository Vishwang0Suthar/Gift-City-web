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
      <div className="title"><p>Polls</p><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" id="poll"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"></path></svg></div>

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
