

function ProductCard(props){
    const {  name, price,  image} = props

    return(
        <div className="product-card">
        <span className="product-info">
        
        
        <img src={image} alt="product image"/>
        <h4 className="product-name">{name}</h4>
        <h5>${price}</h5>
        </span>
        </div>
    )
}

export default ProductCard;