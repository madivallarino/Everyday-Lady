import React, { useState, useEffect } from 'react';

function OrderStatus({show, setShow}){
const [pastOrder, setPastOrder ] = useState([])
const [lastItem, setLastItem] = useState([])
const [orderInput, setOrderInput ] = useState("")
const [visible, setVisible ] = useState(false);


    useEffect(()=> {
        fetch('/me')
        .then(r=> r.json())
        .then(data=> {
            setPastOrder(data.orders)
            setLastItem(data.items)
        })
    },[])

    if (! show){
        return null
    }

    function orderNumber(arr1){
        let arr2 = Object.entries(arr1)
        let orderNum = ""
        for (const element of arr2){
           for (const ele of element){
               orderNum += ele
           }
        }
        return orderNum
    }

    

    function handleStatus(e){
        e.preventDefault()
        setVisible(!visible)
       console.log(orderInput)
    }

    function handleOrderStatus(){
        let order1 = orderNumber(lastItem)
        let order2 = orderNumber(pastOrder)
        if (orderInput === order1){
            return <h3>Your order is still being processed, thank you for your patience!</h3>
        } else if (orderInput === order2){
            return <h3>Your order has been delivered, thank you!</h3>
        } else {
            return <h3>Please input a valid order number</h3>
        }
    }

    return (
        <div className="fullmodal">
            <div className="topmodal">
                <h2>Order Status <button onClick={()=> setShow(!show)}>X</button></h2>
                <p>Enter your order number to check its status.</p>
            </div>
            <div className="middlemodal">
                <form onSubmit={handleStatus} className={visible ? "closed" : null}>
                <h3>Order Number</h3>
                <input type="text" value={orderInput} onChange={(e)=> setOrderInput(e.target.value)}/>
                <h3>Billing ZIP Code*</h3>
                <input ></input>
                <button >Check Status</button>
                </form>
                {visible ? handleOrderStatus() : null}
            </div>
            <div className="lowmodal">
                <p>For FAQS and returns, see our Return Policy. <br/> Have a question? Contact us! <br/><br/> Google Privacy Policy and Terms of Service apply</p>
                
            </div>
        </div>
    )
}

export default OrderStatus;