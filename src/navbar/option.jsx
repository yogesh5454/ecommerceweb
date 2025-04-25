import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";
import {
  GiAmpleDress,
  GiCakeSlice,
  GiBookshelf,
  GiMedicines,
  GiShoppingCart,
  GiLipstick,
  GiHandBag,
  GiTable,
  GiGears,
} from "react-icons/gi";

const Option = () => {
  const options = [
    { label: "Clothing", icon: <GiAmpleDress /> },
    { label: "Grocery", icon: <GiShoppingCart /> },
    { label: "Bakery", icon: <GiCakeSlice /> },
    { label: "Makeup", icon: <GiLipstick /> },
    { label: "Bags", icon: <GiHandBag /> },
    { label: "Furniture", icon: <GiTable /> },
    { label: "Daily Needs", icon: <GiGears /> },
    { label: "Books", icon: <GiBookshelf /> },
    { label: "Gadget", icon: <GiGears /> },
    { label: "Medicine", icon: <GiMedicines /> },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-52">
      <button
        onClick={toggleDropdown}
        
        className=" border border-white bg-white text-green-600 flex items-center justify-between p-2 shadow-sm px-4 rounded-sm gap-3"
      >
        <div className="flex items-center gap-2">
          {selected.icon}
          {selected.label}
        </div>
        <FaSortDown />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded shadow-md ">
          {options.map((option) => (
            <button
              key={option.label}
              onClick={() => handleOptionClick(option)}
              className="flex items-center gap-2 w-full text-left px-4 py-2 hover:text-green-700"
            >
              {option.icon}
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Option;
