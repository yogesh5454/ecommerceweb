import React from "react";

import Option from "./option";
import Pagedrop from "./pagedrop";
import Join from "./join";

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
<Option/>

        </div>

        <div className="flex gap-10 ml-60 ">
          <div className="navbar flex gap-7 items-center">
            <a href="#shops">Shops</a>
            <a href="#offers">Offers</a>
            <a href="#contact">Contact</a>
          <Pagedrop/>
          </div>

          <div className="items-center flex">
         <Join/>
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
