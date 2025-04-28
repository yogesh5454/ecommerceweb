import React, { useEffect, useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { IoBagCheckSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const [cartopen, setcartopen] = useState(false);
  useEffect(() => {
    if (cartopen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [cartopen]);
  return (
    <div>
      <button
        onClick={() => setcartopen(true)}
        onMouseDown={(e) => e.preventDefault()}
        onMouseUp={(e) => e.preventDefault()}
        onMouseMove={(e) => e.preventDefault()}
        onWheel={(e) => e.preventDefault()}
        onTouchMove={(e) => e.preventDefault()}
        className=" text-white bg-green-700 fixed p-3 top-4 right-0 mt-100 rounded-sm"
      >
        <div className="flex gap-2 items-center">
          <BsFillCartCheckFill />
          <p>0 Item</p>
        </div>
        <div>
          <p className="p-1 bg-white text-green-700 rounded-sm">$0.00</p>
        </div>
      </button>

      {cartopen && (
        <>
          <div
            className="fixed inset-0  z-40 "
            onClick={() => setcartopen(false)}
          >
            <div className=" min-h-screen  fixed right-0  bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
              <div className="flex    items-center">
                <div className="flex items-center gap-4 w-9/10 text-green-700">
                  <IoBagCheckSharp /> <p>o items</p>
                </div>
                <div className="text-white bg-green-700 p-1 rounded-2xl">
                  <RxCross1 />
                </div>
              </div>

              <div>
                <hr className="w-full text-gray-300 my-4" />
                <div className="flex">
                <div className="flex-col space-y-3 bg-gray-300  p-1 px-2 rounded-t-4xl rounded-b-4xl ">
                  <p>+</p>
                  <p>2</p>
                  <p>-</p>
                </div>
                <div>
                  <img
                    src="        https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F115%2FFOREVER_21.jpg&w=3840&q=75"
                    alt=""
                  />
                  </div>
                  <div>
                    <h1 className="font-bold">Mango Self Striped A Line Dress - Red/M</h1>
                    <h3 className="font-semibold text-green-700">$70</h3>
                  </div>
                  <div>
                    <p>$180</p>
                  </div>
                  <div>
                    <MdDelete/>
                  </div>
                </div>
              </div>
              <button className="flex bg-green-700 p-2 rounded-r-4xl rounded-l-4xl w-85 bottom-4 absolute gap-40 items-center px-6   ">
                <h2 className="text-white">Checkout</h2>{" "}
                <h2 className="bg-white text-green p-2 rounded-r-3xl rounded-l-3xl px-5">
                  $450
                </h2>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
