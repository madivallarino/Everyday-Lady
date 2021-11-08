import {useState, useEffect } from 'react';
import LandingCard from './LandingCard'

function LandingPage(){

const [products, setProducts] = useState([]);
const [error, setError] = useState("");

useEffect(()=> {
    fetch("/products")
    .then((resp)=> {
        if (resp.ok) return resp.json();
        throw new Error ('something went wrong while requesting products');
    })
    .then((items)=> setProducts(items))
    .catch((error)=> setError(error.message));
}, [])

// console.log(products)

// // const randomItem = products[Math.floor(Math.random()* products.length)]

// console.log(randomItem)



    return(
        <>
        <div className="everythingbox">
        {/* <div className="container">
        <div class="company-name">The <br/> Everyday <br/> Lady</div>    */}
        <div className="topbox">
            <div className="topbox1">
                <div className="mainimage"></div>
                <div className="sideimages">
                    <div>
                    {/* <LandingCard image={randomItems.image} name={randomItems.name}/> */}
                    
                    </div>
                </div>
            </div>
            <div className="topbox2"></div>
        </div>
        <div className="middlebox">
            <div>
                
            </div>
        <div className="middlebox1">
            <div className="newarrivals"></div>
                <div>
                  
                </div>
            <div className="mp"></div>
           
        </div>
            <div className="middlebox2"></div>
        </div>
        <div className="lowbox">
        <div className="lowbox1"></div>
            <div className="lowbox2"></div>
        </div>
        </div>
        </>
    )
}

export default LandingPage;


// <div className="text-container">
//         <h2>The <br/> Everyday <br/> Lady</h2>
//         <p>We are proud of our past <br/> and excited for our future. <br/> We strive to bring sustainable <br/> and eco-friendly products <br/> to our everyday ladies. </p>
//         </div>
//         <div className="image-container">
//         <img src={lady} alt="lady"/>
//         </div>