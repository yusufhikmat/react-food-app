import React from 'react'
import Modal from '../shared/modal/Modal'
import classes from './Cart.module.css'
const Cart = ({hideCart}) => {
    const cartItems = <ul className={classes['cart-items']}>{[
        {id:"ci", name:"ayo",amount:"2", price:"23.3"}].map((item)=>{
        return <li key={item.id}>{item.name}</li>
    })
    }
    </ul>
  return (
    <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>32.34</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={hideCart}>close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart