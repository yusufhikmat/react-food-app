import React from 'react'
import classes from './Card.module.css'

const Card = (props) => {
  return (
    <div children={classes.card}>{props.children}</div>
  )
}

export default Card