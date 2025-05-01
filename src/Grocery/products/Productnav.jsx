import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { IoFish } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";
import { FaDog } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { TbMilk } from "react-icons/tb";
import { LuCookingPot } from "react-icons/lu";
import { MdFreeBreakfast } from "react-icons/md";
import { RiDrinksFill } from "react-icons/ri";
import { TbHealthRecognition } from "react-icons/tb";

const Productnav = () => {
  return (
    <div>
      <div className="flex-col p-8 space-y-6 w-65 mt-5 ">
        <a className="flex  items-center  gap-2" href="">
          <GiFruitBowl /> Fruits & Vegetables <FaChevronDown />
        </a>
        <a className="flex items-center gap-2" href="">
          <IoFish /> Meat & Fish <FaChevronDown />
        </a>
        <a className="flex items-center gap-2" href="">
          <FaBowlFood />
          Snacks <FaChevronDown />
        </a>
        <a className="flex items-center gap-2" href="">
          <FaDog />
          Pet Care <FaChevronDown />
        </a>
        <a className="flex items-center gap-2" href="">
          <FaHome />
          Home & Cleaning <FaChevronDown />
        </a>
        <a className="flex items-center gap-2" href="">
          <TbMilk />
          Dairy <FaChevronDown />
        </a>
        <a className="flex items-center gap-2" href="">
          <LuCookingPot />
          Cooking <FaChevronDown />
        </a>
        <a className="flex items-center gap-2" href="">
          <MdFreeBreakfast />
          Breakfast <FaChevronDown />
        </a>{" "}
        <a className="flex items-center gap-2" href="">
          <RiDrinksFill />
          Beverage <FaChevronDown />
        </a>{" "}
        <a className="flex items-center gap-2" href="">
          <TbHealthRecognition />
          Health & Beauty <FaChevronDown />
        </a>
      </div>
    </div>
  );
};

export default Productnav;
