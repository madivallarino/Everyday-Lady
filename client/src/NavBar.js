import { useState, useEffect } from 'react'; 

import ProductCard from './ProductCard';
function NavBar(){
// const [cart, setCart] = useState([]);
const [error, setError] = useState("");


// useEffect(()=> {
//   fetch('/cart')
//   .then((r)=> r.json())
//   .then(data=> setCart(data))
// }, [])

    return(
      <>
      <nav className="nav">
        <a className="logo" href="/"> The Everyday Lady </a>
        <ul className="nav-links">
      <li><a href="/home"> Home</a></li>
      <li><a href="/lifestyle"> Lifestyle</a></li>
      <li><a href="/clothing"> Clothing</a></li>
        </ul>
        <a className="cta" href="/login"><button>Login/Signup</button></a>
       
       
      </nav>
        
      </>
    )
}

export default NavBar;


// <div className="nav-bar-header">
// <nav>
// <a className="company-logo" href="/">
//    The Everyday Lady
// </a> 
// <ul className="">
// <li><a href="/signup"><span className=""></span> Sign Up</a></li>
// <li><a href="/login"><span className=""></span> Login</a></li>
// </ul>
// </nav>
// </div>
// <div className="">
// <nav className="">
// <ul className="nav nav-tabs">
// <li className="active"><a href="/home">HOME</a></li>
// <li><a href="#">LIFESTYLE</a></li>
// <li><a href="#">CLOTHING</a></li>
// </ul>
// <a className="cart-logo" href="/cart">
// <span class="glyphicon glyphicon-shopping-cart"></span>
// </a> 
// <a></a>

// </nav>
// </div>