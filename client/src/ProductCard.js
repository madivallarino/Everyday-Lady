

function ProductCard(props){
    const {  name, price,  image} = props

    return(
        <div className="product-card">
        <span className="product-info">
        <h5>${price}</h5>
        <h4 className="product-name">{name}</h4>
        <img src={image} alt="product image"/>
        
        </span>
        </div>
    )
}

export default ProductCard;