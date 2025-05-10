import React from "react";
import Head from "./Heading/head";
import Productnav from "./products/Productnav";
import Products from "./products/GroceryProducts";
const Grocery = () => {
  return (
    <div>
      <Head />
      <div className="flex">
        <Productnav />
        <Products />
      </div>
    </div>
  );
};

export default Grocery;
