import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import styles from "../../input.css";

export default class Home extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <div>
              <h1 className="bg-black text-yellow-300 cursor-pointer">
                This is home
              </h1>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
