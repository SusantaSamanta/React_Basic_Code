import React, { useState, useEffect } from 'react';
import './CartItemsCard.css';

const CartItemsCard = ({cartCount, setCartCount, cartItems, setCartItems }) => {

    const [updatedArrForCart, setUpdatedArrForCart] = useState();

    let groupItems = {};     // group all same type food defending on id
    for (let i of cartItems) {
        const key = i.id;
        groupItems[key] ??= [];
        groupItems[key].push(i);
    }
    groupItems = Object.values(groupItems);  //  make it array of object group by id  


    let updatedArr = [];

    groupItems.map((i) => {    // depending on this grouped array create an final array of object withe id, name, ..., quantity, total
        let totalPrice = (i.length)*parseInt(i[0].price)
        const obj = {
            id : i[0].id,
            name : i[0].name,
            category : i[0].category,
            image : i[0].image,
            price : i[0].price,
            quantity: i.length,
            total: totalPrice,
        }
        updatedArr.push(obj)
    })
    // console.log(updatedArr);

    useEffect(() => {
        setUpdatedArrForCart(updatedArr);
    }, [cartItems]);
    
    
    
    const removeCartItems = (quantity, ID) => {

        // decrement cartCount 
        
        setCartCount(cartCount - quantity)

        const newArr = updatedArrForCart.filter(i => {
            return i.id != ID;         /// remove the item which delete by it's id
        })
        console.log(newArr);
        setCartItems(newArr);
    }

    


    

    if (cartItems.length) {  // if cart item present then : 
        return (
            <>
                {
                    updatedArrForCart.map((item) => {
                        return (
                            <div id='cartItemsCard' key={item.id}>
                                <div id='cartImgContainer'>
                                    <img id='cartImg' src={item.image} alt='foodImage' />
                                </div>
                                <div id='cartItemDetail'>
                                    <p id='category'>{item.category}t</p>
                                    <p id='cartFoodName'>{item.name}</p>
                                    <div id='removeItemSection'>
                                        <div id='priceContainer'>
                                            <p>Price : <span id='foodPrice'>{item.price}</span></p>
                                            <p>Quantity : <span id='foodPrice'>{item.quantity}</span></p>
                                            <p>Total : <span id='foodPrice'>{item.total}</span></p>
                                        </div>
                                        <button id='removeBtn' onClick={() => removeCartItems(item.quantity, item.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    } else {   // if cart items are not present 
        return (
            <>
                <h1>No cart present</h1>
            </>
        )
    }


}

export default CartItemsCard