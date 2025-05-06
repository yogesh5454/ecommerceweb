import React from "react";
import Bakeryhead from "./Bakeryhead";
import Bakerylist from "./Bakerylist";
import Bakeryproducts from "./Bakeryitems/Bakeryproducts";
const Bakery = () => {
  return (
    <div>
      <Bakeryhead />
      <Bakerylist/>
      <Bakeryproducts/>
    </div>
  );
};

export default Bakery;
