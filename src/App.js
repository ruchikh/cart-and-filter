import React from 'react';
import './App.css';

import Products from "./components/Products";
import Basket from "./components/Basket";


class App extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="container-header">
          <h3>Shopping Cart</h3>
          <Basket />
        </div>
        <div className="row">
          <Products />
        </div>
      </div>
    );
  }
}

export default App;
