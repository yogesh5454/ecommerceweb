import React from "react";

const Furnitureprofun = ({ id, imageurl, itemname, price ,onproductclick}) => {
  return (
    <div onClick={onproductclick} className="w-78 shadow-md bg-white cursor-pointer">
      <div>
        <img className="w-full" src={imageurl} alt="itemname" />
      </div>
      <div className="text-center pb-6">
        <h2 className="font-semibold">{itemname}</h2>
        <p className="text-gray-600 pt-2">{price}</p>
      </div>
    </div>
  );
};

export default Furnitureprofun;
