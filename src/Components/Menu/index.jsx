import React, { useState } from 'react';
import Console from '../Console';
import Button from './Button';

import './styles.css';

function Menu() {

  const [started, setStarted] = useState(false)

  function handleStartStop() {
    if(!started) {
      setStarted(true)

    }
    else {
      setStarted(false)
    }
  }

  return (
    <div className="menu-container">
      
      <div className="menu-top">
        <Button
          started={started}
          onClick={handleStartStop}
        />
      </div>

      <div className="menu-bottom">
        <Console/>  
      </div>
      
    </div>
  )
};

export default Menu;
