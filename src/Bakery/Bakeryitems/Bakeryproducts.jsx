import React, { useState } from "react";
import Bakeryproductsfun from "./Bakeryproductsfun";
import Bakeryproductspop from "./Bakeryproductspop";
import { useCart } from "../../context/CartContext";
const Bakeryproducts = () => {
    const [selectproduct, setselectproduct] = useState(null)
    const {addToCart}=useCart()
  const products = [
    {
      id: "Bakery-1",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F489%2FJuice-5_eqrtuu.jpg&w=3840&q=75",
      itemname: "Ritai Organic Orange Juice ",
      weight: "200ml",
      description:
        "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice",
      price: "$1.80",
      categories: "juice",
      sellers: "Bakery shop",
      stars: "4.5",
    },
    {
      id: "Bakery-2",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F494%2FJuice1_nc4tbk.jpg&w=3840&q=75",
      itemname: "Kirkland Cranberry Juice Cocktail",
      weight: "200ml",
      description:
        "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice",
      price: "$2.00",
      categories: "juice",
      sellers: "Bakery shop",
      stars: "3.5",
    },
    {
      id: "Bakery-3",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F495%2FCoffee_Tea_oo00oz.jpg&w=3840&q=75",
      itemname: "Freshly Brewed Organic Green Tea",
      description:
        "Tea is an aromatic beverage prepared by pouring boiling or hot water over cured or fresh tea leaves. After water, it is the most widely consumed drink in the world.",
      price: "$2.50",
      categories: "Coffee & Tea",
      sellers: "Bakery shop",
      stars: "4",
    },
    {
      id: "Bakery-4",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F498%2FCoffee_Tea-6_wlaqgp.jpg&w=3840&q=75",
      itemname: "Nescafe Clasico Instant Coffee",
      description:
        "Coffee tea refers to herbal tea made from non-bean parts of the coffea (coffee plant), and may refer to: Coffee-leaf tea · Coffee cherry tea. Ground coffee, brewed",
      price: "$0.70",
      categories: "Coffee & Tea",
      sellers: "Bakery Shop",
      stars: "4.5",
    },
    {
      id: "Bakery-5",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F502%2FCookies-4_vmbpqm.jpg&w=3840&q=75",
      itemname: "Raspberry Crumble Cookies ",
      weight: "300g",
      description:
        "A cookie is a baked or cooked food that is typically small, flat and sweet. It usually contains flour, sugar and some type of oil or fat. It may include other ingredients such as raisins, oats, chocolate chips, nuts.",
      price: "$3.50",
      categories: "Cookies",
      sellers: "Bakery shopp",
      stars: "4",
    },
    {
      id: "Bakery-6",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F836%2FCookies-5_oire6k.jpg&w=1080&q=75",
      itemname: "Freshly Baked Raspberry Cookies",
      weight: "250g",
      description:
        "A cookie is a baked or cooked food that is typically small, flat and sweet. It usually contains flour, sugar and some type of oil or fat. It may include other ingredients such as raisins, oats, chocolate chips, nuts.",
      price: "$4.00",
      categories: "Cokkies",
      sellers: "Bakery Shop",
      stars: "5",
    },
    {
      id: "Bakery-7",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F513%2FRound_Cake-2_cczqay.jpg&w=3840&q=75",
      itemname: "Signature German Chocolate Cake",
      weight: "4lb",
      description:
        "Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations",
      price: "$10.0",
      categories: "Round Cake",
      sellers: "Cake Shop",
      stars: "4.7",
    },
    {
      id: "Bakery-8",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F514%2FRound_Cake_on61hh.jpg&w=1080&q=75",
      itemname: "One Layer Decorated Chocolate Cake",
      weight: "1.3lb",
      description:
        "Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations",
      price: "$7.00",
      categories: "Round Cake",
      sellers: "Cake Shop ",
      stars: "4.2",
    },
    {
      id: "Bakery-9",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F517%2FPita_Bread-2_daz412.jpg&w=1080&q=75",
      itemname: "Giannis Big Pita Bread",
      weight: "5pcs",
      description:
        "Pita or pitta, is a family of yeast-leavened round flatbreads baked from wheat flour, common in the Mediterranean, Middle East, and neighboring areas",
      price: "$2.00",
      categories: "Pita Bread",
      sellers: "Bread Shop",
      stars: "5",
    },
    {
      id: "Bakery-10",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F520%2FPita_Bread-4_csc7se.jpg&w=1080&q=75",
      itemname: "Global Mediterranean Pita Bread",
      weight: "10pcs",
      description:
        "Pita or pitta, is a family of yeast-leavened round flatbreads baked from wheat flour, common in the Mediterranean, Middle East, and neighboring areas",
      price: "$3.60",
      categories: "Pita Bread",
      sellers: "Bread Shop",
      stars: "4.5",
    },
  ];

const handleproductclick=(product)=>{
    setselectproduct(product)
}

const handleclosemodal=()=>{
    setselectproduct(null)
}

  return <div className="bg-gray-200">

    <h1 className="text-center text-3xl py-5">Our Bakery Products</h1>

    <div>
        <div className="flex flex-wrap gap-3 p-6">
            {products.map((product,id)=>(
                <Bakeryproductsfun
                key={product.id}
                imageurl={product.imageurl}
                price={product.price}
                itemname={product.itemname}
                onproductclick={()=>handleproductclick(product)}
                />
            ))}
        </div>
        {selectproduct && (
            <Bakeryproductspop
            product={selectproduct}
            onClose={handleclosemodal}
            addToCart={addToCart}
            />
        )}
    </div>
  </div>;
};

export default Bakeryproducts;
