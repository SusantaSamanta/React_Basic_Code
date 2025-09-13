import React from 'react';
import '../style/FoodCard.css';



const FoodCard = ({ foodDataEle, addToCartFun }) => {

  const { id, name, description, image, category, price } = foodDataEle;

  return (
    <>
      <div id='foodCardBody' key={id}>
        <p id='foodId'>{id}</p>
        <p id='category'>{category}</p>
        <p id='foodName'>{name}</p>
        <p id='foodDsc'>{description}</p>
        <div id='dscUnderLine'>
          <p></p>
          <span>READ</span>
        </div>
        <div id='foodImgContainer'>
          <img id='foodImg' src={image} alt='foodImage' />
        </div>
        <div id='foodOrderButtonContainer'>
          <p>Price : <span id='foodPrice'>{price}</span></p>
          <button id='foodOrderButton' onClick={() => { addToCartFun(id) }}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  )
}

export default FoodCard;