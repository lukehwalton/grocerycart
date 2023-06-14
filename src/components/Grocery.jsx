import {useState} from 'react';
import './Grocery.css';


const Grocery = ({name, price, quantity, img, type, addRemoveImg}) => {
  const [inStock, setInStock] = useState(true);
  const [qState, setQuantity] = useState(quantity);

  const handleClick = () =>{
    let curQuantity = qState - 1;
    if(curQuantity < 1) setInStock(false);
    setQuantity(qState - 1);
  }

  const imgStyle={
    width:'50px',
    height:'50px'
  }


  return(
    <div>
      <button
        className={`btn btn-${type}`}
        onClick={handleClick}
        id="grocery-button"
        disabled={!inStock}
        >
          <img src={img} alt='' style={imgStyle}/>
          {name} - {price} ({qState})
          <img src={addRemoveImg}/>
      </button>
    </div>
  )
}

export default Grocery;