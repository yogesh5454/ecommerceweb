import React from 'react'
import { MdAdd } from "react-icons/md";

const Medproductfun = ({imageurl,itemname,price,onProductClick}) => {
  return (
    <div className='w-71 bg-white shadow-2xl p-4 items-center'>
      <img src={imageurl} alt={itemname} />
      <p className='text-gray-600 py-4'>{itemname}</p>

      <div className='flex justify-between items-center'> <h1 className='font-semibold'>{price}</h1>
      <button onClick={onProductClick}
       
        className=" border border-gray-300 p-1 rounded-sm mr-3 mt-2 hover:bg-green-700 hover:text-white cursor-pointer"
      >
        <MdAdd />
      </button>
      </div>
     
    </div>
  )
}

export default Medproductfun
