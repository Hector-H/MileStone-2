import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

export default function HelpPage() {
    return (
        <Container className="HelpPage">
            <Helmet>
                <title>Help Page</title>
            </Helmet>
            <Row>
                <Col>
                    <h1>Help Page</h1>
                    <p>How to use our website:</p>
                    <ul>
                        <li>Create a profile</li>
                        <li>Create a product listing</li>
                        <li>Search for products</li>
                        <li>Buy products</li>
                        <li>Review products</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}