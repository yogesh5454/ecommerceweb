import React from 'react'
import Medhead from './Medhead'
import Medoffers from './Medoffers'
import Medicineproductnav from './Medineproducts/Medicineproductnav'
import Medproducts from './Medineproducts/Medproducts'

const Medicine = () => {
  return (
    <div>
      <Medhead/>
      <Medoffers/>

      <div className='flex '>
        <Medicineproductnav/>
        <Medproducts/>
      </div>
    </div>
  )
}

export default Medicine
