function CartItemCard(props){
    const {  name, price, color, image, back_image, id, deleteFromCart} = props
    console.log("GETTING THROUGH")
    return(
        <div className="product-card">
        <button onClick={()=> deleteFromCart(id)}> Remove From Cart</button>
        <h4 className="product-name">{name}</h4>
        <img src={image} alt="product image"/>
        <h5>${price}</h5>
        </div>
    )
}

export default CartItemCard;