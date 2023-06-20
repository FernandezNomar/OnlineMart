import React from "react";
import Sidebar from "../components/sideBar";
import MenuBar from "../components/menuBar";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    } from 'react-router-dom';
import Home from "./home";
import Cupones from "./cupones";
import Sucursal from "./sucursal";
import Product from "./product";
import Products from "./products";
import Cart from "./cart";
import CategoryProducts from "./CategoryProducts";


const Layout = () =>{
    return <Router>
        <div>
            <div>
       </div>
    <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/cupones"element={<Cupones />} /> 
        <Route path="/sucursal"element={<Sucursal />} />
        <Route path="/products/:id"element={<Product />} />   
        <Route path="/categories/:name" element={<CategoryProducts/>} />
        <Route path="/products" element={<Products/>} /> 
        <Route path="cart" element={<Cart/>} />
         <Route path="*" element={<div>404</div>} />
    </Routes>
    </div>
    </Router>
}

export default Layout