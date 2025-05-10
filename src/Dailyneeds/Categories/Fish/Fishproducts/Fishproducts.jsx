import React, { useState } from "react";
import { useCart } from "../../../../context/CartContext";
import Fishproductsfun from "./Fishproductsfun";
import Fishproductpop from "./Fishproductpop";
const Fishproducts = () => {
  const [selectproduct, setselectproduct] = useState(null);
  const { addToCart } = useCart();
  
  const products = [
    {
      id: "Fish-1",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1307%2FFarmed-Fish.jpg&w=3840&q=75",
      itemname: "Grass Crap Fish",
      weight: "2lbs",
      description:
        "Grass carp is a freshwater fish that is native to East Asia. It is known for its mild flavor and firm texture, making it a popular choice for grilling and frying.",
      price: "$5.99",
      categories: ["Farmeed fish"],
      sellers: "Grocery shop",
      stars: "4.5",
    },
    {
      id: "Fish-2",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1311%2FFarmed-Fish-5.jpg&w=3840&q=75",
      itemname: "Red Tilapia Fish",
      weight: "4lbs",
      description:
        "Red tilapia is a freshwater fish that is known for its mild flavor and firm texture. It is commonly used in Asian cuisine and can be grilled, fried, or steamed.",
      price: "$6.99",
      categories: ["Farmeed fish"],
      sellers: "Grocery shop",
      stars: "4.6",
    },
    {
      id: "Fish-3",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1301%2FFresh_waterfish6.jpg&w=3840&q=75",
      itemname: "Habitat Fish",
      weight: "2lbs",
      description:
        "Habitat fish are species that are commonly found in freshwater environments, such as rivers and lakes. They are known for their adaptability and can thrive in a variety of conditions.",
      price: "$4.99",
      categories: ["Fresh water fish"],
      sellers: "Grocery shop",
      stars: "4.7",
    },
    {
      id: "Fish-4",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1303%2FFresh_waterfish8.jpg&w=3840&q=75",
      itemname: "Rainbow trout fish",
      weight: "1lbs",
      description:
        "Rainbow trout is a freshwater fish that is known for its vibrant colors and delicate flavor. It is commonly found in rivers and lakes and is often grilled or baked.",
      price: "$7.99",
      categories: ["Fresh water fish"],
      sellers: "Grocery shop",
      stars: "4.8",
    },
    {
      id: "Fish-5",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1288%2FSea-Fish1.jpg&w=3840&q=75",
      itemname: "Tuna Fish",
      weight: "2lbs",
      description:
        "Tuna is a saltwater fish that is known for its rich flavor and firm texture. It is commonly used in sushi and sashimi, as well as in salads and sandwiches.",
      price: "$8.99",
      categories: ["Sea fish"],
      sellers: "Grocery shop",
      stars: "4.9",
    },
    {
      id: "Fish-6",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1285%2FShellfish3.jpg&w=3840&q=75",
      itemname: "Crayfish",
      weight: "1lbs",
      description:
        "Crayfish are freshwater crustaceans that are known for their sweet and tender meat. They are commonly used in soups, stews, and pasta dishes.",
      price: "$9.99",
      categories: ["Sea fish"],
      sellers: "Grocery shop",
      stars: "4.8",
    },
    {
      id: "Fish-7",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1286%2FShellfish4.jpg&w=3840&q=75",
      itemname: "Black Oyster",
      weight: "1lbs",
      description:
        "Black oysters are a type of shellfish that are known for their briny flavor and firm texture. They are commonly used in seafood dishes and can be eaten raw or cooked.",
      price: "$10.99",
      categories: ["Sea fish"],
      sellers: "Grocery shop",
      stars: "4.7",
    },
    {
      id: "Fish-8",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1287%2FShellfish5.jpg&w=3840&q=75",
      itemname: "lams",
      weight: "1lbs",
      description:
        "Lams are a type of shellfish that are known for their sweet and tender meat. They are commonly used in seafood dishes and can be eaten raw or cooked.",
      price: "$11.99",
      categories: ["Sea fish"],
      sellers: "Grocery shop",
      stars: "4.6",
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
          <Fishproductsfun
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
        <Fishproductpop
          product={selectproduct}
          onClose={handleclosemodal}
          addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default Fishproducts;
