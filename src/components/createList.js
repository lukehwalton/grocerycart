import tomatoes from '../assets/tomatoes.jpg'
import bread from '../assets/bread.gif'
import pom from '../assets/pom.png'
import cheese from '../assets/cheese.jpg'
import kiwi from '../assets/kiwi.jpg'
import eggs from '../assets/eggs.jpg'
import cukes from '../assets/cukes.jpg'

const createList = (location) => {
  if (location==='store'){
  return([
      {
        name: "Tomatoes",
        price: 2.99,
        quantity: 5,
        img: tomatoes
      },
      {
        name: "Cucumbers",
        price: 1.99,
        quantity: 5,
        img: cukes
      },
      {
        name: "Eggs",
        price: 3.99,
        quantity: 7,
        img: eggs
      },
      {
        name: "Pomegranate",
        price: 2.49,
        quantity: 3,
        img: pom
      },
      {
        name: "Bread",
        price: 1.99,
        quantity: 4,
        img: bread
      },
      {
        name: "Kiwi",
        price: 2.99,
        quantity: 6,
        img: kiwi
      },
      {
        name: "Cheese",
        price: 4.99,
        quantity: 2,
        img: cheese
      }
    ])
  } else{
    return([
      {
        name: "Tomatoes",
        price: 2.99,
        quantity: 0,
        img: tomatoes
      },
      {
        name: "Cucumbers",
        price: 1.99,
        quantity: 0,
        img: cukes
      },
      {
        name: "Eggs",
        price: 3.99,
        quantity: 0,
        img: eggs
      },
      {
        name: "Pomegranate",
        price: 2.49,
        quantity: 0,
        img: pom
      },
      {
        name: "Bread",
        price: 1.99,
        quantity: 0,
        img: bread
      },
      {
        name: "Kiwi",
        price: 2.99,
        quantity: 0,
        img: kiwi
      },
      {
        name: "Cheese",
        price: 4.99,
        quantity: 0,
        img: cheese
      }
    ])
  }
}

export default createList;