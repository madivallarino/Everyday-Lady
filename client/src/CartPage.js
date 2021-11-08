import { useState, useEffect } from "react";
import CartItemCard from './CartItemCard';
import CheckoutModal from './CheckoutModal';

function CartPage(){
const [cart, setCart ] = useState([])
const [show, setShow ] = useState(false)
// let total = 0


    useEffect(()=> {
        fetch('/cart')
        .then((r)=> r.json())
        .then(data=> setCart(data))
      }, [])


function deleteFromCart(id){
    fetch(`/products/remove_from_cart/${id}`, {
        method: "DELETE"
    })
}


      const productList = cart.map((product)=> {
        return ( 
     
        <CartItemCard 
        name={product.name} 
        price={product.price} 
        image={product.image} 
        color={product.color} 
        back_image={product.back_image} 
        id={product.id}
        deleteFromCart={deleteFromCart}/>
       
        )
    })

  const prices = cart.map((product)=> product.price)
  
  

    return(
        <>
        <div className="cart-items">
        Your Cart:
        {productList}
        </div>
        <div className="checkout-process">
        Shipping: <br/>
            Total:  <br/>
        <button onClick={()=> setShow(show=> !show)}> Checkout</button> 
       <div className= {show ? "modal" : "closed"}>
        <CheckoutModal onClose={()=> setShow(show=> !show)} show={show} />
        </div> 
        </div>
        </>
    )
}

export default CartPage