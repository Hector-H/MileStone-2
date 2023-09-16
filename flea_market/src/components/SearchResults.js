import React, { useEffect, useReducer } from 'react';
import supabase from '../supabaseClient';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true, error: '' };
        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false, error: '' };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default function SearchResults(props) {
    const [{ products }, dispatch] = useReducer(reducer, {
        products: [],
        loading: false,
        error: '',
    });

    useEffect(() => {
        const fetchProducts = async () => {
            dispatch({ type: 'FETCH_REQUEST' });

            // Fetch products based on the search query
            const { data, error } = await supabase
                .from('products')
                .select()
                .ilike('product_name', `%${props.search}%`); // Adjust the column name as needed

            if (error) {
                dispatch({ type: 'FETCH_FAIL', payload: error.message });
            }

            if (data) {
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            }
        };

        fetchProducts();
    }, [props.search]);

    return (
        <div className="SearchResults">
            <h1>Search Results</h1>
            {products.length === 0 ? (
                <p>No results found.</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            {/* Display product information here */}
                            <p>{product.product_name}</p>
                            {/* Add more fields as needed */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
