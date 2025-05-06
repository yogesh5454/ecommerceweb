import React from 'react'

const Gadgetproductsfun = ({imageurl,price,itemname}) => {
  return (
    <div className='w-80 bg-white p-3 shadow-lg'>
      <img src={imageurl} alt={itemname} />
      <h1>{price}</h1>
      <p>{itemname}</p>
    </div>
  )
}

export default Gadgetproductsfun
