import React from "react";
import { CiSearch } from "react-icons/ci";

const Bakeryhead = () => {
  return (
    <div className=" h-150 bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold p-5">
        Get Your Bakery Items Delivered
      </h1>
      <p className="text-2xl p-3">
        Get your favorite bakery items baked and delivered to your doorsteps at
        any time
      </p>
      <div className="flex ">
        <input
          type="text"
          placeholder="Search your products from here"
          className="  w-190 p-4 mt-4 bg-white rounded-l-2xl shadow-xl"
        />
        <button className="  w-40 flex bg-green-700 text-white  items-center justify-center gap-2 font-medium mt-4 rounded-r-2xl shadow-2xl">
          <CiSearch className="size-6" />
          Search
        </button>
      </div>

      <div className="flex justify-between w-full max-w-7xl mx-auto mt-8"></div>
    </div>
  );
};

export default Bakeryhead;
