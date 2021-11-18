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
    
      <nav className="nav">
        <div className="companyheader">
        <a className="logo" href="/"> The Everyday Lady </a>
        </div>
        <div className="companylinks">
        <ul className="nav-links">
        <a href="/about"> <li>About</li></a>
        <a href="/home"><li> Home</li> </a>
        <a href="/lifestyle"><li> Lifestyle</li></a>
        <a href="/clothing"><li> Clothing</li></a>
        </ul>
        </div>
        <div className="searchbarandcart">
        <form className="searchbar" onSubmit={handleSearch}>
      <input
        type="text"
        id="search"
        className="input"
        value={search}
        placeholder="Search ..."
      onChange={(e)=> setSearch(e.target.value)}/>
    
    </form>
        <a className="cta" href="/cart"><p> {totalItems()} </p> <img src="https://toppng.com/uploads/preview/freebag-vector-retail-shopping-cart-bag-icon-11553505193l9s1kngqvt.png"alt="cart" className="cartlogo"/></a> 
        </div>
      </nav>
        
    
    )
}

export default NavBar;


{/* <a className="logo" href="/"> The Everyday Lady </a>
        <ul className="nav-links">
        <li><a href="/about">About</a></li>
      <li><a href="/home"> Home</a></li>
      <li><a href="/lifestyle"> Lifestyle</a></li>
      <li><a href="/clothing"> Clothing</a></li>
        </ul> */}
        