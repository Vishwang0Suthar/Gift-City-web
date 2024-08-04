import React, { lazy, Suspense } from 'react';
import './App.css';
import Nav from './home_pg/nav.js';

// Lazy load your components
const Container01 = lazy(() => import('./home_pg/cont01.js'));
const Container02 = lazy(() => import('./home_pg/cont02.js'));
const Container03 = lazy(() => import('./home_pg/cont03.js'));
const Container04 = lazy(() => import('./home_pg/cont04.js'));
const ScrollContainer = lazy(() => import('./home_pg/contscrll.js'));
const Container05 = lazy(() => import('./home_pg/cont05.js'));

function App() {
  return (
    <div draggable="false" className="App">
      <Nav />

      {/* Use Suspense to handle the loading of lazy components */}
      <Suspense fallback={<div>Loading...</div>}>
        <Container01 />
        <Container02 />
        <Container03 />
        <ScrollContainer />
        <Container04 />

        <Container05 />
      </Suspense>
    </div>
  );
}

export default App;

// import React, { useEffect, useRef, lazy, Suspense } from 'react';
// import './App.css';
// import Nav from './home_pg/nav.js';

// // Lazy load your components
// const Container01 = lazy(() => import('./home_pg/cont01.js'));
// const Container02 = lazy(() => import('./home_pg/cont02.js'));
// const Container03 = lazy(() => import('./home_pg/cont03.js'));
// const Container04 = lazy(() => import('./home_pg/cont04.js'));
// const ScrollContainer = lazy(() => import('./home_pg/contscrll.js'));
// const Container05 = lazy(() => import('./home_pg/cont05.js'));

// function App() {
//   // Create an array to store refs for each section
//   const containerRefs = useRef([]);

//   useEffect(() => {
//     // Create an observer instance
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.1 });

//     // Observe each container
//     containerRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     // Cleanup on unmount
//     return () => {
//       containerRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   return (
//     <div draggable="false" className="App">
//       <Nav />
//       <Suspense fallback={<div>Loading...</div>}>
//         <div ref={(el) => (containerRefs.current[0] = el)} className="cont01">
//           <Container01 />
//         </div>
//         <div ref={(el) => (containerRefs.current[1] = el)} className="cont02">
//           <Container02 />
//         </div>
//         <div ref={(el) => (containerRefs.current[2] = el)} className="cont03">
//           <Container03 />
//         </div>
//         <div ref={(el) => (containerRefs.current[3] = el)} className="horizontal-scrll">
//           <ScrollContainer />
//         </div>
//         <div ref={(el) => (containerRefs.current[4] = el)} className="cont04">
//           <Container04 />
//         </div>
//         <div ref={(el) => (containerRefs.current[5] = el)} className="cont05">
//           <Container05 />
//         </div>
//       </Suspense>
//     </div>
//   );
// }

// export default App;
