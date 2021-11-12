import React from 'react';
import classes from './ProductCardContainer.module.css';
import SingleProduct from '../SingleProduct/SingleProduct';
const ProductCardContainer = () => {
    return (
        <div className={classes['products-card-container']}>
            <div className={classes['products-card-flex']}>
                 <SingleProduct/>
                 <SingleProduct/>
                 <SingleProduct/>
                 <SingleProduct/>
                 <SingleProduct/>
                 <SingleProduct/>
            </div>
        </div>
    )
}
export default ProductCardContainer;