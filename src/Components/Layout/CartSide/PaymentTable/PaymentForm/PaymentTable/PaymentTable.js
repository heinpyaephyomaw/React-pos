import React from 'react';
import classes from './PaymentTable.module.css';

const PaymentTable = () => {
    return (
        <div className={classes['payment-table']}>
            <table>
                <tr className={classes.companyItem}>
                    <td>Sub-Total</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Discount</td>
                    <td>
                        <div className={classes['discount-container']}>
                            <div>
                                <input
                                    type="text"
                                    className={classes['discount-box']}
                                    placeholder="Enter Percentage"
                                />
                            </div>
                            <span className={classes['margin-equal']}>=</span>
                            <div className={classes.toAmount}><span>1000</span>MMK</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Promote-Code</td>
                    <td>
                        <div className={classes['promote-code-box']}>
                            <input type="text" />
                            <button type="button">Use</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Advance Payment</td>
                    <td>
                        <div className={classes['advancepayment-box']}>
                            <input type="text" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Delivery Service</td>
                    <td>
                        <div>
                            <select
                                name=""
                                id=""
                                className={classes['delivery-service-select']}
                            >
                                <option value="">Asxox</option>
                                <option value="">Gogo</option>
                            </select>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Order Note</td>
                    <td className={classes['order-node-td']}>
                        <div>
                            <textarea
                                name=""
                                rows="3"
                                className={classes['order-note']}
                                placeholder="Order Note"
                            ></textarea>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default PaymentTable;