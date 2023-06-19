import Sidebar from "../components/sideBar";
import MenuBar from "../components/menuBar";
import Productcard from "../components/productcard";
import React, { useEffect, useState } from 'react'

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
    {
        products.length > 0 ? 
        <Productcard products={products} /> 
        :
        <div>Loading.....</div>
      }
      </div>
 
  );
}

export default Home;
