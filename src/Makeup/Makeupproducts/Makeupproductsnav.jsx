import React from "react";

const Makeupproductsnav = () => {
  const categories = [
    "Face",
    "Eyes",
    "Lips",
    "Accessories",
    "Shaving Needs",
    "Oral Care",
    "Facial Care",
    "Deodorant",
    "Bath & Oil",
  ];
  return (
    <div className="w-1/4  bg-gradient-to-b from-purple-600 to-red-500 text-white  p-6 ">
      <ul className="space-y-4">
        {categories.map((category, index) => (
          <li key={index}>
            <a
              href="#"
              className="flex items-center p-3 rounded-lg hover:bg-white hover:text-black hover:bg-opacity-20"
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Makeupproductsnav;
