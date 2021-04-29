import React, { Component } from "react";
import { connect } from "react-redux";

import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";

class Products extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { cartItems, products, addToCart } = this.props;
    
    return (
      <div className="row">
        {products && products.map((product) => {
          const { id, title, price, sku } = product;

          return (
            <div className="col-md-3 my-5" key={product.id}>
              <div className="thumbnail text-center">
                <a
                  href={`#${id}`}
                  onClick={(e) => addToCart(cartItems, product)}
                >
                  <img src={require(`./images/${sku}_1.jpg`)} alt={title} />
                  <p>{title}</p>
                </a>
                <b>{`Price: ${price} `}</b>
                <button
                  className="btn btn-primary"
                  onClick={(e) => addToCart(cartItems, product)}
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