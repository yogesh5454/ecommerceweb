import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Furnitureproductpop = ({ product, onclose }) => {
  return (
    <div>
      <div className="fixed inset-0 shadow-2xl flex justify-center items-center z-50">
        <div className="bg-gray-200 p-6 shadow-lg rounded-md w-full max-w-4xl relative flex gap-4">
          <button
            onClick={onclose}
            className="absolute top-4 right-4  hover:text-black text-2xl"
          >
            <IoMdClose />
          </button>
          <div className="w-1/2">
            <img src={product.imageurl} alt={product.itemname} />
          </div>
          <div>
            <div className="flex items-center">
              <div>
                {" "}
                <h1 className="text-3xl font-semibold py-6">{product.itemname}</h1>
                <p className="text-gray-600 text-sm pb-6">{product.description}</p>
              </div>
              <div className="flex ">
                {product.stars} <FaStar />
              </div>
            </div>
            <div>
             
              {product.price} <br />
              <button>Add to Shopping cart</button>
            </div>
            <div>
              {product.categories.map((category)=>(
                <div key={category}>{category}</div>
              ))}
             
            </div>
            <p>sellers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Furnitureproductpop;
