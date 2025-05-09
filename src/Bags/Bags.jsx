import React from 'react'
import Baghead from './Baghead'
import Bagoffer from './Bagoffer'
import Bagproductsnav from './Bagproducts/Bagproductsnav'
import Bagproducts from './Bagproducts/Bagproducts'

const Bags = () => {
  return (
    <div>
     <Baghead/>
     <Bagoffer/>

     <div className='flex'>
      <Bagproductsnav/>
      <Bagproducts/>
     </div>
    </div>
  )
}

export default Bags
