import React, { Component } from "react";
import Product from "./Product";
import data  from "./Data";

export default class ProductsList extends Component {
  render() {
    return (
      <div>
        {data.map((item) => {
          return (
            <div>
              <Product
                key={item.id}
                text={item.title}
                src={item.imageUrl}
                price={item.price}
                size={item.size}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
