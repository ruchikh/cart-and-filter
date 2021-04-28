import React from "react";
import "./App.css";

import Products from "./components/Products";
import Cart from "./components/Cart";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="container-header">
          <h3>Shopping Cart</h3>
          <Cart />
        </div>
        <div className="row">
          <Products />
        </div>
      </div>
    );
  }
}

export default App;
