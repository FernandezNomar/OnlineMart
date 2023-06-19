import React from "react";
import Sidebar from "../components/sideBar";
import MenuBar from "../components/menuBar";
import Footer from "../components/footer";
import error_404 from "../assets/images/error_404.png";

function Cupones() {

return (
    <div >
    <Sidebar />
    <MenuBar />
    <img src={error_404} className=" w-2/3 h-2/3 mt-72 mx-72" />
    <div className="w-full h-1.5 bg-[#FF7800]">
    </div>
    <Footer />
    </div>
 
  );
}

export default Cupones;