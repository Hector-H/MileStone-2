import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

export default function ContactUs() {
    return (
        <Container className="Contact_Us">
            <Helmet title="Contact Us" />
            <h1>Contact Us:</h1>
            <Row>
                <Col md={4}>
                    <h2>Meghan Alex Hampton</h2>
                    <p>(775) 971-7773</p>
                    <p>Email: meghanahampton@gmail.com</p>
                    <a
                        href="https://github.com/malexhampton"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </Col>
                <Col md={4}>
                    <h2>Hector Hernandez-Ramirez</h2>
                    <p>(725) 266-0212</p>
                    <a
                        href="https://www.linkedin.com/in/hector-hernandez-02261926a/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <p>Email:</p>
                    <a
                        href="https://github.com/Hector-H"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </Col>
                <Col md={4}>
                    <h2>Rudy Rodriguez</h2>
                    <p>(702) 234-9345</p>
                    <a
                        href="https://www.linkedin.com/in/rudy-rodriguez-9b3328266"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <p>Email: Jam19th@gmail.com</p>
                    <a
                        href="https://github.com/Jam19th"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </Col>
            </Row>
        </Container>
    );
}
