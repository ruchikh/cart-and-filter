import React, { Component } from "react";
import { connect } from "react-redux";

import { removeFromCart } from "../actions/cartActions";

class Cart extends Component {
  state = {
    isShowing: false,
  }

  handleClick = () => {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  render() {
    const { cartItems, removeFromCart } = this.props,
          { isShowing } = this.state,
          total = cartItems.reduce((a, c) => a + c.price * c.count, 0)

    return (
      <div className="cart-container">
        <i className="fa fa-2x fa-shopping-cart" onClick = {this.handleClick}></i>
        {cartItems.length}
        {isShowing &&
          <div className="cart__items">
          <div>
            <ul className="cart-list">
              {cartItems && cartItems.map((item) => (
                <li key={item.id}>
                  <b>{item.title}</b>
                  <button
                    className="btn btn-danger btn-xs"
                    onClick={(e) => removeFromCart(cartItems, item)}
                  >
                    X
                  </button>
                  <br />
                  {item.count} X {item.price}
                </li>
              ))}
            </ul>
            <hr />
            {cartItems.length > 0 ?
              <div className="cart-checkout">
                <p>{`Total: ${total}`}</p>
                <button
                  onClick={() => alert("Successfully Checkout")}
                  className="btn btn-primary ml-5"
                >
                  Checkout
                </button>
              </div>
              :
              <p>Your cart have no items</p>
            }
          </div>
        </div>
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

export default connect(mapStateToProps, {removeFromCart})(Cart);