import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

const Medoffers = () => {
  const offers = [
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2333%2Fbanner01.png&w=1200&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2334%2Fbanner02.png&w=1200&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2335%2Fbanner03.png&w=1200&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2336%2Fbanner04.png&w=1200&q=75",
  ];

  const scrollLeft = () => {
    document
      .getElementById("scroll-container")
      .scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    document
      .getElementById("scroll-container")
      .scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative bg-white shadow-lg border-y border-gray-300 py-6">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 z-10 transform -translate-y-1/2 bg-white p-3 shadow-2xl rounded-full ml-3"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 z-10 transform -translate-y-1/2 bg-white p-3 shadow-2xl rounded-full mr-3"
      >
        <FaAngleRight />
      </button>

      <div
        id="scroll-container"
        className="flex overflow-x-auto gap-4 px-6 scrollbar-hide scroll-smooth"
      >
        {offers.map((offer, index) => (
          <img
            key={index}
            src={offer}
            alt="offer"
            className="h-72  flex-shrink-0 rounded-lg shadow-md"
          />
        ))}
      </div>
      <style jsx>{`
        #scroll-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Medoffers;
