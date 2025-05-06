import React from "react";

const Booksproductfun = ({ imageurl, itemname, author, price,onproductclick }) => {
  return (
    <div onClick={onproductclick} className="w-76 cursor-pointer">
      <div>
        <img src={imageurl} alt={itemname} />
      </div>

      <div>
        <h2 className="font-semibold py-3 hover:text-orange-700">{itemname}</h2>
        <p className="pb-3 flex gap-1">
          <span className="text-gray-500">by</span><span className="hover:text-orange-700">{author}</span>
        </p>
        <h1 className="text-orange-700 font-semibold pb-5">{price}</h1>
      </div>
    </div>
  );
};

export default Booksproductfun;
