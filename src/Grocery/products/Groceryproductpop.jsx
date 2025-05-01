import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Groceryproductpop = ({ product, onclose,addToCart }) => {
    if (!product) return null;
  return (
    <div className="fixed inset-0 shadow-2xl flex justify-center items-center z-50">
      <div className="bg-gray-300 p-6 rounded-md w-full max-w-4xl relative flex gap-4">
        <button
          onClick={onclose}
          className="absolute top-4 right-4  hover:text-black text-2xl"
        >
          <IoMdClose />
        </button>
        <div className="flex gap-4">
          <div className="w-1/2 p-5">
            <img className="" src={product.imageurl} alt={product.itemname} />
          </div>
          <div>
            <div className="flex items-center gap-5">
              <div>
                <h2 className="font-bold text-2xl">{product.itemname}</h2>
                <p>{product.weight}</p>
              </div>
              <p className="flex gap-2 p-2 bg-green-700 text-white rounded-2xl items-center px-3">
                {product.star} <FaStar />
              </p>
            </div>

            <div>
              <p className="mt-4">{product.description}</p>
              <h1>{product.price}</h1>
            </div>
            <button onClick={()=>addToCart(product)} className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md">
              Add to shopping cart
            </button>
            <hr className="w-full text-black my-4" />

            <div>
              <p>
                categories{" "}
                <span>
                  {product.Categories.map((category, index) => (
                    <button
                      className="border rounded-sm bg-gray-200 p-1 mx-1"
                      key={index}
                    >
                      {category}
                    </button>
                  ))}
                </span>
              </p>
            </div>
            <div className="flex gap-3">
              <p>
                Sellers{" "}
                <span className="text-green-700 underline">
                  {product.seller}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groceryproductpop;
