//mport React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product}) => {
    const {id, img, price, name, quantity} = product;
    return (
        <div className="review-item">
            <img src={img}/>
        </div>
    );
};

export default ReviewItem;