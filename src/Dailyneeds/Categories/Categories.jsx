import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      label: "Vegetables",
      items: "8",
      path: "/dailyneeds/vegetables",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F935%2FVegetable.jpg&w=1080&q=75",
    },
    {
      label: "Snacks",
      items: "6",
      path: "/dailyneeds/snacks",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F936%2FSnacks.jpg&w=1080&q=75",
    },
    {
      label: "Rice & Pulse",
      items: "4",
      path: "/dailyneeds/ricepulse",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F937%2FPulse%2526Rice.jpg&w=1080&q=75",
    },
    {
      label: "Meat",
      items: "3",
      path: "/dailyneeds/meat",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F938%2FMeat-demo.jpg&w=1080&q=75",
    },
    {
      label: "Fruits",
      items: "5",
      path: "/dailyneeds/fruits",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F939%2FFruits.jpg&w=1080&q=75",
    },
    {
      label: "Fish",
      items: "3",
      path: "/dailyneeds/fish",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F940%2FFish.jpg&w=1080&q=75",
    },
    {
      label: "Dairy & Eggs",
      items: "5",
      path: "/dailyneeds/dairyeggs",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F941%2FDairy.jpg&w=1080&q=75",
    },
    {
      label: "Bakery",
      items: "4",
      path: "/dailyneeds/bakery",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F942%2Fbakery.jpg&w=1080&q=75",
    },
  ];

  return (
    <div className="pt-20 px-12">
      <h1 className="text-2xl font-bold my-6">All Categories</h1>
      <div className="flex flex-wrap gap-7">
        {categories.map((category, index) => (
          <Link to={category.path} key={index}>
            <div
              className="group w-94 h-85 bg-cover bg-center rounded-xl shadow-lg relative flex flex-col justify-between p-8 cursor-pointer"
              style={{ backgroundImage: `url(${category.imageurl})` }}
            >
              <div className="bg-opacity-50 p-2 rounded">
                <h2 className="text-lg font-semibold">{category.label}</h2>
                <p className="text-gray-600">{category.items} Items</p>
              </div>
              <p className="hidden group-hover:block text-green-700 underline bg-opacity-60 rounded p-2 transition duration-200">
                View More
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;