import { useState, useEffect } from "react";
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import HomeProducts from './HomeProducts';
import ClothingProducts from './ClothingProducts';
import LifestyleProducts from './LifestyleProducts';
import CartPage from './CartPage';
import OrderPage from './OrderPage';
import ProductCard from './ProductCard';
import ProductPage from './ProductPage';
import SignupLogin from './SignupLogin';
import About from './About';
// import Login from './Login';
import Footer from './Footer';

import {Route, Switch, Link } from 'react-router-dom';
 import './App.css';
function App() {
const [user, setUser] = useState(null);
const [cart, setCart] = useState([]);
const [search, setSearch] = useState("");
const [ allProducts, setAllProducts ] = useState([])
const [show, setShow ] = useState(false)
const [ refresh, setRefresh ] = useState(false)

  // function onLogin() {
  //   fetch('/').then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // };
  // // potential problem because we need it to re-render every time the button is clicked 
  //sort of works for now
  // useEffect(()=> {
  //   fetch('/cart')
  //   .then((r)=> r.json())
  //   .then(data=> setCart(data))
  // }, [show, refresh])
  
  // function handleCart(props){
  //   setCart.push(props)
  // }
  

  useEffect(()=> {
      fetch('/allproducts')
      .then((r)=> r.json())
      .then(data => {
          // console.log(data)
          setAllProducts(data)
      })
  }, [])


function handleSearch(){
  let searchWord = search.toLowerCase()
  let searchedProducts = allProducts.filter((product)=> product.name.toLowerCase().includes(searchWord)).map((product)=> {
    return (
      <a href={`/products/${product.id}`}>
  <ProductCard
              name={product.name} 
              price={product.price} 
              image={product.image} 
              color={product.color} 
              back_image={product.back_image} 
              id={product.id}
              key={product.id}/>
   </a> 
     )
  })
  return searchedProducts
}

function handleLogout(){
  console.log("This is firing")
  fetch('/logout', {
    method: "DELETE"
  })
  .then(setUser(null))
}

  function onLogin() {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setUser(data)
          // console.log(data)
        });
      }
    });
  };

  // useEffect(()=> {
  //   fetch('/me')
  //   .then((r)=> {
  //     if (r.ok){
  //       r.json().then((user)=> setUser(user));
  //     }
  //     else{
  //       return null}
  //   })},[])


  const cartNum = cart.map((product)=> product.number) 

function totalItems(){
  let itemNum = 0;
  for (let i = 0; i < cartNum.length; i++){
    itemNum += cartNum[i]
  }
  
  return itemNum
}


  

  return (
    <div className="App">
      <div className="signin">
        {user ? `Hello ${user.name}` : <Link to={`/login`}>
           {/* Sign In */}
        </Link>}
        
      </div>
      
      <NavBar search={search} setSearch={setSearch} refresh={refresh} setRefresh={setRefresh}/>
      {/* <button onClick={()=> setShow(show=> !show)}> View Cart</button> */}
      {/* <div className= {show ? "modal" : "closed"}>
        <CartModal onClose={()=> setShow(show=> !show)} show={show} cart={cart}/>
        </div> */}
        
        {search ? handleSearch(): 
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
              <Route path='/about'>
                <About />
                </Route>
          <Route path="/login">
            <SignupLogin onLogin={onLogin} handleLogout={handleLogout}/>
            </Route>
              <Route path="/orders">
                  <OrderPage user={user}/>
                  </Route>
              <Route path="/cart">
                <CartPage cart={cart} setUser={setUser} user={user} refresh={refresh} setRefresh={setRefresh} onLogin={onLogin}/>
                </Route>
          <Route path="/products/:id">
            <ProductPage  refresh={refresh} setRefresh={setRefresh}/>
            </Route>
        <Route exact path="/">
      <LandingPage />
      </Route>
      </Switch>}
      
      <Footer />
    </div>
  );
}

export default App;
