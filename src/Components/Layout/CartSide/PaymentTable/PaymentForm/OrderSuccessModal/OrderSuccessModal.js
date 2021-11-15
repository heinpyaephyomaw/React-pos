import React from 'react';
import classes from './OrderSuccessModal.module.css';
const OrderSuccessModal = (props) => {
    return(
        <div>
            <input type="checkbox" className={classes.check} id="orderNow" />
            <div className={classes.background}></div>
            <div className={classes.alert_box}>
                <div className={classes.icon}>
                    <i className="fas fa-check"></i>
                </div>
                <header>Success</header>
                <p>Your Order Is Successful!</p>
                <div className={classes.btns}>
                    <label htmlFor="orderNow">Close</label>
                </div>
            </div>
        </div>
    )
}
export default OrderSuccessModal;