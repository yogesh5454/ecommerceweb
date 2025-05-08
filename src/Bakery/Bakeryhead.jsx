import React from "react";
import { CiSearch } from "react-icons/ci";

const Bakeryhead = () => {
  return (
    <div className=" h-150  flex flex-col items-center justify-center bg-no-repeat bg-center bg-contain bg-[url('https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F905%2Fbakery.jpg&w=3840&q=75')]">
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


    </div>
  );
};

export default Bakeryhead;
