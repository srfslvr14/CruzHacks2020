import React from 'react';
import earth from './earth.gif';

function Header() {
    // uh
    return (
      <div>
        <div className = "Header">
          <h1>Slugs Save The Animals</h1>
          {/* <img src={earth} className="App-logo" alt="logo" /> */}
          <p>Our mission is to spread awareness<br/>
             of our impact on our neighbors.</p>
        </div>
        <div className = "Header_2">
            <p> header number 2 </p>
        </div>
      </div>
    );
}
export default Header