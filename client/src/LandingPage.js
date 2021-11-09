import lady from './lady.png'
import ad from './ad.png'
import {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LandingPageCard from './LandingPageCard';

function LandingPage(){
const [clothing, setClothing] = useState([]);
const [home, setHome] = useState([]);
const [lifestyle, setLifestyle] = useState([]);

useEffect(()=> {
    fetch('/clothing')
    .then((r)=> r.json())
    .then(setClothing)
},[])
useEffect(()=> {
    fetch('/home')
    .then((r)=> r.json())
    .then(setHome)
},[])
useEffect(()=> {
    fetch('/lifestyle')
    .then((r)=> r.json())
    .then(setLifestyle)
},[])

function shuffle(array){
    for (let i = array.length -1 ; i> 0; i--){
        let j = Math.floor(Math.random()* (i + 1));
        let temp = array[i];
        array[i] = array [j]
        array[j] = temp;
    }
    return array
}


    return(
        <>
        <div className="everythingbox">
        <div className="topbox">
            <div className="topbox1">
                <div className="mainimage"></div>
                <div className="sideimages"> {clothing.slice(0,3).map((product)=> {
        return (
        <div className="side">
        <Link to={`/products/${product.id}`}>
         <LandingPageCard 
            name={product.name} 
            price={product.price} 
            image={product.image} 
            color={product.color} 
            back_image={product.back_image} 
            id={product.id}/>
        </Link>
        </div>
        )})}<div>
    
        </div> 
{/*     top box above */}


        </div>
            </div>
            <div className="topbox2">
            <img src={ad} alt="ad" />
            </div>
        </div>
        <div className="middlebox">
            
            <div className="newarrivals">
         {clothing.slice(8,10).map((product)=> {
    return (
        <div className="NA">
     {/* <Link to={`/products/${product.id}`}> */}
        <LandingPageCard 
            name={product.name} 
            price={product.price} 
            image={product.image} 
            color={product.color} 
            back_image={product.back_image} 
            id={product.id}/>
        {/* </Link> */}
        </div>
            )})} 
            </div>
        <div className="middlebox1">
           
    <div className="mp">
{clothing.slice(30,34).map((product)=> {
    return (
     <div className="MP">
    {/* <Link to={`/products/${product.id}`}>
     <LandingPageCard 
            name={product.name} 
            price={product.price} 
            image={product.image} 
            color={product.color} 
            back_image={product.back_image} 
            id={product.id}/>
    </Link> */}
        </div>
        )})}
        </div>
        <div className="middlebox2"></div>
        </div>
        
        
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




            // <div className="newarrivals">
                /* Blue Bouquet Cardigan */
                //     <img src="https://images.urbndata.com/is/image/UrbanOutfitters/65424574_012_d?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720" alt="na1"/>
                //     {/* Rugrats Snow Fight T-Shirt Dress */}
                //   <img src="https://images.urbndata.com/is/image/UrbanOutfitters/65552424_011_g?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720" alt="na2"/>
                //   {/* Destroyed Long Sleeve Tee */}
                //   <img src="https://images.urbndata.com/is/image/UrbanOutfitters/65543951_001_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720" alt="na3"/>
                //   {/* Colorblock Button-Down Shirt */}
                //   <img src="https://images.urbndata.com/is/image/UrbanOutfitters/63136212_095_d?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720" alt="na4"/>
                //   {/* Claudia Blouse */}
                //   <img src="https://images.urbndata.com/is/image/UrbanOutfitters/62962311_001_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720" alt="na5"/>
                //   </div>


        //         <div className="mp">
        //     {/* Low-Rise Cargo Pant */}
        //     <img src="https://images.urbndata.com/is/image/UrbanOutfitters/62609078_012_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720" alt="mp1" />
        //     {/* Jadey Henley Top */}
        //     <img src="https://images.urbndata.com/is/image/UrbanOutfitters/65184350_024_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720" alt="mp2" />
        //     {/* Tunic Top */}
        //     <img src="https://images.urbndata.com/is/image/UrbanOutfitters/62867924_004_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720" alt="mp3" />
        //     {/* Pull-On Flare Pant */}
        //     <img src="https://images.urbndata.com/is/image/UrbanOutfitters/62634464_089_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720" alt="mp4" />
        //     {/* Ruched Blouse */}
        //     <img src="https://images.urbndata.com/is/image/UrbanOutfitters/64094709_011_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720" alt="mp5" />
        // </div>


    //     <div className="lowbox1">
    //     {/* Polaroid Now+ Instant Camera */}
    // <img src="https://images.urbndata.com/is/image/UrbanOutfitters/65485948_010_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720" alt="ls1"/>
    // {/* Hero Cosmetics Emergency Stress Kit */}
    // <img src="https://images.urbndata.com/is/image/UrbanOutfitters/64505829_000_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720" alt="ls2"/>
    // {/* Terracotta Grow Kit */}
    // <img src= "https://images.urbndata.com/is/image/UrbanOutfitters/64271554_030_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720" alt="ls3"/>

    // </div>