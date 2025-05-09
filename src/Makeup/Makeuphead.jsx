import React from "react";
import { CiSearch } from "react-icons/ci";

const Makeuphead = () => {
  return (
    <div
      className="min-h-screen bg-gray-50 flex items-center justify-center bg-no-repeat bg-center bg-contain
      bg-[url('https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F906%2Fmakeup.png&w=3840&q=75')]"
    >
      <div className="text-center px-4">
        <h1 className="text-6xl  font-bold p-5 ">Branded & imported makeups</h1>
        <p className=" p-3 text-2xl text-gray-700">
          Easiest and cheapest way to get your branded & imported makeups
        </p>
        <div className="flex ">
          <input
            type="text"
            placeholder="Search your products from here"
            className="  w-180 p-4 mt-4 bg-white rounded-l-2xl shadow-xl"
          />
          <button className="  w-40 flex bg-green-700 text-white  items-center justify-center gap-2 font-medium mt-4 rounded-r-2xl shadow-2xl">
            <CiSearch className="size-6" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Makeuphead;
