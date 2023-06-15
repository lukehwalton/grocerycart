const CheckoutBtn = (checkoutFn) =>{
  const handleClick = () =>{
    checkoutFn();
  }

  return(
    <button 
      className="btn btn-warning checkout-btn" 
      onClick={handleClick}>
        Check out
    </button>
  )
}

export default CheckoutBtn;