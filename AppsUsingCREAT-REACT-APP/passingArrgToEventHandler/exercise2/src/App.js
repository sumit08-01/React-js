import logo from './logo.svg';
import React, { Component } from 'react';
import ProductList from './ProductList';
class App extends Component {
  render() {
    let arr = ["JBL Earphone", "PoleStat BackPack", "One Pluse Nord 2", "Apple I-Phone 13", "Canon DSLR", "Dettol"];
    return (
      <>
        <ProductList product={arr} />
      </>
    );
  }
}
export default App;
