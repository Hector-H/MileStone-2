import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

export default function AboutUs() {
    return (
        <Container>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <Row>
                <Col>
                    <h1>About Us</h1>
                    <p>
                        Our mission is to provide a platform for people to sell their used
                        items to others who may have a need for them.
                    </p>
                    <p>
                        Our goal is to reduce waste by reusing items that are still in good
                        condition.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
