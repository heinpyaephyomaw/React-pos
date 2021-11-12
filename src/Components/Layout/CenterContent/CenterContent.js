import React from 'react';
import UserHeader from './UserHeader/UserHeader';
import ProductContainer from './ProductContainer/ProductContainer';
import classes from './CenterContent.module.css';

const CenterContent = () => {
    return (
        <div className={classes.content}>
            <div>
                <UserHeader />
                <ProductContainer/>
            </div>
        </div>
    )
}
export default CenterContent;