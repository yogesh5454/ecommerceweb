import React from 'react'
import { MdShoppingBasket } from "react-icons/md";

const Makeupproductfun = ({imageurl,itemname,price,onproductclick}) => {
  return (
    <div className='w-87 p-3 bg-white shadow-lg mb-3'>
    <img src={imageurl} alt={itemname} />
     <h1   className="font-semibold px-4 pt-4 cursor-pointer">{itemname}</h1>
            <div className="flex items-center justify-between px-4 mt-4 mb-2">
              <h2 className="font-semibold text-green-700">{price}</h2>
              <button onClick={onproductclick}  className="flex cursor-pointer text-green-700 border border-gray-300 hover:bg-green-700 hover:text-white py-2 items-center gap-3 rounded-r-3xl rounded-l-3xl px-5 font-semibold">
                <MdShoppingBasket />
                <h2>Cart</h2>
              </button>
            </div>
    </div>
  )
}

export default Makeupproductfun

