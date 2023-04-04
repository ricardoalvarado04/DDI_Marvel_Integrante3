import React from 'react';
import './App.css';
import Menubars from './components/Menubars/Menubars';
import Sections from './components/Sections/Sections';
import Menusection from './components/Menusection/Menusection';

function App() {
  return (
    <div className="Container">
      <header className="App-header">
      <div className="menubars"><Menubars /></div>
      </header>
      <div className="sections"><Sections /><Menusection /></div>
    </div>
  );
}

export default App;
