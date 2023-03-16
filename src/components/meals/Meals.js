import React from 'react'
import MealForm from './MealForm'
import classes from './Meals.module.css'
const Meals = ({name, description, price}) => {
  return (
   <div className={classes.meal}>
    <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>$ {price.toFixed(2)}</div>
    </div>
    <div>
        <MealForm />
    </div>
    </div>
  )
}

export default Meals