import React,{Fragment} from 'react';
import CashNowModal from '../CashNowModal/CashNowModal';
import OrderSuccessModal from '../OrderSuccessModal/OrderSuccessModal';
import classes from './OrderBtns.module.css';
const OrderBtns = () => {
    return (
        <Fragment>
            <div className={classes['orderBtns-group']}>
                {/* <button type="button">Cash Now</button> */}
                <label className={classes.cashNow} htmlFor="cashNow" type="button">Cash Now</label>
                <label className={classes.orderNow} htmlFor="orderNow" type="button">Order Now</label>
            </div>
            <CashNowModal />
            <OrderSuccessModal />
        </Fragment>
    )
}
export default OrderBtns;