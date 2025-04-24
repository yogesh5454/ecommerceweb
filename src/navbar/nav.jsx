import React from "react";
import { GiAmpleDress } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <div className="flex py-5 bg-gray-50  w-full fixed ">
        <div className=" ml-8  flex w-1/2 gap-7 items-center">
          <img
            className="w-35 "
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=3840&q=75"
            alt=""
          />

          <button className="border-white bg-white text-green-600 flex items-center gap-2 p-2 shadow-sm px-4">
            <GiAmpleDress />
            Clothing <FaSortDown />
          </button>
        </div>

        <div className="flex gap-10 ml-60 ">
          <div className="navbar flex gap-7 items-center">
            <a href="#shops">Shops</a>
            <a href="#offers">Offers</a>
            <a href="#contact">Contact</a>
            <a className="flex gap-1 items-center" href="pages">
              Pages <FaChevronDown className="pt-1"/>
            </a>
          </div>

          <div className="items-center flex">
            <button className="text-white bg-green-700 p-2 mr-4 rounded-md w-15">
              Join
            </button>
            <button className="text-white bg-green-700 p-2 rounded-md w-40">
              Become a Seller
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
