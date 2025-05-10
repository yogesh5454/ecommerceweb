import React, { useState } from "react";
import Vegproductfun from "./Vegproductfun";
import Vegproductpop from "./Vegproductpop";
import { useCart } from "../../../../context/CartContext";

const Vegproducts = () => {
  const [selectproduct, setselectproduct] = useState(null);
  const {addToCart}=useCart()
  const products = [
    {
      id: "Veg-1",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1034%2FAllium1.jpg&w=3840&q=75",
      itemname: "Fresh chopped chives",
      weight: "1lbs",
      price: "$2.29",
      description:
        "Chives, scientific name Allium schoenoprasum, is a species of flowering plant in the family Amaryllidaceae that produces edible leaves and flowers. Their close relatives include the common onions, garlic, shallot, leek, scallion, and Chinese onion.",
      categories: ["allium", "Vegetables"],
      sellers: "Grocery Shop",
      stars: "4.5",
    },
    {
      id: "Veg-2",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1040%2FAllium8.jpg&w=3840&q=75",
      itemname: "Organic red onion ",
      weight: "2lbs",
      price: "$1.99",
      description:
        "Organic red onions are a type of onion that is grown without the use of synthetic pesticides or fertilizers. They have a deep red color and a sweet, mild flavor that makes them a popular choice for salads, sandwiches, and cooking.",
      categories: ["allium", "Vegetables"],
      sellers: "Grocery Shop",
      stars: "4.5",
    },
    {
      id: "Veg-3",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1031%2FCruciferous9.jpg&w=3840&q=75",
      itemname: "Fresh organic broccoli",
      weight: "2lbs",
      price: "$2.99",
      description:
        "Fresh organic broccoli is a nutrient-rich vegetable that is high in vitamins C and K, fiber, and antioxidants. It has a mild, slightly bitter flavor and a crunchy texture that makes it a popular choice for salads, stir-fries, and steaming.",
      categories: ["cruciferous", "Vegetables"],
      sellers: "Grocery Shop",
      stars: "4.5",
    },
    {
      id: "veg-4",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1025%2FCruciferous3.jpg&w=3840&q=75",
      itemname: "Fresh red cabbage",
      weight: "2lbs",
      price: "$1.99",
      description:
        "Fresh red cabbage is a nutrient-rich vegetable that is high in vitamins C and K, fiber, and antioxidants. It has a mild, slightly sweet flavor and a crunchy texture that makes it a popular choice for salads, slaws, and cooking.",
      categories: ["cruciferous", "Vegetables"],
      sellers: "Grocery Shop",
      stars: "4.5",
    },
    {
      id: "Veg-5",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1017%2FEdible-plant2.jpg&w=3840&q=75",
      itemname: "Small asparagus",
      weight: "1lbs",
      price: "$2.99",
      description:
        "Small asparagus is a tender and flavorful vegetable that is low in calories and high in vitamins A, C, E, and K. It has a delicate flavor and a crisp texture that makes it a popular choice for salads, stir-fries, and roasting.",
      categories: ["edible-plant", "Vegetables"],
      sellers: "Grocery Shop",
      stars: "4.5",
    },
    {
      id: "Veg-6",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1020%2FEdible-plant5.jpg&w=3840&q=75",
      itemname: "Fresh Rhubarb",
      weight: "1lbs",
      price: "$2.99",
      description:
        "Fresh rhubarb is a tart and tangy vegetable that is often used in desserts and jams. It is low in calories and high in vitamins K and C, as well as fiber. Rhubarb has a crisp texture and a bright red color that makes it a popular choice for pies, crumbles, and sauces.",
      categories: ["edible-plant", "Vegetables"],
      sellers: "Grocery Shop",
      stars: "4.5",
    },
  ];

  const handleproductclcik = (product) => {
    setselectproduct(product);
  };

  const handleclosemodal = () => {
    setselectproduct(null);
  };
  return (
    <div>
      <div className="flex flex-wrap gap-3 p-8">
        {products.map((product, index) => (
          <Vegproductfun
            key={index}
            imageurl={product.imageurl}
            itemname={product.itemname}
            price={product.price}
            weight={product.weight}
            onproductclick={() => handleproductclcik(product)}
          />
        ))}
      </div>
      {selectproduct && (
        <Vegproductpop product={selectproduct} onclose={handleclosemodal} 
        addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default Vegproducts;
