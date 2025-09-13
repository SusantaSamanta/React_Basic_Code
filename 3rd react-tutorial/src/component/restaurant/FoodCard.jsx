import React from 'react';
import './FoodCard.css';



const FoodCard = ({ foodDataArr, cartCount, setCartCount, cartItems, setCartItems }) => {


  return (
    <>
      <div id='foodCardBody' key={foodDataArr.id}>
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
          <button id='foodOrderButton' onClick={() => {
            setCartCount(cartCount + 1);
            const cartItemObj = {
              id: foodDataArr.id,
              category: foodDataArr.category,
              name: foodDataArr.name,
              image: foodDataArr.image,
              price: foodDataArr.price,
            }
            setCartItems([...cartItems, cartItemObj]);
          }}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  )
}

export default FoodCard;