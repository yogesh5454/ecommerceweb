import React from 'react'
import Head from "./Heading/head";
import Productsnav from './products/productsnav';
import Products from './products/products';

const Clothing = () => {
  return (
    <div>
         <Head />
         <div className='flex'>
    <Productsnav/>
    <Products/>
         </div>
        
    </div>
  )
}

export default Clothing;
