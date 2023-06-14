import { useState } from 'react';
import Grocery from './Grocery';
import add from '../assets/cart-plus.svg'
import './Grocery.css'

const GroceryStore = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => 
        <Grocery
          key={index}
          img={item.img}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          type='success'
          addRemoveImg={add}
        />
      )
      }    
    </div>
  );
};

export default GroceryStore;