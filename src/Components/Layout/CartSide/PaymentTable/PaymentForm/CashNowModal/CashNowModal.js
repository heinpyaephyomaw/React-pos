import React from 'react';
import classes from './CashNowModal.module.css';
const CashNowModal = (props) => {
    return(
        <div>
            <input type="checkbox" className={classes.check} id="cashNow" />
            <div className={classes.background}></div>
            <div className={classes.alert_box}>
                {/* <div className={classes.icon}>
                    <i className="fas fa-check"></i>
                </div> */}
                <header>Cash Now</header>
                <form>
                    
                </form>
                <div className={classes.btns}>
                    <button type="submit">Cash Now</button>
                    <label htmlFor="cashNow">Close</label>
                </div>
            </div>
        </div>
    )
}
export default CashNowModal;