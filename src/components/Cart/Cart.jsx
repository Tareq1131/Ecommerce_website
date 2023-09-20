//import React from 'react';
import './Cart.css';



 const Cart =(props)=> {
    const {cart}=props;
  
    let total=0;
    for(const product of cart){
        total = total + product.price;
    }

  return (
    <div className='cart'>
       <h4>order summery</h4>
        <p>Selected items:{cart.length}</p>
        <p>Total Price :${total}</p>
        <p>Total Shpping: </p>
        <p>Text:</p>
        <h6>Grand Total: </h6>
    </div>
  )
}
export default Cart;
