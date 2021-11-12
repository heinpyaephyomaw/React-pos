import React from 'react';
import CartSideHeader from './CartSideHeader/CartSideHeader';
import CartDataContainer from './CartDataContainer/CartDataContainer';
import PaymentTable from './PaymentTable/PaymentTable';
import classes from './CartSide.module.css';

const CartSide = () => {
    return(
        <div className={classes.cartside}>
           <div className={classes['cart-container']}>
               <CartSideHeader/>
               <CartDataContainer/>
               <PaymentTable/>
           </div>
        </div>
    );
}
export default CartSide;