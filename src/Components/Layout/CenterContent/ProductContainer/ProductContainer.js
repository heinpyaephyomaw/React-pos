import React from 'react';
import ProductListHeader from './ProductListHeader/ProductListHeader';
import ProductCardContainer from './ProductCardContainer/ProductCardContainer';
import classes from './ProductContainer.module.css';
const  ProductContainer = () => {
    return (
        <div className={classes['all-product-container']}>
            <div className={classes['product-lists']}>
                <ProductListHeader/>
                <ProductCardContainer/>
            </div>
        </div>
    )
}
export default ProductContainer;