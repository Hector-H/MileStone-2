import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductForm() {
    const { id } = useParams();
    const [product, setProduct] = useState({
        // Initialize the product from product seed data
        name: '',
        description: '',
        price: 0,
    });

    useEffect(() => {
        if (id) {
            // Fetch the product from the API
            // Update the product state with the fetched product

        }
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
    };

    return (
        <div>
            <h2>{id ? 'Edit Product' : 'Create Product'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={product.name} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" value={product.description} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" value={product.price} onChange={handleInputChange} />
                </div>
                {/* Add other input fields for product details */}
                <div>
                    <button type="submit">{id ? 'Update' : 'Create'}</button>
                </div>
            </form>
        </div>
    );
}

export default ProductForm;
