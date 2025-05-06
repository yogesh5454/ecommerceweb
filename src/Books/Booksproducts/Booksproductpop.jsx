import React from "react";
import { IoMdClose } from "react-icons/io";
const Booksproductpop = ({ product, onClose,addToCart }) => {
  return (
    <div>
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
              <h3 className="flex items-center gap-3 pb-4">
                <span className="text-gray-600">By (author)</span> <span className="font-bold hover:text-green-700 cursor-pointer">{product.author}</span>
              </h3>
              <h1 className="text-3xl font-bold text-green-700 pb-4">{product.price}</h1>

              <div className="font-semibold mb-4">
                <span>Language:</span>
                {product.language.map((language) => (
                  <button className="bg-white border border-gray-500 rounded-sm p-3 mx-2">{language}</button>
                ))}
              </div>
              <hr className="w-full text-gray-400 " />

              <h2 className="my-6 font-semibold">
                Book type: <span className="bg-white border border-gray-500 rounded-sm p-3">{product.booktype}</span>
              </h2>

              <p className="text-sm text-gray-600">{product.description}</p>

              <button onClick={()=>addToCart(product)} className="bg-green-700 py-3 px-10 rounded-2xl text-white cursor-pointer my-6">
                Add to shopping cart{" "}
              </button>

              <div className="flex gap-8 items-center">
                <p>
                  <span className="font-bold">Categories</span> <br /> <span className="text-gray-500">{product.category}</span>
                </p>
                <p>
                  <span className="font-bold">Tags</span> <br />
                  <span className="text-gray-500">{product.Tags}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booksproductpop;
