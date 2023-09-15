import { useReducer, useEffect } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import { Helmet } from 'react-helmet-async';

import supabase from "../supabaseClient";

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

export default function Category() {
    const [{ products }, dispatch] = useReducer(reducer, {
        products: [],
        loading: false,
        error: ''
    });

    // fetch all categories from the products table in supabase
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
    }, []);

    return (
        <div className="Category">
            <Helmet title="Category" />
            <Row>
                {products.map((product) => (
                    <Col
                        key={products.id}
                        className="mb-3"
                        sm={6}
                        md={5}
                        lg={3}
                        xl={1}
                    >
                        {/* Display all categories here */}
                        <ListGroup.Item>
                            <ul>{product.category}</ul>
                        </ListGroup.Item>
                    </Col>
                ))}
            </Row>
        </div>
    );
}