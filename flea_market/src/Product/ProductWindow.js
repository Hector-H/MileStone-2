import { useEffect, useReducer, useContext } from "react";
import { useParams } from "react-router-dom";
import { Badge, Button, Card, Col, ListGroup, Row } from "react-bootstrap";
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
    // const [fetchError, setFetchError] = useState(null)
    // const [products, setProducts] = useState(null)

    // const handleDelete = (id) => {
    //     setProducts(prevProducts => {
    //         return prevProducts.filter(pd => pd.id !== id)
    //     })
    // }
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
                                {/* <title>Flea Market - {product.title}</title> */}
                                <title>{product && product.title ? product.title : 'Product Details'}</title>
                            </Helmet>
                            <h2>{product.title}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>Price: ${product.price}</h3>
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
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}