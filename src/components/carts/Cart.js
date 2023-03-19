import React, { useContext } from 'react'
import CartContext from '../../store/CartContext'
import Modal from '../shared/modal/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'
const Cart = ({hideCart}) => {
     const cartOutput = useContext(CartContext)

     const totalAmount = `$${cartOutput.totalAmount.toFixed(2)}`
    const availableItems = cartOutput.items.length > 0;

    const cartItemRemoveHandler=(id)=>{}
    const cartItemAddHandler =(item)=>{}
    const cartItems = <ul className={classes['cart-items']}>{
        cartOutput.items.map((item)=>{
        return <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price} 
                    cartItemRemoveHandler={cartItemRemoveHandler.bind(null, item.id)}
                    cartItemAddHandler = {cartItemAddHandler.bind(null,item)}

                    />
    })
    }
    </ul>
  return (
    <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={hideCart}>close</button>
           
           {availableItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
  )
}

export default Cart