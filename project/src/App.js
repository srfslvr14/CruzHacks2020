import React from 'react';
import './App.css';

import { Component } from 'react';
import Header from './Component/Header';
import Body from './Component/Body';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Body />

        <header className="App-header">
          
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
