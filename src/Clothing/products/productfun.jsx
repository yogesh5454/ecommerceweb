import { IoMdAdd } from "react-icons/io";

const Productsfun = ({ id, imageurl, itemname, price, onproductclick }) => {
  return (
    <div className="w-68 bg-white shadow-md rounded-md p-4">
      <div>
        <img
          src={imageurl}
          alt={itemname}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>
      <div className="mt-4">
        <p className=" text-gray-600 px-5">{itemname}</p>
      </div>
      <div className="my-2 flex gap-20 justify-between px-5 items-center">
        <h2 className="font-semibold">{price}</h2>
        <button
          onClick={onproductclick}
          className="border rounded-sm hover:border-green-700"
        >
          <IoMdAdd className="text-2xl text-green-700 hover:bg-green-700 hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default Productsfun;
