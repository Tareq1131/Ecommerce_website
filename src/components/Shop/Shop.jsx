import { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import { Link } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

//for storage
  useEffect(()=>{
    const storedCart = getShoppingCart();
    const savedCart= [];
    //setp 1 get id of the addProduct
    for(const id in storedCart){
        //setp 2 get the product by using id...
        const adedProduct = products.find(product => 
            product.id=== id);
           // console.log(saveproduct);
           //step 3 get quantity of the product
           if(adedProduct){
            //setp 3 add quantity
            const quantity = storedCart[id];
            adedProduct.quantity = quantity;
            //setp 4 add the added product to the save cart
            savedCart.push(adedProduct);
           }    
    }
    //step 5: set the cart
    setCart(savedCart);

  },[products])


  const handleAddToCart = (product) => {
    //console.log(product);
    //add new cart for odd & new valo
    //const newCart = [...cart, product];
    let newCart =[];
    const exists= cart.find(pd => pd.id === product.id);
    if(!exists){
        product.quantity =1;
        newCart=[...cart,product]
    }
    else{
        exists.quantity = exists.quantity +1;
        const remaining = cart.filter(pd => pd.id !==product.id)
        newCart = [...remaining,exists];
    }
    setCart(newCart);
    addToDb(product.id);
  };

    const handleClearCart = () => {
      setCart([]);
      deleteShoppingCart([]);
    }

  return (
    <div className="shop-container">
      <div className="products-container">
        {/* show all product here /call product component/sent all product arrey element*/}
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <div className="cart-container">
       <Cart 
       cart={cart}
       handleClearCart={handleClearCart}
       >
        <Link className="proceed-link" to='/orders'>
          <button className="btn-proceed">Review Order</button>
        </Link>
       </Cart>
      </div>
    </div>
  );
}
