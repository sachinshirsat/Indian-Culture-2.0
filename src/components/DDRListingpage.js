import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

// css files bootstrap and external
import 'bootstrap/dist/css/bootstrap.min.css';
// import './DDRListingpage.css';

// import img file
import FilterIcon from '../image/filter-13.png';
import SearchIcon from '../image/search.svg';


import Divider from '../image/SwirlDivider.png';
import Pagination from 'react-bootstrap/Pagination';

import { Filter } from 'feather-icons-react';
import { ArrowLeft } from 'react-feather';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import SwrilDivider from './SwrilDivider';



function DDRListingpage({ name, ...props }) {
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

    const ddrresultpage = () => {
        window.open('/ddrresultpage', '_parent');
    };

    // back to previous btn page
    const backtopre = () => {
        window.open('/ddr', '_parent');
    };

    const redirectcategoriespage = () => {
        window.open('/allcategories', '_parent');
    };

    const redirecthomepage = () => {
        window.open('/', '_parent');
    };
    return (
        <>
            <Container fluid>
                <Row>
                    {/* <Col sm={1}>
                        <ArrowLeft className='backtoprevious' onClick={backtopre} size={35} />
                    </Col> */}
                    <Col >
                        {/* Adjust the column size for extra small and small screens */}
                        <Breadcrumb className="d-flex justify-content-left">
                            <Breadcrumb.Item href="#" onClick={redirecthomepage}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={redirectcategoriespage}>
                                Categories
                            </Breadcrumb.Item>
                            <Breadcrumb.Item onClick={backtopre} >DDR</Breadcrumb.Item>
                            <Breadcrumb.Item active className='dead'>Repository</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>

            <Container className='ddr-header'>
                <Row >
                    <Col >
                        <h1>Repository</h1>
                        {/* <img src={Divider} alt="Caption Divider" style={{ marginTop: '-17px', width: '90px', height: '15px', backgroundColor: 'transparent' }} /> */}
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>
            <Container className='ddrcover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>The history of the freedom movement in India comprises a multitude of revolutionary events that helped achieve independence. While a few momentous upheavals and personalities stand out in this historical narrative, the independence of India is also attributed to a series of valuable yet lesser-known incidents that took place in different districts across the country. The Digital District Repository is an attempt to discover and document the memory of these countless stories, events, sites and individuals.</p>
                    </Col>
                </Row>


            </Container>

            {/*  <Container className='repo-rightplace'>
                <Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Category</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>--Choose--</option>
                            <option value="1">Event</option>
                            <option value="2">Traditional & Art forms</option>
                            <option value="3">Personalities</option>
                            <option value="3">Hidden Treasures</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>--Choose--</option>
                            <option value="1">Event</option>
                            <option value="2">Traditional & Art forms</option>
                            <option value="3">Personalities</option>
                            <option value="3">Hidden Treasures</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>District</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>--Choose--</option>
                            <option value="1">Event</option>
                            <option value="2">Traditional & Art forms</option>
                            <option value="3">Personalities</option>
                            <option value="3">Hidden Treasures</option>
                        </Form.Select>
                    </Form.Group>

                    <Form className="d-flex" style={{marginTop:'10px'}}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Row>

            </Container> */}
            {/* option 1  */}
            <div className='ddrlst'>
                <Container style={{ marginTop: '20px' }}>
                    <Row >
                        <Col className='equal'>

                            {/* <a href='/#' onClick={handleShow}><img src={FilterIcon} alt='' className='filtericon' /></a> */}
                            <Filter onClick={handleShow} size='34' className='filtericon' />

                            <div class="search-box">
                                <button class="btn-search"><img src={SearchIcon} alt='Search icon'></img></button>
                                <input type="text" class="input-search" placeholder="Type to Search..." />
                            </div>

                        </Col>


                        <Col className='leftplace'>
                            <p className='showing-result'>Showing 1 -16 results of 53259</p>
                        </Col>
                    </Row>
                    {/*  <Row>
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
                </Row>
 */}
                    <Offcanvas show={show} onHide={handleClose} backdrop="static" className='sidepanel'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title style={{ textAlign: 'center' }}>Archives Filter</Offcanvas.Title>
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

                            <h6>Category</h6>
                            <hr />

                            <ul>
                                <li>Item 1</li>
                                <li>Item2</li>
                                <li>Item3</li>

                            </ul>
                            <h6>State</h6>
                            <hr />

                            <ul>
                                <li>Item1</li>
                                <li>Item2</li>
                                <li>Item3</li>

                            </ul>
                            <h6>District</h6>
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

                </Container>

                {/* Archive img thumbnails start */}
                <main className="page-content">
                    <div className="ddrcard">
                        <div className="content">

                            {/* <h2 className="title ">Traditional and historical account of the Kohinoor by Sir T. Metcalfe No 21</h2> */}

                            {/* <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p> */}
                            <button className="ddr-btn" onClick={ddrresultpage}>View</button>
                        </div>
                    </div>
                    <div className="ddrcard">
                        <div className="content">
                            {/* <h2 className="title">Archive Title 2</h2> */}
                            {/* <p className="copy">Plan your next beach trip with these fabulous destinations</p> */}
                            <button className="ddr-btn">View</button>
                        </div>
                    </div>
                    <div className="ddrcard">
                        <div className="content">
                            {/* <h2 className="title">Archive Title 3</h2> */}
                            {/* <p className="copy">It's the desert you've always dreamed of</p> */}
                            <button className="ddr-btn">View</button>
                        </div>
                    </div>
                    <div className="ddrcard">
                        <div className="content">
                            {/* <h2 className="title">Archive Title 4</h2> */}
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="ddr-btn">View</button>
                        </div>
                    </div>

                    <div className="ddrcard">
                        <div className="content">
                            {/* <h2 className="title">Archive Title 5</h2> */}
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="ddr-btn">View</button>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="ddrcard">
                        <div className="content">
                            {/* <h2 className="title">Archive Title 6</h2> */}
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="ddr-btn">View</button>
                        </div>
                    </div>

                    <div className="ddrcard">
                        <div className="content">
                            {/* <h2 className="title">Archive Title 7</h2> */}
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="ddr-btn">View</button>
                        </div>
                    </div>

                    <div className="ddrcard">
                        <div className="content">
                            {/* <h2 className="title">Archive Title 8</h2> */}
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="ddr-btn">View</button>
                        </div>
                    </div>
                    <div className="ddrcard">
                        <div className="content">
                            {/* <h2 className="title">Archive Title 8</h2> */}
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="ddr-btn">View</button>
                        </div>
                    </div>
                    <div className="ddrcard">
                        <div className="content">
                            {/* <h2 className="title">Archive Title 8</h2> */}
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="ddr-btn">View</button>
                        </div>
                    </div>
                    {/* 3rd  */}
                    <div className="ddrcard">
                        <div className="content">
                            {/* <h2 className="title">Archive Title 6</h2> */}
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="ddr-btn">View</button>
                        </div>
                    </div>

                    <div className="ddrcard">
                        <div className="content">
                            {/* <h2 className="title">Archive Title 7</h2> */}
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="ddr-btn">View</button>
                        </div>
                    </div>


                </main>
                {/* Archive img thumbnails end */}


                <Container>
                    <Row>
                        {/* Pagination start here */}
                        <Col className='paginattion-place'>
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
                        <Col className='archive-end'>
                            <img src={Divider} alt="Caption Divider" style={{ marginTop: '-17px', width: '90px', height: '15px', backgroundColor: 'transparent' }} />

                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
}

export default DDRListingpage
