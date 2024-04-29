import React, { lazy, Suspense } from 'react';
import './App.css';
import Nav from './home_pg/nav.js';

// Lazy load your components
const Container01 = lazy(() => import('./home_pg/cont01.js'));
const Container02 = lazy(() => import('./home_pg/cont02.js'));
const Container03 = lazy(() => import('./home_pg/cont03.js'));
const Container04 = lazy(() => import('./home_pg/cont04.js'));
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
        <Container04 />
        <Container05 />
      </Suspense>
    </div>
  );
}

export default App;
