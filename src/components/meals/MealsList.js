import React from 'react'
import Card from '../shared/card/Card'
import Meals from './Meals'
import classes from './MealsList.module.css'


const MealsList = ({data}) => {
    const mealsList = data.map((meal)=>{
        return <Meals 
                    id={meal.id}
                    key={meal.id}
                    name={meal.name}
                    description={meal.description}
                    price={meal.price}
                />
            })

  return (
    <div className={classes.meals}>
    <Card>
    <ul> {mealsList}</ul>
    </Card>
    </div>
  )
}

export default MealsList