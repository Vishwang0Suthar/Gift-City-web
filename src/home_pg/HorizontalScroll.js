import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import './HorizontalScroll.css';
import BGvid from '../assets/good-bg.mp4'
const HorizontalScroll = () => {
    return (
        <div className="example-container">
            <HorizontalScrollCarousel />

        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, -200 * (cards.length + 2)]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, 200 * (cards2.length + 2)]);

    return (
        <div ref={targetRef} className="carousel-container">
            {/* <img src='https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/1200px-Burj_Khalifa.jpg' /> */}

            <div className="carousel-inner">
                <p>Our Partners</p>
                <motion.div style={{ x: x1 }} className="carousel-track">
                    {cards.concat(cards).concat(cards).map((card, index) => ( // Duplicate the cards array
                        <Card card={card} key={index} />
                    ))}
                </motion.div>
                <motion.div style={{ x: x2 }} className="carousel-track">
                    {cards2.concat(cards2).concat(cards2).map((card2) => (
                        <Card2 card2={card2} key={card2.id} />
                    ))}
                </motion.div>
                {/* <img src='https://png.pngtree.com/thumb_back/fh260/background/20210915/pngtree-noise-texture-black-background-image_880568.jpg' className='img-bg' /> */}
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/ubFq-wV3Eic?start=5178&amp;end=5264" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                {/* <video src={BGvid} className='bg-vid' /> */}
                <video autoPlay loop muted playsInline>
                    <source src={BGvid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

const Card = ({ card }) => {
    return (
        <div className="card">
            <div
                style={{ backgroundImage: `url(${card.url})` }}
                className="card-background"
            ></div>
            <div className="card-content">
                {/* <p className="card-title">{card.title}</p> */}
            </div>
        </div>
    );
};

const Card2 = ({ card2 }) => {
    return (
        <div className="card2">
            <div
                style={{ backgroundImage: `url(${card2.url})` }}
                className="card2-background"
            ></div>
            <div className="card2-content">
                {/* <p className="card2-title">{card2.title}</p> */}
            </div>
        </div>
    );
};



export default HorizontalScroll;

const cards = [
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPBgPzHQm-GunlfCpmwoO8WSnsgX8A-oXPmMvxhilo_0Oib__lpmFpv_MG73vbINIy4o&usqp=CAUhttps://www.giftgujarat.in/_next/image?url=%2Fassets%2Fhome%2Fpartners%2FHSBC-Logo.webp&w=384&q=100', title: 'Title 1', id: 1 },
    { url: 'https://1000logos.net/wp-content/uploads/2021/05/Wipro-logo-768x432.png', title: 'Title 2', id: 2 },
    { url: 'https://www.giftgujarat.in/_next/image?url=%2Fassets%2Fhome%2Fpartners%2Fbrigade-logo_horizontal-2048px.webp&w=384&q=75', title: 'Title 3', id: 3 },
    { url: 'https://www.giftgujarat.in/_next/image?url=%2Fassets%2Fhome%2Fpartners%2Fbank_of_america.webp&w=384&q=75', title: 'Title 4', id: 4 },
    { url: 'https://pngimg.com/uploads/google/google_PNG102344.png', title: 'Title 5', id: 5 },
    { url: 'https://i.pinimg.com/736x/76/ec/9f/76ec9f40b2b823ad33b21e815593e47f.jpg', title: 'Title 6', id: 6 },
    { url: 'https://www.indiantypefoundry.com/assets/Slider/CustomFontJumbotron/Leela-Slides-06.png', title: 'Title 7', id: 7 },
];

const cards2 = [
    { url: 'https://redis.io/wp-content/uploads/2021/08/redis-social-1200x628-1.jpg', title: 'Title 1', id: 1 },

    { url: 'https://dr.savee-cdn.com/things/6/4/373c60e29e1e3ec26f85da.webp', title: 'Title 2', id: 2 },
    { url: 'https://kreafolk.com/cdn/shop/articles/ibm-logo-design-history-and-evolution-kreafolk_f6963bf2-5011-41cd-a198-3b9b4dcff48d.jpg?v=1717725060&width=2048', title: 'Title 3', id: 3 },
    { url: 'https://dr.savee-cdn.com/things/6/1/6450c7607ff5fc7ad3945e.webp', title: 'Title 4', id: 4 },
    { url: 'https://dr.savee-cdn.com/things/6/5/d8c72466849a14055f9a0d.webp', title: 'Title 5', id: 5 },
    { url: 'https://static.vecteezy.com/system/resources/previews/020/927/449/original/samsung-brand-logo-phone-symbol-name-white-design-south-korean-mobile-illustration-with-black-background-free-vector.jpg', title: 'Title 6', id: 6 },
    { url: 'https://www.logoai.com/uploads/articles/2024/03/05/17096195246566834.jpg', title: 'Title 7', id: 7 },
];
