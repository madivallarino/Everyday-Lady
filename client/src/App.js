import { useState, useEffect } from "react";
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import HomeProducts from './HomeProducts';
import ClothingProducts from './ClothingProducts';
import LifestyleProducts from './LifestyleProducts';
import CartPage from './CartPage';

import ProductPage from './ProductPage';
import SignupLogin from './SignupLogin';
// import Login from './Login';
import Footer from './Footer';

import {Route, Switch, Link } from 'react-router-dom';
 import './App.css';
function App() {
const [user, setUser] = useState(null);
const [cart, setCart] = useState([]);
const [show, setShow ] = useState(false)
  function onLogin() {
    fetch('/').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  };
  // potential problem because we need it to re-render every time the button is clicked 
  //sort of works for now
  useEffect(()=> {
    fetch('/cart')
    .then((r)=> r.json())
    .then(data=> setCart(data))
  }, [show])
  
  // function handleCart(props){
  //   setCart.push(props)
  // }

  function onLogin() {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      console.log(user)}
    });
  };


  

  return (
    <div className="App">
      <NavBar />
      {/* <button onClick={()=> setShow(show=> !show)}> View Cart</button> */}
      {/* <div className= {show ? "modal" : "closed"}>
        <CartModal onClose={()=> setShow(show=> !show)} show={show} cart={cart}/>
        </div> */}
        <Link to={`/cart`}>
          <button>View Cart</button>
        </Link>
      <Switch>
        <Route path="/home">
          <HomeProducts />
          </Route>
          <Route path='/clothing'>
            <ClothingProducts />
            </Route>
            <Route path='/lifestyle'>
              <LifestyleProducts />
              </Route>
          <Route path="/login">
            <SignupLogin onLogin={onLogin}/>
            </Route>
            {/* <Route path="/signup">
              <Signup />
              </Route> */}
              <Route path="/cart">
                <CartPage cart={cart}/>
                </Route>
          <Route path="/products/:id">
            <ProductPage />
            </Route>
        <Route exact path="/">
      <LandingPage />
      </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
