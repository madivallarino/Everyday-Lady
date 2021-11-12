import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom'

function SearchBar({search}){



console.log(search)
// const searchItems = allProducts.filter((product)=> product.name.toLowerCase().includes(search.toLowerCase())).map((product)=> {
//     return ( 
//         <Link to={`/products/${product.id}`}>
//              <ProductCard 
//                 name={product.name} 
//                 price={product.price} 
//                 image={product.image} 
//                 color={product.color} 
//                 back_image={product.back_image} 
//                 id={product.id}/>
//         </Link>
//     )
//     })


    return (
        <div>
            
        </div>
    )
}

export default SearchBar;