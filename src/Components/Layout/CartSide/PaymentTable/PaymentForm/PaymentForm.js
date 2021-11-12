import React from 'react';
import CustomerSelect from './CustomerSelect/CustomerSelect';
import PaymentTable from './PaymentTable/PaymentTable';
import OrderBtns from './OrderBtns/OrderBtns';
import classes from './PaymentForm.module.css';

const PaymentForm = () => {
    return(
        <form method="" action="">
            <div>
                <CustomerSelect/>
                <PaymentTable/>
                <OrderBtns/>
            </div>
        </form>
    );
}
export default PaymentForm;