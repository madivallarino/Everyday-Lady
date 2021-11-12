import lady from './lady.png'
import ad from './ad.png'
import alady from './alady.gif'
import {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LandingPageCard from './LandingPageCard';
import styled from 'styled-components'
import picture from './picture.webp'
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

// function shuffle(array){
//     for (let i = array.length -1 ; i> 0; i--){
//         let j = Math.floor(Math.random()* (i + 1));
//         let temp = array[i];
//         array[i] = array [j]
//         array[j] = temp;
//     }
//     return array
// }
function sideImages(array, num1, num2){
   let newClothing = array.slice(num1,num2).map((product)=> {
    return (
        <a href={`/products/${product.id}`}>
    <LandingPageCard 
                name={product.name} 
                price={product.price} 
                image={product.image} 
                color={product.color} 
                back_image={product.back_image} 
                id={product.id}
                key={product.id}/>
     </a> 
       )
            }
    )
    return newClothing
} 



{/* <img src={lady} alt="lady"/> */}

    return(
        <>
        <div className="everythingbox">
        <div className="ad3">
                <img src={ad} alt="ad3"/>
                </div>
        <div className="topbox">
            <div className="topbox1">
                 <div className="headerbox">
                    <div className="boxes headermainbox" >
                            <img src={picture} alt="lady"/>
                            <div className="textbox">
                            <p>We are proud of <br/> our past and excited <br/> for our future.  Based <br/> in Manhattan, we <br/> strive to bring sustainable 
                            <br/> and eco-friendly products.<br/> We want to support the <br/> ladies that go on to<br/> support the world <br/> and we know, <br/> with good clothes<br/> come good moves. 
                            <br/> 
                            <br/> </p></div>
                    </div>
                    <div className="boxes headersplitbox">
                        <div className="headerside">
                            {sideImages(clothing, 25,26)}
                        </div>
                        <div className="headerside">
                            {sideImages(clothing, 8,9)}
                        </div>
                    </div>
                    <div className="boxes headerlowerbox">
                    {sideImages(home, 8,9)}
                    </div>
                 </div>
                <div className="sideimages"> 
                {sideImages(clothing,2,6)}
                </div>
            </div>
            <div className="ad4">
                <img src={ad} />
            </div>
    </div>
    <div className="middlebox">
            
            {/* <div className="newarrivals">
         {sideImages(12,16)}
            </div> */}
       
        <div className="middlebox1"> 
        {sideImages(clothing,30,34)}
        </div>
        <div className="ad">
            <img src={alady} alt="ad2" />
        </div>
           
    {/* <div className="mp">
        
        </div> */}
        <div className="middlebox2">

        {sideImages(clothing,12,16)}            
        </div>
        <div className="ad">
            <img src={ad} alt="ad" />
        </div>
    </div>
        
        
       
    <div className="lowbox">
        <div className="lowbox1">
        {sideImages(lifestyle,4,8)}  
        </div>
    </div>
        </div>
       
        </>
    )
}

export default LandingPage;




