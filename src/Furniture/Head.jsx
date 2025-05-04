import React from "react";

const Head = () => {
  return (
    <div className="py-15 mx-4 px-35 mt-30  shadow-2xl  w-323 ">
      <div>
        <h2 className="text-4xl font-semibold">Exclusive furnitures <br /> made only for you</h2>
        <p className=" text-gray-600 py-5">
          Make your house a home with our wide collection <br /> of beautiful furniture
        </p>
      </div>
      <div>
        <button className="bg-black text-white py-3 px-5 my-5 rounded-l-lg rounded-r-lg cursor-pointer">View Details</button>
      </div>
    </div>
  );
};

export default Head;
