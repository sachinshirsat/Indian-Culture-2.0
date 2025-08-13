import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';


// css files bootstrap and external
import 'bootstrap/dist/css/bootstrap.min.css';
// import './MusicalListingpage.css';

// import img file
import FilterIcon from '../image/filter-13.png';
import SearchIcon from '../image/search.svg';
import { Filter, Cancel } from 'feather-icons-react';
import SwrilDivider from './SwrilDivider';

// import Header from '../image/header.PNG';


// import Divider from '../image/SwirlDivider.png';

// import { ArrowLeft } from 'react-feather';

function ArcListpage({ name, ...props }) {
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

    const arclistresultpage = () => {
        window.open('/arclistresultpage', '_parent');
    };

    const musicalresult = () => {
        window.open('/musicalresult', '_parent');
    };

    // back to previous btn page
    const backtopre = () => {
        const previousPageUrl = document.referrer;

        if (previousPageUrl) {
            window.open(previousPageUrl, '_parent');
        }
    };

    return (
        <>
            {/*  <Container fluid>
                <Row>
                    <Col sm={1}>
                        <ArrowLeft className='backtoprevious' onClick={backtopre} size={45} />
                    </Col>
                </Row>
            </Container> */}

            <Container className='music-list-header'>
                <Row >
                    <Col >
                        <h1>Avanaddha Vadya</h1>
                        {/* <img src={Divider} alt="Caption Divider" style={{ marginTop: '-17px', width: '90px', height: '15px', backgroundColor: 'transparent' }} /> */}
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>
            <Container className='music-list-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>These are percussion instruments. Sound is produced by a stretched membrane, such as a drum. Membranophonic instruments act as skin-vibrators because they produce sound-waves by vibrations of a stretched skin or membrane when struck, plucked, or stroked. A hollow vessel is covered with a membrane that generates beats when struck. Percussion instruments can be classified by modes of playing:</p>
                    </Col>
                </Row>
                <Row>
                    <ul className='music-list-assignleft'>
                        <li>played by hand like mridangam;</li>
                        <li>played using sticks like nagara;</li>
                        <li>played partly by hand and partly by stick-like tavil;</li>
                        <li>self struck like damaru;</li>
                        <li>and where one side is struck and the other side stroked like a perumal madu drum.</li></ul>

                </Row>
            </Container>

            <div className='music-list-lst'>
                {/* option 1  */}
                <Container style={{ marginTop: '20px' }}>
                    <Row >
                        <Col className='music-list-equal'>

                            {/* Filter icon */}
                            {/* <a href='/#' onClick={handleShow}><img src={FilterIcon} alt='' className='music-list-filtericon' /></a> */}

                            <Filter onClick={handleShow} size='34' className='filtericon' />
                            {/* Search bar start */}
                            <div className="search-box">
                                <button className="btn-search"><img src={SearchIcon} alt='Search icon'></img></button>
                                <input type="text" className="input-search" placeholder="Type to Search..." />
                            </div>

                            {/* Search bar end */}
                        </Col>


                        <Col className='music-list-leftplace'>
                            <p className='music-list-showing-result'>Showing 1 -16 results of 53259</p>
                        </Col>
                    </Row>
                    {/*  <Row>
                        <Col className='centerplace'>
                            <p className='centerplace'>
                                <a href="/#" className="underline" >All</a>
                            </p>
                            <p className='centerplace'>
                                <a href="/#" className="underline">A - Z</a>
                            </p>
                            <p className='centerplace'>
                                <a href="/#" className="underline">Time</a>
                            </p>
                        </Col>
                    </Row> */}

                    {/* Filter Side panel start */}
                    <Offcanvas show={show} onHide={handleClose} backdrop="static" className='music-list-sidepanel'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title style={{ textAlign: 'center' }}>Avanaddha Vadya Filter</Offcanvas.Title>
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
                            <Col className='music-list-filbtn'>
                                <Button variant="secondary">Cancel</Button>{' '}
                                <Button variant="success">Apply</Button>{' '}
                            </Col>

                        </Offcanvas.Body>

                    </Offcanvas>
                    {/* FIlter Side panel end */}

                </Container>

                {/* Archive img thumbnails start */}
                <main className="music-list-page-content">
                    <div className="music-list-listcard">
                        <div className="music-list-content">

                            <h2 className="music-list-title ">Damaru</h2>

                            {/* <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p> */}
                            <button className="music-list-listbtn" onClick={musicalresult}>View</button>
                        </div>
                    </div>
                    <div className="music-list-listcard">
                        <div className="music-list-content">
                            <h2 className="music-list-title">Title 2</h2>
                            {/* <p className="copy">Plan your next beach trip with these fabulous destinations</p> */}
                            <button className="music-list-listbtn">View</button>
                        </div>
                    </div>
                    <div className="music-list-listcard">
                        <div className="music-list-content">
                            <h2 className="music-list-title">Title 3</h2>
                            {/* <p className="copy">It's the desert you've always dreamed of</p> */}
                            <button className="music-list-listbtn">View</button>
                        </div>
                    </div>
                    <div className="music-list-listcard">
                        <div className="music-list-content">
                            <h2 className="music-list-title">Title 4</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="music-list-listbtn">View</button>
                        </div>
                    </div>

                    <div className="music-list-listcard">
                        <div className="music-list-content">
                            <h2 className="music-list-title">Title 5</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="music-list-listbtn">View</button>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="music-list-listcard">
                        <div className="music-list-content">
                            <h2 className="music-list-title">Title 6</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="music-list-listbtn">View</button>
                        </div>
                    </div>

                    <div className="music-list-listcard">
                        <div className="music-list-content">
                            <h2 className="music-list-title">Title 7</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="music-list-listbtn">View</button>
                        </div>
                    </div>

                    <div className="music-list-listcard">
                        <div className="music-list-content">
                            <h2 className="music-list-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="music-list-listbtn">View</button>
                        </div>
                    </div>
                    <div className="music-list-listcard">
                        <div className="music-list-content">
                            <h2 className="music-list-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="music-list-listbtn">View</button>
                        </div>
                    </div>
                    <div className="music-list-listcard">
                        <div className="music-list-content">
                            <h2 className="music-list-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="music-list-listbtn">View</button>
                        </div>
                    </div>

                </main>
                {/* Archive img thumbnails end */}


                <Container>
                    <Row>
                        {/* Pagination start here */}
                        <Col className='music-list-paginattion-place'>
                            <Pagination >
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

                </Container>

            </div>
        </>
    );
}

export default ArcListpage