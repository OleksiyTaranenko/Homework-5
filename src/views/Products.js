import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import './Products.css';


function Products() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setList(json))
    }, [setList])

    let {url} = useRouteMatch();

    return (
        <div className="products">
            <h1>Products list:</h1>
            <ul>
                {list.map(elem => <li key={elem.id}><Link to={`${url}/${elem.id}`}>{elem.title}</Link></li>)}                
            </ul>
        </div>
    );
}

export default Products;