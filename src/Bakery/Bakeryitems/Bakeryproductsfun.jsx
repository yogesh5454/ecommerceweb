import React from "react";
import { MdAdd } from "react-icons/md";

const Bakeryproductsfun = ({
  id,
  itemname,
  imageurl,
  price,
  onproductclick,
}) => {
  return (
    <div onClick={onproductclick } className="w-66 p-3 bg-white shadow-lg rounded-sm transition-transform duration-200 hover:scale-105 cursor-pointer">
      <button
        onClick={onproductclick}
        className="ml-25 border border-gray-300 p-1 rounded-sm mr-3 mt-2 hover:bg-green-700 hover:text-white cursor-pointer"
      >
        <MdAdd />
      </button>

      <div className="items-center">
        <img src={imageurl} alt={itemname} />
        <h2 className="px-4 font-semibold">{price}</h2>
        <p className="text-gray-500 px-4 py-4">{itemname}</p>
      </div>
    </div>
  );
};

export default Bakeryproductsfun;
