import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "Iphone", price: 8555, quantity: 0 },
      { id: 2, productName: "Sony Camera", price: 855, quantity: 0 },
      { id: 3, productName: "Samsung LED TV", price: 255, quantity: 0 },
      { id: 4, productName: "Ipad Pro", price: 6555, quantity: 0 },
      { id: 5, productName: "Xbox", price: 5255, quantity: 0 },
      { id: 6, productName: "Dell Monitor", price: 1250, quantity: 0 },
    ],
  };
  render() {
    return (
      <div className="container-fluid">
        <h4> Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product key={prod.id} product={prod}>
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
}
