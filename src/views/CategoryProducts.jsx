import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from "../components/sideBar";
import MenuBar from "../components/menuBar";
import Footer from "../components/footer";
import Productcard from '../components/productcard'
import Categories from '../components/categorias'

const CategoryProducts = () => {
  const { name } = useParams()
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])

  if (products.length === 0) return <div>Loading.....</div>

  return (
    <div >
    <Sidebar />
    <MenuBar />
    <Categories/>
    <Productcard products={products} />
         <div className="w-full h-1.5 bg-[#FF7800]">
    </div>
    <Footer />
    </div>
  )
}

export default CategoryProducts