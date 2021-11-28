import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './ProductsDetails.css';

function ProductsDetails() {
    const {productId} = useParams();

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setData(json)
            })
    }, [productId])

    const {title, image, price, description, category} = data;

    return (
        <div className="products-details">
            <h1>Product name: {title}</h1>
            <h3>*Category: {category}</h3>
            <img src={image} alt={description} />
            <p>Price: {price}$</p>
            <button>Buy</button>
            <div><Link to='/products'>Return to Products list</Link></div>
        </div>
    );
}

export default ProductsDetails;