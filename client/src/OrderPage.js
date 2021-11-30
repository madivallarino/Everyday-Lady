import { useEffect, useState } from 'react';
import React from 'react';
import OrderCard from './OrderCard'
import OrderedItem from './OrderedItem'
function OrderPage(){
    const [ lastItem, setLastItem ] = useState([])
    const [ pastOrder, setPastOrder ] = useState([])
    const [allProducts, setAllProducts ] = useState([])
    const [userID, setUserID ] = useState("")
    const [name, setName] = useState("")

useEffect(()=> {
    fetch('/allproducts')
    .then(r => r.json())
    .then(data => setAllProducts(data))
},[])


useEffect(()=> {
    fetch('/me')
    .then(r=> r.json())
    .then(data=> {
        setName(data.name)
        setUserID(data.id)
        setPastOrder(data.orders)
        setLastItem(data.items)})
},[])

function orderedItems(array1, cats){
    let array2 = Object.entries(array1)
    let answer = []
    for(const element of array2){
    for (const ele of element){
     mapOfAllProducts(cats, answer, ele)
           
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

function orderNumber(arr1){
    let arr2 = Object.entries(arr1)
    let orderNum = "#"
    for (const element of arr2){
       for (const ele of element){
           orderNum += ele
       }
    }
    return orderNum
}


let recentOrder = orderedItems(pastOrder, allProducts)
let orders = orderedItems(lastItem, allProducts)

const listofPastOrders = recentOrder.map((product)=> {
    return ( 
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




const listOforders = orders.map((product)=> {
    return( 
        <OrderedItem
            name={product.name} 
            price={product.price} 
            image={product.image}
            number={product.number} 
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
             <div className="namebanner">
                <h1>Welcome Back, {name}! <button onClick={handleLogout}>Logout</button></h1>
             </div>
        <div className="profile">
            <div className="justordered">
                <div className="titlebanner">
                <h1 >Just Ordered</h1>
            <h3>Order Number {orderNumber(lastItem)}</h3>
                </div>
                <div className="ordercontainer">
                    <div className="orderholder">
                    {listOforders}
                    </div>
        
                </div>
                {/* <h2>Total: $ {totalPrice()}.00</h2> */}
                <h4>*Please allow 3-5 days for processing & shipping*</h4>
            </div>
            <div className="pastorders">
            <div className="titlebanner">
            <h1 >Previously Ordered</h1>
            <h2>Order Number {orderNumber(pastOrder)}</h2>
            </div>
                <div className="ordercontainer">
                    <div className="orderholder">
                    {listofPastOrders}
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default OrderPage;

{/* <div className="profile">
<div className="justordered">
    <h1 >You just ordered</h1>
    <h2>Order Number {orderNumber(lastItem)}</h2>
    <div className="ordereditems">
        
        <div className="orderedlist">
            {listOforders}
            <div className="totalinfo">
            <h2>Total: $ {totalPrice()}.00</h2>
            <div className="infoshipping">
            
        </div>
        </div>
        </div>
        <div className="shippinginfo">
        
        
        </div>
    </div>
    
</div>
<div className="pastorders">
    <h1>Your order history</h1>
    <h2>Order Number {orderNumber(pastOrder)}</h2>
    <div className="pastorderitems">
    
    <div className="singlepastorder">
        
    {listofPastOrders}
    </div>
    </div>
</div>
</div> */}