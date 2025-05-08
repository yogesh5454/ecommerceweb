import React from 'react'
import Baghead from './Baghead'
import Bagoffer from './Bagoffer'
import Bagproductsnav from './Bagproducts/Bagproductsnav'

const Bags = () => {
  return (
    <div>
     <Baghead/>
     <Bagoffer/>

     <div>
      <Bagproductsnav/>
     </div>
    </div>
  )
}

export default Bags
