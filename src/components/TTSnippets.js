import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';


// css files bootstrap and external
import 'bootstrap/dist/css/bootstrap.min.css';
// import './TTSnippets.css';

// import img file
import SearchIcon from '../image/search.svg';
// import Header from '../image/header.PNG';

import { Filter } from 'feather-icons-react';
import SwrilDivider from './SwrilDivider';

function TTSnippets({ name, ...props }) {
    // constructor for filter side panel start
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // To avoid any unintended navigation, you can add event.preventDefault()
    const handleShow = (event) => {
        event.preventDefault();
        setShow(true);
    };
    // filter side panel end

    const underconstructor = () => {
        window.open('/underconstructor', '_parent');
    };

    // back to previous btn page
    const backtopre = () => {
        const previousPageUrl = document.referrer;

        if (previousPageUrl) {
            window.open(previousPageUrl, '_parent');
        }
    };

    const redirecthomepage = () => {
        window.open('/', '_parent');
    };

    return (
        <>

            <Container className='ttsnippets-header'>
                <Row >
                    <Col >
                        <h1>Snippets and Stories </h1>
                        {/* <img src={Divider} alt="Caption Divider" style={{ marginTop: '-17px', width: '90px', height: '15px', backgroundColor: 'transparent' }} /> */}
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>

            {/*  <Container className='freecover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>Discover timelessness through a series of photographs showing sculptures, panels and paintings. Delve into visual storytelling and recognise recurring themes.</p>
                    </Col>
                </Row>

            </Container> */}

            <div className='ttsnippets-lst'>
                {/* option 1  */}
                <Container style={{ marginTop: '20px' }}>
                    <Row >
                        <Col className='ttsnippets-equal'>

                            {/* Filter icon */}
                            {/* <a href='/#' onClick={handleShow}><img src={FilterIcon} alt='' className='filtericon' /></a> */}
                            <Filter onClick={handleShow} size='34' className='filtericon' />
                            {/* Search bar start */}
                            <div class="search-box">
                                <button class="btn-search"><img src={SearchIcon} alt='Search icon'></img></button>
                                <input type="text" class="input-search" placeholder="Type to Search..." />
                            </div>

                            {/* Search bar end */}
                        </Col>


                        <Col className='leftplace'>
                            <p className='showing-result'>Showing 1 -16 results of 53259</p>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col className='centerplace'>
                            <p className='centerplace'>
                                <a href="/#" class="underline" >All</a>
                            </p>
                            <p className='centerplace'>
                                <a href="/#" class="underline">A - Z</a>
                            </p>
                            <p className='centerplace'>
                                <a href="/#" class="underline">Time</a>
                            </p>
                        </Col>
                    </Row> */}

                    {/* Filter Side panel start */}
                    <Offcanvas show={show} onHide={handleClose} backdrop="static" className='sidepanel'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title style={{ textAlign: 'center' }}> Snippets and Stories </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Form className="d-flex" style={{ margin: '10px' }}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Offcanvas.Body>

                            <h6>Organisation</h6>
                            <hr />

                            <ul>
                                <li>Item 1</li>
                                <li>Item2</li>
                                <li>Item3</li>

                            </ul>
                            <h6>Types 2A</h6>
                            <hr />

                            <ul>
                                <li>Item1</li>
                                <li>Item2</li>
                                <li>Item3</li>

                            </ul>
                            <h6>Types 2B</h6>
                            <hr />
                            <ul>
                                <li>Item1</li>
                                <li>Item2</li>
                                <li>Item3</li>

                            </ul>
                            <hr />
                            <Col className='filbtn'>
                                <Button variant="secondary">Cancel</Button>{' '}
                                <Button variant="success">Apply</Button>{' '}
                            </Col>

                        </Offcanvas.Body>

                    </Offcanvas>
                    {/* FIlter Side panel end */}

                </Container>

                {/* Archive img thumbnails start */}
                <main className="ttsnippets-page-content">
                    <div className="ttsnippets-listcard">
                        <div className="ttsnippets-content">

                            <h2 className="ttsnippets-title ">Breezing Through Time: The Evolution of Fans in India</h2>

                            <button className="ttsnippets-listbtn" onClick={underconstructor}>View</button>
                        </div>
                    </div>
                    <div className="ttsnippets-listcard">
                        <div className="ttsnippets-content">
                            <h2 className="ttsnippets-title">Title 2</h2>
                            <button className="ttsnippets-listbtn">View</button>
                        </div>
                    </div>
                    <div className="ttsnippets-listcard">
                        <div className="ttsnippets-content">
                            <h2 className="ttsnippets-title">Title 3</h2>
                            <button className="ttsnippets-listbtn">View</button>
                        </div>
                    </div>
                    <div className="ttsnippets-listcard">
                        <div className="ttsnippets-content">
                            <h2 className="ttsnippets-title">Title 4</h2>
                            <button className="ttsnippets-listbtn">View</button>
                        </div>
                    </div>

                </main>
                {/* Archive img thumbnails end */}




            </div>
        </>
    );
}

export default TTSnippets
