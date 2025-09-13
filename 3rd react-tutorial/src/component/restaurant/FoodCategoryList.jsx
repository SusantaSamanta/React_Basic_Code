import React from 'react'

const FoodCategoryList = ({ filterFoodItem, foodCollection }) => {


    let uniqueCategoryList = [...new Set(foodCollection.map(i => {
        return i.category;
    }))]     /// unique values from foodCollection array of object on category
    // console.log(uniqueCategoryList)
    uniqueCategoryList.sort();   // alphabetically sort the uniqueCategoryList array 




    return (
        <>
            {
                uniqueCategoryList.map((i) => {
                    return (
                        <button id='categoryListId' className='menuSize' onClick={() => filterFoodItem(i)}>{i}</button>
                    )
                })
            }

            {/* 
                <button className='menuSize' onClick={() => filterFoodItem("Breakfast")}>Breakfast</button>
                <button className='menuSize' onClick={() => filterFoodItem("Lunch")}>Lunch</button>
                <button className='menuSize' onClick={() => filterFoodItem("Snack")}>Snack</button>
                <button className='menuSize' onClick={() => filterFoodItem("Dinner")}>Dinner</button> */}

        </>
    )
}

export default FoodCategoryList