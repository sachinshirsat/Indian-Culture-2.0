import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Underline from './Underline';

// import ICLogo from '../image/IC logo.png';
import ICLogo from '../image/IClogoblack.png'
function Menubar() {
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} bg="light"  expand={expand} className="mb-3" sticky="top" style={{ boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.2)' }}>
                    <Container fluid>
                       {/*  <Navbar.Brand href="#" style={{ fontSize: '25px', fontWeight: '700' }}>
                            <img src={ICLogo} width="60" height="60" style={{ backgroundColor: 'transparent' }} alt="IC Logo" />
                            INDIAN CULTURE</Navbar.Brand> */}
                             <Navbar.Brand href="#" style={{ fontSize: '25px', fontWeight: '700' }}>
                            <img src={ICLogo} style={{ width:'260px', backgroundColor: 'transparent' }} alt="IC Logo" />
                            </Navbar.Brand>


                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Indian Culture 2.0
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
            <Underline/>
        </>
    )
}

export default Menubar
