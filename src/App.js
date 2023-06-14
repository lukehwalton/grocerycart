import './App.css';
import GroceryStore from './components/GroceryStore';
import createList from './components/createList';

function App() {
  let totalPrice = 0;
  let totalQuantity = 0;
  const groceries = createList();
  return(
    <>
      <div className='header'>
        <h1>Welcome to the grocery store!</h1>
        <h4>We've got everything a body needs</h4>
        <p>What? No, not like that. Stop licking your monitor</p>
      </div>
      <div className='col'>
        <GroceryStore items={groceries}/>
      </div>
    </>
  )
}

export default App;
