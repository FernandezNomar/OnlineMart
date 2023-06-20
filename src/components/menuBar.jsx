import React from 'react';
import { TiLocation } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (
         <div>
            <div className="bg-[#ED7801] absolute top-36 w-full h-24 rounded-bl-xl rounded-br-xl">
                <div className="flex justify-center items-center ">
                <ul className="flex my-3 text-start">
                    <li className="mr-10">
                    <h1 className="text-2xl font-black uppercase text-[#59291C] block ">Nuestras</h1>
                         <Link to="/products" className="hover:text-[#762823] text-4xl font-black uppercase text-[#FFFFFF] relative">Categorias</Link>
                    </li>
                    <li className="mr-10">
                    <h1 className="text-2xl font-black uppercase text-[#59291C] block">Ofertas y</h1>
                         <Link to="/cupones" className="hover:text-[#762823]  text-4xl font-black uppercase text-[#FFFFFF] relative transition-colors">Cupones</Link>
                    </li>
                    <li className="mr-56">
                    <h1 className="text-2xl font-black uppercase text-[#59291C] block">Encuentra tu</h1>
                         <Link to="/sucursal" className="hover:text-[#762823] text-4xl font-black uppercase text-[#FFFFFF] relative flex">Sucursal 
                         <TiLocation className="ml-1 mt-1 text-4xl text-[#762823]"/></Link>
                     </li>
                     <form>
                    <li className="mr-5 my-4 w-full relative">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2"/>
                         <input type="text" className="bg white flex w-full py-2 pl-10 pr-4" /> 
                            </li>
                    </form>
                </ul>
                    </div>
                        </div>
        </div>

    );
};


export default MenuBar;

