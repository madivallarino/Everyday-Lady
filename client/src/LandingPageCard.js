


function LandingPageCard(props){
    const {  name, image} = props
    
    return(
        <div className="productcard">
        <img src={image} alt="landingimage"/>
       
        <h4>{name}</h4>
        </div>
    )
}

export default LandingPageCard;



