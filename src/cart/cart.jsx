import React from 'react'
import { BsFillCartCheckFill } from "react-icons/bs";

const Cart = () => {
  return (
  
        <button className=' text-white bg-green-700 fixed p-3 top-4 right-4 mt-100 rounded-sm'>
            <div className='flex gap-2 items-center'>
        <BsFillCartCheckFill />
        <p>0 Item</p>
        </div>
        <div>
            <p className='p-1 bg-white text-green-700 rounded-sm'>$0.00</p>
        </div>
        </button>
    

  )
}

export default Cart;
