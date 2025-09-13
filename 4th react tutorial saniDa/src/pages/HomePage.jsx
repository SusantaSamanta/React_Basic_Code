import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import FoodCard from '../components/FoodCard';
import '../style/HomePage.css'


const HomePage = () => {

    const [foodData, setFoodData] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const getDataFun = async () => {
        const product = await Axios.get("http://localhost:5174/getdata");
        console.log(product.data);
        setFoodData(product.data);
    }


    useEffect(() => {
        getDataFun();
    }, []);

    const addToCartFun = (id) => {
        setCartItems([...cartItems, id]);
    }
    console.log(cartItems)
    

    
    return (
        <section id='foodContainer'>
            {
                foodData.map((item) => {
                    return <FoodCard foodDataEle={item} addToCartFun={addToCartFun}/>
                })

            }
        </section>
    )
}

export default HomePage;