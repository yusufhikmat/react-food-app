import React, { useReducer } from 'react'
import CartContext from './CartContext'


const initialState = {
    items:[],
    totalAmount:0
}

const cartReducer =(state, action)=>{
    if(action.type === "ADD"){
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount =state.totalAmount + action.item.price
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        };
    }
    return initialState
}
const CartProvider = (props) => {
    const [cartState, dispatchState]= useReducer(cartReducer, initialState)

    const addItemHandler = (item)=>{
        dispatchState({type:"ADD",item:item})
    }
    const removeItemHandler = (id)=>{
        dispatchState({type:"REMOVE", id:id})
    }
    
    const cartcontext ={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler,
    }
  return (
    <CartContext.Provider value={cartcontext}>{props.children}</CartContext.Provider>
  )
}

export default CartProvider