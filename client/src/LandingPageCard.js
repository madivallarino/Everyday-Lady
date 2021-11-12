import { Link } from 'react-router-dom';


function LandingPageCard(props){
    const {  name, price, color, image, back_image} = props
    
    return(
        <div className="productcard">
       
        
        <img src={image} alt="landingimage"/>
        <h4>{name}</h4>
        
        </div>
    )
}

export default LandingPageCard;



