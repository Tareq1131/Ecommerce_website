//import React from 'react';
import './Cart.css';



 const Cart =(props)=> {
    const {cart}=props;
  
    let total=0;
    let totalshipping=0;
    for(const product of cart){
        total = total + product.price;
        totalshipping = totalshipping + product.shipping;
    }
    const text = total*7/100;
    const grandTotal = total+totalshipping+text;

  return (
    <div className='cart'>
       <h4>order summery</h4>
        <p>Selected items:{cart.length}</p>
        <p>Total Price :${total}</p>
        <p>Total Shipping: ${totalshipping}</p>
        <p>Text:${text.toFixed(2)}</p>
        <h6>Grand Total: ${grandTotal.toFixed(2)} </h6>
    </div>
  )
}
export default Cart;
