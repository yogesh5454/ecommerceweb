import React from 'react'
import Gadgetnav from './Gadgetnav'
import Gadgethead from './Gadgethead'
import Gadgetsproducts from './Gadgetproducts/Gadgetsproducts'

const Gadget = () => {
  return (
    <div className='flex bg-gray-200'>
      <div><Gadgetnav/></div>
      <div><Gadgethead/>
      <Gadgetsproducts/>
      </div>
    </div>
  )
}

export default Gadget
