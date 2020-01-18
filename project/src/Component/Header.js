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

        <div className = "Buttons">
          <button type="button" className="btn btn-success btn-lg"
          data-toggle="button" aria-pressed="false">LAND</button>
          <button type="button" className="btn btn-primary btn-lg"
          data-toggle="button" aria-pressed="false">SEA</button>
          <button type="button" className="btn btn-info btn-lg"
          data-toggle="button" aria-pressed="false">SKY</button>
          <button type="button" className="btn btn-danger btn-lg"
          data-toggle="button" aria-pressed="false">DONATE</button>
        </div>
      </div>
    );
}
export default Header