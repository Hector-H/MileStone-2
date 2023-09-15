import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Row, Col, FormGroup } from 'react-bootstrap';
import supabase from "../supabaseClient";
import './Products.css';
import { Helmet } from 'react-helmet-async';

export default function ProductEdit() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')
    const [formError, setFormError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!title || !details || !image) {
            setFormError('Fill Required Fields')
            return
        }
        const { data, error } = await supabase
            .from('products')
            .update({ title, details, price, category, image })
            .eq('id', id)
            .select()
        if (error) {
            console.log(error)
            setFormError('Fill Required Fields')
        }
        if (data) {
            console.log(data)
            setFormError(null)
            navigate(`/products/${id}`)
        }
    }

    useEffect(() => {
        const fetchProduct = async () => {
            const { data, error } = await supabase
                .from('products')
                .select()
                .eq('id', id)
                .single()
            if (error) {
                navigate('/', { replace: true })
            }
            if (data) {
                setTitle(data.title)
                setDetails(data.details)
                setPrice(data.price)
                setCategory(data.category)
                setImage(data.image)
                console.log(data)
            }
        }
        fetchProduct()
    }, [id, navigate])

    return (
        <div className="ProductEdit">
            <Row>
                <Helmet>
                    <title>Edit {title} Listing</title>
                </Helmet>
                {/* Write a function to update the product listing in the database */}
                <Col>
                    <h2>Edit Product: {title}</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="title">
                            <Form.Label>Title:</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group id="details">
                            <FormGroup>Details:</FormGroup>
                            <Form.Control
                                type="text"
                                name="details"
                                id="details"
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group id="price">
                            <Form.Label>Price:</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                id="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group id="category">
                            <Form.Label>Category:</Form.Label>
                            <Form.Control
                                type="text"
                                name="category"
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group id="image">
                            <Form.Label>Image:</Form.Label>
                            <Form.Control
                                type="text"
                                name="image"
                                id="image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button type="submit">Edit Product Listing</Button>
                        {formError && <p className='error'>{formError}</p>}
                    </Form>
                </Col>
            </Row>
        </div>
    );
}