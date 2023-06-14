import {useState} from 'react';

const Grocery = ({name, price, quantity, img, type, addRemoveImg}) => {
  const [disabled, setDisabled] = useState(false);
  const [curQuantity, setQuantity] = useState(quantity);
  const handleClick = () =>{
    setQuantity(curQuantity - 1);
  }

  const buttonStyle={
    width: '30ch',
    marginBottom: '15px',
    height: '70px',
    padding: '10px'
  }

  const imgStyle={
    width:'50px',
    height:'50px'
  }
  const imgSrc = `${img}`
  const addRemoveSrc = `../assets/${addRemoveImg}`

  return(
    <div>
      <button
        className={`btn btn-outline-${type}`}
        style={buttonStyle}
        onClick={handleClick}>
          <img src={img} alt='' style={imgStyle}/>
        {name} - {price} ({curQuantity})
      </button>
    </div>
  )
}

export default Grocery;