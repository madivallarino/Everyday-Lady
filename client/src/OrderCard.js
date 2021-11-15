import { useState } from 'react';
import React from 'react';

function OrderCard(props){

    const {  name, image, id, userID} = props
    const [reviewText, setReviewText] = useState("")
    const [starRating, setStarRating] = useState("")

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
        <div className="ordercard">
            <div className="left-side">
                <img src={image} alt="landingimage"/>
            </div>
            <div className="right-side">
                  <h4>{name}</h4>
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
            </div>
        </div>
    )
}

export default OrderCard;

