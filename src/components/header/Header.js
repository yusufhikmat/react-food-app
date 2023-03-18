import React, { Fragment, useContext } from 'react'
import classes from './Header.module.css'
import food from '../../assets/images/food1.jpg'
import { FaCartPlus } from "react-icons/fa";
import CartContext from '../../store/CartContext';


const Header = ({displayCart}) => {

  const cartNumber = useContext(CartContext);
  const numberOfItems = cartNumber.items.reduce((currentValue, item)=>{
    return currentValue + item.amount
  },0)
   
  return (
    <Fragment>
    <nav className={classes.header}>
        <h1>ReactMeals</h1>
        <div>
        <button className={classes.button} onClick={displayCart}>
          <span className={classes.icon}><FaCartPlus/></span>
          <span>Your Carts</span>
          <span className={classes.badge}>{numberOfItems}</span>
        </button>
        </div>
    </nav>
    <div className={classes['main-image']}>
      <img src={food} alt="food meal"/>
    </div>
    </Fragment>
  )
}

export default Header