import { useEffect, useState } from 'react';
import React from 'react';
import OrderCard from './OrderCard'
function OrderPage(){
    const [ lastItem, setLastItem ] = useState([])
    const [allProducts, setAllProducts ] = useState([])
    const [userID, setUserID ] = useState("")
    const [name, setName] = useState("")

useEffect(()=> {
    fetch('/allproducts')
    .then(r => r.json())
    .then(data => setAllProducts(data))
},[])

// console.log(lastItem)

useEffect(()=> {
    fetch('/me')
    .then(r=> r.json())
    .then(data=> {
        console.log(data)
        setName(data.name)
        setUserID(data.id)
        setLastItem(data.items.slice(-1))})
},[])

function orderedItems(array1, cats){
    let array2 = Object.entries(array1)
    let answer = []
    for(const element of array2){
    for (const ele of element){
        for (const star of ele){ 
          mapOfAllProducts(cats, answer, star)
            // return mapOfAllProducts(cats, star)
            }
    }}
 return answer
}
function mapOfAllProducts(cats, answer, dog){
    let mutt = parseInt(dog)
        cats.map((cat)=> {
        if (cat.id === mutt){
                answer.push(cat)
        } 
    })
    return answer 
}
// console.l
let orders = orderedItems(lastItem, allProducts)

const listOforders = orders.map((product)=> {
    return( 
        <OrderCard
            name={product.name} 
            price={product.price} 
            image={product.image} 
            color={product.color} 
            back_image={product.back_image} 
            id={product.id}
            key={product.id}
            userID={userID}
        />
    )
})

const prices =  orders.map((product)=> product.price * product.number) 

 function totalPrice(){
    let total = 0;
      for(let i = 0; i < prices.length; i++){
          total += prices[i];
      }
      return total

  }

  function handleLogout(){
    console.log("This is firing")
    fetch('/logout', {
      method: "DELETE"
    }).then(window.location.reload())
    .then(window.location.href="/")
  }



    return(
        <div className="containerholder">
            
            <div className="left">
            <h3>Thank You for Your Order!</h3>
                <h2>You ordered: {listOforders} </h2>
            </div>


            <div className="right">
                <h3>Your Profile: </h3>
                <div className="profile">
                    <h1>{name}</h1> <br/>
                    <br/> <h2>Your Order History:</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
      
        </div>
    )
}

export default OrderPage;

