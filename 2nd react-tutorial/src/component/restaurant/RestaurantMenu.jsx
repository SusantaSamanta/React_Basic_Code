import React from 'react';
import { useState, useEffect } from 'react';
import foodCollection from './foodCollectionApi';
import FoodCard from './FoodCard';
import './RestaurantMenu.css'
import FoodCategoryList from './FoodCategoryList';

const RestaurantMenu = () => {
    const [foodData, setFoodData] = useState(foodCollection);
    // [stateVariable,updatedFunction] 



    useEffect(() => {
        const categoryList = document.querySelectorAll('.menuSize');

        categoryList.forEach(btn => {
            btn.addEventListener('click', event => {
                categoryList.forEach(i => {
                    i.classList.remove('menuActive');
                });
                event.target.classList.add('menuActive');
            });
        });

    }, []);

    const filterFoodItem = (category) => {
        let filteredArr = foodCollection.filter(i => {
            return i.category == category;
        });
        // console.log(filteredArr);
        setFoodData(filteredArr);
    }


    return (
        <>

            {/* 
                <button className='menuSize menuActive' onClick={() => { setFoodData(foodCollection) }}>All</button>
                <button className='menuSize' onClick={() => filterFoodItem("Breakfast")}>Breakfast</button>
                <button className='menuSize' onClick={() => filterFoodItem("Lunch")}>Lunch</button>
                <button className='menuSize' onClick={() => filterFoodItem("Snack")}>Snack</button>
                <button className='menuSize' onClick={() => filterFoodItem("Dinner")}>Dinner</button> */}

            < FoodCategoryList filterFoodItem={filterFoodItem} setFoodData={setFoodData} foodCollection={foodCollection} />




            <div id='foodContainer'>
                {
                    foodData.map(food => {
                        return <FoodCard foodDataArr={food} />
                    })        //       tag_attribute={stateVariable}
                }
            </div>
        </>
    );
};

export default RestaurantMenu;