import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Gadgethead = () => {
  return (
    <div >
      <div className="py-15 mx-4 bg-teal-200 px-35 mt-30 rounded-sm h-100 shadow-2xl  w-330 flex justify-between ">
        <div>
          <h2 className="text-4xl font-semibold">
            Exclusive soundbars <br /> made only for you
          </h2>
          <p className=" text-gray-600 py-5">
           Get your gadgets at affordable price
          </p>
          <button className="bg-white  py-3 px-5 my-5 rounded-l-lg rounded-r-lg cursor-pointer items-center flex gap-3 font-semibold">
      <span>Order now</span>    <FaArrowRight/>
          </button>
        </div>
        {/* <div>
         <img src="https://img.freepik.com/premium-vector/drawing-speaker-that-has-yellow-black-it_1230457-48636.jpg?semt=ais_hybrid&w=740" alt="Soundbox Image" />
        </div> */}
      </div>
    </div>
  );
};

export default Gadgethead;
