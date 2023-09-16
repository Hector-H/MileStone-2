import { useEffect, useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Col, ListGroup, Row, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

import supabase from "../supabaseClient";
import Rating from "../Components/Rating";
import "./Products.css"

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true, error: "" };
        case 'FETCH_SUCCESS':
            return { ...state, product: action.payload, loading: false, error: '' }
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}

export default function ProductWindow() {
    const { id } = useParams()
    
    const [{ product }, dispatch] = useReducer(reducer, {
        product: {},
        loading: false,
        error: ''
    })
    
    useEffect(() => {
        const fetchProduct = async () => {
            dispatch({ type: 'FETCH_REQUEST' })
            const { data, error } = await supabase
            .from('products')
            .select()
            .eq('id', id)
            if (error) {
                dispatch({ type: 'FETCH_FAIL', payload: error.message })
            }
            if (data) {
                dispatch({ type: 'FETCH_SUCCESS', payload: data[0] })
            }
        }
        fetchProduct()
    }, [id])

    const navigate = useNavigate()

    const handleDelete = async () => {
        const { error } = await supabase
            .from('products')
            .delete()
            .eq('id', id)
        if (error) {
            alert(error.message)
        } else {
            navigate('/')
        }
    }

    return (
        <div>
            <Row>
                <Col md={6}>
                    <img
                        src={product.image}
                        alt="product"
                        className='large'
                    />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Helmet>
                                <title>{product && product.title ? product.title : 'Product Details'}</title>
                            </Helmet>
                            <h2>{product.title}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>Price: ${product.price}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>
                                Date Listed: {product.created_at ? product.created_at.slice(0, 10) : 'N/A'}
                            </h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating
                                rating={product.rating}
                                reviews={product.reviews}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>Category: {product.category}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>Description: {product.details}</h3>
                        </ListGroup.Item>
                        {/* Button to delete product */}
                        <ListGroup.Item>
                            <Button
                                type="button"
                                variant="danger"
                                className="btn-block"
                                onClick={handleDelete}
                            >
                                Delete Product
                            </Button>
                            <Button
                                type="button"
                                variant="primary"
                                className="btn-block"
                                onClick={() => navigate(`/ProductEdit/${id}`)}
                            >
                                Edit Product
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}