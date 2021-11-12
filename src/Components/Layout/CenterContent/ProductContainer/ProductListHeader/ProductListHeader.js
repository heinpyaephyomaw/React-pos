import React from 'react';
import classes from './ProductListHeader.module.css';
const ProductListHeader = () => {
    return(
        <div className={classes['product-lists-header']}>
            <div className={classes['search-select-cate-group']}>
                <div>
                    <span className={classes['product-show-title']}>All Products</span>
                </div>
                <div className={classes['search-categories-flex']}>
                    <div>
                        <select className={classes['products-cate']}>
                            <optgroup label="Options 1">
                                <option>Option 1.1</option>
                                <option>Option 1.2</option>
                            </optgroup>
                            <optgroup label="Options 2">
                                <option>Option 2.1</option>
                                <option>Option 2.2</option>
                            </optgroup>
                        </select>
                    </div>
                    <div className={classes['searchInput-group']}>
                        <input
                            type="text"
                            className={classes.searchInput}
                            placeholder="Search Product" />
                        <i className={`fas fa-search ${classes.searchSubmit}`}></i>
                    </div>
                </div>
            </div>
       </div>
    );
}
export default ProductListHeader;