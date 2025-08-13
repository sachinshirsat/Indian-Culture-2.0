import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';


// css files bootstrap and external
import 'bootstrap/dist/css/bootstrap.min.css';
// import './FreedomMovementTxt.css';
// import './ArcListpage.css';

// import img file
// import FilterIcon from '../image/filter-13.png';
import SearchIcon from '../image/search.svg';
// import Header from '../image/header.PNG';
import FreedomTxtileImg from '../image/freedomtxtile1.png'

// import Divider from '../image/SwirlDivider.png';

// import { ArrowLeft } from 'react-feather';
import { Filter } from 'feather-icons-react';
import SwrilDivider from './SwrilDivider';
// import SwrilDivider from './SwrilDivider';
// import Breadcrumb from 'react-bootstrap/Breadcrumb';

function TxtileFreedomMovement() {

    const txtilefreedommovementresultpage = () => {
        window.open('/txtilefreedommovementresultpage', '_parent');
    };
    return (
        <>
            <div className='txtile-freedom-move-parent-container'>
                <img src={FreedomTxtileImg} className='txtile-freedom-move-banner' alt='Free Banner' />
            </div>

            <Container className='txtile-freedom-move-header'>
                <Row >
                    <Col >
                        <h1>Freedom movement & textiles</h1>
                        {/* <img src={Divider} alt="Caption Divider" style={{ marginTop: '-17px', width: '90px', height: '15px', backgroundColor: 'transparent' }} /> */}
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>

            <div className='txtile-freedom-move-lst'>
                {/* option 1  */}

                {/* Archive img thumbnails start */}
                <main className="txtile-freedom-move-page-content">
                    <div className="txtile-freedom-move-listcard">
                        <div className="txtile-freedom-move-content">

                            <h2 className="txtile-freedom-move-title ">Khadi: A Freedom Movement</h2>

                            {/* <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p> */}
                            <Button className="txtile-freedom-move-listbtn" onClick={txtilefreedommovementresultpage}>View</Button>
                        </div>
                    </div>
                    <div className="txtile-freedom-move-listcard">
                        <div className="txtile-freedom-move-content">
                            <h2 className="txtile-freedom-move-title">Wearing Swadeshi</h2>
                            {/* <p className="copy">Plan your next beach trip with these fabulous destinations</p> */}
                            <Button className="txtile-freedom-move-listbtn">View</Button>
                        </div>
                    </div>
                    <div className="txtile-freedom-move-listcard">
                        <div className="txtile-freedom-move-content">
                            <h2 className="txtile-freedom-move-title">Red Shirts againts the British</h2>
                            {/* <p className="copy">It's the desert you've always dreamed of</p> */}
                            <Button className="txtile-freedom-move-listbtn">View</Button>
                        </div>
                    </div>
                    <div className="txtile-freedom-move-listcard">
                        <div className="txtile-freedom-move-content">
                            <h2 className="txtile-freedom-move-title">Charkha: Spinning Independence at Home</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-freedom-move-listbtn">View</Button>
                        </div>
                    </div>

                    <div className="txtile-freedom-move-listcard">
                        <div className="txtile-freedom-move-content">
                            <h2 className="txtile-freedom-move-title">Indigo: Dye & Revolt</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-freedom-move-listbtn">View</Button>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="txtile-freedom-move-listcard">
                        <div className="txtile-freedom-move-content">
                            <h2 className="txtile-freedom-move-title">Weaving of the Indian National Flag</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-freedom-move-listbtn">View</Button>
                        </div>
                    </div>

                    <div className="txtile-freedom-move-listcard">
                        <div className="txtile-freedom-move-content">
                            <h2 className="txtile-freedom-move-title">Dhoti & Topi: A leader & his clothes</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-freedom-move-listbtn">View</Button>
                        </div>
                    </div>

                    <div className="txtile-freedom-move-listcard">
                        <div className="txtile-freedom-move-content">
                            <h2 className="txtile-freedom-move-title">Dress Code for a Modern Nation</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-freedom-move-listbtn">View</Button>
                        </div>
                    </div>
                    {/* <div className="listcard">
                        <div className="txtile-freedom-move-content">
                            <h2 className="title">Black Kimkhab</h2>
                            <Button className="listbtn">View</Button>
                        </div>
                    </div>
                    <div className="listcard">
                        <div className="content">
                            <h2 className="title">Black mixed cloth</h2>
                            <Button className="listbtn">View</Button>
                        </div>
                    </div> */}

                </main>
                {/* Archive img thumbnails end */}


                <Container>
                    <Row>
                        {/* Pagination start here */}
                        <Col className='txtile-freedom-move-paginattion-place'>
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

export default TxtileFreedomMovement
