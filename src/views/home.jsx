import Sidebar from "../components/sideBar";
import MenuBar from "../components/menuBar";
import Productcard from "../components/productcard";
import React, { useEffect, useState } from 'react'
import Footer from "../components/footer";
import StatCard from "../components/statCard";
import Hero from "../components/hero";

function Home() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=12')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])

return (
    <div >
    <Sidebar />
    <MenuBar />
    <Hero />
    <div className="w-full h-0.5 bg-[#FF7800]"></div>
    {
        products.length > 0 ? 
        <Productcard products={products} /> 
        :
        <div>Loading.....</div>
      }
      <div className="w-full h-0.5 bg-[#FF7800]"></div>
    <StatCard />
    <div className="w-full h-1.5 bg-[#FF7800]"></div>
    <Footer />
      </div>
 
  );
}

export default Home;
