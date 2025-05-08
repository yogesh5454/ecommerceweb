import React from "react";
import { CiSearch } from "react-icons/ci";

const Baghead = () => {
  return (
    <div
      className="min-h-screen bg-gray-50 flex items-center justify-center bg-no-repeat bg-center bg-contain
        bg-[url('https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F907%2Fbags.png&w=3840&q=75')]"
    >
      <div className="text-center px-4">
        <h1 className="text-4xl  font-bold p-5 ">Exclusive Branded bags</h1>
        <p className=" p-3 text-gray-700">
          Get your exclusive & branded bags delivered to you in no time
        </p>
        <div className="flex ">
          <input
            type="text"
            placeholder="Search your products from here"
            className="  w-150 p-4 mt-4 bg-white rounded-l-2xl shadow-xl"
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

export default Baghead;
