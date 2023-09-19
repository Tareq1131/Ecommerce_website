import { useEffect, useState } from "react";
import "./Shop.css";

export default function Shop() {

    const [products, setProducts]= useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProducts(data));
    },[])

  return (
    <div className="shop-container">

      <div className="products-container">
            <h2>product comming here:{products.length}</h2>
      </div>

         <div className="cart-container">
            <h4>order summery</h4>
         </div>
    </div>
  )
}
