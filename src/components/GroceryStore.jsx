import Grocery from './Grocery';
import add from '../assets/cart-plus.svg'
import './Grocery.css'

const GroceryStore = ({ items, update }) => {
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
          location='store'
          update={update}
        />
      )
      }    
    </div>
  );
};

export default GroceryStore;