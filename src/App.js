import React, { lazy, Suspense, useEffect, useState } from 'react';
import './App.css';
import Nav from './home_pg/nav.js';

// Lazy load your components
const Mobileview = lazy(() => import('./home_pg/Mobileview.js'));
const Container01 = lazy(() => import('./home_pg/cont01.js'));
const Container02 = lazy(() => import('./home_pg/cont02.js'));
const Container03 = lazy(() => import('./home_pg/cont03.js'));
const Container04 = lazy(() => import('./home_pg/cont04.js'));
const ScrollContainer = lazy(() => import('./home_pg/contscrll.js'));
const Container05 = lazy(() => import('./home_pg/cont05.js'));

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  useEffect(() => {
    // Function to update the state based on screen width
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    // Set initial state
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 1000); // 3000ms = 3 seconds

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }
    , []);

  return (
    <div draggable="false" className="App">


      <Suspense fallback={
        <div className='loading-animation'>
          <div className='loading-content'>
            <div className='loader'></div>
            <p>Crafting your experience</p>

          </div>
        </div>}
      >
        {!videoLoaded ? (
          <div className="loading-animation">
            <div className="loading-content">
              <div className="loader"></div>
              <p>Crafting your experience  </p>
            </div>
          </div>
        ) : (
          <>
            {isMobile ? (
              <Mobileview />
            ) : (
              <>
                <Nav />
                <Container01 />
                <Container02 />
                <Container03 />
                <ScrollContainer />
                <Container04 />
                <Container05 />
              </>
            )}
          </>
        )}
      </Suspense>
    </div>
  );
}

export default App;
