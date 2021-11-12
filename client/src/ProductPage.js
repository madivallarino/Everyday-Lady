import { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ProductCard from './ProductCard';
function ProductPage({refresh, setRefresh}){
const [product, setProduct ] = useState([]);
const [allProducts, setAllProducts] = useState([]);
const [reviewText, setReviewText ] = useState("");

const [name, setUserName] = useState("");
// let history = useHistory();



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

// useEffect(()=> {
//     fetch(`/${product.category}`)
//     .then((r)=> r.json())
//     .then(data => setAllProducts(data))
// },[])



function handleSubmit(event){
    event.preventDefault()
    const newReview={
        name,
        reviewText,
    }
    fetch('/reviews',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, body:JSON.stringify(newReview)
    })
    .then((r)=> r.json())
    .then(data=> console.log(data))
    setReviewText("");
}


    function handleClick(){
        // history.goBack()
        console.log('this is firing')
    }



function handleCart(product){
    fetch(`/products/add_to_cart/${product.id}`,{
        method: "POST",
        headers: {
    "Content-Type": "application/json"
    }, body:JSON.stringify(product)
    })
    .then((r)=> r.json())
    .then(data=> {
        console.log(data)
        setRefresh(!refresh)
    })
}

function sideImages(array, num1, num2){
    let newClothing = array.slice(num1,num2).map((product)=> {
     return (
     
            <ProductCard 
                 name={product.name} 
                 price={product.price} 
                 image={product.image} 
                 color={product.color} 
                 back_image={product.back_image} 
                 id={product.id}
                 key={product.id}/>
         )
             }
     )
     return newClothing
 } 





    return(
        
       <div className="productpagecontainer">
           <div>
               <h4>
               Women's / {product.category}
               </h4>
               <button onClick={handleClick}>Go Back</button>
           </div>
         <div className="mainbox">
             <div className="boxtop">
                   
                    <div className="mainimage">
                    <img src={product.image} />
                    </div>
             </div>
             <div className="boxtop2">
                    <h1>{product.name}</h1>
                    <h2>${product.price}.00</h2>
                    <p>Reviews: <br/> ⭐⭐☆☆☆</p>
                    <h3>Color: {product.color}</h3>
                    <button onClick={()=> handleCart(product)}>Add to Bag</button>
                    <a href="#">Add to Wish List</a>
                    <div>
                        <h3>Details</h3>
                        <p>{product.description}</p>
                    </div>  
                    <h3>Shipping</h3>
             </div>
         </div>
         <div className="extras">
                 
                    <img src={product.image} />
                    <img src={product.back_image} />
                    
               </div>

         <div className="reviewbox">
             
             <div  className="reviews">
         <form onSubmit={handleSubmit}>
            <span>What's your name?</span><br/>
            <input className='input' type="text" placeholder="Name" value={name} onChange={(e)=> setUserName(e.target.value)}/><br/>
            <textarea className="review-post-textbox" type="text" placeholder="Your review here..." value={reviewText} onChange={(e)=> setReviewText(e.target.value)} rows={10}></textarea><br/>
            <button className="add-review-button"    type="submit" value="Add Your Post" onClick={handleSubmit}>Add Review</button>
            </form>
            <h3>Reviews: </h3>
            </div>
           
         </div>

       </div>
        
    )
}


export default ProductPage;


/* <div>
<button onClick={handleClick}>Go Back</button>
<h2>{product.name}</h2>
<img className="main-image" src={product.image} 
alt="prod-image"/>
<img src={product.back_image} alt="second-image"/>
<p>${product.price}</p>


<button onClick={()=> handleCart(product)}>Add to Cart</button>


 <form >
<input type="hidden" name="extra_submit_param" value="extra_submit_value" />
<button type="submit" name="submit_param" value="submit_value" class="link-button">
Add to Cart
</button> 
 </form> 


// </div>
// <div className="details-container">
//   <h3>Details:</h3>{product.description}
// </div>
// <div className="review-container">
// <h2>Reviews:</h2>
/* <form onSubmit={handleSubmit}>
   <span>What's your name?</span><input className='input' type="text" placeholder="Name" value={name} onChange={(e)=> setUserName(e.target.value)}/>
   <textarea className="review-post-textbox" type="text" placeholder="Your review here..." value={reviewText} onChange={(e)=> setReviewText(e.target.value)} rows={10}></textarea>
   <button className="add-review-button" type="submit" value="Add Your Post" onClick={handleSubmit}>Add Review</button>
</form> */
// </div> */}