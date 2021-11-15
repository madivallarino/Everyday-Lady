import { useState, useEffect } from 'react'; 
// import download from './download.png'
import ProductCard from './ProductCard';
function NavBar({search, setSearch, refresh, setRefresh}){
const [cart, setCart] = useState([]);
const [error, setError] = useState("");


useEffect(()=> {
  fetch('/cart')
  .then((r)=> r.json())
  .then(data=> setCart(data))
}, [refresh])




  
 
function handleSearch(e, search){
  e.preventDefault()
  setSearch(search)

}

const cartNum = cart.map((product)=> product.number) 

function totalItems(){
  let itemNum = 0;
  for (let i = 0; i < cartNum.length; i++){
    itemNum += cartNum[i]
  } return itemNum
}

    return(
      <>
      <nav className="nav">
        <a className="logo" href="/"> The Everyday Lady </a>
        <ul className="nav-links">
        <li><a href="/about">About</a></li>
      <li><a href="/home"> Home</a></li>
      <li><a href="/lifestyle"> Lifestyle</a></li>
      <li><a href="/clothing"> Clothing</a></li>
        </ul>
        <form className="searchbar" onSubmit={handleSearch}>
      <input
        type="text"
        id="search"
        className="input"
        value={search}
        placeholder="Search ..."
      onChange={(e)=> setSearch(e.target.value)}/>
      {/* <a href="#"><input type="submit"/></a> */}
       {/* <button onClick="location.href='/home">🔍</button> */}
    </form>
        <a className="cta" href="/cart"><p>{totalItems()}</p><img src="https://toppng.com/uploads/preview/freebag-vector-retail-shopping-cart-bag-icon-11553505193l9s1kngqvt.png"alt="cart" className="cartlogo"/></a>
       
       
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