import React from 'react';
import earth from './earth.gif';

function Header() {
    return (
      <div>
        <div class = "Header">
          <img src={earth} className="App-logo" alt="logo" />
          <h1>
            Captain planet
          </h1>
        </div>

        <div class = "Buttons">
          <a href='https://www.freecodecamp.org/'><button>Land</button></a>
          <a href='https://www.freecodecamp.org/'><button>Sea</button></a>
          <a href='https://www.freecodecamp.org/'><button>Sky</button></a>
        </div>
      </div>
    );
}
export default Header