import { Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./SideBar.css";

export default function SideBar() {
    return (
        <div className="SideBar col-md-3 col-lg-2 d-md-block">
            <Container>
                <LinkContainer to="/Category">
                    <Nav.Link>Category</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Distance">
                    <Nav.Link>Distance</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/HelpPage">
                    <Nav.Link>Help Page</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/AboutUs">
                    <Nav.Link>About Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/ContactUs">
                    <Nav.Link>Contact Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/ProductCreate">
                    <Nav.Link>Create Product</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/ProfileCreate">
                    <Nav.Link>Create Profile</Nav.Link>
                </LinkContainer>
            </Container>
        </div>
    );
}