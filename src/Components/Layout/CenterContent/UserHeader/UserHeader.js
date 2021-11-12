import React from 'react';
import classes from './UserHeader.module.css';

const UserHeader = () => {
    return (
        <div className={classes['user-info']}>
            <div className={classes['user-detail']}>
                <img
                    src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg"
                    className={classes['user-photo']}
                    alt="User Image"
                />
                <div className={classes['user-name-role']}>
                    <p>Name</p>
                    <p>Customer Service</p>
                </div>
            </div>
        </div>
    )
}
export default UserHeader;