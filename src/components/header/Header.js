import React, { Fragment } from 'react'
import classes from './Header.module.css'
import food from '../../assets/images/food1.jpg'
import { FaCartPlus } from "react-icons/fa";


const Header = ({displayCart}) => {
  return (
    <Fragment>
    <nav className={classes.header}>
        <h1>ReactMeals</h1>
        <div>
        <button className={classes.button} onClick={displayCart}>
          <span className={classes.icon}><FaCartPlus/></span>
          <span>Your Carts</span>
          <span className={classes.badge}>3</span>
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