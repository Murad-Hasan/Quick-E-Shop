import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    return (
        <Navbar collapseOnSelect expand="md" variant="light">
            <Container>
                <Navbar.Brand as={Link} to='/' className="py-0" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    Quick-E-Shop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" />
                    <Nav>
                        <Nav.Link as={Link} to='/' style={{ fontWeight: "500" }}>Home</Nav.Link>
                        <Nav.Link as={Link} to='order' style={{ fontWeight: "500" }}>Order</Nav.Link>
                        <Nav.Link as={Link} to='dashboard' style={{ fontWeight: "500" }}>Admin</Nav.Link>
                        <Nav.Link as={Link} to='checkout' style={{ fontWeight: "500" }}>CheckOut</Nav.Link>
                        {
                            loggedInUser.displayName || loggedInUser.email ? <Nav.Link as={Link} to='/login' style={{ fontWeight: "500" }}>{loggedInUser.displayName || loggedInUser.email}</Nav.Link>  : <Nav.Link as={Link} to='/login' style={{ fontWeight: "500" }}>LogIn</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;