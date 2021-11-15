import { useState, useEffect } from "react";
import CartItemCard from './CartItemCard';
// require 'pry';

function CartPage({ user, setUser, refresh, setRefresh, onLogin}){
const [cart, setCart ] = useState([])
const [show, setShow ] = useState(false)
const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [newUser, setNewUser] = useState("");
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
// let total = 0
    useEffect(()=> {
        fetch('/cart')
        .then((r)=> r.json())
        .then(data=> setCart(data))
      }, [refresh])


function deleteFromCart(id){
    fetch(`/products/remove_from_cart/${id}`, {
        method: "DELETE",
    }).then(setRefresh(!refresh))
}

function handleLogin(e) {
    e.preventDefault();
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: loginEmail,
            password: loginPassword,
        }),
    })
        .then((r) => r.json())
        .then((data) => {
            onLogin(data)
            console.log(data)
            setLoginEmail("")
            setLoginPassword("")

        });
}

function handleSignup(e) {
    e.preventDefault();
    fetch("/signup", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
            password_confirmation: passwordConfirmation,
            name: newUser,
        }),
    })
        .then((r) => r.json())
        .then(data => {
            onLogin(data)
            setEmail("")
            setPassword("")
            setPasswordConfirmation("")
            setNewUser("")
        });
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
        key={product.id}
        number={product.number}
        details={product.description}
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

  function handleToggle(){
      setShow(!show)
  }

  function handleQuantity(props, id){
    fetch(`/quantity/${id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({number: props})
    }).then((r)=> r.json())
     .then(data => {console.log(data)
                     setRefresh(!refresh)})
 }


function completeOrder(e){
    handleOrder(e);
    window.location.reload();
    orderPage(e);
}
 function handleOrder(e){
    fetch('/empty_cart', {
        method: "DELETE",
    })
    
 }
 function orderPage(e){
     window.location.href="/orders"
 }
 
console.log(user)
    return(
    <div className="cartpage">
        <div className="cartheader"> 
                    <h1>Your Shopping Basket:</h1>
                    <h1>Checkout:</h1>
        </div>
        <div className="maincart">
            <div className="orders">
                {productList}
            </div>
            
            <div className="payandlogin">
                {/* {show ?   `Hey ${user.name}!`: null} */}
            <div className={show ?  "closed" : "loginform"}>
                    <div className="login">
                    <h2>Please Sign In To Continue:</h2>
                            <form onSubmit={handleLogin}>
                                    <label>Email:</label>
                                    <input
                                    type="text"
                                    value={loginEmail}
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                    placeholder="Email.."
                                    /><br/>
                                    <label>Password:</label>
                                    <input
                                    type="password"
                                    value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                    placeholder="Password.."
                                    /><br/>
                                    <button type="submit" onClick={handleToggle}>Login</button>
                            </form>

                    </div>
                    <div className={show ? "closed":"sign"}>
                        <form onSubmit={handleSignup}>
                            <div>
                            <label htmlFor="name">Your Name:</label>
                            <input
                            type="text"
                            name="name"
                            value={newUser}
                            placeholder="Name.."
                            onChange={(e)=> setNewUser(e.target.value)}
                            />
                            </div>
                            <div>
                            <label htmlFor="email">Email:</label>
                            <input
                            type="text"
                            name="email"
                            placeholder="Email.."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                            </div>
                            <div>
                            <label htmlFor="password">Password:</label>
                            <input
                             type="password"
                            name="password"
                            placeholder="Password.."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            </div>
                            <div>
                            <label htmlFor="password_confirmation">Confirm Password:</label>
                            <input
                            type="password"
                             name="password_confirmation"
                             placeholder="Password.."
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            />
                            </div>
                            <button type="submit" onClick={handleToggle}>Sign Up</button>
                        </form>
                    </div>
                </div>
                <div className="payment">
                    
                    <label>Add Your Discount Code:</label><br/>
                    <input></input><button>Apply</button>
                    <h2>Your Total: ${totalPrice()}.00</h2>
                    <p>Due to the coronavirus, please allow extra time for shipping</p>
                </div>
               
                <br/>
                <div className="checkout">
                    <h3>Ready to Submit the Order?</h3>
                    <button onClick={completeOrder}>Pay & Checkout </button>
                </div>
            </div>
        </div>

    </div>
        
    )
}

export default CartPage


                    
            
            
        //     </div>
            
        //     <button></button>
        //     <div className="login"> 
        //     <div className="signup">
                    
        //         </div>
        //     <div className="login">
                
        // </div>
        
            
        // </div>
        // </div>