import React from 'react'
import { IoMdClose } from "react-icons/io";
import { FaStar } from "react-icons/fa";
const Fishproductpop = ({product,onClose,addToCart}) => {
  return (
     <div className="fixed inset-0 shadow-2xl flex justify-center items-center z-50 ">
          <div className="bg-gray-300 p-6 rounded-md w-full max-w-4xl relative flex">
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
                <div className="flex gap-4">
                  <div>
                    {" "}
                    <h1 className="font-bold text-3xl pb-4">{product.itemname}</h1>
                    <h1 className="text-3xl font-bold text-green-700 pb-4">
                      {product.price}
                    </h1>
                  </div>
    
                  <div className="flex items-center text-green-700 gap-2 text-lg ">
                    {product.stars} <FaStar />
                  </div>
                </div>
    
                <hr className="w-full text-gray-400 " />
    
                <p className="text-sm text-gray-600">{product.description}</p>
    
                <button onClick={()=>addToCart(product)
                } className="bg-green-700 py-3 px-10 rounded-2xl text-white cursor-pointer my-6">
                  Add to shopping cart{" "}
                </button>
                <div>
                  <p className="flex gap-2 items-center">
                    <span className="font-bold">Categories</span>
                    <span className="flex">
                      {product.categories.map((categories, index) => (
                        <button
                          className="border rounded-sm bg-gray-200 p-1 mx-1"
                          key={index}
                        >
                          {categories}
                        </button>
                      ))}
                    </span>
                  </p>
                </div>
                <p className="flex gap-2 py-3">
                  <span className="font-bold">Seller</span> <br />
                  <span className="text-green-700 underline">
                    {product.sellers}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
  
  )
}

export default Fishproductpop
