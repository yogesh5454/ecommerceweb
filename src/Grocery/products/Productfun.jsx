import React from "react";
import { MdShoppingBasket } from "react-icons/md";

const Productfun = ({ id, imageurl, itemname, weight, price, onproductclick }) => {
  return (
    <div className="bg-white w-66 shadow-md">
      <div>
        <img className="w-full" src={imageurl} alt={itemname} />
      </div>
      <div className="items-center">
        <h1 className="font-semibold px-4">{itemname}</h1>
        <p className="px-4 text-gray-400">{weight}</p>
      </div>
      <div className="flex items-center justify-between px-4 mt-4 mb-2">
        <h2 className="font-semibold text-green-700">{price}</h2>
        <button  onClick={onproductclick} className="flex text-green-700 border border-gray-300 hover:bg-green-700 hover:text-white py-2 items-center gap-3 rounded-r-3xl rounded-l-3xl px-5 font-semibold">
          <MdShoppingBasket />
          <h2>Cart</h2>
        </button>
      </div>
    </div>
  );
};

export default Productfun;
