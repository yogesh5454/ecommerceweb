import React from 'react'
import Makeuphead from './Makeuphead'
import Makeupoffers from './Makeupoffers'
import MakeupproductsNav from './Makeupproducts/Makeupproductsnav'
import Makeupproducts from './Makeupproducts/Makeupproducts'
const Makeup = () => {
  return (
    <div>
   <Makeuphead/>
   <Makeupoffers/>

<div className='flex '> <MakeupproductsNav/>
<Makeupproducts/></div>
  
    </div>
  )
}

export default Makeup
