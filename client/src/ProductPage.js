import { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

function ProductPage(){
const [product, setProduct ] = useState([])
const [reviewText, setReviewText ] = useState("");
const [name, setUserName] = useState("");
let history = useHistory();



useEffect(()=> {
    fetch(`${window.location}`)
    .then((r)=> r.json())
    .then(data=> {
        // console.log(data)
        setProduct(data)
    })
},[])
    // console.log(product)
// id, name, price, image, color, back_image

// function handleSubmit(event){
//     event.preventDefault()
//     const newReview={
//         name,
//         reviewText,
//     }
//     fetch('/reviews',{
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         }, body:JSON.stringify(newReview)
//     })
//     .then((r)=> r.json())
//     .then(data=> console.log(data))
//     setReviewText("");
// }


    function handleClick(){
        history.goBack()
    }



function handleCart(product){
    fetch(`/products/add_to_cart/${product.id}`,{
        method: "POST",
        headers: {
    "Content-Type": "application/json"
    }, body:JSON.stringify(product)
    })
    .then((r)=> r.json())
    .then(data=> console.log(data))
}



    return(
        <>
        <div>
        <button onClick={handleClick}>Go Back</button>
        <h2>{product.name}</h2>
        <img className="main-image" src={product.image} 
        alt="prod-image"/>
        <img src={product.back_image} alt="second-image"/>
        <p>${product.price}</p>

        
        <button onClick={()=> handleCart(product)}>Add to Cart</button>
       

        {/* <form method="post" action='/products/add_to_cart/:id'
        class="inline" >
  <input type="hidden" name="extra_submit_param" value="extra_submit_value" />
  <button type="submit" name="submit_param" value="submit_value" class="link-button">
    Add to Cart
  </button> */}
{/* </form> */}


        </div>
        <div className="details-container">
          <h3>Details:</h3>{product.description}
        </div>
        <div className="review-container">
       <h2>Reviews:</h2>
       {/* <form onSubmit={handleSubmit}>
           <span>What's your name?</span><input className='input' type="text" placeholder="Name" value={name} onChange={(e)=> setUserName(e.target.value)}/>
           <textarea className="review-post-textbox" type="text" placeholder="Your review here..." value={reviewText} onChange={(e)=> setReviewText(e.target.value)} rows={10}></textarea>
           <button className="add-review-button" type="submit" value="Add Your Post" onClick={handleSubmit}>Add Review</button>
       </form> */}
        </div>
        </>
    )
}


export default ProductPage;