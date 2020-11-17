import React from "react";
import Product from "../componets/Product";
import data from "../data";

export default function HomeScreen(props) {
  return (
    <div className="row center">
      {data.products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
}
