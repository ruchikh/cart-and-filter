import React, { Component } from "react";
import { connect } from "react-redux";

class Basket extends Component {
  state = {
    isShowing: false,
  }

  handleClick = () => {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  render() {
    const { cartItems } = this.props;

    return (
      <div className="cart-container">
        <i className="fa fa-2x fa-shopping-cart" onClick = {this.handleClick}></i>
        {cartItems.length}
        {this.state.isShowing &&
          <div className="cart__items">
          <div>
            <ul style={{ marginLeft: -25 }}>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <b>{item.title}</b>
                  <button
                    className="btn btn-danger btn-xs"
                  >
                    X
                  </button>
                  <br />
                  {item.count} X {item.price}
                </li>
              ))}
            </ul>
            <div>
              Sum:
              {
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              }
            </div>
            <button
              onClick={() => alert("Successfully Checkout")}
              className="btn btn-primary ml-5"
            >
            Checkout
            </button>
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

export default connect(mapStateToProps)(Basket);