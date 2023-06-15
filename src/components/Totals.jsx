const Totals = ({cart}) =>{
  let totPrice = 0;
  let totQuantity = 0;
  for(let item of cart){
    totPrice += item.price;
    totQuantity += item.quantity;
  }
}

export default Totals;