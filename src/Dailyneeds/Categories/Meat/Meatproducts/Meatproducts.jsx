import React, { useState } from "react";
import Meatproductsfun from "./Meatproductsfun";
import Meatproductspop from "./Meatproductspop";
import { useCart } from "../../../../context/CartContext";
const Meatproducts = () => {
  const [selectproduct, setselectproduct] = useState(null);
  const { addToCart } = useCart();
  
  const products = [
    {
      id: "Meat-1",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1204%2FBeef-%25281%2529.jpg&w=3840&q=75",
      itemname: "Beef kidney",
      price: "$5.99",
      weight: "1lb",
      description:
        "Beef kidney is a type of organ meat that is rich in protein and essential nutrients. It is commonly used in traditional dishes and is known for its unique flavor.",
      categories: ["meat", "organ meat"],
      sellers: "Meat shop",
      stars: "4.5",
    },
    {
      id: "Meat-2",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1328%2FChicken-%252814%2529.jpg&w=3840&q=75",
      itemname: "Chicken",
      price: "$3.99",
      weight: "1lb",
      description:
        "Chicken is a type of poultry that is rich in protein and essential nutrients. It is commonly used in a variety of dishes and is known for its versatile flavor.",
      categories: ["meat", "poultry"],
      sellers: "Meat shop",
      stars: "4.5",
    },
    {
      id: "Meat-3",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1333%2FChicken-%25289%2529.jpg&w=3840&q=75",
      itemname: "Chicken Breast",
      price: "$4.99",
      weight: "1lb",
      description:
        "Chicken breast is a type of poultry that is rich in protein and essential nutrients. It is commonly used in a variety of dishes and is known for its versatile flavor.",
      categories: ["meat", "poultry"],
      sellers: "Meat shop",
      stars: "4.5",
    },
    {
      id: "Meat-4",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1321%2FDuck-%25288%2529.jpg&w=3840&q=75",
      itemname: "Duck",
      price: "$6.99",
      weight: "1lb",
      description:
        "Duck is a type of poultry that is rich in protein and essential nutrients. It is commonly used in a variety of dishes and is known for its unique flavor.",
      categories: ["meat", "poultry"],
      sellers: "Meat shop",
      stars: "4.5",
    },
    {
      id: "Meat-5",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1232%2FLamb-%25283%2529.jpg&w=3840&q=75",
      itemname: "Lamb",
      price: "$7.99",
      weight: "1lb",
      description:
        "Lamb is a type of red meat that is rich in protein and essential nutrients. It is commonly used in a variety of dishes and is known for its unique flavor.",
      categories: ["meat", "red meat"],
      sellers: "Meat shop",
      stars: "4.5",
    },
    {
      id: "Meat-6",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1316%2FTurkey-%25283%2529.jpg&w=3840&q=75",
      itemname: "Turkey",
      price: "$8.99",
      weight: "1lb",
      description:
        "Turkey is a type of poultry that is rich in protein and essential nutrients. It is commonly used in a variety of dishes and is known for its unique flavor.",
      categories: ["meat", "poultry"],
      sellers: "Meat shop",
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
          <Meatproductsfun
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
        <Meatproductspop
          product={selectproduct}
          onClose={handleclosemodal}
          addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default Meatproducts;
