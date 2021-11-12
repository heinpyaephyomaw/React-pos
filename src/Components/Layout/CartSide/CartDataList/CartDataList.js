import React from 'react';
import classes from './CartDataList.module.css';
import productImage from './productImage.jpg'

const CartDataList = () => {
    return(
        <div className={classes['cart-data-list']}>
                <div className={classes['product-image-parent']}>
                  <img src={productImage} alt="" />
                </div>
                <div>
                    <div className={classes['cart-product-title-group']}>
                      <div className={classes['product-title-group']}>
                            <h5 className={classes['product-title']}>Product Name</h5>
                            <p className={classes['product-variant-show']}>
                                <span>Size</span> | <span>Color</span> |
                                <span>Pattern</span> |
                                <span>Accessories</span>
                            </p>
                        </div>
                        <div className={classes['price-del-group']}>
                            <p>10000 MMK</p>
                            <button className={classes.del}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                      <div className={classes['qty-incr-desc']}>
                        <button>-</button>
                        <input type="text" className={classes.qtyInput} value="1" />
                        <button>+</button>
                      </div>
                     </div>
                </div>
        </div>
    )
}
export default CartDataList;