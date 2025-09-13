import React from 'react';
import { useState, useEffect } from 'react';
import foodCollection from './foodCollectionApi';
import FoodCard from './FoodCard';
import './RestaurantMenu.css'
import FoodCategoryList from './FoodCategoryList';
import CartItemsCard from './CartItemsCard';

const RestaurantMenu = () => {
    const [foodData, setFoodData] = useState(foodCollection);
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {

        const categoryList = document.querySelectorAll('.menuSize');
        const cartId = document.getElementById("cartId");
        const foodContainer = document.getElementById("foodContainer");
        const cartItemsContainer = document.getElementById("cartItemsContainer");

        categoryList.forEach(btn => {
            btn.addEventListener('click', event => {

                foodContainer.style = 'display: flex';   /// if food section is open foodSection is displayed
                cartItemsContainer.style = 'display: none';   // cart section is hide 

                categoryList.forEach(i => {
                    i.classList.remove('menuActive');
                });
                event.target.classList.add('menuActive');
                cartId.classList.remove('cartIdActive')
            });
        });

        cartId.addEventListener('click', () => {
            categoryList.forEach(i => {
                i.classList.remove('menuActive');
            });
            cartId.classList.add('cartIdActive');
            foodContainer.style = 'display: none';    /// if cart section is open foodSection it will hide
            cartItemsContainer.style = 'display: flex';    /// if cart section is open cartSection is displayed
        });



    }, []);

    const filterFoodItem = (category) => {
        let filteredArr = foodCollection.filter(i => {
            return i.category == category;
        });
        setFoodData(filteredArr);
    }



    const addToCart = () => {
        // console.log(cartItems)
    }



    return (
        <>

            <div id='foodNaveBar'>
                <button id='categoryListId' className='menuSize menuActive' onClick={() => { setFoodData(foodCollection) }}>All</button>
                < FoodCategoryList filterFoodItem={filterFoodItem} foodCollection={foodCollection} />
                <button id='cartId' className='cartBtnClass' onClick={() => { addToCart() }}>Cart : {cartCount}</button>
            </div>


            <section id='foodContainer'>
                {
                    foodData.map(food => {
                        return <FoodCard foodDataArr={food} cartCount={cartCount} setCartCount={setCartCount} cartItems={cartItems} setCartItems={setCartItems} />
                    })
                }
            </section>

            <section id='cartItemsContainer'>

                <CartItemsCard cartCount={cartCount} setCartCount={setCartCount} cartItems={cartItems}  setCartItems={setCartItems} />
 
            </section>
        </>
    );
};

export default RestaurantMenu;