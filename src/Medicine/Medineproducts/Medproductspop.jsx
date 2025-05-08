import React from "react";
import { IoMdClose } from "react-icons/io";

const Medproductspop = ({ product, onClose,addToCart }) => {
  return (
    <div className="fixed inset-0 shadow-2xl  flex justify-center items-center z-50 ">
      <div className=" bg-gray-200 p-6 rounded-md w-full max-w-4xl relative flex">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
        >
          <IoMdClose />
        </button>
        <div className="w-full pt-10 px-5 items-center">
          <img src={product.imageurl} alt={product.itemname} />
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="text-3xl font-semibold py-6">{product.itemname}</h1>
          </div>
          <div>
            <div className="text-2xl text-green-700 font-bold mb-6">
              {" "}
              {product.price}
            </div>
            <button
              onClick={() => addToCart(product)}
              className="text-white bg-green-700 p-4 text-center px-15 cursor-pointer rounded-lg mb-6"
            >
              Add to Shopping cart
            </button>
          </div>
          <hr className="w-full text-gray-300 my-5" />
          <div className="">
            <p className="py-3 flex gap-3 items-center">
            <span> categories</span> 
              <span className="flex gap-2 flex-wrap">
                {" "}
                {product.categories.map((category) => (
                  <button
                    className="border border-gray-400 rounded-sm bg-gray-200 p-1 mx-1"
                    key={category}
                  >
                    {category}
                  </button>
                ))}
              </span>
            </p>
          </div>
          <p className="flex items-center gap-3 ">
            sellers{" "}
            <span className="text-green-700 underline">{product.sellers}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Medproductspop;
