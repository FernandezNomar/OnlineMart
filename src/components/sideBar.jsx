import React from 'react';
import { LuPhoneCall } from "react-icons/lu";
import { FiClock } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logoOnlyMarket from "../assets/images/marca/logoOnlyMarket.png";
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const navigations = [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Products',
          path: '/products'
        },
        {
          name: 'About',
          path: '/about'
        },
        {
          name: 'Contact',
          path: '/contact'
        }
      ]
    return ( 

<div>
   <div className="bg-[#FFFFFF] absolute top-0 w-full h-24 rounded-bl-xl rounded-br-xl">
    <div className="flex justify-center items-center ">
    <ul className="flex my-3 text-start">
        <li className="mr-80 flex items-center">
      <Link to="/"><img src={logoOnlyMarket} className="w-28 h-28"></img></Link>
         <Link to="/" className="text-5xl font-black text-[#FF7800] mr-3 flex">Online </Link>
            <Link to="/" className="text-5xl font-black text-[#59291C]">Mart</Link>
        </li>
        <li className="mr-5 flex items-center">
        <h1 className=" text-[#FF7800] relative mr-3">
         <LuPhoneCall className='text-4xl'/>
            </h1>
        </li>
        <li className="mr-8 text-left text-[#FF7800] font-blod block items-center my-10">
            <h1>(555) 840-7056 - Central</h1>
            <h1>Horario <FiClock className= "text-1xl inline-block text-gray-400"/> | 9AM -- 9PM |</h1>
         </li>
        <li className="mr-5 flex items-center">
        <Link to={'/cart'} className=" text-[#FF7800] relative mr-3">
             <AiOutlineShoppingCart className='text-4xl'/></Link>  
         </li>
          <li className="mr-5 block items-center my-11">
        <h1 className="text-left text-[#1f6f20] font-medium block">Click al carrito</h1>
       <h1 className="text-right text-[#FF7800] block ">Carrito de compras</h1>
         </li>
    </ul>
        </div>
            </div>
</div>

    );
};

export default Sidebar;


