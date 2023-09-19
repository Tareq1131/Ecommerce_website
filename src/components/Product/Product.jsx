import './Product.css'

 const Product= (props)=>{
    // console.log('get all product ',product);
   const {img, name, seller,quantity,ratings,price} = props.product;

  const handleAddToCart = props.handleAddToCart;
  
   return (
    <div className='product'>
      {/* all product showing templet */}
        <img src={img} alt="image" />
       <div className='product-info'>
       <h6 className='product-name'>{name}</h6>
        <p>Price :${price}</p>
        <p>Manufacturer :{seller}</p>
        <p>Rating :{ratings}*</p>
       </div>
       <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>Add to cart</button>
    </div>
  )
}
export default Product;