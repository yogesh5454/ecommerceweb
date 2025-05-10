import React, { useState } from 'react'
import { useCart } from "../../../../context/CartContext";
import Fruitsproductsfun from './Fruitsproductsfun';
import Fruitsproductspop from './Fruitsproductspop';

const Fruitsproducts = () => {
     const [selectproduct, setselectproduct] = useState(null);
      const { addToCart } = useCart();
      
    const products=[
        {
            id:"Fruits-1",
            imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1273%2FApples-Pears-%25281%2529.jpg&w=3840&q=75",
            itemname:"Fresh Apples ",
            weight:"2lbs",
            description:"An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.",
            price:"$2.99",
            categories:["fruits"],
            sellers:"Grocery shop",
            stars:"4.5",
        },{
            idL:"Fruits-2",
            imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1266%2Fkiwifruit-%25282%2529.jpg&w=3840&q=75",
            itemname:"Fresh Kiwi",
            weight:"2lbs",
            description:"The kiwifruit (Actinidia deliciosa), also known as the Chinese gooseberry, is a fruit of a woody vine in the genus Actinidia. The kiwifruit is edible and has a sweet, tangy flavor.",
            price:"$4.99",
            categories:["fruits"],
            sellers:"Grocery shop",
            stars:"4.7",
        },{
            id:"Fruits-3",
            imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1263%2Fblueberries-%25281%2529.jpg&w=3840&q=75",
            itemname:"Fresh Blueberries",
            weight:"2lbs",
            description:"Blueberries are perennial flowering plants that produce blue or purple berries. They are native to North America and are known for their sweet flavor and high antioxidant content.",
            price:"$3.99",
            categories:["fruits"],
            sellers:"Grocery shop",
            stars:"4.8",
        },{
            id:"Fruits-4",
            imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1272%2Fstrawberries-%25282%2529.jpg&w=3840&q=75",
            itemname:"Fresh Strawberries",
            weight:"2lbs",
            description:"Strawberries are a widely appreciated fruit, cultivated worldwide for their fruit. They are a hybrid species that originated in Europe and North America.",
            price:"$3.49",
            categories:["fruits"],
            sellers:"Grocery shop",
            stars:"4.6",
        },{
            id:"Fruits-5",
            imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1253%2Fgrapefruits.jpg&w=3840&q=75",
            itemname:"Fresh Grapefruit",
            weight:"2lbs",
            description:"Grapefruit is a subtropical citrus tree known for its sour to semi-sweet fruit. It is a hybrid between the sweet orange and the pomelo, and is commonly consumed fresh or as juice.",
            price:"$2.49",
            categories:["fruits"],
            sellers:"Grocery shop",
            stars:"4.4",
            
        },{
            id:"Fruits-6",
            imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1262%2FOranges.jpg&w=3840&q=75",
            itemname:"Fresh Oranges",
            weight:"2lbs",
            description:"Oranges are a type of citrus fruit that are known for their sweet and tangy flavor. They are a good source of vitamin C and are commonly consumed fresh or as juice.",
            price:"$2.99",
            categories:["fruits"],
            sellers:"Grocery shop",
            stars:"4.5",
        },{
            id:"Fruits-7",
            imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1225%2Fapricots-1.jpg&w=3840&q=75",
            itemname:"Fresh Apricots",
            weight:"2lbs",
            description:"Apricots are a type of stone fruit that are known for their sweet and tart flavor. They are commonly used in desserts, jams, and as a fresh snack.",
            price:"$3.49",
            categories:["fruits"],
            sellers:"Grocery shop",
            stars:"4.6",
        },{
            id:"Fruits-8",
            imageurl:"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1205%2FBananas.jpg&w=3840&q=75",
            itemname:"Fresh Bananas",
            weight:"2lbs",
            description:"Bananas are a tropical fruit that are known for their sweet flavor and soft texture. They are a good source of potassium and are commonly consumed fresh or in smoothies.",
            price:"$1.99",
            categories:["fruits"],
            sellers:"Grocery shop",
            stars:"4.7",

        }
    ]
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
          <Fruitsproductsfun
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
        <Fruitsproductspop
          product={selectproduct}
          onClose={handleclosemodal}
          addToCart={addToCart}
        />
      )}
    </div>
  )
}

export default Fruitsproducts
