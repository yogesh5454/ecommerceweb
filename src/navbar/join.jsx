import React, { useState } from "react";

const Join = () => {
  const [logopen, setlogopen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setlogopen(true)}
        className="text-white bg-green-700 p-2 mr-4 rounded-md w-15"
      >
        Join
      </button>
      {logopen && (
        <>
          <div>
            <img
              className="w-35 "
              src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=3840&q=75"
              alt=""
            />
            <p>Login with your email & password</p>

            <div>
              <h3>Email</h3>
              <input type="text" />
            </div>
            <div>
              <p>Password</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Join;
