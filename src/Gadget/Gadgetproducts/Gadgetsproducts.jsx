import React, { useState } from "react";
import Gadgetproductsfun from "./Gadgetproductsfun";
import { useCart } from "../../context/CartContext";
import Gadgetproductspop from "./Gadgetproductspop";

const Gadgetsproducts = () => {
  const [selectproduct, setselectproduct] = useState(null);
  const { addToCart } = useCart();
  const products = [
    {
      id: "Gadget-1",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1716%2FGaming.jpg&w=3840&q=75",
      itemname: "Razero Wolverine",
      price: "$100.00",
      description:
        "The Razer Wolverine V2 Chroma is a wired gaming controller for Xbox Series X|S and PC. It features customizable buttons, Razer Chroma RGB lighting, and ergonomic design for enhanced gaming performance.",
      star: "4.8",
      categories: "Console",
      sellers: "GadgetHub",
    },
    {
      id: "Gadget-2",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1725%2FGaming-3.jpg&w=3840&q=75",
      itemname: "Razero Playstation VR",
      price: "$700.00",
      description:
        "The Razer Playstation VR is a virtual reality headset designed for immersive gaming experiences on the PlayStation platform. It features high-resolution displays, motion tracking, and a comfortable fit for extended play sessions.",
      star: "4.5",
      categories: "Console",
      sellers: "GadgetHub",
    },
    {
      id: "Gadget-3",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1727%2FLaptop.jpg&w=3840&q=75",
      itemname: "Macbook Pro M1",
      price: "$1200.00",
      description:
        "The MacBook Pro M1 is a powerful laptop featuring Apple's M1 chip, offering exceptional performance, long battery life, and a stunning Retina display. It's designed for professionals and creatives who demand high performance.",
      star: "4.3",
      categories: "Laptop",
      sellers: "GadgetHub",
    },
    {
      id: "Gadget-4",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1747%2FLaptop-3.jpg&w=3840&q=75",
      itemname: "Azsus VivoBook Pro 15",
      price: "$800.00",
      description:
        "The Asus VivoBook Pro 15 is a stylish and powerful laptop designed for everyday use. It features a vibrant display, fast performance, and a sleek design, making it suitable for both work and entertainment.",
      star: "5",
      categories: "Laptop",
      sellers: "GadgetHub",
    },
    {
      id: "Gadget-5",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1769%2FMonitor-4.jpg&w=1080&q=75",
      itemname: "Azsus ProArt PA329Q Professional Monitor",
      price: "$500.00",
      description:
        "The Asus ProArt PA329Q is a professional-grade monitor with a 4K UHD resolution, designed for content creators and professionals. It offers accurate color reproduction, wide viewing angles, and extensive connectivity options.",
      star: "4",
      categories: "Monitor",
      sellers: "GadgetHub",
    },
    {
      id: "Gadget-6",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1774%2Fmonitor-1.jpg&w=3840&q=75",
      itemname: "Dell UltraSharp U2720Q 27-Inch 4K Monitor",
      price: "$600.00",
      description:
        "The Dell UltraSharp U2720Q is a 27-inch 4K monitor with exceptional color accuracy and a wide color gamut. It's ideal for graphic design, video editing, and professional use.",
      star: "4.7",
      categories: "Monitor",
      sellers: "GadgetHub",
    },
    {
      id: "Gadget-7",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2176%2Faccessories-4.jpg&w=3840&q=75",
      itemname: "Samusung SoundPal S8 Mini Bluetooth Speaker",
      price: "$50.00",
      description:
        "A compact Bluetooth speaker with excellent sound quality and portability.",
      star: "4.2",
      categories: "Accessories",
      sellers: "GadgetHub",
    },
    {
      id: "Gadget-8",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2172%2Faccessories-1.jpg&w=1080&q=75",
      itemname: "HypereX Pulsefire Haste 2 Gaming Mouse",
      price: "$40.00",
      description:
        "A lightweight gaming mouse with customizable RGB lighting and high precision.",
      star: "4.6",
      categories: "Accessories",
      sellers: "GadgetHub",
    },
    {
      id: "Gadget-9",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2200%2Fcamera-3.jpg&w=3840&q=75",
      itemname: "UOGREEN Dash Cam 66W",
      price: "$150.00",
      description:
        "A compact dash cam with 1080p resolution and night vision for clear recording.",
      star: "4.0",
      categories: "Camera",
      sellers: "GadgetHub",
    },
    {
      id: "Gadget-10",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2202%2Fcamera-2.jpg&w=1080&q=75",
      itemname: "Ziaomi Mijia Lite Action Camera",
      price: "$200.00",
      description:
        "A compact action camera with 4K recording and waterproof capabilities.",
      star: "4.1",
      categories: "Camera",
      sellers: "GadgetHub",
    },
    {
      id: "Gadget-11",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2216%2FHeadphone-3.jpg&w=3840&q=75",
      itemname: "Souny WH-1000XM4 Wireless ANC Headphone",
      price: "$350.00",
      description:
        "A premium wireless headphone with active noise cancellation and superior sound quality.",
      star: "4.9",
      categories: "Headphones",
      sellers: "GadgetHub",
    },
    {
      id: "Gadget-12",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2219%2FMobile-1.jpg&w=3840&q=75",
      itemname: "Oppo F17 Pro",
      price: "$300.00",
      description:
        "A stylish smartphone with a powerful camera and long-lasting battery.",
      star: "4.4",
      categories: "Mobiles",
      sellers: "GadgetHub",
    },
    {
      id: "Gadget-13",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2238%2FRouter-4.jpg&w=3840&q=75",
      itemname: "Link DDIR-650IN N3800 300mbps WiFi Router",
      price: "$80.00",
      description:
        "A high-speed WiFi router with dual-band support and advanced security features.",
      star: "4.3",
      categories: "Router",
      sellers: "GadgetHub",
    },
    {
      id: "Gadget-14",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2193%2FSmart-watch-1.jpg&w=3840&q=75",
      itemname: "Samsung Galaxy Watch 4",
      price: "$250.00",
      description:
        "A smartwatch with fitness tracking, heart rate monitoring, and customizable watch faces.",
      star: "4.8",
      categories: "Smartwatch",
      sellers: "GadgetHub",
    },
    {
      id: "Gadget-15",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2186%2Fsound-box-3.jpg&w=3840&q=75",
      itemname: "sony SRS-XB43 Wireless Bluetooth Speaker",
      price: "$120.00",
      description:
        "A portable Bluetooth speaker with powerful sound and long battery life.",
      star: "4.5",
      categories: "Sound Box",
      sellers: "GadgetHub",
    },
  ];

  const onproductclick = (product) => {
    setselectproduct(product);
  };

  const handleCloseModal =()=>{
    setselectproduct(null)
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center py-5">
        Our available Gadgets
      </h1>

      <div className="flex flex-wrap gap-3">
        {products.map((product, index) => (
          <Gadgetproductsfun
            key={index}
            imageurl={product.imageurl}
            price={product.price}
            itemname={product.itemname}
            addToCart={addToCart}
            product={product}
            onProductClick={onproductclick}
          />
        ))}
      </div>
      {selectproduct && (
        <Gadgetproductspop
        product={selectproduct}
        onclose={handleCloseModal}
        addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default Gadgetsproducts;
