import { useState } from 'react';
import React from 'react';

function OrderCard(props){

    const {  name, image, id, userID} = props
    const [reviewText, setReviewText] = useState("")
    const [starRating, setStarRating] = useState("")
    const [ show, setShow ] = useState(false)
    function handleSubmit(e, id){
        console.log("this is working")
        e.preventDefault()
        const newReview={ 
            description: reviewText,
            star_rating: starRating, 
            product_id: id,
            user_id: userID,
        }
        fetch('/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(newReview)
        }).then((r)=> r.json())
        .then(data => console.log(data))
        setReviewText("")
    }
    
    
    
    return(
        <div className="orderedcard">
            <div className="ordertitle">
            <h3>{name}</h3>
            </div>
            <div className="ordermain">
                <div className="orderimage">
                <img src={image} alt="landingimage"/>
                </div>
                <div className="orderinfo">
                <form onSubmit={(e)=> handleSubmit(e, id)} className={show ? "closed" : null}>
                    <label>Leave Your Review: </label><br/>
                    <select onChange={(e)=> setStarRating(e.target.value)}>
                    <option> Star Rating: </option> 
            <option value="1">⭐</option> 
            <option value="2">⭐⭐</option> 
            <option value="3">⭐⭐⭐</option> 
            <option value="4">⭐⭐⭐⭐</option> 
            <option value="5">⭐⭐⭐⭐⭐</option> 
       </select><br/>
           <textarea className="review-post-textbox" type="text" placeholder="Your review here..." value={reviewText} onChange={(e)=> setReviewText(e.target.value)} rows={6}></textarea><br/>
            <button className="add-review-button" type="submit" value="Add Your Post" onClick={()=> setShow(true)}>Add Review</button>
           </form>
           <h3 className={show ? null : "closed"}>Thank you for your review!</h3>
                </div>
            </div>
        </div>
    )
}

export default OrderCard;

/* <h4>{name}</h4>
            <div className="left-side">
                
            </div>
           
            <div className="right-side">
                  
                 <form onSubmit={handleSubmit}>
                     <label>Leave Your Review</label>
                     <select onChange={(e)=> setStarRating(e.target.value)}>
            <option> Star Rating: </option>
             <option value="1">1</option> 
             <option value="2">2</option> 
             <option value="3">3</option> 
             <option value="4">4</option> 
             <option value="5">5</option> 
        </select>
            <textarea className="review-post-textbox" type="text" placeholder="Your review here..." value={reviewText} onChange={(e)=> setReviewText(e.target.value)} rows={10}></textarea>
             <button className="add-review-button" type="submit" value="Add Your Post" onClick={(e)=> handleSubmit(e, id)}>Add Review</button>
            </form> 
            </div> */


    //         <h4>{name}</h4>
    //         <div className="orderstuff">
            
    //             <div className="orderimg">
    //             <img src={image} alt="landingimage"/>
    //             </div>
    //             <div className="ordername">
                
    //         </div>
    //             <div className="orderreview">
                  
    
    //             </div>
    //         </div>