import React, { useRef, useState } from 'react'
import Input from '../shared/input/Input'
import classes from './MealForm.module.css'
const MealForm = ({addToCartHander}) => {
  const [amountIsValid, setAmountIsValid] = useState(false)
  const amountInputRef = useRef()

  const handleSubmit = (e)=>{
    e.preventDefault()

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setAmountIsValid(false)
      return
    }
    addToCartHander(enteredAmountNumber)
  }
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
        <Input 
            label="Amount"
            ref={amountInputRef}
            input={{
                id:"amount",
                type:"number",
                min:"1",
                max:"5",
                step:"1",
                defaultValue:"1"
            }}
        />
        <button>Add</button>
        {amountIsValid && <p>Please enter a valid amount from (1 -5)</p>}
    </form>
  )
}

export default MealForm