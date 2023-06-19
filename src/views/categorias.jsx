import React from "react";
import Sidebar from "../components/sideBar";
import MenuBar from "../components/menuBar";
import Footer from "../components/footer";


function Categorias() {

return (
    <div >
    <Sidebar />
    <MenuBar />
    <div className="w-full h-1.5 bg-[#FF7800]">
    </div>
    <Footer />
    </div>
      );
}

export default Categorias;
