import React, { useContext } from 'react'
import CartContext from '../../store/CartContext'
import MealForm from './MealForm'
import classes from './Meals.module.css'
const Meals = ({id,name, description, price}) => {

 const cartContent= useContext(CartContext)
  const addToCartHander =(amount) =>{
    cartContent.addItem({
      id:id,
      name:name,
      amount:amount,
      price:price
    })
  }
  return (
   <div className={classes.meal}>
    <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>$ {price.toFixed(2)}</div>
    </div>
    <div>
        <MealForm addToCartHander={addToCartHander}/>
    </div>
    </div>
  )
}

export default Meals