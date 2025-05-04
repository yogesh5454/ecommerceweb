import React, { useState } from 'react'
import Furnitureprofun from './Furnitureprofun'
import Furnitureproductpop from './Furnitureproductpop'
const Furnitureproduct = () => {
  const [selectproduct, setselectproduct] = useState(null)
  const products=[
    {
      id:"furniture-1",
      imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F434%2FAsh.png&w=3840&q=75",
      itemname:"Ash Double Bed",
      description:"This is a double bed made of solid ash wood, featuring a modern design and sturdy construction. It comes with a comfortable mattress and is perfect for any bedroom.",
      price: "$250",
      categories:["bed","Master bed "],
      seller:"Furniture World",
      stars:"4.5",

    },{
      id:"furniture-2",
      imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F435%2FHardwoods.png&w=3840&q=75",
   itemname:"Brown Hardwood Double Bed",
      description:"This is a double bed made of solid hardwood, featuring a classic design and sturdy construction. It comes with a comfortable mattress and is perfect for any bedroom.",
      price: "$300",
      categories:["bed","Master bed"],
      seller:"Furniture World",
      stars:"4.7",
    },{
      id:"furniture-3",
      imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F436%2FMahogany.png&w=3840&q=75",
      itemname:"Deluxe Mahagony Double Bed",
      description:"This is a deluxe double bed made of solid mahogany wood, featuring an elegant design and sturdy construction. It comes with a comfortable mattress and is perfect for any bedroom.",
      price: "$350",
      categories:["bed","Master bed"],
      seller:"Furniture World",
      stars:"4.8",


    },
    {
      id:"furniture-4",
    imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F437%2FOak.png&w=3840&q=75",
    itemname:"Supreme Oak Double Bed",
      description:"This is a supreme double bed made of solid oak wood, featuring a luxurious design and sturdy construction. It comes with a comfortable mattress and is perfect for any bedroom.",
      price:" $400",
      categories:["bed","Master bed"],
      seller:"Furniture World",
      stars:"4.9",
    },
    {
      id:"furniture-5",
    imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F438%2FPartex.png&w=3840&q=75",
    itemname:"Partex Coushoned Double Bed",
      description:"This is a coushoned double bed made of solid partex wood, featuring a modern design and sturdy construction. It comes with a comfortable mattress and is perfect for any bedroom.",
      price: "$450",
      categories:["bed","Master bed"],
      seller:"Furniture World",
      stars:"4.6",
    },
    {
      id:"furniture-6",
      imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F457%2FWhite.png&w=3840&q=75",
      itemname:"White Cozy Chair",
      description:"This is a cozy chair made of solid wood, featuring a modern design and comfortable seating. It is perfect for any living room or bedroom.",
      price: "$150",  
      categories:["chair","living room"],
      seller:"Furniture World",
    }
  ]

  const handleproductclick=(product)=>{
    setselectproduct(product)
  }

  const handleclosemodal=()=>{
    setselectproduct(null)
  }
  return (
    <div className='py-6 px-4'>
      <div className='flex gap-4 flex-wrap'>
        {products.map((product)=>(
          <div>
            <Furnitureprofun 
            key={product.id}
            imageurl={product.imageurl}
            itemname={product.itemname}
            price={product.price}
            onproductclick={()=>handleproductclick(product)}
            />
          </div>
        ))}
      </div>
   {selectproduct && (  <Furnitureproductpop
   product={selectproduct}
   onclose={handleclosemodal}
   />)
  
   }
    </div>
  )
}

export default Furnitureproduct
