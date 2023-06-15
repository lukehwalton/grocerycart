import './App.css';
import GroceryStore from './components/GroceryStore';
import ShoppingCart from './components/ShoppingCart';
import createList from './components/createList';

function App() {
  const stock = createList('store');
  const cart = createList('store');

  const update = (item, location) =>{
    console.log(`updating ${item}`)
    if (location==='store'){
        stock.find(grocery => grocery.name===item).quantity--;
        cart.find(grocery => grocery.name===item).quantity++;
        console.log(`${item}'s quantity is now ${stock.find(grocery => grocery.name===item).quantity}`)
    } else if(location==='cart'){
      stock.find(grocery => grocery.name===item).quantity++;
      cart.find(grocery => grocery.name===item).quantity--;
      console.log(`${item}'s quantity is now ${cart.find(grocery => grocery.name===item).quantity}`)
    }
    
  }

  return(
    <div className='page'>
      <div className='header bg-success'>
        <h1>Welcome to the grocery store!</h1>
        <h4>We've got everything a body needs</h4>
        <p>What? No, not like that. Stop licking your monitor</p>
      </div>
      <div className='row'>
        <div className='col stock'>
          <GroceryStore items={stock} update={update}/>
        </div>
        <div className='col cart'>
          <ShoppingCart items={cart} update={update}/>
        </div>
      </div>
    </div>
  )
}

export default App;
