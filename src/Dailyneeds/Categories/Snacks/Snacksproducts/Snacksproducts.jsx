import React, { useState } from "react";
import Snacksproductsfun from "./Snacksproductsfun";
import Snacksproductspop from "./Snacksproductspop";
import { useCart } from "../../../../context/CartContext";
const Snacksproducts = () => {
  const [selectproduct, setselectproduct] = useState(null);
  const {addToCart}=useCart()
  const products = [
    {
      id: "Snacks-1",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1126%2FChips-%25281%2529.jpg&w=3840&q=75",
      itemname: "Lays Classic ",
      price: "$1.99",
      weight: "74g",
      description:
        "A snack is a small service of food and generally eaten between meals. Snacks come in a variety of forms including packaged snack foods and other processed foods, as well as items made from fresh ingredients at home.",
      categories: ["crisps", "snacks"],
      sellers: "Snacks shop",
      stars: "4.5",
    },
    {
      id: "Snacks-2",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1133%2FChips-%25288%2529.jpg&w=3840&q=75",
      itemname: "Herr's Ketchup",
      price: "$1.49",
      weight: "45g",
      description:
        "A snack is a small service of food and generally eaten between meals. Snacks come in a variety of forms including packaged snack foods and other processed foods, as well as items made from fresh ingredients at home.",
      categories: ["crisps", "snacks"],
      sellers: "Snacks shop",
      stars: "4",
    },
    {
      id: "Snacks-3",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1116%2FCold-Drinks-%25282%2529.jpg&w=3840&q=75",
      itemname: "Pepsi",
      price: "$2.59",
      weight: "330mL",
      description:
        "Through the years, Pepsi has evolved from being a cola drink to a brand that stands firmly for the all ages. Pepsi is very popular drinks to everyone. Pepsi can refresh your body and keep active.",
      categories: ["cold-drinks", "snacks"],
      sellers: "Snacks shop",
      stars: "4.5",
    },
    {
      id: "Snacks-4",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1115%2FCold-Drinks-%25281%2529.jpg&w=3840&q=75",
      itemname: "Coca-Cola",
      price: "$2.49",
      weight: "250mL",
      description:
        "Through the years, Coca-Cola has evolved from being a cola drink to a brand that stands firmly for the all ages. Coca-Cola is very popular drinks to everyone. Coca-Cola can refresh your body and keep active.",
      categories: ["cold-drinks", "snacks"],
      sellers: "Snacks shop",
      stars: "4",
    },
    {
      id: "Snacks-5",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1101%2FDry-fruits-%25282%2529.jpg&w=3840&q=75",
      itemname: "Dry Fruits",
      price: "$3.99",
      weight: "100g",
      description:
        "Dry fruits are fruits that have been dried to remove their moisture content. They are a popular snack option due to their long shelf life and concentrated flavor. Common types of dry fruits include raisins, apricots, figs, and dates.",
      categories: ["dry-fruits", "snacks"],
      sellers: "Snacks shop",
      stars: "4.2",
    },
    {
      id: "Snacks-6",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1102%2FDry-fruits-%25283%2529.jpg&w=3840&q=75",
      itemname: "Setara Pistachios ",
      price: "$4.99",
      weight: "300g",
      description:
        "Pistachios are a type of tree nut that are known for their rich flavor and numerous health benefits. They are a good source of protein, healthy fats, and various vitamins and minerals.",
      categories: ["nuts", "snacks"],
      sellers: "Snacks shop",
      stars: "4.5",
    },
    {
      id: "Snacks-7",
      imageurl:
        "https://imgs.search.brave.com/jhRnUG-H_9aJwzP2eb_nwwLUiQAL5e17TAy46GDMlGE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxdHFDUHdCVGVM/LmpwZw",
      itemname: "Wai Wai Noodles",
      price: "$0.99",
      weight: "70g",
      description:
        "Wai Wai noodles are a popular instant noodle brand that originated in Thailand. They are known for their unique flavor and chewy texture. The noodles are typically served with a spicy seasoning packet and can be enjoyed hot or cold.",
      categories: ["instant-noodles", "snacks"],
      sellers: "Snacks shop",
      stars: "4",
    },
    {
      id: "Snacks-8",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1085%2FPopcorn-%25286%2529.jpg&w=3840&q=75",
      itemname: "Cobs Natural Popcorn",
      price: "$2.99",
      weight: "100g",
      description:
        "Cobs Natural Popcorn is a brand of popcorn that is made from all-natural ingredients. It is gluten-free and contains no artificial flavors or preservatives. The popcorn is air-popped and lightly salted for a healthy snack option.",
      categories: ["popcorn", "snacks"],
      sellers: "Snacks shop",
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
          <Snacksproductsfun
            key={product.index}
            imageurl={product.imageurl}
            itemname={product.itemname}
            price={product.price}
            weight={product.weight}
            onproductclick={()=>handleproductclick(product)}
          />
        ))}
      </div>
      {selectproduct && (<Snacksproductspop
      product={selectproduct}
      onClose={handleclosemodal}
      addToCart={addToCart}
      />)}
    </div>
  );
};

export default Snacksproducts;
