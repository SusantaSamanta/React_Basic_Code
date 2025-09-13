import React from 'react';
import './FoodCard.css';



const FoodCard = ({ foodDataArr }) => {

  // foodDataArr receive from RestaurantMenu component

  // foodDataArr.map



  return (
    <>
      <div id='foodCardBody'>
        <p id='foodId'>{foodDataArr.id}</p>
        <p id='category'>{foodDataArr.category}</p>
        <p id='foodName'>{foodDataArr.name}</p>
        <p id='foodDsc'>{foodDataArr.description}</p>
        <div id='dscUnderLine'>
          <p></p>
          <span>READ</span>
        </div>
        <div id='foodImgContainer'>
          <img id='foodImg' src={foodDataArr.image} alt='foodImage' />
        </div>
        <div id='foodOrderButtonContainer'>
          <p>Price : <span id='foodPrice'>{foodDataArr.price}</span></p>
          <button id='foodOrderButton'>Order now</button>
        </div>
      </div>
    </>
  )
}

export default FoodCard;