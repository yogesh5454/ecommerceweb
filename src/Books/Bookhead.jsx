import React from "react";
import { FaAnglesRight } from "react-icons/fa6";

const Bookhead = () => {
  return <div className="pt-25 px-8 ">

    <div className="bg-teal-400 h-130 text-white  flex justify-between">
        <div className="py-45 pl-30"> <h1 className="text-4xl font-bold py-4">Meet your Next <br /> favorite books</h1>
        <p className="flex items-center gap-2 text-2xl font-semibold">Shop now <span><FaAnglesRight />
        </span></p></div>
        <div ><img className="object-contain h-full w-full"  src="https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9vayUyMGNvbGxlY3Rpb258ZW58MHx8MHx8fDA%3D" alt="" /></div>

    </div>

  </div>;
};

export default Bookhead;
