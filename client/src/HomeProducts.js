import React, { useEffect, useState } from 'react';

function HomeProducts(){
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
// to test out if my stuff is working

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
    
    return(
        <div>
            HOME PRODUCTS
        </div>
    )
}

export default HomeProducts;