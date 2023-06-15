import {useState} from 'react';
import './Grocery.css';


const Grocery = ({name, price, quantity, img, type, addRemoveImg, location, update}) => {
  const inStock = (quantity > 0);

  const handleClick = () =>{
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
        className={`btn btn-${type} grocery-button`}
        onClick={handleClick}
        disabled={!inStock}
        >
          <img src={img} alt='' style={imgStyle}/>
          {name} - {price} ({quantity})
          <img src={addRemoveImg}/>
      </button>
    </div>
  )
}

export default Grocery;