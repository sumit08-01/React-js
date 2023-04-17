import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Lottery from './Lottery';
class App extends Component {
  render() {
    return (
      <div>
        <Lottery />
        <Lottery name="Lottery" maxValue={10} numBalls={6} />
      </div >
    );
  }
}

export default App;
