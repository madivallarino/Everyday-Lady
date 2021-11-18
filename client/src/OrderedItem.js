


function OrderedItem(props){
    const {  name, image, number, color} = props
    
    return(
        <div className="orderedcard">
            <div className="ordertitle">
                <h3>{name}</h3>
            </div>
            <div className="ordermain">
                <div className="orderimage">
                    <img src={image} alt="otherimg"/>
                </div>
                <div className="orderinfo">
                <h3> Color: {color}</h3>
                <h3># Ordered: {number}</h3> 
                
                </div>
            </div>
        </div>
    )
}

export default OrderedItem;


