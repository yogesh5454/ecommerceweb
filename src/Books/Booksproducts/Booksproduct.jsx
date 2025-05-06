import React, { useState } from "react";
import Booksproductfun from "./Booksproductfun";
import Booksproductpop from "./Booksproductpop";
import { useCart } from "../../context/CartContext";
const Booksproduct = () => {
  const [selectproduct, setselectproduct] = useState(null);
  const { addToCart } = useCart();
  const products = [
    {
      id: "book-1",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1669%2FComic-Books-7.jpg&w=3840&q=100",
      itemname: "Superhero & Aliens",
      author: "Brandon T. Trigg",
      price: "$300",
      language: ["English", "Spanish"],
      booktype: "Hardcover Book",
      description:
        "A comic book, also called ridiculous book, ridiculous magazine or simply ridiculous, is a publication that consists of comics art in the form of successional adjoining panels that represent individual scenes.",
      category: "comic Books",
      Tags: "First edition,space,fantasy",
    },
    {
      id: "book-2",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1668%2FComic-Books-6.jpg&w=3840&q=100",
      itemname: "The Adventures of Pin Pin",
      author: "Jenifer Wickham",
      price: "$200",
      language: ["English", "French"],
      booktype: "Paperback Book",
      description:
        "A comic book, also called ridiculous book, ridiculous magazine or simply ridiculous, is a publication that consists of comics art in the form of successional adjoining panels that represent individual scenes.",
      category: "Comic books",
      Tags: "cartoon,kids story,fantasy",
    },
    {
      id: "book-3",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1667%2FComic-Books-5.jpg&w=3840&q=100",
      itemname: "The Picy Mouse Story",
      author: "Jimmy P Bullard",
      price: "$150",
      language: ["English", "Spanish"],
      booktype: "Hardcover Book",
      description:
        "A comic book, also called ridiculous book, ridiculous magazine or simply ridiculous, is a publication that consists of comics art in the form of successional adjoining panels that represent individual scenes.",
      category: "Comic books",
      Tags: "adventure, kids, fun",
    },
    {
      id: "book-4",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1666%2FComic-Books-4.jpg&w=3840&q=100",
      itemname: "Chacha Chowdhury and Pabu",
      author: "Kelly white",
      price: "$250",

      language: ["English", "Hindi"],
      booktype: "Paperback Book",
      description:
        "A comic book, also called ridiculous book, ridiculous magazine or simply ridiculous, is a publication that consists of comics art in the form of successional adjoining panels that represent individual scenes.",
      category: "Comic books",
      Tags: "adventure, humor",
    },
    {
      id: "book-5",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1665%2FComic-Books-3.jpg&w=3840&q=100",
      itemname: "The Space Hero Part one",
      author: "Sharone C Stone",
      price: "$150",
      language: ["English", "Spanish"],
      booktype: "Hardcover Book",
      description:
        "A comic book, also called ridiculous book, ridiculous magazine or simply ridiculous, is a publication that consists of comics art in the form of successional adjoining panels that represent individual scenes.",
      category: "Comic books",
      Tags: "adventure, kids, fun",
    },
    {
      id: "book-6",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1664%2FComic-Books-2.jpg&w=3840&q=100",
      itemname: "The Padman Begins",
      author: "Dorian P Price",
      price: "$200",
      language: ["English", "Spanish"],
      booktype: "Hardcover Book",
      description:
        "A comic book, also called ridiculous book, ridiculous magazine or simply ridiculous, is a publication that consists of comics art in the form of successional adjoining panels that represent individual scenes.",
      category: "Comic books",
      Tags: "adventure, kids, fun",
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
      <div className="p-8">
        <h1 className="text-4xl font-semibold">Best Selling Products</h1>
      </div>

      <div>
        <div className="px-8 flex flex-wrap gap-6">
          {products.map((product, key) => (
            <Booksproductfun
              key={product.id}
              imageurl={product.imageurl}
              itemname={product.itemname}
              author={product.author}
              price={product.price}
              onproductclick={() => handleproductclick(product)}
            />
          ))}
        </div>
        {selectproduct && (
          <Booksproductpop product={selectproduct} 
          onClose={handleclosemodal}
          addToCart={addToCart} />
        )}
      </div>
      <div className="text-center my-6">
          <button className="border border-green-700 bg-green-700 text-white rounded-sm p-3">
            Load More
          </button>
        </div>
    </div>
  );
};

export default Booksproduct;
