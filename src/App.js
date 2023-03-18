
import { useState } from 'react';
import './App.css';
import Cart from './components/carts/Cart';
import Header from './components/header/Header';
import MealsList from './components/meals/MealsList';
import MealsSummary from './components/meals/MealsSummary';
import CartContext from './store/CartContext';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart, setDisplayCart] = useState(false)
  const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
  const displayCart = ()=>{
    setDisplayCart(true)
  }

  const hideCart = ()=>{
    setDisplayCart(false)
  }
  return (
    <CartProvider>
      {showCart && <Cart hideCart={hideCart}/>}
      
      <Header displayCart={displayCart}/>
      <MealsSummary />
      <MealsList data={DUMMY_MEALS}/>
    </CartProvider>
  );
}

export default App;
