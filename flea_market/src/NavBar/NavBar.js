import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import SearchBar from "../Components/SearchBar";
import "./NavBar.css";

export default function NavBar() {

    return (
        <div className="NavBar">
            <Navbar>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Flea Market</Navbar.Brand>
                    </LinkContainer>
                    <SearchBar placeholder="Enter a Product"/>
                    {/* <SearchBar /> */}
                    <Nav className="me-auto">
                        <Link to="/Cart" className="nav-link">
                            Cart
                        </Link>
                        <Link to="/ProfilePage" className="nav-link">
                            Profile
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}