import React, { useState } from "react";
import Ricepulseproductsfun from "./Ricepulseproductsfun";
import Ricepulseproductpop from "./Ricepulseproductpop";
import { useCart } from "../../../../context/CartContext";

const Ricepulseproducts = () => {
  const [selectproduct, setselectproduct] = useState(null);
  const { addToCart } = useCart();
  const products = [
    {
      id: "Rice-1",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1146%2FRice1.jpg&w=3840&q=75",
      itemname: "Sekka grain rice",
      weight: "2lb",
      price: "$1.59",
      description:
        "Rice is the seed of the grass species Oryza sativa or less commonly Oryza glaberrima. The name wild rice is usually used for species of the genera Zizania and Porteresia, both wild and domesticated.",
      categories: ["rice", "rice & pulse"],
      sellers: "Grocery shop",
      stars: "5",
    },
    {
      id: "Rice-2",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1149%2FRice4.jpg&w=3840&q=75",
      itemname: "Natural Black Rice",
      weight: "2lb",
      price: "$1.99",
      description:
        "Black rice is a type of whole grain rice that has a deep black color and a nutty flavor. It is rich in antioxidants, fiber, and nutrients, making it a healthy choice for meals.",
      categories: ["rice", "rice & pulse"],
      sellers: "Grocery shop",
      stars: "4.5",
    },
    {
      id: "Rice-3",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1155%2FRice10.jpg&w=3840&q=75",
      itemname: "Minute white rice ",
      weight: "4lb",
      price: "$1.29",
      description:
        "Minute white rice is a type of pre-cooked rice that is designed to cook quickly and easily. It is a convenient option for busy individuals and families.",
      categories: ["rice", "rice & pulse"],
      sellers: "Grocery shop",
      stars: "4",
    },
    {
      id: "Rice-4",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1139%2FPulse3.jpg&w=3840&q=75",
      itemname: "Organic red lentils",
      weight: "2lb",
      price: "$1.99",
      description:
        "Organic red lentils are a type of legume that is grown without the use of synthetic pesticides or fertilizers. They are a good source of protein, fiber, and nutrients.",
      categories: ["lentils", "rice & pulse"],
      sellers: "Grocery shop",
      stars: "4.5",
    },
    {
      id: "Rice-5",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1154%2FRice9.jpg&w=3840&q=75",
      itemname: "Nishiki Premium grade rice",
      weight: "2lb",
      price: "$2.99",
      description:
        "Nishiki Premium grade rice is a high-quality short-grain rice that is known for its sticky texture and nutty flavor. It is commonly used in sushi and other Asian dishes.",
      categories: ["rice", "rice & pulse"],
      sellers: "Grocery shop",
      stars: "4.7",
    },
    {
      id: "Rice-6",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1151%2FRice6.jpg&w=3840&q=75",
      itemname: "Whole grain brown rice",
      weight: "3lb",
      price: "$1.89",
      description:
        "Whole grain brown rice is a nutritious whole grain that is high in fiber and essential nutrients. It is a versatile ingredient that can be used in a variety of dishes.",
      categories: ["rice", "rice & pulse"],
      sellers: "Grocery shop",
      stars: "4.5",
    },
  ];

  const handleproductclick = (product) => {
    setselectproduct(product);
  };
  const handleclosemodal = () => {
    setselectproduct(null);
  };
  return (
    <div className="pt-30">
      <div className="p-8 gap-3 flex flex-wrap">
        {products.map((product, index) => (
          <Ricepulseproductsfun
            key={product.index}
            imageurl={product.imageurl}
            itemname={product.itemname}
            price={product.price}
            weight={product.weight}
            onproductclick={() => handleproductclick(product)}
          />
        ))}
      </div>
      {selectproduct && (
        <Ricepulseproductpop
          product={selectproduct}
          onClose={handleclosemodal}
          addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default Ricepulseproducts;
