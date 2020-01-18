import React from 'react';
import earth from './earth.gif';

function Header() {
    return (
      <div>
        <div className = "Header">
          <img src={earth} className="App-logo" alt="logo" />
          <h1>
            Captain planet
          </h1>
        </div>
      </div>
    );
}
export default Header