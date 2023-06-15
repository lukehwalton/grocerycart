import Grocery from './Grocery';
import remove from '../assets/cart-dash.svg';
import { useState } from 'react';

const ShoppingCart = ({ items, update }) => {
  return (
    <>
      {items.filter(item => item.quantity > 0).map((item, index) => 
        <Grocery
          key={index}
          img={item.img}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          type='primary'
          addRemoveImg={remove}
          location='cart'
          update={update}
        />
      )
      }    
    </>
  );
};

export default ShoppingCart;