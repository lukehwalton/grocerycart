import './App.css';
import { useState } from 'react';
import GroceryStore from './components/GroceryStore';
import ShoppingCart from './components/ShoppingCart';
import createList from './components/createList';
import Totals from './components/Totals';
import CheckoutBtn from './components/CheckoutBtn';

function App() {
  const [store, setStore] = useState(createList('store'));
  const [cart, setCart] = useState(createList('cart'));

  const adjustQuantity = (name, location, amount) =>{
    if (location==='store'){
      setStore((prevStore) => 
        prevStore.map((grocery) =>
          grocery.name === name
          ? {...grocery, quantity: grocery.quantity + amount}
          : grocery
        )
      )
    } else if (location==='cart'){
      setCart((prevCart) => 
        prevCart.map((grocery) =>
          grocery.name === name
          ?{...grocery, quantity: grocery.quantity + amount}
          : grocery
        )
      )
    }
  }

  const update = (name, location) => {
    if (location==='store'){
      adjustQuantity(name, location, -1);
      adjustQuantity(name, 'cart', 1);
    } else if (location==='cart'){
      adjustQuantity(name, location, -1);
      adjustQuantity(name, 'store', 1);
    }
  }

  const checkout = () => {

  }
    
  return(
    <div className='page'>
      <div className='header bg-success'>
        <h1>Welcome to the grocery store!</h1>
        <h4>We've got everything a body needs</h4>
        <p>What? No, not like that. Stop licking your monitor</p>
      </div>
      <div className='row'>
        <div className='col store-col'>
          <GroceryStore items={store} update={update}/>
        </div>
        <div className='col'>
          <ShoppingCart items={cart} update={update}/>
          <Totals cart={cart}></Totals>
          <CheckoutBtn checkoutFn={checkout}/>
        </div>
      </div>
    </div>
  )
}

export default App;
