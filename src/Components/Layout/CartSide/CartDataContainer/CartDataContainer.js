import React from 'react';
import CartDataList from '../CartDataList/CartDataList';
import classes from './CartDataContainer.module.css';

const CartDataContainer = () => {
    return(
        <div className={classes['cart-data-container']}>
            <CartDataList/>
            <CartDataList/>
            <CartDataList/>
            <CartDataList/>
        </div>
    )
}
export default CartDataContainer;