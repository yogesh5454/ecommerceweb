import React from "react";
import Head from "./Heading/head";
import Productnav from "./products/Productnav";
const Grocery = () => {
  return (
    <div>
      <Head />
      <div className="flex">
        <Productnav />
      </div>
    </div>
  );
};

export default Grocery;
