import React from "react";

const Vegproductfun = ({ imageurl, itemname, price,weight,onproductclick }) => {
  return (
    <div className="shadow-2xl w-79 p-6">
      <img src={imageurl} alt={itemname} />
      <h1 className="font-semibold">{price}</h1>
      <h3 onClick={onproductclick} className="text-gray-500 flex gap-2 cursor-pointer"><span>{itemname}</span> <span>{weight}</span></h3>
      <button onClick={onproductclick} className="bg-gray-200 py-1 text-center mt-3 cursor-pointer hover:bg-green-700 hover:text-white rounded-sm w-full">
        Add
      </button>
    </div>
  );
};

export default Vegproductfun;
