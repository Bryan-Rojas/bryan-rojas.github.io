import React from 'react';
import './App.css';
import Selfie from './components/Image'
import Description from './components/Description'
import Buttons from './components/ResumeButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Selfie/>
        <Description/>
        <Buttons/>
      </header>
    </div>
  );
}

export default App;
