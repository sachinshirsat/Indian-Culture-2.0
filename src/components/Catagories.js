import React from 'react';
import './Catagories.css';

import Container from 'react-bootstrap/Container';
/* import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; */

import ArchiveIcon from '../image/Archivesicon.png';
import AudioIcon from '../image/AudioBlue_0.png';
import FortIcon from '../image/FortsofIndia.png';
import VideoIcon from '../image/Video_2.png';
import ManuICon from '../image/manuscriptOrange.png';
// import DigiIcon from '../image/india_0.png';
import { Col, Row } from 'react-bootstrap';

import SwrilDivider from './SwrilDivider';
// import React, { Component } from "react";
// import Slider from "react-slick";


function Catagories() {
    // Glider Configuration



    return (
        <>

            <Container className='cata-header'>
                <Row >
                    <Col >
                        <h1>Categories</h1>
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>
            {/* */}
            
            <Container fluid className='cataparent'>
                <Row>
                    <Col>
                        <a href=" " className="catacard archive">
                            <div className="overlay"></div>
                            <div className="circle">
                                {/* img file */}
                                <span> <img src={ArchiveIcon} alt='' style={{ width: '78px', height: '78px' }} /></span>


                            </div>
                            <p>Archive</p>
                        </a>
                    </Col>
                    <Col>
                        <a href=" " className="catacard credentialing">
                            <div className="overlay"></div>
                            <div className="circle">
                                {/* img file */}
                                <span> <img src={VideoIcon} alt='' style={{ width: '78px', height: '78px' }} /></span>

                            </div>
                            <p>Videos</p>
                        </a>
                    </Col>
                    <Col>
                        <a href=" " className="catacard wallet">
                            <div className="overlay"></div>
                            <div className="circle">
                                {/* img file */}
                                <span> <img src={AudioIcon} alt='' style={{ width: '78px', height: '78px' }} /></span>

                            </div>
                            <p>Audios</p>
                        </a>
                    </Col>
                    <Col>
                        <a href=" " className="catacard human-resources">
                            <div className="overlay"></div>
                            <div className="circle">
                                {/* img file */}
                                <span> <img src={FortIcon} alt='' style={{ width: '78px', height: '78px' }} /></span>

                            </div>
                            <p>Forts of India</p>
                        </a>
                    </Col>
                    <Col>
                        <a href=" " className="catacard manuscript">
                            <div className="overlay"></div>
                            <div className="circle">
                                {/* img file */}
                                <span> <img src={ManuICon} alt='' style={{ width: '78px', height: '78px' }} /></span>

                            </div>
                            <p>Manuscripts</p>
                        </a>
                    </Col>
                  {/*   <Col>
                        <a href=" " className="catacard digital">
                            <div className="overlay"></div>
                            <div className="circle">
                                <span> <img src={DigiIcon} alt='' style={{ width: '78px', height: '78px' }} /></span>

                            </div>
                            <p>Digital Distric Repository</p>
                        </a>
                    </Col> */}
                </Row>
            </Container>
        </>
    )


}
export default Catagories

