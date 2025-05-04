import React, { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
const Join = () => {
  const [logopen, setlogopen] = useState(false);

  useEffect(() => {
    if (logopen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [logopen]);
  return (
    <div>
      <button
        onClick={() => setlogopen(true)}
        className="text-white bg-green-700 p-2 mr-4 rounded-md w-15 cursor-pointer"
      >
        Join
      </button>
      {logopen && (
        <>
          <div
            className="fixed inset-0  z-40 "
            onClick={() => setlogopen(false)}
            onMouseDown={(e) => e.preventDefault()}
            onMouseUp={(e) => e.preventDefault()}
            onMouseMove={(e) => e.preventDefault()}
            onWheel={(e) => e.preventDefault()}
            onTouchMove={(e) => e.preventDefault()}
          />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-300 rounded-lg shadow-lg p-6 max-w-sm w-full">
            <img
              className="w-35 justify-self-center mb-4"
              src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=3840&q=75"
              alt=""
            />
            <p className="text-gray-600 mb-8 text-center">
              Login with your email & password
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value="customer@demo.com"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <div className="flex gap-40 mb-2 ">
                  <label className="block text-sm text-gray-600">
                    Password
                  </label>
                  <label className="block text-sm text-green-700 ">
                    Forget password?
                  </label>
                </div>
                <input
                  type="password"
                  value="123456"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">
                Login
              </button>
            </div>
            <div className="flex my-6 items-center">
              <hr className="w-full text-gray-300" />
              <p className="text-center mx-3  ">Or</p>
              <hr className="w-full text-gray-300" />
            </div>
            <div>
              <button className="flex text-white  gap-5 bg-blue-500 items-center p-4 w-full justify-center my-4">
                <FaGoogle /> Login with Google
              </button>
              <button className="flex text-white gap-5 bg-gray-400 items-center p-4 w-full justify-cente mb-10">
                <FaMobileAlt /> Login with Mobile number
              </button>
            </div>
            <div>
              <hr className="w-full text-gray-300 " />

              <p className="text-center mt-5">
                Don't have an account?
                <span className="text-green-700 underline">Register</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Join;
