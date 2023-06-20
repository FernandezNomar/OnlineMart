import React, { useEffect, useState } from 'react'
import Categories from '../components/categorias'
import Productcard from '../components/productcard'
import Sidebar from "../components/sideBar";
import MenuBar from "../components/menuBar";
import Footer from "../components/footer";

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div>
    <Sidebar />
    <MenuBar />
      <Categories/>
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-[#FF7800]-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL PRODUCTS</h1>
      </div>
      {
        products.length > 0 ?
        <Productcard products={products}/>
        :
        <div>Loading.....</div>
      }
               <div className="w-full h-1.5 bg-[#FF7800]">
    </div>
    <Footer />
    </div>
  )
}

export default Products