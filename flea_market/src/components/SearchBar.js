import { useEffect, useReducer, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';

import supabase from '../supabaseClient';
import '../index.css'


const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true, error: "" };
        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false, error: '' }
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}

export default function SearchBar({ placeholder }) {

    const [{ products }, dispatch] = useReducer(reducer, {
        products: [],
        loading: false,
        error: ''
    });

    useEffect(() => {
        const fetchProducts = async () => {
            dispatch({ type: 'FETCH_REQUEST' })
            const { data, error } = await supabase
                .from('products')
                .select()
            if (error) {
                dispatch({ type: 'FETCH_FAIL', payload: error.message })
            }
            if (data) {
                dispatch({ type: 'FETCH_SUCCESS', payload: data })
            }
        }
        fetchProducts()
    }, [])

    const [search, setSearch] = useState('');
    const navigate = useNavigate()

    const handleSearch = () => {
        navigate(`/search?query=${search}`);
    };

    const [filteredProducts, setFilteredProducts] = useState([])

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setSearch(searchWord);
        const newFilter = products.filter((product) => {
            return product.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredProducts([]);
        } else {
            setFilteredProducts(newFilter);
        }
    }

    const handleLinkClick = () => {
        setFilteredProducts([]);
        setSearch("");
    }

    return (
        <div className="SearchBar">
            <InputGroup className="mb-3">
                <FormControl
                    type="text"
                    placeholder={placeholder}
                    onChange={handleFilter}
                />
                <Button variant="outline-secondary" onClick={handleSearch}>Search</Button>
            </InputGroup>
            {filteredProducts.length !== 0 && (
                <div className="SearchBar_result">
                    <ListGroup>
                        {products.slice(0, 10).map((product) => (
                            <ListGroup.Item key={product.id}>
                                <Link
                                    to={`/products/${product.id}`}
                                    className="SearchBar_result_link"
                                    onClick={handleLinkClick}
                                >
                                    {product.title}
                                </Link>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            )}
        </div>
    );
}
