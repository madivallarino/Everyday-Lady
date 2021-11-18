import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

function ClothingProducts(){
    const [products, setProducts] = useState([]);
    const [filterColor, setFilterColor] = useState(null);
    const [filterType, setFilterType] = useState(null);
    const [filterPrice, setFilterPrice] = useState(null);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(10);

function priceFilter(){
    if (filterPrice == "1"){
        return products.filter((product)=> (product.price < 25 ) ).map((product)=> {
            return(
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
    }else if (filterPrice == "2"){
       return products.filter((product)=> (product.price < 50 && product.price > 25)).map((product)=> {
            return(
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
    }else if (filterPrice == "3"){
        return products.filter((product)=> (product.price < 150 && product.price > 50)).map((product)=> {
            return(
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
    }else{
       return products.filter((product)=> product.price > 150).map((product)=> {
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
    }
}
    useEffect(()=> {
        fetch("/clothing")
        .then((resp)=> {
            if (resp.ok) return resp.json();
            throw new Error ('something went wrong while requesting products');
        })
        .then((items)=> setProducts(items))
        .catch((error)=> setError(error.message));
    }, [])
    if (error) return <h1>{error}</h1>;
    
    function filterProducts(){
        
        if (filterType != null){
           return products.filter((product)=> product.subclass.includes(filterType)).map((product)=> {
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
                )}) 
    }else if (filterColor != null){
        return products.filter((product)=> product.color.includes(filterColor)).map((product)=> {
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
    } else if (filterPrice != null){

        return priceFilter()

    }else {
        return products.map((product)=> {
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
    }}


    return(
        <div className="everythingcontainer">
            <div className="pagecontainer">
                <div className="sidebar">
                <div className="typeFilter">
            <h3>Filter By Type: </h3>
              <p> <input type="checkbox" value="Tops" onChange={(e)=> setFilterType(e.target.value)}/> Tops </p> 
                <p>  <input type="checkbox" value="Bottoms" onChange={(e)=> setFilterType(e.target.value)}/> Bottoms</p>
                <p> <input type="checkbox" value="Dress" onChange={(e)=> setFilterType(e.target.value)}/> Dresses</p>
            <p> <input type="checkbox" value="Sweater" onChange={(e)=> setFilterType(e.target.value)}/> Sweaters </p>
           <p> <input type="checkbox" value="Jacket" onChange={(e)=> setFilterType(e.target.value)}/> Jackets </p>
           
            </div>
                <div className="colorFilter">
                    <h3>Filter By Color: </h3>
                        <p> <input type="checkbox" id={"Black"} value="Black" onChange={(event)=> setFilterColor(event.target.value)} /> Black </p> 
                        <p><input type="checkbox"id={"White"} value="White" onChange={(event)=> setFilterColor(event.target.value)} /> White </p>
                        <p> <input type="checkbox" id={"Multi"} value="Multi" onChange={(event)=> setFilterColor(event.target.value)} /> Multi </p>
                        <p><input type="checkbox" id={"Blue"} value="Blue" onChange={(event)=> setFilterColor(event.target.value)} /> Blue</p>
            </div>
            <div className="priceFilter">
            <h3>Filter By Price: </h3>
              <p> <input type="checkbox" value="1" onChange={(e)=> setFilterPrice(e.target.value)}/> Under $25</p> 
                <p> <input type="checkbox" value="2" onChange={(e)=> setFilterPrice(e.target.value)}/> $25 - $50</p>
            <p> <input type="checkbox" value="3" onChange={(e)=> setFilterPrice(e.target.value)}/> Under $150</p>
           <p>  <input type="checkbox" value="4" onChange={(e)=> setFilterPrice(e.target.value)}/> $150+ </p>
            </div>
            
                </div>
                <div className="itempage">
               {filterProducts()}
                </div>
            </div>
            <div className="reviewcontainer"></div>
            
        </div>
    )
}

export default ClothingProducts;