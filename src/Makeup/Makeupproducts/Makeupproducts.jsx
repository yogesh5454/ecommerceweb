import React, { useState } from "react";
import Makeupproductfun from "./Makeupproductfun";
import Makeupproductpop from "./Makeupproductpop";
import { useCart } from "../../context/CartContext";

const Makeupproducts = () => {
  const [selectproduct, setselectproduct] = useState(null);
  const { addToCart } = useCart();

  const products = [
    {
      id: "Makeup-1",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F22%2FBourjois.jpg&w=3840&q=75",
      itemname: "Bourjois Little Round Pot Blusher",
      price: "$8.00",
      description:
        "Bourjois Little Round Pot Blusher has been keeping women beautiful for generations. Made in an exclusive baked technology process, its incredibly transparent & light texture formula is easy to apply and blends impeccably.",
      categories: ["face", "blusher"],
      sellers: "makeup shop",
    },
    {
      id: "Makeup-2",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F45%2FFenty_Beauty.jpg&w=3840&q=75",
      itemname: "Fenty Beauty Moroccan Spice Eyeshadow Palette",
      price: "$10.00",
      description:
        "Fenty Beauty Moroccan Spice Eyeshadow Palette is a limited-edition eyeshadow palette with 16 warm, spicy shades in matte, shimmer, and glitter finishes. The palette features a mix of neutral and bold colors that can be used to create a variety of looks.",
      categories: ["eye", "eyeshadow"],
      sellers: "makeup studio",
    },
    {
      id: "Makeup-3",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F46%2FStila.jpg&w=3840&q=75",
      itemname: "Stila Magnificent Metals Glitter Glow Liquid Eye Shadow",
      price: "$12.00",
      description:
        "Stila Magnificent Metals Glitter Glow Liquid Eye Shadow is a long-wearing, high-shine liquid eyeshadow that glides on smoothly and dries quickly. The formula is infused with a blend of glitter and metallic pigments that create a stunning, multi-dimensional effect.",

      categories: ["eye", "glitter"],
      sellers: "makeup studio",
    },
    {
      id: "Makeup-4",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F68%2FBLING.jpg&w=3840&q=75",
      itemname: "Bling Thing Liquid Lipcolour",
      price: "$9.00",
      description:
        "Bling Thing Liquid Lipcolour is a long-wearing, high-shine liquid lipstick that glides on smoothly and dries quickly. The formula is infused with a blend of glitter and metallic pigments that create a stunning, multi-dimensional effect.",
      categories: ["lip", "lipgloss"],
      sellers: "makeup shop",
    },
    {
      id: "Makeup-5",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F83%2Fyoungblood-casablanca.jpg&w=3840&q=75",
      itemname: "Young Blood Lipstick",
      price: "$15.00",
      description:
        "Young Blood Lipstick is a luxurious, long-wearing lipstick that glides on smoothly and provides full coverage. The formula is infused with a blend of natural oils and waxes that nourish and hydrate the lips.",
      categories: ["lip", "lipstick"],
      sellers: "makeup shop",
    },
    {
      id: "Makeup-6",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F87%2Fskin_serum.jpg&w=3840&q=75",
      itemname: "Private Doctor Define Minus Serum",
      price: "$20.00",
      description:
        "Private Doctor Define Minus Serum is a lightweight, fast-absorbing serum that helps to reduce the appearance of fine lines and wrinkles. The formula is infused with a blend of antioxidants and peptides that nourish and protect the skin.",

      categories: ["Accessories"],
      sellers: "skincare shop",
    },
    {
      id: "Makeup-7",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F93%2Fpacific_shaving_co._natural_shaving_cream.jpg&w=3840&q=75",
      itemname: "Pacific Shaving Co. Natural Shaving Cream",
      price: "$5.00",
      description:
        "Pacific Shaving Co. Natural Shaving Cream is a lightweight, fast-absorbing shaving cream that helps to reduce the appearance of razor burn and irritation. The formula is infused with a blend of natural oils and extracts that nourish and protect the skin.",
      categories: ["Shaving needs"],
      sellers: "shaving shop",
    },
    {
      id: "Makeup-8",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F94%2Fabsolute_plus_Meat_Dental_Set_.jpg&w=3840&q=75",
      itemname: "Absolute Plus Meat Dental Set",
      price: "$8.00",
      description:
        "Absolute Plus Meat Dental Set is a complete dental care set that includes a toothbrush, toothpaste, and mouthwash. The formula is infused with a blend of natural ingredients that help to whiten and brighten the teeth.",
      categories: ["oral care"],
      sellers: "oral care shop",
    },
    {
      id: "Makeup-9",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F97%2Fgarnier_pure_active.jpg&w=3840&q=75",
      itemname: "Garnier Pure Active facewash",
      price: "$10.00",
      description:
        "Garnier Pure Active facewash is a gentle, foaming face wash that helps to remove dirt, oil, and makeup. The formula is infused with a blend of natural ingredients that help to cleanse and purify the skin.",
      categories: ["face", "facial care "],
      sellers: "facial care shop",
    },
    {
      id: "Makeup-10",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F100%2Faveeno_baby_shampoo.jpg&w=3840&q=75",
      itemname: "Aveeno Baby Shampoo",
      price: "$12.00",
      description:
        "Aveeno Baby Shampoo is a gentle, tear-free shampoo that helps to cleanse and nourish the hair and scalp. The formula is infused with a blend of natural ingredients that help to soothe and protect the skin.",
      categories: ["bath & oil"],
      sellers: "bath & oil shop",
    },
    {
      id: "Makeup-11",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F102%2Feo_body_lotion.jpg&w=3840&q=75",
      itemname: "Aveeno Baby Lotion",
      price: "$15.00",
      description:
        "Aveeno Baby Lotion is a gentle, moisturizing lotion that helps to hydrate and nourish the skin. The formula is infused with a blend of natural ingredients that help to soothe and protect the skin.",
      categories: ["bath & oil"],
      sellers: "bath & oil shop",
    },
  ];

  const handleproductclick = (product) => {
    setselectproduct(product);
  };

  const handleclosemodal = () => {
    setselectproduct(null);
  };
  return (
    <div>
      {" "}
      <div className="flex flex-wrap bg-gray-200 p-8 gap-3">
        {products.map((product, index) => (
          <Makeupproductfun
            key={index}
            imageurl={product.imageurl}
            itemname={product.itemname}
            price={product.price}
            onproductclick={() => handleproductclick(product)}
          />
        ))}
      </div>
      ;
      {selectproduct && (
        <Makeupproductpop product={selectproduct} onClose={handleclosemodal} addToCart={addToCart} />
      )}
    </div>
  );
};

export default Makeupproducts;
