import { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Reviews from './Reviews'
import ProductCard from './ProductCard';
function ProductPage({refresh, setRefresh}){
const [product, setProduct ] = useState([]);
const [allReviews, setAllReviews] = useState([]);
const [reviewText, setReviewText ] = useState("");

const [name, setUserName] = useState("");
// let history = useHistory();

useEffect(()=> {
    fetch('/reviews')
    .then((r)=> r.json())
    .then(data => setAllReviews(data))
},[])


   let cats = allReviews.filter((info)=> (info.product.id === product.id))
 
   function handleReviews(){
       return cats.map((cat)=> <Reviews cat={cat}/>)
   }
   


function handleAverage(){
    let total = 0
    let average = 1
    cats.map((cat)=> total += cat.star_rating)
    average = total / cats.length
    if (average < 2) {
        return "⭐☆☆☆☆"
    }else if (average < 3){
       return "⭐⭐☆☆☆"
    } else if (average < 4){
        return "⭐⭐⭐☆☆"
    } else if (average < 5){
        return "⭐⭐⭐⭐☆"
    }else if (average === 5){
       return "⭐⭐⭐⭐⭐"
    }else {
        return "No Reviews Yet"
    }
}



useEffect(()=> {
    fetch(`${window.location}`)
    .then((r)=> r.json())
    .then(data=> {
        setProduct(data)
    })
},[])
  
    function handleClick(){
        window.location.href=`/${product.category}`
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
        setRefresh(!refresh)
    })
}







    return(
        
       <div className="productpagecontainer">
           <div>
             
               <h4 className="sidetitle">
               women's / <Link to={`/${product.category}`} className="categorylink">{product.category} </Link> </h4>
               {/* <button onClick={handleClick} className="productbutton">Go Back</button> */}
           </div>
           <div className="title">
               {product.name}
           </div>
         <div className="mainbox">
         <div className="extras">

<img src={product.image} />
<br/>
<img src={product.back_image} />     
</div> 
        
             <div className="boxtop">
                   
                    <div className="mainimage">
                    <img src={product.image} />
                    </div>
             </div>
             <div className="boxtop2">
                    <h2>${product.price}.00</h2>
                    <div className="details">
                        <h3>Product Description:</h3>
                        <p>{product.description}</p>
                    </div>
                    <h4>Star Rating:<h5>{handleAverage()}</h5></h4>
                    <h3>Color: {product.color}</h3>
                    <button onClick={()=> handleCart(product)}>Add to Bag</button>
                    <a href="#">Add to Wish List</a>
                      
                    <h3>Shipping</h3>
             </div>

         </div>
         <div className="reviews">
        <h1>Reviews:</h1>
            {handleReviews()}
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