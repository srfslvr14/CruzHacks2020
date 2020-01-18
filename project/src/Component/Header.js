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

      <div class="position-absolute">
        <div class="btn-group" role="group" aria-label="buttons">
          <div>
          <a class="btn btn-outline-secondary btn-lg" href="https://media1.giphy.com/media/ejm8tkFonl8o8/giphy.gif"
          role="button">HOME</a>
          <a class="btn btn-outline-success btn-lg" href="https://media1.giphy.com/media/ejm8tkFonl8o8/giphy.gif"
          role="button">LAND</a>
          <a class="btn btn-outline-primary btn-lg" href="https://media1.giphy.com/media/ejm8tkFonl8o8/giphy.gif"
          role="button">SEA</a>
          <a class="btn btn-outline-info btn-lg" href="https://media1.giphy.com/media/ejm8tkFonl8o8/giphy.gif"
          role="button">SKY</a>
          <a class="btn btn-outline-danger btn-lg" href="https://media1.giphy.com/media/ejm8tkFonl8o8/giphy.gif"
          role="button">DONATE</a>
        </div>
        </div>
      </div>
      </div>
    );
}
export default Header