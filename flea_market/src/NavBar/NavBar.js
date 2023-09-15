import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import SearchBar from "./SearchBar";
import "./NavBar.css";

export default function NavBar() {

    return (
        <div className="NavBar">
            <Navbar>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Flea Market</Navbar.Brand>
                    </LinkContainer>
                    <SearchBar />
                    <Nav className="me-auto">
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
