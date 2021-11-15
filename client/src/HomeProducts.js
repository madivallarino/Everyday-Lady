import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

function HomeProducts(){
    const [products, setProducts] = useState([])
    const [filterColor, setFilterColor] = useState('');
    const [error, setError] = useState('');


    useEffect(()=> {
        fetch("/home")
        .then((resp)=> {
            if (resp.ok) return resp.json();
            throw new Error ('something went wrong while requesting products');
        })
        .then((items)=> setProducts(items))
        .catch((error)=> setError(error.message));
    }, [])
    if (error) return <h1>{error}</h1>;
    
    const productList = products.map((product)=> {
        return ( 
            <Link to={`/products/${product.id}`}>
        <ProductCard 
        name={product.name} 
        price={product.price} 
        image={product.image} 
        color={product.color} 
        back_image={product.back_image} 
        id={product.id}/>
        </Link>
        )
    })
   
  function priceFilter(){
      
  }




    return(
        <div className="everythingcontainer">
        <div className="pagecontainer">
            <div className="sidebar">
            <div className="typeFilter">
            <h3>Filter By Type: </h3>
              <p> <input type="checkbox" value="Tops"/> Kitchen/Living </p> 
                <p>  <input type="checkbox" value="Bottoms"/> Lighting</p>
                <p> <input type="checkbox" value="Dress"/> Bath</p>
            <p> <input type="checkbox" value="Sweater" /> Decor </p>
           <p> <input type="checkbox" value="Jacket"/> Furniture </p>
           
            </div>
            <div className="colorFilter">
                <h3>Filter By Color: </h3>
                    <p>  <input type="checkbox" id={"Black"} value="Black" onChange={(event)=> setFilterColor(event.target.value)} /> Black</p> 
                    <p><input type="checkbox"id={"White"} value="White" onChange={(event)=> setFilterColor(event.target.value)} /> White</p>
                    <p> <input type="checkbox" id={"Multi"} value="Multi" onChange={(event)=> setFilterColor(event.target.value)} /> Multi</p>
                    <p> <input type="checkbox" id={"Grey"} value="Grey" onChange={(event)=> setFilterColor(event.target.value)} /> Grey</p>
        </div>
        <div className="priceFilter">
        <h3>Filter By Price: </h3>
          <p>  <input type="checkbox" value="1"/> Under $25</p> 
            <p> <input type="checkbox" value="2"/> $25 - $50</p>
        <p>  <input type="checkbox" value="3" /> Under $150</p>
       <p> <input type="checkbox" value="4"/> $150+</p>
        </div>
            </div>
            <div className="itempage">
            { filterColor ? 
        products.filter((product)=> product.color.includes(filterColor)).map((product)=> {
            return ( 
                <Link to={`/products/${product.id}`}>
                     <ProductCard 
                        name={product.name} 
                        price={product.price} 
                        image={product.image} 
                        color={product.color} 
                        back_image={product.back_image} 
                        id={product.id}/>
                </Link>
            )
            }) : products.map((product)=> {
            return ( 
            <Link to={`/products/${product.id}`}>
                    <ProductCard 
                        name={product.name} 
                        price={product.price} 
                        image={product.image} 
                        color={product.color} 
                        back_image={product.back_image} 
                        d={product.id}/>
            </Link>
        )
         })}
            </div>
        </div>
        <div className="reviewcontainer"></div>
        
    </div>
    )
}

export default HomeProducts;

// {productList}