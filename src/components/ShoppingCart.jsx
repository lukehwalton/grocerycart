import Grocery from './Grocery';
import remove from '../assets/cart-dash.svg';
import { useState } from 'react';

const ShoppingCart = ({ items, update }) => {
  const [cartItems, setCartItems] = useState(items);

  
  return (
    <div>
      {cartItems.filter(item => item.quantity > 0).map((item, index) => 
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
          updateCart = {setCartItems}
        />
      )
      }    
    </div>
  );
};

export default ShoppingCart;