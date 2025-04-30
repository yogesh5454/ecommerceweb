import React from "react";

const Head = () => {
  return (
    <div>
      <div className=" min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold p-5">Groceries Delivered in 90 Minute</h1>
        <p className="text-2xl p-3">
        Get your healthy foods & snacks delivered at your doorsteps all day everyday
        </p>
        <div className="flex ">
          <input
            type="text"
            placeholder="Search your products from here"
            className="  w-190 p-4 mt-4 bg-white rounded-l-2xl shadow-xl"
          />
          <button className="  w-40 flex bg-green-700 text-white  items-center justify-center gap-2 font-medium mt-4 rounded-r-2xl shadow-2xl">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Head;
