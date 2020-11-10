import React, { useState } from 'react';
import './styles/App.css';
import content    from './content'
import Home       from './components/Home'
import NavBar     from './components/NavBar'
import Slider     from './components/Slider'
import Parallaxe  from './components/Parallaxe'

export default function App() {
  const [display, setDisplay] = useState("home");

  return (
    <div>
      <NavBar 
        display={display}
        setDisplay={setDisplay}
      />
      <Parallaxe />
      {
        display === "home"
          ? <Home
              display={display}
              setDisplay={setDisplay}
            />
          : <Slider content={content} />
      }
    </div>
  );
}
