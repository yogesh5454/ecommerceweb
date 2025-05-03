import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { FaChair } from "react-icons/fa";
import { LuSofa } from "react-icons/lu";
import { MdTableBar } from "react-icons/md";

const Furproduct = ({ products = [
  { icon: <IoBedOutline size={30} />, proname: "Bed" },
  { icon: <FaChair size={30} />, proname: "Chair" },
  { icon: <LuSofa size={30} />, proname: "Sofa" },
  { icon: <MdTableBar size={30} />, proname: "Table" },
] }) => {
  return (
    <div className="flex flex-wrap w-60 pt-30 gap-5 p-5">
      {products.map((product, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-gray-50 hover:scale-105 transition-transform duration-200 cursor-pointer"
        >
          <div className="text-4xl text-gray-800">{product.icon}</div>
          <span className="mt-2 text-lg font-medium text-gray-800 capitalize">
            {product.proname}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Furproduct;