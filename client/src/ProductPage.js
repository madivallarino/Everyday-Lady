import { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Reviews from './Reviews'
import ProductCard from './ProductCard';
import LandingCard from './LandingCard';

function ProductPage({refresh, setRefresh}){
const [product, setProduct ] = useState([]);
const [allReviews, setAllReviews] = useState([]);
const [homeStuff, setHome] = useState([])
const [lifestyleStuff, setLifestyle] = useState([])
const [clothingStuff, setClothing] = useState([])
const [reviewText, setReviewText ] = useState("");
const [mainImage, setMainImage] = useState(false)
const [clicked, setClicked ] = useState(false)
const [secondClicked, setSecondClicked] = useState(false)
const [thirdClicked, setThirdClicked ] = useState(false)
const [fourthClicked, setFourthClicked ] = useState(false)
const [fifthClicked, setFifthClicked] = useState(false)
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
   
   function handleToggle(){
       console.log("This is firing")
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

useEffect(()=> {
    fetch(`/clothing`)
    .then((r)=> r.json())
    .then(data=> {
       setClothing(data.slice(20,26))
    })
},[])
useEffect(()=> {
    fetch(`/lifestyle`)
    .then((r)=> r.json())
    .then(data=> {
       setLifestyle(data.slice(20,26))
    })
},[])
useEffect(()=> {
    fetch(`/home`)
    .then((r)=> r.json())
    .then(data=> {
       setHome(data.slice(20,26))
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
        window.location.href=`/${product.category}`
    })
}

function handleSize(e, id){
    e.preventDefault()
    fetch(`/sizeupdate/${id}`, {
        method: "PATCH", 
        headers: {
            "Content-Type": "application/json",
        }, body: JSON.stringify({size: e.target.value})
    }).then((r)=> r.json())
        .then(data => console.log(data))
}

function handleAmount(e, id){
    let num = parseInt(e.target.value)
    fetch(`/priceupdate/${id}`, {
        method: "PATCH", 
        headers: {
            "Content-Type": "application/json",
        }, body: JSON.stringify({price: num})
    }).then((r)=> r.json())
        .then(data => console.log(data))
}



function homeImages(arr){
  return homeStuff.map((product)=> {
     return <a href={`/products/${product.id}`}><LandingCard  name={product.name} image={product.image} /></a>
     
        
             } 
     )
 } 

 function lifestyleImages(arr){
   return lifestyleStuff.map((product)=> {
     return <a href={`/products/${product.id}`}> <LandingCard name={product.name} image={product.image} /> </a>
     
        
             }
     )
 } 
 function clothingImages(arr){
   return clothingStuff.map((product)=> {
         return <a href={`/products/${product.id}`}><LandingCard name={product.name} image={product.image}/></a>
             }
     )
     
 } 
 
function handleAlsoLike(){
    if (product.category === "clothing"){
        return clothingImages(clothingStuff)
    } else if (product.category === "home"){
        return homeImages(homeStuff)
    } else if (product.category === "lifestyle"){
        return lifestyleImages(lifestyleStuff)
    }else {
        return null
    }
}


    return(
        
       <div className="productpagecontainer">
           <div>
               <div className="sidetitle">
               {product.name} 
           </div> 
               {/* <button onClick={handleClick} className="productbutton">Go Back</button> */}
           </div>
           
         <div className="mainbox">
         <div className="extras">
         <div className="details">
                        <h3>Description:</h3>
                        <p>{product.description}</p>
                        {/* <a href="#">Add to Wish List</a> */}
                        {product.category === "giftcard" ? null : <h3 className="productcolor">Color: {product.color}</h3>}
                        {product.category === "giftcard" ? 
                        <div>
                            <h3>Amount</h3>
                            <button value="25" onClick={(e)=> handleAmount(e.target.value, product.id)} onClick={()=> setClicked(!clicked)} className={clicked ? "clicked" : null}>$25</button>
                            <button value="50" onClick={(e)=> handleAmount(e.target.value, product.id)}onClick={()=> setSecondClicked(!secondClicked)} className={secondClicked ? "clicked" : null}>$50</button>
                            <button value="75"onClick={(e)=> handleAmount(e.target.value, product.id)} onClick={()=> setThirdClicked(!thirdClicked)} className={thirdClicked ? "clicked" : null}>$75</button>
                            <button value="100" onClick={(e)=> handleAmount(e.target.value, product.id)} onClick={()=> setFourthClicked(!fourthClicked)} className={fourthClicked ? "clicked" : null}>$100</button>
                            <button value="150" onClick={(e)=> handleAmount(e.target.value, product.id)} onClick={()=> setFifthClicked(!fifthClicked)} className={fifthClicked ? "clicked" : null}>$150</button>
                            <br/>
                            <h3>Recipient's Name</h3>
                            <input></input>
                            <h3>Recipient's Email Address</h3>
                            <input></input>
                        </div> 
                        : null}



                        {product.category === "clothing" ? <div> <h3>Size </h3>
                        <button onClick={(e)=> handleSize(e, product.id)} value="S" onClick={()=> setClicked(!clicked)} className={clicked ? "clicked" : null}>S</button>
                        <button onClick={(e)=> handleSize(e, product.id)} value="M" onClick={()=> setSecondClicked(!clicked)} className={secondClicked ? "clicked" : null}>M</button>
                        <button onClick={(e)=> handleSize(e, product.id)} value="L" onClick={()=> setThirdClicked(!clicked)} className={thirdClicked ? "clicked" : null}>L</button>
                        </div> : null}
                        
                    </div>
                    {/* <h2>${product.price}.00</h2> */}
                    <button onClick={()=> handleCart(product)} className="productbutton">Add to Bag</button>
                    <div>
                    <h4>Star Rating: <p>{handleAverage()}</p></h4>
                    </div>
   
</div> 
             <div className="boxtop">
                   
                    <div className="mainimage">
                    <img src={mainImage ? product.back_image : product.image} />
                    </div>
             </div>
             <div className="boxtop2">
             <img src={product.image} onClick={()=> setMainImage(false)}/>
<br/>
<img src={product.back_image} onClick={()=> setMainImage(true)} />  
                    
                    {/* <h3>Shipping</h3> */}
             </div>

         </div>
         <div className="reviews">
        <h1>Reviews:</h1>
        
        {handleReviews()}
            
         </div>
            
         <div className="alsolike">
              {product.category === "giftcard" ? null : <>
              <div className="alsolikelabel">
                   You May Also Like
               </div>
               <div className="alsolikeimg">
               {handleAlsoLike()}
              
               </div> </>} 
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