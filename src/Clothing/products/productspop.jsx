import { IoMdClose } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const Productpop = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 shadow-2xl flex justify-center items-center z-50">
      <div className="bg-gray-300 p-6 rounded-md w-full max-w-4xl relative flex">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
        >
          <IoMdClose />
        </button>

        <div className="w-1/2  px-10">
          <img
            src={product.imageurl}
            alt={product.itemname}
            className="w-full h-96 object-contain rounded-md"
          />
        </div>

        <div className="w-1/2 p-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">{product.itemname} </h2>
            <p className="text-white bg-green-700 p-2 flex items-center gap-1 rounded-sm">
              {product.star} <FaStar />
            </p>
          </div>

          <p className="mt-2 text-gray-600">{product.description}</p>
          <div className="mt-4">
            <span className="text-green-700 text-2xl font-bold">
              {product.price}
            </span>
          </div>
          <button className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md">
            Add To Shopping Cart
          </button>
          <hr className="w-full text-black my-4" />

          <div>
            <p className="flex gap-2 items-center">
              categories{" "}
              <span className="flex">
                {" "}
                {product.categories.map((category, index) => (
                  <button
                    className="border rounded-sm  bg-gray-200  p-1 mx-1"
                    key={index}
                  >
                    {category}
                  </button>
                ))}
              </span>
            </p>
          </div>

          <div className="flex gap-2 items-center mt-3">
            sellers{" "}
            <span className="text-green-700 underline">{product.seller}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productpop;
