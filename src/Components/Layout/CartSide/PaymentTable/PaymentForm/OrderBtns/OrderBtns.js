import React from 'react';
import classes from './OrderBtns.module.css';
const OrderBtns = () => {
    return (
        <div className={classes['orderBtns-group']}>
            <button>Cash Now</button>
            <button>Order Now</button>
        </div>
    )
}
export default OrderBtns;