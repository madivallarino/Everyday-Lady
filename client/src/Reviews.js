

function Reviews({cat}){





    return(
        <div className="reviewbox">
           <h2>{cat.user.name} says:</h2> 
            <h3>{cat.description}</h3>
            <h4>Star rating: {cat.star_rating}</h4>
        </div>
    )
}


export default Reviews;