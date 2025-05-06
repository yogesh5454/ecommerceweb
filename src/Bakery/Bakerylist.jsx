import React, { useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

const Bakerylist = () => {
  const bakeryitems = [
    {
      itemname: "juice",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F489%2FJuice-5_eqrtuu.jpg&w=3840&q=75",
    },
    {
      itemname: "Coffee & Tea",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F501%2FCoffee_Tea-7_nijstz.jpg&w=3840&q=75",
    },
    {
      itemname: "Cookies",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F506%2FCookies-2_osbjsh.jpg&w=3840&q=75",
    },
    {
      itemname: "Round Cake",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F508%2FRound_Cake-8_rjbmjc.jpg&w=3840&q=75",
    },
    {
      itemname: "Pita Bread",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F519%2FPita_Bread-3_uzisgc.jpg&w=3840&q=75",
    },
    {
      itemname: "Sliced Cake",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F524%2FPice_Cake-2_uhialp.jpg&w=3840&q=75",
    },
    {
      itemname: "Muffin",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F527%2FMuffin-2_o6lhy8.jpg&w=3840&q=75",
    },
    {
      itemname: "Danish",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F536%2FDanish-1_gav1ka.jpg&w=3840&q=75",
    },
    {
      itemname: "Croissants",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F540%2FCroissant-5_sxjigi.jpg&w=3840&q=75",
    },
    {
      itemname: "Feeter & Pies",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F546%2FPies-4_pj9hym.jpg&w=3840&q=75",
    },
    {
      itemname: "Toast & Loaf",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F554%2FToast_vkkror.jpg&w=3840&q=75",
    },
    {
      itemname: "Soft Bread",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F561%2FBread_xhobu2.jpg&w=3840&q=75",
    },
    {
      itemname: "Bakery",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F550%2FToast-8_polcv3.jpg&w=3840&q=75",
    },
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

 
  useEffect(() => {
    const container = document.getElementById("scroll-container");
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      container.classList.add("cursor-grabbing");
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      container.classList.remove("cursor-grabbing");
    };

    const handleMouseUp = () => {
      isDown = false;
      container.classList.remove("cursor-grabbing");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 z-10 bg-white p-3 shadow-2xl  rounded-4xl"
      >
        <FaChevronLeft />

      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 z-10 bg-white p-3 rounded-4xl shadow-2xl "
      >
        <FaAngleRight />

      </button>

      <div
        id="scroll-container"
        className="flex bg-gray-300 p-6 gap-3  overflow-x-auto overflow-y-hidden cursor-grab select-none"
        style={{
        
          msOverflowStyle: "none", 
        }}
      >
        {bakeryitems.map((bakery, index) => (
          <div
            key={index}
            className="text-center cursor-pointer bg-white w-55 flex-shrink-0"
          >
            <img src={bakery.imageurl} alt={bakery.itemname} />
            <h1 className="font-bold pb-3">{bakery.itemname}</h1>
          </div>
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

export default Bakerylist;
