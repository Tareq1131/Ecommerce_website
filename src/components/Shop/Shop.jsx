import { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";

export default function Shop() {
   // const[date, setDate]=useState([11]);


  const [products, setProducts] = useState([]);
  const [cart, setCart]=useState([])

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  
  const handleAddToCart=(product)=>{
    //setDate(data =>{[...at,2]})
    //console.log(product);
    //add new cart for odd & new valo 
    const newCart = [...cart, product];
    setCart(newCart);
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
        <p>Selected items:{cart.length}</p>
      </div>
    </div>
  );
}
