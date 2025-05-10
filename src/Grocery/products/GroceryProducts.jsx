import React, { useEffect, useState } from "react";
import Productfun from "./Productfun";
import Groceryproductpop from "./Groceryproductpop";
import { useCart } from "../../context/CartContext";
const Products = () => {
  const [selectproduct, setselectproduct] = useState(null);
  const { addToCart } = useCart();

  const products = [
    {
      id: "grocery-1", 
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
      itemname: "Apples",
      weight: "1lb",
      price: "$1.60",
      description:
        "An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). ",
      Categories: ["Fruits & vegetables", "Fruits"],
      star: "4.67",
      seller: "Grocery Bazar",
    },
    {
      id: "grocery-2",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2FBabySpinach.jpg&w=3840&q=75",
      itemname: "Baby Spinach",
      weight: "5pfund",
      price: "$2.50",
      description:
        "Baby spinach is a tender, leafy green vegetable that is harvested early, before the leaves mature.",
      Categories: ["Fruits & vegetables", "Vegetables"],
      star: "4.80",
      seller: "Fresh Greens",
    },
    {
      id: "grocery-3",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F3%2Fblueberries.jpg&w=3840&q=75",
      itemname: "Blueberries",
      weight: "1lb",
      price: "$3.00",
      description:
        "Blueberries are small, round, dark blue berries that are sweet and nutritious.",
      Categories: ["Fruits & vegetables", "Fruits"],
      star: "4.90",
      seller: "Berry Farm",
    },
    {
      id: "grocery-4",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F4%2FBrusselsSprouts.jpg&w=3840&q=75",
      itemname: "Brussels Sprouts",
      weight: "1lb",
      price: "$2.80",
      description:
        "Brussels sprouts are a type of vegetable that resemble miniature cabbages and are known for their health benefits.",
      Categories: ["Fruits & vegetables", "Vegetables"],
      star: "4.75",
      seller: "Green Valley",
    },
    {
      id: "grocery-5",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F5%2FCelerySticks.jpg&w=3840&q=75",
      itemname: "celery sticks",
      weight: "1lb",
      price: "$1.50",
      description:
        "Celery sticks are long, crunchy stalks of the celery plant that are often eaten raw or used in cooking.",
      Categories: ["Fruits & vegetables", "Vegetables"],
      star: "4.60",
      seller: "Fresh Harvest",
    },
  ];

  const handleProductClick = (product) => {
    setselectproduct(product);
  };
  
  const handleclosemodal = () => {
    setselectproduct(null);
  };

  useEffect(() => {
    if (selectproduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectproduct]);
  
  return (
    <>
      <div className="bg-gray-100 p-6 ">
        <div className="flex flex-wrap gap-4">
          {products.map((product) => (
            <Productfun
              key={product.id}
              id={product.id}
              imageurl={product.imageurl}
              itemname={product.itemname}
              weight={product.weight}
              price={product.price}
              onproductclick={() => handleProductClick(product)}
            />
          ))}
        </div>
        {selectproduct && (
          <Groceryproductpop 
            product={selectproduct} 
            onclose={handleclosemodal} 
            addToCart={addToCart} 
          />
        )}
      </div>
    </>
  );
};

export default Products;