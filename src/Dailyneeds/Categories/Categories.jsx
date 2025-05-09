// import React from "react";

// const Categories = () => {
//   const categories = [
//     {
//       label: "Vegetables",
//       items: "8",
//       imageurl: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F935%2FVegetable.jpg&w=1080&q=75",
//     },
//     {
//       label: "Snacks",
//       items: "6",
//       imageurl: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F936%2FSnacks.jpg&w=1080&q=75",
//     },
//     {
//       label: "Rice & Pulse",
//       items: "4",
//       imageurl: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F937%2FPulse%2526Rice.jpg&w=1080&q=75",
//     },
//     {
//       label: "Meat",
//       items: "3",
//       imageurl: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F938%2FMeat-demo.jpg&w=1080&q=75",
//     },
//     {
//       label: "Fruits",
//       items: "5",
//       imageurl: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F939%2FFruits.jpg&w=1080&q=75",
//     },
//     {
//       label: "Fish",
//       items: "3",
//       imageurl: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F940%2FFish.jpg&w=1080&q=75",
//     },
//     {
//       label: "Dairy & Eggs",
//       items: "5",
//       imageurl: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F941%2FDairy.jpg&w=1080&q=75",
//     },
//     {
//       label: "Bakery",
//       items: "4",
//       imageurl: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F942%2Fbakery.jpg&w=1080&q=75",
//     },
//   ];

//   return (
//     <div className="pt-20 px-10">
//       <h1 className="text-2xl font-bold mb-8">All Categories</h1>
//       <div className="flex flex-wrap gap-6">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className="w-72 h-48  bg-cover bg-center rounded-xl shadow-lg relative flex flex-col justify-between p-4 cursor-pointer"
//             style={{ backgroundImage: `url(${category.imageurl})` }}
//           >
//             <div className=" bg-opacity-50 w-full p-2 rounded ">
//               <h2 className="text-lg font-semibold">{category.label}</h2>
//               <p className="text-sm">{category.items} items</p>
//             </div>

//             <div>
//                 <p className="w-full p-2  hover:text-green-700 hover:underline">View More</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;

import React from "react";

const Categories = () => {
  const categories = [
    {
      label: "Vegetables",
      items: "8",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F935%2FVegetable.jpg&w=1080&q=75",
    },
    {
      label: "Snacks",
      items: "6",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F936%2FSnacks.jpg&w=1080&q=75",
    },
    {
      label: "Rice & Pulse",
      items: "4",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F937%2FPulse%2526Rice.jpg&w=1080&q=75",
    },
    {
      label: "Meat",
      items: "3",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F938%2FMeat-demo.jpg&w=1080&q=75",
    },
    {
      label: "Fruits",
      items: "5",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F939%2FFruits.jpg&w=1080&q=75",
    },
    {
      label: "Fish",
      items: "3",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F940%2FFish.jpg&w=1080&q=75",
    },
    {
      label: "Dairy & Eggs",
      items: "5",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F941%2FDairy.jpg&w=1080&q=75",
    },
    {
      label: "Bakery",
      items: "4",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F942%2Fbakery.jpg&w=1080&q=75",
    },
  ];

  return (
    <div className="pt-20 px-10">
      <h1 className="text-2xl font-bold mb-8">All Categories</h1>
      <div className="flex flex-wrap gap-7">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group w-95 h-95  bg-cover bg-center rounded-xl shadow-lg relative flex flex-col justify-between p-8 cursor-pointer "
            style={{ backgroundImage: `url(${category.imageurl})` }}
          >
            <div className=" bg-opacity-50 p-2 rounded">
              <h2 className="text-lg font-semibold">{category.label}</h2>
              <p className="text-sm">{category.items} items</p>
            </div>

            <p className="hidden group-hover:block text-green-700 underline  bg-opacity-60 rounded p-2   transition duration-200">
              View More
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
