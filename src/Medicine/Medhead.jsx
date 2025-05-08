


import React from "react";

const Medhead = () => {
  return (
    <div className="min-h-screen bg-[#f9feff] flex items-center justify-center bg-no-repeat bg-center bg-contain
        bg-[url('https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2294%2FUntitled.png&w=3840&q=75')]">
      <div className="text-center px-4">
        <h1 className="text-4xl  font-bold p-5 ">
          Medicine Delivered in 90 Minutes
        </h1>
        <p className=" p-3 text-gray-700">
          Get your medicine delivered at your doorsteps all day everyday
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center mt-4">
          <input
            type="text"
            placeholder="Search your products from here"
            className="w-80 sm:w-96 p-4 bg-white rounded-l-2xl shadow-xl outline-none"
          />
          <button className="w-40 bg-green-700 text-white py-4 rounded-r-2xl shadow-2xl mt-2 sm:mt-0">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Medhead;

