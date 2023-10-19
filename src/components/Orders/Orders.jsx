//import React from 'react';

import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Order.css'
import { useState } from "react";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";



const Orders = () => {
    const savedCart= useLoaderData();
    const[cart, setCart] = useState(savedCart);

    const handleRemoveFromCart =(id)=>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
         removeFromDb(id);
    }

    const handleClearCart=()=>{
        setCart([])
        deleteShoppingCart();
    }

    //console.log('order',savedCart)
    return (
         <div className="shop-container">
            <div className="review-container">
            {
                savedCart.map(product => <ReviewItem
                key={product.id}
                product={product}
                handleRemoveFromCart={handleRemoveFromCart}
                ></ReviewItem>)
            }
            </div>

            <div className="cart-container">
                <Cart 
                handleClearCart={handleClearCart}
                cart={cart}></Cart>
            </div>
           
         </div>
    );
};

export default Orders;