import React from 'react';
import Navbar from './components/Navbar';
import Places from './components/Places';
import Data from './components/Data';

function App() {
  const places  = Data.map(item => {
    return (
      <Places 
        {...item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      {places}
    </div>
  );
}

export default App;
