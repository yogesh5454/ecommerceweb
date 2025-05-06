import React from 'react'

const Gadgetnav = () => {
    const navlist=[
        {
            imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1716%2FGaming.jpg&w=3840&q=75",
            itemname:"Console"
        },{
            imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1747%2FLaptop-3.jpg&w=3840&q=75",
            itemname:"Laptop"
        },{
            imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1774%2Fmonitor-1.jpg&w=3840&q=75",
            itemname:"Monitor"
        },{
            imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2170%2Faccessories-1.jpg&w=3840&q=75",
            itemname:"Accessories"
        },{
            imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2206%2Fcamera.jpg&w=3840&q=75",
            itemname:"Camera"
        },{
            imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2214%2FHeadphone-4.jpg&w=3840&q=75",
            itemname:"Headphones"
        },{
            imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2221%2FMobile-3.jpg&w=3840&q=75",
            itemname:"Mobiles"
        },{
            imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2238%2FRouter-4.jpg&w=3840&q=75",
            itemname:"Router"
        },{
            imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2188%2FSmart-watch-6.jpg&w=3840&q=75",
            itemname:"Smartwatch"
        },{
            imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2187%2Fsound-box-2.jpg&w=3840&q=75",
            itemname:"Sound Box"
        }
    ]
  return (
    <div className="flex flex-wrap w-80 pt-30 gap-5 p-6 ">
    {navlist.map((list, index) => (
      <div
        key={index}
        className="flex flex-col w-30 items-center py-2  shadow-lg  rounded-lg bg-white hover:scale-105 transition-transform duration-200 cursor-pointer"
      >
       <img className='w-full' src={list.imageurl} alt={list.itemname} />
        <span className="mt-2 text-lg  text-gray-800 capitalize">
          {list.itemname}
        </span>
      </div>
    ))}
  </div>
  )
}

export default Gadgetnav
