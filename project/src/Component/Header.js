import React from 'react';
import earth from './earth.gif';

function Header() {
    return (
        <div class = "Header">
          <img src={earth} className="App-logo" alt="logo" />
          <h1>
            Captain planet
          </h1>
        </div>
    );
}
export default Header