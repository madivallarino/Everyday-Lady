function OrderPage({cart}){
    const prices = cart.map((product)=> (product.number * product.price))

    function totalPrice(){
       let total = 0;
         for(let i = 0; i < prices.length; i++){
             total += prices[i];
         }
         return total
     }


const orderedItems = cart.map((item)=> {
    return(
        <>
        <h4>{item.name}</h4>
        <img src={item.image}/>
        </>
    )
})



    return(
        <>
        <h3>Thank You for Your Order!</h3>
        <h2>You ordered: {orderedItems}</h2>
        <h3>Total: ${totalPrice()}.00</h3>
        <h4>Estimated Delivery: 3-4 Business Days</h4>
        </>
    )
}

export default OrderPage;