import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';


// css files bootstrap and external
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Foodlistpage.css'

// import img file
// import FilterIcon from '../image/filter-13.png';
import SearchIcon from '../image/search.svg';
// import Header from '../image/header.PNG';


// import Divider from '../image/SwirlDivider.png';

// import { ArrowLeft } from 'react-feather';
import { Filter } from 'react-feather';
import SwrilDivider from './SwrilDivider';
// import SwrilDivider from './SwrilDivider';
// import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Foodlistpage() {
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

    const fcfoodimagesresultpage = () => {
        window.open('/fcfoodimagesresultpage', '_parent');
    };
    return (
        <>
            <Container className='fnc-foodimage-lst-header'>
                <Row >
                    <Col >
                        <h1>Food: Images of Diversity</h1>
                        {/* <img src={Divider} alt="Caption Divider" style={{ marginTop: '-17px', width: '90px', height: '15px', backgroundColor: 'transparent' }} /> */}
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>

            <div className='fnc-foodimage-lst-lst'>
                {/* option 1  */}
                <Container style={{ marginTop: '20px' }}>
                    <Row >
                        <Col className='fnc-foodimage-lst-equal'>

                            {/* Filter icon */}
                            {/* <a href='/#' onClick={handleShow}><img src={FilterIcon} alt='' className='filtericon' /></a> */}
                            <Filter onClick={handleShow} size='34' className='filtericon' />
                            {/* Search bar start */}
                            <div className="search-box">
                                <button className="btn-search"><img src={SearchIcon} alt='Search icon'></img></button>
                                <input type="text" className="input-search" placeholder="Type to Search..." />
                            </div>

                            {/* Search bar end */}
                        </Col>


                        <Col className='fnc-foodimage-lst-leftplace'>
                            <p className='fnc-foodimage-lst-showing-result'>Showing 1 -16 results of 53259</p>
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
                            <Offcanvas.Title style={{ textAlign: 'center' }}>Herbs & Spices Filter</Offcanvas.Title>
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
                            <Col className='fnc-foodimage-lst-filbtn'>
                                <Button variant="secondary">Cancel</Button>{' '}
                                <Button variant="success">Apply</Button>{' '}
                            </Col>

                        </Offcanvas.Body>

                    </Offcanvas>
                    {/* FIlter Side panel end */}

                </Container>

                {/* Archive img thumbnails start */}
                <main className="fnc-foodimage-lst-page-content">
                    <div className="fnc-foodimage-lst-listcard">
                        <div className="fnc-foodimage-lst-content">

                            <h2 className="fnc-foodimage-lst-title ">Aam Sole</h2>

                            {/* <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p> */}
                            <button className="fnc-foodimage-lst-listbtn" onClick={fcfoodimagesresultpage}>View</button>
                        </div>
                    </div>
                    <div className="fnc-foodimage-lst-listcard">
                        <div className="fnc-foodimage-lst-content">
                            <h2 className="fnc-foodimage-lst-title">Aamer Tok</h2>
                            {/* <p className="copy">Plan your next beach trip with these fabulous destinations</p> */}
                            <button className="fnc-foodimage-lst-listbtn">View</button>
                        </div>
                    </div>
                    <div className="fnc-foodimage-lst-listcard">
                        <div className="fnc-foodimage-lst-content">
                            <h2 className="fnc-foodimage-lst-title">Aar Fish Curry</h2>
                            {/* <p className="copy">It's the desert you've always dreamed of</p> */}
                            <button className="fnc-foodimage-lst-listbtn">View</button>
                        </div>
                    </div>
                    <div className="fnc-foodimage-lst-listcard">
                        <div className="fnc-foodimage-lst-content">
                            <h2 className="fnc-foodimage-lst-title">Achari Mutton</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="fnc-foodimage-lst-listbtn">View</button>
                        </div>
                    </div>

                    <div className="fnc-foodimage-lst-listcard">
                        <div className="fnc-foodimage-lst-content">
                            <h2 className="fnc-foodimage-lst-title">Ada Pradhaman</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="fnc-foodimage-lst-listbtn">View</button>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="fnc-foodimage-lst-listcard">
                        <div className="fnc-foodimage-lst-content">
                            <h2 className="fnc-foodimage-lst-title">Title</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="fnc-foodimage-lst-listbtn">View</button>
                        </div>
                    </div>

                    <div className="fnc-foodimage-lst-listcard">
                        <div className="fnc-foodimage-lst-content">
                            <h2 className="fnc-foodimage-lst-title">Title</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="fnc-foodimage-lst-listbtn">View</button>
                        </div>
                    </div>

                    <div className="fnc-foodimage-lst-listcard">
                        <div className="fnc-foodimage-lst-content">
                            <h2 className="fnc-foodimage-lst-title">Title</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="fnc-foodimage-lst-listbtn">View</button>
                        </div>
                    </div>
                    <div className="fnc-foodimage-lst-listcard">
                        <div className="fnc-foodimage-lst-content">
                            <h2 className="fnc-foodimage-lst-title">Title</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="fnc-foodimage-lst-listbtn">View</button>
                        </div>
                    </div>
                    <div className="fnc-foodimage-lst-listcard">
                        <div className="fnc-foodimage-lst-content">
                            <h2 className="fnc-foodimage-lst-title">Title</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="fnc-foodimage-lst-listbtn">View</button>
                        </div>
                    </div>
                    {/* 3rd row */}
                    <div className="fnc-foodimage-lst-listcard">
                        <div className="fnc-foodimage-lst-content">
                            <h2 className="fnc-foodimage-lst-title">Title</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="fnc-foodimage-lst-listbtn">View</button>
                        </div>
                    </div>

                    <div className="fnc-foodimage-lst-listcard">
                        <div className="fnc-foodimage-lst-content">
                            <h2 className="fnc-foodimage-lst-title">Title</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="fnc-foodimage-lst-listbtn">View</button>
                        </div>
                    </div>

                    <div className="fnc-foodimage-lst-listcard">
                        <div className="fnc-foodimage-lst-content">
                            <h2 className="fnc-foodimage-lst-title">Title</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="fnc-foodimage-lst-listbtn">View</button>
                        </div>
                    </div>
                    <div className="fnc-foodimage-lst-listcard">
                        <div className="fnc-foodimage-lst-content">
                            <h2 className="fnc-foodimage-lst-title">Title</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="fnc-foodimage-lst-listbtn">View</button>
                        </div>
                    </div>
                    <div className="fnc-foodimage-lst-listcard">
                        <div className="fnc-foodimage-lst-content">
                            <h2 className="fnc-foodimage-lst-title">Title</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="fnc-foodimage-lst-listbtn">View</button>
                        </div>
                    </div>
                </main>
                {/* Archive img thumbnails end */}


                <Container>
                    <Row>
                        {/* Pagination start here */}
                        <Col className='fnc-foodimage-lst-paginattion-place'>
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
                    {/* <Row>
                        <Col className='archive-end'>
                            <img src={Divider} alt="Caption Divider" style={{ marginTop: '-17px', width: '90px', height: '15px', backgroundColor: 'transparent' }} />

                        </Col>
                    </Row> */}
                </Container>

            </div>
        </>
    )
}

export default Foodlistpage
