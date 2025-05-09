import React from 'react'

const Categories = () => {
    const categories=[
       "Vegetables","Snacks","Rice & Pulse","Meat","Fruits","Fish","Dairy & eggs Bakery"
    ]
  return (
    <div className='pt-30'>
      <h1>All Categories</h1>

      <div>
        {categories.map(()=>{
            <h2>{categories}</h2>
        })}
      </div>
    </div>
  )
}

export default Categories
