import React, { Component } from "react";
import HomePage from "./HomePage";
import { Link } from "react-router-dom";
import ProductsList from "./ProductsList";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <BrowserRouter>
            <ul>
              <li>
                <Link to="/home" exact component={HomePage}>
                  Home page
                </Link>
              </li>
              <li>
                <Link to="/products" exact component={ProductsList}>
                  Products
                </Link>
              </li>
            </ul>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
