import { useEffect, useReducer } from "react";
import { Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

import ProductCard from "../Product/ProductCard";
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

export default function Home() {
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

    return (
        <div>
            <Helmet title="Flea Market - Home" />
            <div className="products">
                <h1>Products</h1>
                <Row>
                    {products.map((product) => (
                        <Col
                            key={product.id}
                            className="mb-3"
                            sm={6}
                            md={5}
                            lg={3}
                            xl={1}
                        >
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );

}