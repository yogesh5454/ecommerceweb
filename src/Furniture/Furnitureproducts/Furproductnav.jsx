import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { FaChair } from "react-icons/fa";
import { LuSofa } from "react-icons/lu";
import { MdTableBar } from "react-icons/md";

const Furproduct = ({ products = [
  { icon: <IoBedOutline  />, proname: "Bed" },
  { icon: <FaChair  />, proname: "Chair" },
  { icon: <LuSofa  />, proname: "Sofa" },
  { icon: <MdTableBar  />, proname: "Table" },
] }) => {
  return (
    
    <div className="flex flex-wrap w-90 pt-30 gap-5 p-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="flex flex-col items-center py-6 px-12 border  rounded-lg bg-white hover:scale-105 transition-transform duration-200 cursor-pointer"
        >
          <div className="text-4xl ">{product.icon}</div>
          <span className="mt-2 text-lg  text-gray-800 capitalize">
            {product.proname}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Furproduct;