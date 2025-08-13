import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';


// css files bootstrap and external
import 'bootstrap/dist/css/bootstrap.min.css';
// import './TxtileArtifacts.css';
// import './ArcListpage.css';

// import img file
// import FilterIcon from '../image/filter-13.png';
import SearchIcon from '../image/search.svg';
// import Header from '../image/header.PNG';


// import Divider from '../image/SwirlDivider.png';

// import { ArrowLeft } from 'react-feather';
import { Filter } from 'feather-icons-react';
import SwrilDivider from './SwrilDivider';
// import SwrilDivider from './SwrilDivider';
// import Breadcrumb from 'react-bootstrap/Breadcrumb';

function TxtileArtifacts() {

    const txtileartifactsresultpage = () => {
        window.open('/txtileartifactsresultpage', '_parent');
    };
    return (
        <>
            <Container className='txtile-artifacts-header'>
                <Row >
                    <Col >
                        <h1>Types of Artifacts</h1>
                        {/* <img src={Divider} alt="Caption Divider" style={{ marginTop: '-17px', width: '90px', height: '15px', backgroundColor: 'transparent' }} /> */}
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>

            <div className='txtile-artifacts-lst'>

                {/* Archive img thumbnails start */}
                <main className="txtile-artifacts-page-content">
                    <div className="txtile-artifacts-listcard">
                        <div className="txtile-artifacts-content">

                            <h2 className="txtile-artifacts-title ">Achkan (Jacket) of Maharaja of Santosh</h2>

                            {/* <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p> */}
                            <Button className="txtile-artifacts-listbtn" onClick={txtileartifactsresultpage}>View</Button>
                        </div>
                    </div>
                    <div className="txtile-artifacts-listcard">
                        <div className="txtile-artifacts-content">
                            <h2 className="txtile-artifacts-title">Pagri (turban) to Maharaja Nanda Kumar</h2>
                            {/* <p className="copy">Plan your next beach trip with these fabulous destinations</p> */}
                            <Button className="txtile-artifacts-listbtn">View</Button>
                        </div>
                    </div>
                    <div className="txtile-artifacts-listcard">
                        <div className="txtile-artifacts-content">
                            <h2 className="txtile-artifacts-title">Golden brocade chadder</h2>
                            {/* <p className="copy">It's the desert you've always dreamed of</p> */}
                            <Button className="txtile-artifacts-listbtn">View</Button>
                        </div>
                    </div>
                    <div className="txtile-artifacts-listcard">
                        <div className="txtile-artifacts-content">
                            <h2 className="txtile-artifacts-title">Silk Table Cloth</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-artifacts-listbtn">View</Button>
                        </div>
                    </div>

                    <div className="txtile-artifacts-listcard">
                        <div className="txtile-artifacts-content">
                            <h2 className="txtile-artifacts-title">Achkan (jacket) of Tatya Tope</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-artifacts-listbtn">View</Button>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="txtile-artifacts-listcard">
                        <div className="txtile-artifacts-content">
                            <h2 className="txtile-artifacts-title">Title</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-artifacts-listbtn">View</Button>
                        </div>
                    </div>

                    <div className="txtile-artifacts-listcard">
                        <div className="txtile-artifacts-content">
                            <h2 className="txtile-artifacts-title">Title</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-artifacts-listbtn">View</Button>
                        </div>
                    </div>

                    <div className="txtile-artifacts-listcard">
                        <div className="txtile-artifacts-content">
                            <h2 className="txtile-artifacts-title">Title</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-artifacts-listbtn">View</Button>
                        </div>
                    </div>
                    <div className="txtile-artifacts-listcard">
                        <div className="txtile-artifacts-content">
                            <h2 className="txtile-artifacts-title">Title</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-artifacts-listbtn">View</Button>
                        </div>
                    </div>
                    <div className="txtile-artifacts-listcard">
                        <div className="txtile-artifacts-content">
                            <h2 className="txtile-artifacts-title">Title</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-artifacts-listbtn">View</Button>
                        </div>
                    </div>


                </main>
                {/* Archive img thumbnails end */}


                <Container>
                    <Row>
                        {/* Pagination start here */}
                        <Col className='txtile-artifacts-paginattion-place'>
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

export default TxtileArtifacts
