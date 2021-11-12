import React from 'react';
import Leftsidebar from './Components/Layout/LeftSidebar/Leftsidebar';
import CenterContent from './Components/Layout/CenterContent/CenterContent';
import CartSide from './Components/Layout/CartSide/CartSide';
import classes from './app.module.css';

const App = () => {
  return(
    <section className={classes['main-container']}>
        <div className={classes['container-flex']}>
           <Leftsidebar />
           <CenterContent />
           <CartSide/>
        </div>
    </section>
  )
}
export default App;