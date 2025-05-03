import React, { useEffect, useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { IoBagCheckSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [cartOpen]);

  return (
    <div>
      <button
        onClick={() => setCartOpen(true)}
        onMouseDown={(e) => e.preventDefault()}
        onMouseUp={(e) => e.preventDefault()}
        onMouseMove={(e) => e.preventDefault()}
        onWheel={(e) => e.preventDefault()}
        onTouchMove={(e) => e.preventDefault()}
        className="text-white bg-green-700 fixed p-3 top-4 right-0 mt-100 rounded-sm z-30"
      >
        <div className="flex gap-2 items-center">
          <BsFillCartCheckFill />
          <p>{totalItems} Item{totalItems !== 1 ? "s" : ""}</p>
        </div>
        <div>
          <p className="p-1 bg-white text-green-700 rounded-sm">${totalPrice}</p>
        </div>
      </button>

      {cartOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setCartOpen(false)}
        >
          <div
            className="min-h-screen fixed right-0 bg-white rounded-lg shadow-lg p-6 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-green-700 font-semibold">
                <IoBagCheckSharp />
                <p>{totalItems} item{totalItems !== 1 ? "s" : ""}</p>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="text-white bg-green-700 p-1 rounded-2xl hover:bg-red-700"
              >
                <RxCross1 />
              </button>
            </div>

            <hr className="w-full text-gray-300 my-4" />
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-600">Your cart is empty</p>
            ) : (
              <div className="max-h-170 overflow-y-auto">
                {cartItems.map((item) => (
                  
                  <div key={item.id} className="flex items-center gap-2 mb-4">
                    <div className="flex-col space-y-3 bg-gray-300 p-1 px-2 rounded-t-4xl rounded-b-4xl">
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <p>+</p>
                      </button>
                      <p>{item.quantity}</p>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <p>-</p>
                      </button>
                    </div>
                    <div>
                      <img
                        className="w-40 h-20 object-cover"
                        src={item.imageurl}
                        alt={item.itemname}
                      />
                    </div>
                    <div className="flex-grow">
                      <h1 className="font-bold text-sm">{item.itemname}</h1>
                      <div className="flex items-center mt-1">
                        <h3 className="font-semibold text-green-700">{item.price}</h3>
                        {item.weight && <span className="text-xs text-gray-500 ml-2">({item.weight})</span>}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">
                        ${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="ml-3">
                      <button onClick={() => removeFromCart(item.id)}>
                        <MdDelete className="text-green-700 hover:bg-red-700 hover:text-white" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <hr className="w-full text-gray-300 my-4" />

            <button className="flex bg-green-700 p-2 rounded-r-4xl rounded-l-4xl w-85 bottom-4 absolute gap-40 items-center px-6">
              <h2 className="text-white">Checkout</h2>
              <h2 className="bg-white text-green-700 p-2 rounded-r-3xl rounded-l-3xl mr-5">
                ${totalPrice}
              </h2>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;