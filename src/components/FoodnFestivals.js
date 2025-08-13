import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';


// css files bootstrap and external
import 'bootstrap/dist/css/bootstrap.min.css';
// import './FoodnFestivals.css'

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

function FoodnFestivals() {
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

   const fcfoodfestivalsresultpage = () => {
       window.open('/fcfoodfestivalsresultpage', '_parent');
   };
  return (
    <>
            <Container className='fnc-food-fest-header'>
                <Row >
                    <Col >
                        <h1>Food & Festivals</h1>
                        {/* <img src={Divider} alt="Caption Divider" style={{ marginTop: '-17px', width: '90px', height: '15px', backgroundColor: 'transparent' }} /> */}
<SwrilDivider/>
                    </Col>
                </Row>
            </Container>

            <div className='fnc-food-fest-lst'>
                {/* option 1  */}
                <Container style={{ marginTop: '20px' }}>
                    <Row >
                        <Col className='fnc-food-fest-equal'>

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


                        <Col className='fnc-food-fest-leftplace'>
                            <p className='fnc-food-fest-showing-result'>Showing 1 -16 results of 53259</p>
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
                            <Offcanvas.Title style={{ textAlign: 'center' }}>Food & Festivals Filter</Offcanvas.Title>
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
                            <Col className='fnc-food-fest-filbtn'>
                                <Button variant="secondary">Cancel</Button>{' '}
                                <Button variant="success">Apply</Button>{' '}
                            </Col>

                        </Offcanvas.Body>

                    </Offcanvas>
                    {/* FIlter Side panel end */}

                </Container>

                {/* Archive img thumbnails start */}
                <main className="fnc-food-fest-page-content">
                    <div className="fnc-food-fest-listcard">
                        <div className="fnc-food-fest-content">

                            <h2 className="fnc-food-fest-title ">Ganesh Chaturthi</h2>

                            {/* <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p> */}
                            <Button className="fnc-food-fest-listbtn" >View</Button>
                        </div>
                    </div>
                    <div className="fnc-food-fest-listcard">
                        <div className="fnc-food-fest-content">
                            <h2 className="fnc-food-fest-title">Easter - Harbinger of New Life</h2>
                            {/* <p className="copy">Plan your next beach trip with these fabulous destinations</p> */}
                            <Button className="fnc-food-fest-listbtn" onClick={fcfoodfestivalsresultpage}>View</Button>
                        </div>
                    </div>
                    <div className="fnc-food-fest-listcard">
                        <div className="fnc-food-fest-content">
                            <h2 className="fnc-food-fest-title">The Colours of Holi</h2>
                            {/* <p className="copy">It's the desert you've always dreamed of</p> */}
                            <Button className="fnc-food-fest-listbtn">View</Button>
                        </div>
                    </div>
                    <div className="fnc-food-fest-listcard">
                        <div className="fnc-food-fest-content">
                            <h2 className="fnc-food-fest-title">Lohri: Honouring the Harvest</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="fnc-food-fest-listbtn">View</Button>
                        </div>
                    </div>

                    <div className="fnc-food-fest-listcard">
                        <div className="fnc-food-fest-content">
                            <h2 className="fnc-food-fest-title">Pongal</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="fnc-food-fest-listbtn">View</Button>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="fnc-food-fest-listcard">
                        <div className="fnc-food-fest-content">
                            <h2 className="fnc-food-fest-title">Bhogali Bihu</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="fnc-food-fest-listbtn">View</Button>
                        </div>
                    </div>

                    
                </main>
                {/* Archive img thumbnails end */}


                <Container>
                    <Row>
                        {/* Pagination start here */}
                        <Col className='fnc-food-fest-paginattion-place'>
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

export default FoodnFestivals
