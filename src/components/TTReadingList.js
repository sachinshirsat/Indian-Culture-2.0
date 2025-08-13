import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';


// css files bootstrap and external
import 'bootstrap/dist/css/bootstrap.min.css';
// import './TTReadingList.css';

// import img file
import SearchIcon from '../image/search.svg';
// import Header from '../image/header.PNG';

import { Filter } from 'feather-icons-react';
import SwrilDivider from './SwrilDivider';

function TTReadingList({ name, ...props }) {
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

            <Container className='ttbooks-header'>
                <Row >
                    <Col >
                        <h1> Read - Timeless Trends </h1>
                        {/* <img src={Divider} alt="Caption Divider" style={{ marginTop: '-17px', width: '90px', height: '15px', backgroundColor: 'transparent' }} /> */}
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>

            <div className='ttbooks-lst'>
                {/* option 1  */}
                <Container style={{ marginTop: '20px' }}>
                    <Row >
                        <Col className='ttbooks-equal'>

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


                        <Col className='ttbooks-leftplace'>
                            <p className='ttbooks-showing-result'>Showing 1 -16 results of 53259</p>
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
                            <Offcanvas.Title style={{ textAlign: 'center' }}>Reading list Filter</Offcanvas.Title>
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
                            <Col className='ttbooks-filbtn'>
                                <Button variant="secondary">Cancel</Button>{' '}
                                <Button variant="success">Apply</Button>{' '}
                            </Col>

                        </Offcanvas.Body>

                    </Offcanvas>
                    {/* FIlter Side panel end */}

                </Container>

                {/* Archive img thumbnails start */}
                <main className="ttbooks-page-content">
                    <div className="ttbooks-listcard">
                        <div className="ttbooks-content">

                            <h2 className="ttbooks-title ">Indian Art</h2>

                            {/* <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p> */}
                            <button className="ttbooks-listbtn" onClick={underconstructor}>View</button>
                        </div>
                    </div>
                    <div className="ttbooks-listcard">
                        <div className="ttbooks-content">
                            <h2 className="ttbooks-title">Title 2</h2>
                            {/* <p className="copy">Plan your next beach trip with these fabulous destinations</p> */}
                            <button className="ttbooks-listbtn">View</button>
                        </div>
                    </div>
                    <div className="ttbooks-listcard">
                        <div className="ttbooks-content">
                            <h2 className="ttbooks-title">Title 3</h2>
                            {/* <p className="copy">It's the desert you've always dreamed of</p> */}
                            <button className="ttbooks-listbtn">View</button>
                        </div>
                    </div>
                    <div className="ttbooks-listcard">
                        <div className="ttbooks-content">
                            <h2 className="ttbooks-title">Title 4</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="ttbooks-listbtn">View</button>
                        </div>
                    </div>

                    <div className="ttbooks-listcard">
                        <div className="ttbooks-content">
                            <h2 className="ttbooks-title">Title 5</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="ttbooks-listbtn">View</button>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="ttbooks-listcard">
                        <div className="ttbooks-content">
                            <h2 className="ttbooks-title">Title 6</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="ttbooks-listbtn">View</button>
                        </div>
                    </div>

                    <div className="ttbooks-listcard">
                        <div className="ttbooks-content">
                            <h2 className="ttbooks-title">Title 7</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="ttbooks-listbtn">View</button>
                        </div>
                    </div>

                    <div className="ttbooks-listcard">
                        <div className="ttbooks-content">
                            <h2 className="ttbooks-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="ttbooks-listbtn">View</button>
                        </div>
                    </div>
                    <div className="ttbooks-listcard">
                        <div className="ttbooks-content">
                            <h2 className="ttbooks-title">Title 9</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="ttbooks-listbtn">View</button>
                        </div>
                    </div>
                    <div className="ttbooks-listcard">
                        <div className="ttbooks-content">
                            <h2 className="ttbooks-title">Title 10</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="ttbooks-listbtn">View</button>
                        </div>
                    </div>

                </main>
                {/* Archive img thumbnails end */}


                <Container>
                    <Row>
                        {/* Pagination start here */}
                        <Col className='ttbooks-paginattion-place'>
                            <Pagination>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>

                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item active>{3}</Pagination.Item>
                                <Pagination.Item >{4}</Pagination.Item>
                                <Pagination.Item>{5}</Pagination.Item>
                                <Pagination.Item >{6}</Pagination.Item>

                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </Col>
                        {/* Pagination end here */}
                    </Row>
                    <Row>
                        <Col className='ttbooks-end'>

                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    );
}

export default TTReadingList
