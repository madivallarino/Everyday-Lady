import { Link } from 'react-router-dom';

function ProductCard(props){
    const {  name, price, color, image, back_image} = props

    return(
        <div className="product-card">
        <span className="product-info">
        <h4 className="product-name">{name}</h4>
        <img src={image} alt="product image"/>
        <h5>${price}</h5>
        </span>
        </div>
    )
}

export default ProductCard;