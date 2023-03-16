import React, { Fragment } from 'react'
import classes from './Header.module.css'
import food from '../../assets/images/food1.jpg'
import { FaCartPlus } from "react-icons/fa";


const Header = () => {
  return (
    <Fragment>
    <nav className={classes.header}>
        <h1>ReactMeals</h1>
        <button className={classes.button}>
          <span className={classes.icon}><FaCartPlus/></span>
          <span>Your Carts</span>
          <span className={classes.badge}>3</span>
        </button>
    </nav>
    <div className={classes['main-image']}>
      <img src={food} alt="food meal"/>
    </div>
    </Fragment>
  )
}

export default Header