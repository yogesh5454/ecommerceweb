import React from "react";
import { FaBagShopping } from "react-icons/fa6";
import { IoWalletSharp } from "react-icons/io5";
import { BsFillWalletFill } from "react-icons/bs";

const Bagproductsnav = () => {
  return (
    <div className="flex-col p-8 space-y-6 w-50 mt-5 bg-white shadow-lg min-h-screen ">
      <a className="flex  items-center  gap-2" href="">
        <FaBagShopping /> Hand Bags
      </a>
      <a className="flex  items-center  gap-2" href="">
        <FaBagShopping /> Laptop Bags
      </a>
      <a className="flex  items-center  gap-2" href="">
        <FaBagShopping /> Shoulder Bags
      </a>
      <a className="flex  items-center  gap-2" href="">
        <BsFillWalletFill />
        Purse
      </a>
      <a className="flex  items-center  gap-2" href="">
        <IoWalletSharp />
        Wallet
      </a>
    </div>
  );
};

export default Bagproductsnav;
