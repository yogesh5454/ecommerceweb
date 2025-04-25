import { IoMdAdd } from "react-icons/io";

const Productsfun = ({ id, imageurl, clothname, price }) => {
  return (
    <div className="w-68 bg-white">
      <div>
        <img src={imageurl} alt={clothname} className=" " />
      </div>
      <div className="mt-4">
        <p className="text-md font-light px-5">{clothname}</p>
        
      </div>
      <div className="my-2 flex gap-20 justify-center">
      <h2 className=" font-semibold ">{price}</h2>
    <button className="border rounded-sm hover:border-green-700">   <IoMdAdd className="text-2xl  text-green-700  hover:bg-green-700 hover:text-white" /></button> 
      </div>
    </div>
  );
};

export default Productsfun;
