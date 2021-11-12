
import { useState } from 'react';

function CheckoutModal({onClose, user, setUser, onLogin}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [newUser, setNewUser] = useState([]);
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

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
            .then((data) => onLogin(data));
    }
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
  
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
                name: newUser.name,
            }),
        })
            .then((r) => r.json())
            .then(data => console.log(data));
    }

    function handleChange(event) {
        setNewUser({ ...newUser, [event.target.name]: event.target.value })
    }

    function handleCheckout(){
        console.log("This is firing")
        fetch('/products/clear_cart', {
            method: "DELETE"
        })
        .then(window.location.href="/orders")
    }

    return(
        <>
        <button onClick={onClose} className="topright">X</button>
        <div className={user ? "closed": "open"}>
        <h3>Signup or Login to Checkout </h3>
        
    
        <div className="signup">
        <form onSubmit={handleSignup}>
            <div>
                <label htmlFor="name">Your Name:</label>
                <input
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password_confirmation">Confirm Password:</label>
                <input
                    type="password"
                    name="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
            </div>
            <button type="submit">Sign Up</button>
        </form>
        </div>
        {/* Checkout as guest */}
        <button onClick={handleCheckout}> Checkout as Guest </button>
        <br/>
        <div className="login">
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                /><br/>
                <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                /><br/>
                <button type="submit">Login</button>
            </form>
        </div>
        </div>
        <h3>{user ? `Hey! ${user.name} Ready to check out?` : null}</h3>
        <h3>{user ? <button onClick={handleCheckout}>Complete Payment</button>: null}</h3>
        </>
    )
}

export default CheckoutModal;