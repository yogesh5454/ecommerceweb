import React, { useState } from "react";
import Medproductfun from "./Medproductfun";
import Medproductspop from "./Medproductspop";
import { useCart } from "../../context/CartContext";
const Medproducts = () => {
  const [selectproduct, setselectproduct] = useState(null);
const {addToCart}=useCart()
  const products = [
    {
      id: "Medicine-1",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1848%2FBaby-care-3.jpg&w=3840&q=75",
      itemname: "PureGrowth Organic Infant Formula",
      price: "$30.00",
      categories: [
        "baby care",
        "oral",
        "health & protein",
        "health & wellness",
      ],
      sellers: "Medicine pasal",
    },
    {
      id: "Medicine-2",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1854%2FBaby-care-4.jpg&w=3840&q=75",
      itemname: "NutriBlend Pro-Stage Baby Formula",
      price: "$40.00",
      categories: [
        "baby care",
        "oral",
        "health & protein",
        "health & wellness",
      ],
      sellers: "Medicine Shop",
    },
    {
      id: "Medicine-3",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1864%2Fmedicine-%2526-first-aid-5.jpg&w=3840&q=75",
      itemname: "SafeGuard Complete Home Safety Kit",
      price: "$15.00",
      categories: ["first aid kit"],
      sellers: "Medical shop",
    },
    {
      id: "Medicine-4",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1874%2Fmedicine-%2526-first-aid-4.jpg&w=3840&q=75",
      itemname: "ShieldMax Ultra Respirator Mask",
      price: "$5.00",
      categories: ["first aid kit"],
      sellers: "Mahadev pharmacy",
    },
    {
      id: "Medicine-5",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2248%2Fmedicine-%2526-first-aid.jpg&w=3840&q=75",
      itemname: "The Recover Capsules Pro-100mg",
      price: "$12.00",
      categories: ["oral", "health & protein"],
      sellers: "softech medical",
    },
    {
      id: "Medicine-6",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2261%2Fsnacks2.jpg&w=3840&q=75",
      itemname: "Beauty Verse Facewash",
      price: "$25.00",
      categories: ["face & skin care", "Feminine Hygiene"],
      sellers: "Medical Store",
    },
    {
      id: "Medicine-7",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2300%2Fsnacks11.jpg&w=3840&q=75",
      itemname: "Joolly Female Feminine Wash",
      price: "$22.00",
      categories: ["Feminine Hygiene"],
      sellers: "Medical shop",
    },
    {
      id: "Medicine-8",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2246%2Fmedicine-%2526-first-aid-1.jpg&w=1080&q=75",
      itemname: "The Recover Capsules",
      price: "$12.00",
      categories: ["health & protein"],
      sellers: "Medical hub",
    },
    {
      id: "Medicine-9",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1895%2FMother-2.jpg&w=1080&q=75",
      itemname: "MomCare Soothing Postpartum Balm",
      price: "$18.00",
      categories: ["pregnancy"],
      sellers: "medical store",
    },
  ];

  const handleproductclick = (product) => {
    setselectproduct(product);
  };
  const handleCloseModal = () => {
    setselectproduct(null);
  };
  return (
    <div>
      <div className="flex flex-wrap gap-3 bg-gray-200 p-7 min-h-screen">
        {products.map((product, index) => (
          <Medproductfun
            key={index}
            imageurl={product.imageurl}
            itemname={product.itemname}
            price={product.price}
            onProductClick={() => handleproductclick(product)}
          />
        ))}
      </div>
      {selectproduct && (
        <Medproductspop product={selectproduct} onClose={handleCloseModal}
        addToCart={addToCart} />
      )}
    </div>
  );
};

export default Medproducts;
