import React from 'react';

import './styles.css';

function Header() {
  return (
    <div className="header-container">

      <div className="header-wrapper">

        <div className="header-left">
          <span className="header-title">Facens Rockets</span>
          <span className="header-description">Telemetry v2.1.0</span>
        </div>
        <div className="header-right">
          <img src="assets/logo-rockets.png" className="logo-facens" />
        </div>
        
      </div>

    </div>
  );
};

export default Header;
