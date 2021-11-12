import React from 'react';
import classes from './SingleProduct.module.css';
import ProductImage from './productImage.jpg';
const SingleProduct = () => {
    return(
        <div className={classes['product-card-list']}>
            <div>
                <img
                    src={ProductImage}
                    className={classes['product-image-size']}
                    alt="product image miss"
                />
            </div>
            <div className={classes['product-name-price']}>
                <h1 className={classes['product-name']}>Product Title</h1>
                <p className={classes['product-price']}>10000 MMK</p>
            </div>
        </div>
    )
}
export default SingleProduct;