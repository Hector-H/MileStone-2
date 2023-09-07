import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductWindow from './ProductWindow';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            {product.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
