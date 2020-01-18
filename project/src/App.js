import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Component } from 'react';
import Header from './Component/Header';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Dank memes
          </p>
          <a
            className="App-link"
            href="https://www.omfgdogs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Justice for the health of earth
          </a>
        </header>

      </div>
    );
  }
}
// hello world
export default App;
