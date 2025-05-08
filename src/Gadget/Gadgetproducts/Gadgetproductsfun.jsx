import React from "react";

const Gadgetproductsfun = ({ product, addToCart,onProductClick }) => {
    const { imageurl, price, itemname } = product;

  return (
    <div  className="w-80 bg-white p-5 shadow-lg cursor-pointer">
      <div onClick={()=>onProductClick(product)}>    <img className="" src={imageurl} alt={itemname} />
      <h1 className="font-semibold py-3">{price}</h1>
      <p className="text-gray-500 text-sm">{itemname}</p></div>
  

      <button
        onClick={() => addToCart(product)}
        className="bg-gray-200 py-1 text-center mt-3 cursor-pointer hover:bg-green-700 hover:text-white rounded-sm w-full"
      >
        Add
      </button>
    </div>
  );
};

export default Gadgetproductsfun;
