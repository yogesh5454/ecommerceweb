import React from 'react'
import Furproduct from './Furnitureproducts/Furproductnav'
import Head from './Head'
const Furniture = () => {
  return (
    <div className='bg-gray-100 flex'>
      <div> <Furproduct/></div>
      <div><Head/></div>

    </div>
  )
}

export default Furniture
