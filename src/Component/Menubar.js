import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Menu.css';
function Menubar() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container className='d-flex justify-content-center align-items-center'>

                    <Navbar.Brand href="#" className='m-img'>

                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"></img>
                    </Navbar.Brand>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 ms-5 m-search"
                            aria-label="Search"
                        />
                    </Form>
                    <Navbar.Collapse id="navbarScroll">
                        <Button variant="outline-success" className='ms-5'>Login</Button>
                    </Navbar.Collapse>
                    {/* <Navbar.Collapse >
                        <Button variant="outline-success" className='ms-5'>redux</Button>
                    </Navbar.Collapse> */}
                    <Navbar.Collapse >
                        {/* <Button variant="outline-success" className='ms-5 d-block' ><FaShoppingCart className='d-inline' to='/cart' as={Link} /></Button> */}
                        <Button variant="outline-success" className='ms-5 d-block' to='/cart' as={Link}>Cart</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menubar;