import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 px-6 md:px-20 py-10 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div>
          <img className='mb-6' src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=3840&q=75" alt="" />
          <p className="mb-2">NY State Thruway, New York, USA</p>
          <p className="mb-2">demo@demo.com</p>
          <p className="mb-4">+129290122122</p>
          <div className="flex space-x-3">
            <a href="#"><FaFacebookF className="text-xl hover:text-green-600" /></a>
            <a href="#"><FaTwitter className="text-xl hover:text-green-600" /></a>
            <a href="#"><FaInstagram className="text-xl hover:text-green-600" /></a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-6">Explore</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Shops</a></li>
            <li><a href="#" className="hover:underline">Authors</a></li>
            <li><a href="#" className="hover:underline">Flash Deals</a></li>
            <li><a href="#" className="hover:underline">Coupon</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-6">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">FAQ & Helps</a></li>
            <li><a href="#" className="hover:underline">Vendor Refund Policies</a></li>
            <li><a href="#" className="hover:underline">Customer Refund Policies</a></li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-6">Our information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Manufacturers</a></li>
            <li><a href="#" className="hover:underline">Privacy policies</a></li>
            <li><a href="#" className="hover:underline">Terms & conditions</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="font-semibold mb-6">Subscribe Now</h3>
          <p className="text-sm mb-4">Subscribe your email for newsletter and featured news based on your interest</p>
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Write your email here"
              className="flex-1 px-3 py-2 outline-none"
            />
            <button className="bg-gray-200 px-4 py-2 hover:bg-green-600 hover:text-white transition">
              &gt;
            </button>
          </div>
        </div>
      </div>

   
      <div className="mt-10 text-sm text-gray-500 text-center">
        ©2025 <span className="font-semibold text-black">Pickbazar</span>. Copyright © <span className="font-semibold text-black">REDQ</span>. All rights reserved worldwide.
      </div>
    </footer>
  );
};

export default Footer;
