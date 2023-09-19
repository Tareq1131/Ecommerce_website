import './Product.css'

 const Product= ({product})=>{
    console.log('get all product ',product);
   const {img, name, seller,quantity,ratings,price} = product;
  return (
    <div className='product'>
      {/* all product showing templet */}
        <img src={img} alt="image" />
        <h6>{name}</h6>
    </div>
  )
}
export default Product;