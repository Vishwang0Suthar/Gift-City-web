import './cont03.css';
import Carousel from './carousel';
import iconR from '../images/right.png';
import slid1 from '../images/slid_7.jpg';
import slid2 from '../images/slid_8.jpeg';
import slid6 from '../images/slid_9.jpeg';
import slid3 from '../images/slid_10.jpeg';
import slid4 from '../images/slid_11.jpeg';
import slid5 from '../images/slid_12.jpg';

function Cont03() {
    const images = [
        slid1,
        slid2,
        slid6,
        slid3,
        slid4,
        slid5,
        // Add more image paths as needed
    ];



    return (
        <div className="cont03" id="events">
            <p>Events</p>
            <div className="Navi">
                {/* <img className="bgimg-1" draggable="false" src={iconR}  alt="bgimg" />
        <img className="bgimg-2" draggable="false" src={iconR}  alt="bgimg" /> */}
            </div>
            <Carousel images={images} />
        </div>
    )
}

export default Cont03