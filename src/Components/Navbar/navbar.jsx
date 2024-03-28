import React, { Component } from "react";
import "./navbar.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

export default class navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
          <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
          <li>Shop <hr/></li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>
        <div className="nav-logoin-cart">
          <button>Login</button>
          <img src={cart_icon} alt="cart-icon"/>
        </div>
      </div>
    );
  }
}
