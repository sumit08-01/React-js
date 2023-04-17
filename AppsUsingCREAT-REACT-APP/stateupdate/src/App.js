import logo from './logo.svg';
import './App.css';
import ShoppingCart from './ShoppingCart';

import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <>
        <ShoppingCart items={["One Plus - Mobile", " Fast Track-Watch"]} />
      </>
    );
  }
}

export default App;
