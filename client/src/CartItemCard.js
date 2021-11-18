function CartItemCard(props){
    const {  name, price, image, id, deleteFromCart, number, handleQuantity, details, category, size} = props
  
    return(
        <div className="cartcard">
            <div className="leftside">
            <img src={image} alt="product image"/>
            </div>
            <div className="rightside">
           
           
                <h2>{name}</h2>
                <p>{details}</p>
                {category === "clothing" ? <div><h3>Size: {size}</h3></div> : null}
               {category === "giftcard" ? <h3>Amount: ${price} </h3>:<h3>${price}</h3>} 
            <label>Quantity:</label>
            <select onChange={(e)=>handleQuantity(e.target.value, id)}>
            <option>{number}</option>
            {number === 1 ? null : <option value="1">1</option> }
            {number === 2 ? null : <option value="2">2</option> }
            {number === 3 ? null : <option value="3">3</option> }
        </select> <br/>
            <button onClick={()=> deleteFromCart(id)}> Remove From Cart</button>
            </div>
           
        </div>
    )
}

export default CartItemCard;


{/* <button onClick={()=> deleteFromCart(id)}> Remove From Cart</button>
        <h4 className="product-name">{name}</h4>
        
        <h5>${price}</h5>
        <select onChange={(e)=>handleQuantity(e.target.value, id)}>
            <option>{number}</option>
            {number === 1 ? null : <option value="1">1</option> }
            {number === 2 ? null : <option value="2">2</option> }
            {number === 3 ? null : <option value="3">3</option> }
        </select> */}