//import React from 'react';

import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";



const Orders = () => {
    const cart= useLoaderData();
    console.log('order',cart)
    return (
         <div className="shop-container">
            <div className="products-container">
            <h2>orders:{cart.length}</h2>
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
           
         </div>
    );
};

export default Orders;