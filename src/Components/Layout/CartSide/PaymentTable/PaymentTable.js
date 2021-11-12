import React from 'react';
import NewCustomerAdd from './NewCustomerAdd/NewCustomerAdd';
import PaymentForm from './PaymentForm/PaymentForm';
import classes from './PaymentTable.module.css';

const PaymentTable = () => {
    return(
        <div className={classes['customer-table-form']}>
            <div>
                <NewCustomerAdd/>
                <PaymentForm/>
            </div>
        </div>
    )
}
export default PaymentTable;