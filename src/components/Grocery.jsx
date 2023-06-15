import {useState} from 'react';
import './Grocery.css';


const Grocery = ({name, price, quantity, img, type, addRemoveImg, location, update}) => {
  const [inStock, setInStock] = useState(quantity > 0);
  const [qState, setQuantity] = useState(quantity);

  const handleClick = () =>{
    const curQuantity = qState - 1;
    if(curQuantity < 1) setInStock(false);
    if(curQuantity > 0) setInStock(true);
    setQuantity(qState - 1);
    update(name, location);
  }

  const imgStyle={
    width:'50px',
    height:'50px'
  }

  if(!inStock && location==='cart'){
    return null;
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