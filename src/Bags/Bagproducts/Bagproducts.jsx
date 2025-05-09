import React, { useState } from "react";
import Bagproductsfun from "./Bagproductsfun";
import Bagproductpop from "./Bagproductpop";
import { useCart } from "../../context/CartContext";

const Bagproducts = () => {
  const [selectproduct, setselectproduct] = useState(null);
  const { addToCart } = useCart();
  const products = [
    {
      id: "Bags-1",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F103%2FArmani_leather_purse.jpg&w=3840&q=75",
      itemname: "Armani Leather Purse",
      price: "$50.00",
      description:
        "The name Giorgio Armani has become synonymous with clean lines and Italian style. One of the most recognisable fashion houses in the world, the label has dressed some of the world’s most beautiful women.",
      categories: "Purse",
      sellers: "Bag shop",
    },
    {
      id: "Bags-2",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F109%2Fcys-m3.jpg&w=3840&q=75",
      itemname: "Gucci GG Marmont Tote",
      price: "$70.00",
      description:
        "The Gucci GG Marmont tote bag is a stylish and versatile accessory that combines luxury with practicality. Made from high-quality materials, this tote features the iconic GG logo and a spacious interior, making it perfect for everyday use.",
      categories: "purse ",
      sellers: "Bag shop",
    },
    {
      id: "Bags-3",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F113%2F7Carmine-Red-Ladies-Hand-Bag.jpg&w=3840&q=75",
      itemname: "The Marc Jacobs",
      price: "$50.00",
      description:
        "The Marc Jacobs tote bag is a chic and functional accessory that embodies the brand's signature style. Crafted from durable materials, this tote features a spacious interior and a minimalist design, making it perfect for everyday use.",
      categories: "shoulder bag",
      sellers: "Bag shop",
    },
    {
      id: "Bags-4",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F114%2F441270-Zoom.jpg&w=1080&q=75",
      itemname: "Balenciaga",
      price: "$90.00",
      description:
        "The Balenciaga tote bag is a statement accessory that combines high fashion with functionality. Known for its bold designs and innovative materials, this tote features a spacious interior and a unique silhouette, making it a must-have for fashion-forward individuals.",
      categories: "hand bag",
      sellers: "Bag shop",
    },
    {
      id: "Bags-5",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F125%2Fgucchi.jpg&w=1080&q=75",
      itemname: "Gucci Handbag",
      price: "$100.00",
      description:
        "The Gucci handbag is a luxurious accessory that exudes elegance and sophistication. Crafted from premium materials, this handbag features the iconic GG logo and a spacious interior, making it perfect for both everyday use and special occasions.",
      categories: "hand bag",
      sellers: "Bag shop",
    },
    {
      id: "Bags-6",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F131%2F10054735626270.jpg&w=1080&q=75",
      itemname: "See by Chloé",
      price: "$70.00",
      description:
        "The See by Chloé handbag is a stylish and contemporary accessory that embodies the brand's playful spirit. Made from high-quality materials, this handbag features a unique design and a spacious interior, making it perfect for everyday use.",
      categories: "hand bag",
      sellers: "Bag shop",
    },
    {
      id: "Bags-7",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F107%2Fgucci_purse.jpg&w=3840&q=75",
      itemname: "Gucci Purse",
      price: "$80.00",
      description:
        "The Gucci purse is a luxurious accessory that combines style and functionality. Made from premium materials, this purse features the iconic GG logo and a spacious interior, making it perfect for everyday use.",
      categories: "purse",
      sellers: "Bag shop",
    },
    {
      id: "Bags-8",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F108%2F91PirQjxGjL._UL1500_.jpg&w=1080&q=75",
      itemname: "Armani Silver Purse",
      price: "$60.00",
      description:
        "The Armani silver purse is a chic and elegant accessory that adds a touch of luxury to any outfit. Made from high-quality materials, this purse features a sleek design and a spacious interior, making it perfect for both day and night.",
      categories: "purse",
      sellers: "Bag shop",
    },
  ];

  const handleproductclcik = (product) => {
    setselectproduct(product);
  };

  const handleclosemodal = () => {
    setselectproduct(null);
  };
  return (
    <div className="bg-gray-200 p-7">
      <h1 className="text-4xl font-bold pb-6  text-center">
        Our Featured Bags
      </h1>
      <div className="flex flex-wrap gap-4">
        {products.map((product, index) => (
          <Bagproductsfun
            key={index}
            imageurl={product.imageurl}
            itemname={product.itemname}
            price={product.price}
            onproductclick={() => handleproductclcik(product)}
          />
        ))}
      </div>
      {selectproduct && (
        <Bagproductpop product={selectproduct} onClose={handleclosemodal}
        addToCart={addToCart} />
      )}
    </div>
  );
};

export default Bagproducts;
