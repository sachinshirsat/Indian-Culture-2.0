import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';


// css files bootstrap and external
import 'bootstrap/dist/css/bootstrap.min.css';
// import './FestofLib.css';

// import img file
// import FilterIcon from '../image/filter-13.png';
import SearchIcon from '../image/search.svg';
// import Header from '../image/header.PNG';


// import Divider from '../image/SwirlDivider.png';

// npm i feather-icons-react
// import { ArrowLeft } from 'react-feather';
import { Filter } from 'feather-icons-react';
import SwrilDivider from './SwrilDivider';
// import Menubar from './Menubar';



function FlagEventLib({ name, ...props }) {
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



    const flagevenresultpage = () => {
        window.open('/flagevenresultpage', '_parent');
    };


    // back to previous btn page
    /*  const backtopre = () => {
         const previousPageUrl = document.referrer;
 
         if (previousPageUrl) {
             window.open(previousPageUrl, '_parent');
         }
     };
 
     const redirecthomepage = () => {
         window.open('/', '_parent');
     }; */

    return (
        <>



            <Container className='festlib-header'>
                <Row >
                    <Col >
                        <h1>Festival of libraries 2023</h1>
                        {/* <img src={Divider} alt="Caption Divider" style={{ marginTop: '-17px', width: '90px', height: '15px', backgroundColor: 'transparent' }} /> */}
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>

            <div className='festlib-lst'>
                {/* option 1  */}
                <Container style={{ marginTop: '20px' }}>
                    <Row >
                        <Col className='festlib-equal'>

                            {/* Filter icon */}
                            {/* <a href='/#' onClick={handleShow}><img src={FilterIcon} alt='' className='filtericon' /></a> */}
                            <Filter onClick={handleShow} size='32' className='festlib-filtericon' />
                            {/* Search bar start */}
                            <div class="search-box">
                                <button class="btn-search"><img src={SearchIcon} alt='Search icon'></img></button>
                                <input type="text" class="input-search" placeholder="Type to Search..." />
                            </div>

                            {/* Search bar end */}
                        </Col>


                        <Col className='festlib-leftplace'>
                            <p className='festlib-showing-result'>Showing 1 -16 results of 53259</p>
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
                            <Offcanvas.Title style={{ textAlign: 'center' }}>festival of libraries Filter</Offcanvas.Title>
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
                            <Col className='festlib-filbtn'>
                                <Button variant="secondary">Cancel</Button>{' '}
                                <Button variant="success">Apply</Button>{' '}
                            </Col>

                        </Offcanvas.Body>

                    </Offcanvas>
                    {/* FIlter Side panel end */}

                </Container>

                {/* Archive img thumbnails start */}
                <main className="festlib-page-content">
                    <div className="festlib-listcard">
                        <div className="festlib-content">

                            <h2 className="festlib-title ">PM Modi addresses inaugural ceremony of International Museum Expo, 2023</h2>

                            {/* <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p> */}
                            <button className="listbtn" onClick={flagevenresultpage}>View</button>
                        </div>
                    </div>
                    <div className="festlib-listcard">
                        <div className="festlib-content">
                            <h2 className="festlib-title">President Droupadi Murmu addresses the Festival of Libraries at Pragati Maidan, New Delhi , 2023</h2>
                            {/* <p className="copy">Plan your next beach trip with these fabulous destinations</p> */}
                            <button className="festlib-listbtn">View</button>
                        </div>
                    </div>
                    <div className="festlib-listcard">
                        <div className="festlib-content">
                            <h2 className="festlib-title">Title 3</h2>
                            {/* <p className="copy">It's the desert you've always dreamed of</p> */}
                            <button className="festlib-listbtn">View</button>
                        </div>
                    </div>
                    <div className="festlib-listcard">
                        <div className="festlib-content">
                            <h2 className="festlib-title">Title 4</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="festlib-listbtn">View</button>
                        </div>
                    </div>

                    <div className="festlib-listcard">
                        <div className="festlib-content">
                            <h2 className="festlib-title">Title 5</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="festlib-listbtn">View</button>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="festlib-listcard">
                        <div className="festlib-content">
                            <h2 className="festlib-title">Title 6</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="festlib-listbtn">View</button>
                        </div>
                    </div>

                    <div className="festlib-listcard">
                        <div className="festlib-content">
                            <h2 className="festlib-title">Title 7</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="festlib-listbtn">View</button>
                        </div>
                    </div>

                    <div className="festlib-listcard">
                        <div className="festlib-content">
                            <h2 className="festlib-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="festlib-listbtn">View</button>
                        </div>
                    </div>
                    <div className="festlib-listcard">
                        <div className="festlib-content">
                            <h2 className="festlib-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="festlib-listbtn">View</button>
                        </div>
                    </div>
                    <div className="festlib-listcard">
                        <div className="festlib-content">
                            <h2 className="festlib-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="festlib-listbtn">View</button>
                        </div>
                    </div>

                </main>
                {/* img thumbnails end */}


                <Container>
                    <Row>
                        {/* Pagination start here */}
                        <Col className='festlib-paginattion-place'>
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
                        <Col className='festlib-end'>
                            {/* <img src={Divider} alt="Caption Divider" style={{ marginTop: '-17px', width: '90px', height: '15px', backgroundColor: 'transparent' }} /> */}

                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    );
}

export default FlagEventLib
