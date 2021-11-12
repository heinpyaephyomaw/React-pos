import React from 'react';
import classes from './NewCustomerAdd.module.css';
const NewCustomerAdd = () => {
    return(
        <div className={classes['add-new-customer-parent']}>
            <button
            type="button"
            className={classes['customer-order-list']}
            title="Order List">
            <i className="fas fa-ticket-alt"></i>
            <span>1</span>
            </button>
            <button
            type="button"
            className={classes['add-new-customer']}
            title="Add New Customer">
            <i className="fas fa-user-plus"></i>
            </button>
        </div>
    )
}
export default NewCustomerAdd;