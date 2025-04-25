import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Pagedrop = () => {
  const [open, setOpen] = useState(false);

  const showDrop = () => {
    setOpen((prev) => !prev);
  };

  const handleOption = () => {
    setOpen(false);
  };

  const pageOptions = [
    "Flash Sale",
    "Manufacturers/Publishers",
    "Authors",
    "FAQ",
    "Terms and Conditions",
    "Customer Refund Policy",
    "Vendor Refund Policy",
  ];

  return (
    <div className="relative">
      <button
        onClick={showDrop}
        onMouseEnter={showDrop}
        className="flex gap-1 items-center "
      >
        Pages <FaChevronDown className="mt-1" />
      </button>

      {open && (
        <div className="absolute mt-2 w-64 bg-white border border-gray-200 rounded shadow-lg z-10">
          {pageOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOption(option)}
              className="items-center gap-2 w-full text-left px-4 py-2 hover:text-green-700"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pagedrop;
