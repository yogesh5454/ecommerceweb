import { GiAmpleDress } from "react-icons/gi";
import { IoShirtOutline } from "react-icons/io5";
import { PiPants } from "react-icons/pi";
import { PiShirtFoldedLight } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import { GiTShirt } from "react-icons/gi";
import { GiSkirt } from "react-icons/gi";

const Productsnav = () => {
  return (
    <>
      <div className="flex-col p-8 space-y-6 w-140 mt-5 ">
        <a className="flex  items-center  gap-2" href="">
          <GiAmpleDress /> Women Dress <FaChevronDown />
        </a>
        <a className="flex items-center gap-2" href="">
          <IoShirtOutline /> Outer Wear <FaChevronDown />
        </a>
        <a className="flex items-center gap-2" href="">
          <PiPants />
          Pants <FaChevronDown />
        </a>
        <a className="flex items-center gap-2" href="">
          <GiTShirt /> Tops
        </a>
        <a className="flex items-center gap-2" href="">
          <GiSkirt /> Skirts
        </a>
        <a className="flex items-center gap-2" href="">
          <PiShirtFoldedLight />
          Shirts
        </a>
      </div>
    </>
  );
};
export default Productsnav;
