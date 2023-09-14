import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import SearchBar from "./SearchBar";
import "./NavBar.css";

export default function NavBar(props) {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Flea Market</Navbar.Brand>
                    </LinkContainer>
                    <SearchBar />
                    <Nav className="me-auto">
                        <Link to="/products" className="nav-link">
                            Products
                        </Link>
                        <Link to="/cart" className="nav-link">
                            Cart
                        </Link>
                        <Link to="/profile" className="nav-link">
                            Profile
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
