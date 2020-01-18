import React from 'react';
import './App.css';

import { Component } from 'react';
import Header from './Component/Header';
import Body from './Component/Body';
// import elephant from './Component/photos/elephant.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Body />
        
        <img  src={require('./Component/photos/elephant.jpg')} />

      </div>
    );
  }
}

export default App;
