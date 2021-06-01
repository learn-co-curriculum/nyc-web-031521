import './App.css';

import {useState, useEffect} from 'react'

import {Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import BurgersContainer from './components/BurgersContainer'
import LoginButton from './components/LoginButton';
import Home from './components/Home'

function App() {

  // USER INFO
  let [orders, setOrders] = useState([])
  let [user, setUser] = useState({})

  // BURGERS
  let [burgers, setBurgers] = useState([])
  let [cart, setCart] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/burgers")
    .then(res => res.json())
      .then(arrOfBurgers => {
        setBurgers(arrOfBurgers)
      })
    }, [])

  // useEffect(() => {
  //   if(localStorage.token){
  //     fetch("http://localhost:3000/me", {
  //       headers: {
  //         "authorization": `bearer ${localStorage.token}`
  //       }
  //     })
  //       .then(res => res.json())
  //       .then(user => {
  //         helpSetUser(user)
  //       })
  //   }
  // }, [])
    
    
  let helpSetUser = (user) => {
    setOrders(user.orders)
    setUser({id: user.id, username: user.username})
  }  

  
  let addToCart = (burger) => {
    let newCart = [...cart, burger]
    setCart(newCart)
  }
  
  let createSingleOrder = () => {

    let arrOfIds = cart.map(burger => burger.id)
    console.log(arrOfIds)

    fetch(`http://localhost:3000/users/${user.id}/checkout`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        burger_ids: arrOfIds
      })
    })
      .then(res => res.json())
      .then(createdOrder => {
        console.log(createdOrder)
        setOrders([...orders, createdOrder])
        setCart([])
      })


  }



  let renderBurgerContainer = (routerProps) => {
    // Return value of this function is to be displayed to the DOM
    return <BurgersContainer burgers={burgers} addToCart={addToCart} cart={cart} orders={orders} createSingleOrder={createSingleOrder}/>
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>

        <Route path="/login" exact>
          <LoginButton helpSetUser={helpSetUser}/>
        </Route>
        
        <Route path="/burgers" exact render={renderBurgerContainer}/>
      </Switch>
    </div>
  );
}

export default App;
