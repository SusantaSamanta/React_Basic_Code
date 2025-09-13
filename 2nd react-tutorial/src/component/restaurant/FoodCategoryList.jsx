import React from 'react'

const FoodCategoryList = ({ filterFoodItem, setFoodData, foodCollection }) => {


    let uniqueCategoryList = [...new Set(foodCollection.map(i => {
        return i.category;
    }))]     /// unique values from foodCollection array of object on category
    // console.log(uniqueCategoryList)
    uniqueCategoryList.sort();   // alphabetically sort the uniqueCategoryList array 




    return (
        <>
            <div id='foodNaveBar'>
                <button className='menuSize menuActive' onClick={() => { setFoodData(foodCollection) }}>All</button>
                {
                    uniqueCategoryList.map((i) => {
                        return (
                            <button className='menuSize' onClick={() => filterFoodItem(i)}>{i}</button>
                        )
                    })
                }

                {/* 
                <button className='menuSize' onClick={() => filterFoodItem("Breakfast")}>Breakfast</button>
                <button className='menuSize' onClick={() => filterFoodItem("Lunch")}>Lunch</button>
                <button className='menuSize' onClick={() => filterFoodItem("Snack")}>Snack</button>
                <button className='menuSize' onClick={() => filterFoodItem("Dinner")}>Dinner</button> */}

            </div>
        </>
    )
}

export default FoodCategoryList