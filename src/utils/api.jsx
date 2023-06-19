import React, {useEffect, useState} from 'react';
import Productcard from '../components/productcard';

const Api = async () => {

    const [products, setproducts] = useState({});

    useEffect(() => {
     const fetchProducts = async () => {
     const response = await  fetch('https://fakestoreapi.com/products')
     const data =  await response.json()
        console.log(data)
        setproducts(data)
 }
    fetchProducts()
    }, []);

    return (
    <div>    
        {
            products.length > 0 ?
            <Productcard products = {products} />
            :
            <div> Loading........</div>
        }
    </div>
    );
};



export default Api;
