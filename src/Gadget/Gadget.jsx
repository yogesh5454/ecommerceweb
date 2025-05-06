import React from 'react'
import Gadgetnav from './Gadgetnav'
import Gadgethead from './Gadgethead'

const Gadget = () => {
  return (
    <div className='flex bg-gray-200'>
      <div><Gadgetnav/></div>
      <div><Gadgethead/></div>
    </div>
  )
}

export default Gadget
