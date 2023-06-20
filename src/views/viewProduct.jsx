import React from "react";
import Sidebar from "../components/sideBar";
import MenuBar from "../components/menuBar";
import Footer from "../components/footer";


const ViewProduct = () => {
    return (
        <div>
    <Sidebar />
    <MenuBar />
    <img src={error_404} className=" w-2/3 h-2/3 mt-72 mx-72" />
    <div className="w-full h-1.5 bg-[#FF7800]">
    </div>
    <Footer />
        </div>
    );
};


export default ViewProduct;
