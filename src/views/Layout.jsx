import React from "react";
import Sidebar from "../components/sideBar";
import MenuBar from "../components/menuBar";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    } from 'react-router-dom';
import Home from "./home";
import Categorias from "./categorias";
import Cupones from "./cupones";
import Sucursal from "./sucursal";


const Layout = () =>{
    return <Router>
        <div>
            <div>
       </div>
    <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/cupones"element={<Cupones />} /> 
        <Route path="/sucursal"element={<Sucursal />} />   
    </Routes>
    </div>
    </Router>
}

export default Layout