import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const Bakeryproductspop = ({ product, onClose,addToCart }) => {
  return (
    <div>
      <div className="fixed inset-0 shadow-2xl  flex justify-center items-center z-50 ">
        <div className=" bg-gray-200 p-6 rounded-md w-full max-w-4xl relative flex">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
          >
            <IoMdClose />
          </button>
          <div className="flex gap-10">
          <div className="p-6">
            <img className="w-300 h-full" src={product.imageurl} alt={product.itemname} />
          </div>

          <div>
            <div className="flex items-center gap-5 py-6 ">
              <div >
                <h1 className="text-2xl font-bold">{product.itemname}</h1>
                <p className="text-gray-500 text-sm">{product.weight}</p>
              </div>

              <div className="flex items-center text-green-700 gap-2 text-lg ">
                {product.stars} <FaStar />
              </div>

            </div>

            <p className="text-gray-700 pb-6 text-sm">{product.description}</p>

            <h1 className="text-3xl text-green-700 font-bold">{product.price}</h1>

            <button onClick={()=>addToCart(product)} className="text-white bg-green-700 p-4 text-center px-15 cursor-pointer rounded-lg mb-6 my-6">
              Add to Shopping cart
            </button>
            <hr className="w-full text-gray-300" />

            <p className="mt-6 mb-3 flex gap-3 text-center">
              <span className="font-bold">Categories</span> <span className="border border-gray-400 py-1 px-2 rounded-sm">{product.categories}</span>
            </p>
            <p className="flex gap-3 items-center">
              <span className="font-bold">Seller</span> <span className="text-green-700 underline">{product.sellers}</span>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bakeryproductspop;
