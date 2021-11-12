import React from 'react';
import classes from './LeftSidebar.module.css';
import logo from '../../../logo/logo.png';
const Leftsidebar = () => {
    return(
        <div className={classes.leftsidebar}>
          <ul className={classes['sidebar-btns']}>
            <li>
              <a href="#">
                <img src={logo} className={classes.logo} alt="" />
              </a>
            </li>
            <li className={classes.active}>
              <a className={classes['sidebar-lists']} href="#" title="Home">
                <i className="fas fa-home"></i>
              </a>
            </li>
            <li>
              <a className={classes['sidebar-lists']} href="#" title="Customers">
                <i className="fas fa-users"></i>
              </a>
            </li>
            <li>
              <a className={classes['sidebar-lists']} href="#" title="Myorder">
                <div className={classes['myorder-side']}>
                    <i className="fas fa-ticket-alt"></i>
                    <span>1</span>
                </div>
              </a>
            </li>
            <li>
              <a className={classes['sidebar-lists']} href="#" title="Setting">
                <i className="fas fa-cog"></i>
              </a>
            </li>
          </ul>
          <ul className={classes['acc-logout']}>
            <li>
                <a className={classes['sidebar-logout']} href="#" title="Logout">
                   <i className="fas fa-sign-out-alt"></i>
                </a>
            </li>
          </ul>
        </div>
    )
}
export default Leftsidebar;