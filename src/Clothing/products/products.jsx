import { useEffect, useState } from "react";
import Productsfun from "./productfun";
import Productpop from "./productspop";
import { useCart } from "../../context/CartContext";
const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  const products = [
    {
      id: " clothing-1",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F112%2Fmango.jpg&w=3840&q=75",
      itemname: "Mango Self Striped A Line Dress",
      price: "$70",
      description:
        "Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem",
      star: "4.5",
      categories: ["Clothing", "Women Dress", "Single color"],
      seller: "Pick Bazar",
    },
    {
      id: "clothing-2",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F115%2FFOREVER_21.jpg&w=3840&q=75",
      itemname: "Forever 21 Solid Bodycon Midi Dress",
      price: "$100",
      description:
        "Grey solid woven bodycon dress, has a round neck, sleeveless, straight hem",
      star: "5",
      categories: ["Clothing", "Women Dress", "Floral"],
      seller: "Clothing Shop",
    },
    {
      id: "clothing-3",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F116%2FDOROTHY_PERKINS.jpg&w=3840&q=75",
      itemname: "Dorothy Perkins Self Striped A Line Dress",
      price: "$80",
      description:
        "Rust red self-striped knitted A-line dress, has a V-neck with button detailing, three-quarter sleeves, flared hem",
      star: "4",
      categories: ["Clothing", "Women Dress", "Single color"],
      seller: "Pick Bazar",
    },
    {
      id: "clothing-4",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F117%2FFold_over.jpg&w=3840&q=75",
      itemname: "Fold Over Collar Plain Blazers",
      price: "$120",
      description:
        "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
      star: "4.5",
      categories: ["Clothing", "Outer Wear", "Blazer"],
      seller: "Clothing Shop",
    },
    {
      id: "clothing-5",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F119%2FSolid_Notch.jpg&w=3840&q=75",
      itemname: "Solid Notch Lapel Single Button Long Sleeve Blazer",
      price: "$110",
      description:
        "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
      star: "5",
      categories: ["Clothing", "Outer Wear", "Blazer"],
      seller: "Pick Bazar",
    },
    {
      id: "clothing-6",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F120%2FNotch_Lapel.jpg&w=3840&q=75",
      itemname: "Notch Lapel Single Button Color Block Blazer",
      price: "$90",
      description:
        "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
      star: "4",
      categories: ["Clothing", "Outer Wear", "Blazer"],
      seller: "Pick Bazar",
    },
    {
      id: "clothing-7",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F121%2FNarrow_Notch.jpg&w=3840&q=75",
      itemname: "Narrow Notch Lapel Slit Pocket Plain Blazers",
      price: "$150",
      description:
        "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
      star: "4.5",
      categories: ["Clothing", "Outer Wear", "Blazer"],
      seller: "Kapada Pasal",
    },
    {
      id: "clothing-8",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F122%2FNotch_Lapel_Elastic.jpg&w=3840&q=75",
      itemname: "Notch Lapel Elastic Waist Plain Trench Coat",
      price: "$85",
      description:
        "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
      star: "4",
      categories: ["Clothing", "Outer Wear", "Blazer"],
      seller: "Pick Bazar",
    },
    {
      id: "clothing-9",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F123%2FTurn_Down.jpg&w=3840&q=75",
      itemname: "Turn Down Collar Elastic Waist Plain Trench Coat",
      price: "$100",
      description:
        "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
      star: "4.5",
      categories: ["Clothing", "Outer Wear", "Waist coat"],
    },
    {
      id: "clothing-10",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F124%2FCowl_Neck.jpg&w=3840&q=75",
      itemname: "Cowl Neck Kangaroo Pocket Color Block Hoodie",
      price: "$75",
      description:
        "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
      star: "4",
      categories: ["Clothing", "Outer Wear", "Hoodies"],
      seller: "Pick Bazar",
    },
    {
      id: "clothing-11",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F126%2FHooded_Zips.jpg&w=3840&q=75",
      itemname: "Hooded Zips Plain Long Sleeve Hoodies",
      price: "$98",
      description:
        "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
      star: "4",
      categories: ["Clothing", "Outer Wear", "Hoodies"],
      seller: "Pick Bazar",
    },
    {
      id: "clothing-12",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F127%2FLapel_Zips.jpg&w=3840&q=75",
      itemname: "Lapel Zips Plain Long Sleeve Jackets",
      price: "$120",
      description:
        "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
      star: "3.5",
      categories: ["Clothing", "Outer Wear", "hoodies"],
      seller: "Pick Bazar",
    },
    {
      id: "clothing-13",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F130%2FBOXY_CARDIGAN.jpg&w=1080&q=75",
      itemname: "Boxy Cardigan",
      price: "$150",
      description:
        "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
      star: "4",
      categories: ["Clothing", "Outer Wear", "hoodies"],
      seller: "Pick Bazar",
    },
    {
      id: "clothing-14",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F132%2FSTRETCH_COTTON.jpg&w=3840&q=75",
      itemname: "Stretch Cotton Utility Jacket With Adjustable Waist",
      price: "$130",
      description:
        "Blue and navy cotton Decima zipped cardigan from ANGLOZINE featuring a classic collar, a front zip fastening, a chest pocket, long sleeves, contrasting panels and a slim fit. This item is unisex.",
      star: "4.5",
      categories: ["Clothing", "Outer Wear", "hoodies"],
      seller: "cloth Bazar",
    },
    {
      id: "clothing-15",
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F134%2FDavid_Jones.jpg&w=1080&q=75",
      itemname: "David Jones",
      price: "$140",
      description:
        "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
      star: "4",
      categories: ["Clothing", "Outer Wear", "Blazer"],
      seller: "Hamro Bazar",
    },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProduct]);

  return (
    <>
      <div className="bg-gray-100 p-6">
        <div className="flex flex-wrap gap-3">
          {products.map((product) => (
            <Productsfun
              key={product.id}
              id={product.id}
              imageurl={product.imageurl}
              itemname={product.itemname}
              price={product.price}
              onproductclick={() => handleProductClick(product)}
            />
          ))}
        </div>
        {selectedProduct && (
          <Productpop
            product={selectedProduct}
            onClose={handleCloseModal}
            addToCart={addToCart}
          />
        )}
        <div className="text-center mt-6">
          <button className="border border-green-700 bg-green-700 text-white rounded-sm p-3">
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
