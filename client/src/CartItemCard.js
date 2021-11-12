function CartItemCard(props){
    const {  name, price, color, image, back_image, id, deleteFromCart, number, handleQuantity} = props
   
    return(
        <div className="product-card">
        <button onClick={()=> deleteFromCart(id)}> Remove From Cart</button>
        <h4 className="product-name">{name}</h4>
        <img src={image} alt="product image"/>
        <h5>${price}</h5>
        <select onChange={(e)=>handleQuantity(e.target.value, id)}>
            <option>{number}</option>
            {number === 1 ? null : <option value="1">1</option> }
            {number === 2 ? null : <option value="2">2</option> }
            {number === 3 ? null : <option value="3">3</option> }
        </select>
        </div>
    )
}

export default CartItemCard;