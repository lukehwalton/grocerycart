import logo from './logo.svg';
import './App.css';
import Grocery from './Grocery';
import createList from './createList';

function App() {
  let price = 0;
  const groceries = createList();
  return(
    <>
    <div className='header'>
      <h1>Welcome to the grocery store!</h1>
      <h6>We've got everything a body needs</h6>
    </div>
      <Grocery
        name="Tomatoes"
        price={2.99}
        quantity={5}
        img={tomatoes}
        type="success"
        addRemoveImg = "cart-plus.jpg"
      />
    </>
  )
}

export default App;
