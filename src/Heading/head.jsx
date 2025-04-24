import { CiSearch } from "react-icons/ci";
import leftimage from "./left.png";
import rightimage from "./right.png";
const Head = () => {
  return (
    <>
      <div className=" min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold p-5">Shop your designer dresses</h1>
        <p className="text-2xl p-3">
          Ready to wear dresses tailored for you online. Hurry up while stock
          lasts.
        </p>
        <div className="flex ">
          <input
            type="text"
            placeholder="Search your products from here"
            className="  w-190 p-4 mt-4 rounded-l-2xl shadow-xl"
          />
          <button className="  w-40 flex bg-green-700 text-white  items-center justify-center gap-2 font-medium mt-4 rounded-r-2xl shadow-2xl">
            <CiSearch className="size-6" />
            Search
          </button>
        </div>

 
        <div className="flex justify-between w-full max-w-7xl mx-auto mt-8">

</div>
      </div>
    </>
  );
};
export default Head;
