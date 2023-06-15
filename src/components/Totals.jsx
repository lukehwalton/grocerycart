import '../bootstrap.css'

const Totals = ({cart}) =>{
  let totPrice = 0;
  let totQuantity = 0;
  for(let item of cart){
    totPrice += item.price * item.quantity;
    totQuantity += item.quantity;
  }
  return(
    <div className="row totals">
      <div className="col total bs-body-color">
        Total price: {totPrice}
      </div>
      <div className="col total bs-body-color">
        Total quantity: {totQuantity}
      </div>
    </div>
  )
}

export default Totals;