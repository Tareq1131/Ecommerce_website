import { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  
  const handleAddToCart=(product)=>{
    console.log(product);
 }
  return (
    <div className="shop-container">
      <div className="products-container">
        {/* show all product here /call product component/sent all product arrey element*/}
        {products.map((product) => (
          <Product key={product.id} 
          product={product}
          handleAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <div className="cart-container">
        <h4>order summery</h4>
      </div>
    </div>
  );
}
