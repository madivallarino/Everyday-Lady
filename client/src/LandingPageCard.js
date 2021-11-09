import { Link } from 'react-router-dom';

function LandingPageCard(props){
    const {  name, price, color, image, back_image} = props

    return(
        <>
        <h4>{name}</h4>
        <img src={image} alt="landingimage"/>
        <h5>${price}</h5>
        </>
    )
}

export default LandingPageCard;