import React from 'react';
import earth from './earth.gif';

function Header() {
    // uh
    return (
      <div>
        <div className = "Header">
          <img src={earth} className="App-logo" alt="logo" />
          <h1>
            placeholder
          </h1>
        </div>
        <div className = "Header_2">
            <p> header number 2 </p>
        </div>
      </div>
    );
}
export default Header