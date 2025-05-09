import React from "react";
import { IoMdClose } from "react-icons/io";

const Bagproductpop = ({ product, onClose,addToCart }) => {
  return (
    <div className="fixed inset-0 shadow-2xl flex justify-center items-center z-50 ">
      <div className="bg-gray-100 p-6 rounded-md w-full max-w-4xl relative flex">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
        >
          <IoMdClose />
        </button>
        <div className="flex gap-10 my-7 mx-4">
          <div className="bg-gray-400 p-8  ">
            <img
              className="w-300"
              src={product.imageurl}
              alt={product.itemname}
            />
          </div>

          <div>
            <h1 className="font-bold text-3xl pb-4">{product.itemname}</h1>

            <h1 className="text-3xl font-bold text-green-700 pb-4">
              {product.price}
            </h1>

            <hr className="w-full text-gray-400 " />

            <p className="text-sm pt-4 text-gray-600">{product.description}</p>

            <button onClick={()=>addToCart(product)} className="bg-green-700 py-3 px-10 rounded-2xl text-white cursor-pointer my-6">
              Add to shopping cart{" "}
            </button>

           
              <p className="flex gap-3">
                <span className="font-bold">Categories</span> 
                <span className="border border-gray-400 py-1 px-2 rounded-sm">{product.categories}</span>
              </p>
              <p className="flex gap-3 mt-4">
                <span className="font-bold">Sellers</span> 
                <span className="text-green-700 underline">{product.sellers}</span>
              </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bagproductpop;
