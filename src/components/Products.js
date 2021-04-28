import React, { Component } from "react";
import { connect } from "react-redux";

import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";

class Products extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { cartItems, products } = this.props;

    return (
      <div className="row">
        {products && products.map((product) => {
          return (
            <div className="col-md-3 my-5" key={product.id}>
              <div className="thumbnail text-center">
                <a
                  href={`#${product.id}`}
                  onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
                >
                  <img src={require(`./images/${product.sku}_1.jpg`)} alt={product.title} />
                  <p>{product.title}</p>
                </a>
                <b>{product.price}</b>
                <button
                  className="btn btn-primary"
                  onClick={(e) => this.props.addToCart(cartItems, product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.filteredItems.products,
    cartItems: state.cart.items,
  }
};

export default connect(mapStateToProps, {fetchProducts, addToCart })(Products);