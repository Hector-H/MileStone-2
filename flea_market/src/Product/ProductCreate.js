import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import supabase from '../supabaseClient'
import './Products.css';
import { Helmet } from 'react-helmet-async';

export default function ProductCreate() {
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
        // console.log(title, details, price, category, image)
        const { data, error } = await supabase
            .from('products')
            .insert([{ title, details, price, category, image }])
            .select()
        if (error) {
            console.log(error)
            setFormError('Fill Required Fields')
        }
        if (data) {
            console.log(data)
            setFormError(null)
            navigate('/')
        }
    }

    return (
        <div className="ProductCreate">
            <Row>
                <Helmet title="Create Product Listing" />
                <Col>
                    <h2>Create Product Listing</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="title">
                            <Form.Label>Title:</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter Product Title"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="details">
                            <Form.Label>Details:</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                                placeholder="Enter Product Details"
                            />
                        </Form.Group>
                        <Form.Group controlId="price">
                            <Form.Label>Price:</Form.Label>
                            <Form.Control
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Enter Product Price"
                            />
                        </Form.Group>
                        <Form.Group controlId="category">
                            <Form.Label>Category:</Form.Label>
                            <Form.Control
                                type="text"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                placeholder="Enter Product Category"
                            />
                        </Form.Group>
                        <Form.Group controlId="image">
                            <Form.Label>Image:</Form.Label>
                            <Form.Control
                                type="text"
                                value={image}
                                pattern="^(https?://)?[^\s/$.?#].[^\s]*.(jpg|jpeg|gif|png|bmp)$"
                                onChange={(e) => setImage(e.target.value)}
                                placeholder="Enter Product Image"
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Create Product Listing
                        </Button>
                        {formError && <p className="error">{formError}</p>}
                    </Form>
                </Col>
            </Row>
        </div>
    );
}
