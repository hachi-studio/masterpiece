import React from 'react';
import Gallery from './components/Gallery';
import Header from './components/Header';

function App() {
  return (
    <div className="mp-app">
      <Header />
      <div className="w">
        <Gallery />
      </div>
    </div>
  );
}

export default App;
