import './Product.css'

 const Product= ({product})=>{
    console.log('get all product ',product);
   const {img, name, seller,quantity,ratings,price} = product;
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
       <button className='btn-cart'>Add to cart</button>
    </div>
  )
}
export default Product;