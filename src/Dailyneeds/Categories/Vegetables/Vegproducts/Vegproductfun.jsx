import React from 'react'

const Vegproductfun = ({ imageurl,itemname,price }) => {
  return (
    <div>
      <img src={imageurl} alt={itemname} />
      <h1>{price}</h1>
      <h3>{itemname}</h3>
    </div>
  )
}

export default Vegproductfun
