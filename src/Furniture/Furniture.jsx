import React from 'react'
import Furproduct from './Furnitureproducts/Furproductnav'
import Head from './Head'
import Furnitureproduct from './Furnitureproducts/Furnitureproduct'
const Furniture = () => {
  return (
    <div className='bg-gray-100 flex min-h-screen '>
      <div> <Furproduct/></div>
      <div><Head/>
      <Furnitureproduct/>
      </div>

    </div>
  )
}

export default Furniture
