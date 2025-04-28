import Productsfun from "./productfun";

const Products = () => {
  const products = [
    {
      id: 1,
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F112%2Fmango.jpg&w=3840&q=75",
      clothname: "Mango Self Striped A Line Dress",
      price: "$70",
    },
    {
      id: 2,
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F115%2FFOREVER_21.jpg&w=3840&q=75",
      clothname: "Forever 21 Solid Bodycon Midi Dress",
      price: "$100",
    },
    {
      id: 3,
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F116%2FDOROTHY_PERKINS.jpg&w=3840&q=75",
      clothname: "Dorothy Perkins Self Striped A Line Dress",
      price: "$80",
    },
    {
      id: 4,
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F117%2FFold_over.jpg&w=3840&q=75",
      clothname: "Fold Over Collar Plain Blazers",
      price: "$120",
    },
    {
      id: 5,
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F119%2FSolid_Notch.jpg&w=3840&q=75",
      clothname: "Solid Notch Lapel Single Button Long Sleeve Blazer",
      price: "$110",
    },
    {
      id: 6,
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F120%2FNotch_Lapel.jpg&w=3840&q=75",
      clothname: "Notch Lapel Single Button Color Block Blazer",
      price: "$90",
    },
    {
      id: 7,
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F121%2FNarrow_Notch.jpg&w=3840&q=75",
      clothname: "Narrow Notch Lapel Slit Pocket Plain Blazers",
      price: "$150",
    },
    {
      id: 8,
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F122%2FNotch_Lapel_Elastic.jpg&w=3840&q=75",
      clothname: "Notch Lapel Elastic Waist Plain Trench Coat",
      price: "$85",
    },
    {
      id: 9,
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F123%2FTurn_Down.jpg&w=3840&q=75",
      clothname: "Turn Down Collar Elastic Waist Plain Trench Coat",
      price: "$100",
    },
    {
      id: 10,
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F124%2FCowl_Neck.jpg&w=3840&q=75",
      clothname: "Cowl Neck Kangaroo Pocket Color Block Hoodie",
      price: "$75",
    },
    {
      id: 11,
      imageurl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F126%2FHooded_Zips.jpg&w=3840&q=75",
      clothname: "Hooded Zips Plain Long Sleeve Hoodies",
      price: "$98",
    },
  ];

  return <>
  
  <div className="bg-gray-100 p-6 ">
    <div className=" flex flex-wrap  gap-3">
      {products.map((product) => (
        <Productsfun
          key={product.id}
          id={product.id}
          imageurl={product.imageurl}
          clothname={product.clothname}
          price={product.price}
        />
      ))}

     
    </div>
<div className="text-center mt-6" ><button className="border border-green-700 bg-green-700 text-white rounded-sm p-3">Load More</button></div>
    </div>
    </>
  
};

export default Products;
