import { useState, useEffect } from "react";
import CartItemCard from './CartItemCard';
import CheckoutModal from './CheckoutModal';

function CartPage({ user, setUser, refresh, setRefresh, onLogin}){
const [cart, setCart ] = useState([])
const [show, setShow ] = useState(false)
// let total = 0


    useEffect(()=> {
        fetch('/cart')
        .then((r)=> r.json())
        .then(data=> setCart(data))
      }, [refresh])


function deleteFromCart(id){
    fetch(`/products/remove_from_cart/${id}`, {
        method: "DELETE"
    }).then(setRefresh(!refresh))
}


      const productList =  cart.map((product)=> {
        return (
        <CartItemCard 
        name={product.name} 
        price={product.price} 
        image={product.image} 
        color={product.color} 
        back_image={product.back_image} 
        id={product.id}
        number={product.number}
        deleteFromCart={deleteFromCart}
        handleQuantity={handleQuantity}/>
        )
    }) 

  const prices =  cart.map((product)=> product.price * product.number) 
//   let total = 0;

 function totalPrice(){
    let total = 0;
      for(let i = 0; i < prices.length; i++){
          total += prices[i];
      }
      return total

  }

  function handleQuantity(props, id){
    console.log(props)
    console.log(id)
    fetch(`/quantity/${id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({number: props})
    }).then((r)=> r.json())
     .then(data => {console.log(data)
                     setRefresh(!refresh)})
 }

    return(
        <div className="cartpage">
        <div className="cartheader">
            <h1>Your Orders:</h1>
            <h1>Payment: </h1>
        </div>
        <div className="maincart">
            <div className="orders">
            {productList}
            </div>
            <div className="payment">
            Shipping:  <br/>
            Total: $ {totalPrice()} .00 
            <button onClick={()=> setShow(show=> !show)}>Checkout</button>
            <div className={ show ? "modal" : "closed"}>
            <CheckoutModal onClose={()=> setShow(show=> !show)} show={show} onLogin={onLogin} user={user}/> </div>
            </div> 
        </div>
        </div>
    )
}

export default CartPage

{/* <div className="cart-items">
        Your Cart:
        {productList}
        </div>
        <div className="checkout-process">
        Shipping:  <br/>
            Total: $ {totalPrice()} .00 
            
                <br/>
        <button onClick={()=> setShow(show=> !show)}> Checkout</button> 
       <div className= {show ? "modal" : "closed"}>
        <CheckoutModal onClose={()=> setShow(show=> !show)} show={show} />
        </div> 
        </div> */}