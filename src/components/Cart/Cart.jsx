//import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


 const Cart =({cart, handleClearCart})=> {
   // const {cart}=props;
  
    let total=0;
    let totalshipping=0;
    let quantity =0;
    for(const product of cart){
        // if(product.quantity === 0){
        //     product.quantity =1;
        // }
        //product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        totalshipping = totalshipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const text = total*7/100;
    const grandTotal = total+totalshipping+text;

  return (
    <div className='cart'>
       <h4>order summery</h4>
        <p>Selected items:{quantity}</p>
        <p>Total Price :${total}</p>
        <p>Total Shipping: ${totalshipping}</p>
        <p>Text:${text.toFixed(2)}</p>
        <h6>Grand Total: ${grandTotal.toFixed(2)} </h6>
       
        <button onClick={handleClearCart} className='btn-clear-cart'>
          <span>Clear cart</span>
          <FontAwesomeIcon  icon={faTrashAlt}/>
          </button>
    </div>
  )
}
export default Cart;
