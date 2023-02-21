import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../components/SlickCustom.css';

import ArchiveIcon from '../image/Archivesicon.png';
import AudioIcon from '../image/AudioBlue_0.png';
import FortIcon from '../image/FortsofIndia.png';
import VideoIcon from '../image/Video_2.png';
import ManuICon from '../image/manuscriptOrange.png';
import DigiIcon from '../image/india_0.png';
import SwrilDivider from './SwrilDivider';

import { Container } from "react-bootstrap";
import { Col, Row } from 'react-bootstrap';


export default class Responsive extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            cssEase: 'linear',
            slidesToShow: 5,
            slidesToScroll: 4,
            initialSlide: 1,
            autoplay: true,
            autoplaySpeed: 10000,
            pauseOnHover: true,
            arrows: true,
            draggable: true,

           

            responsive: [

                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        arrows: true,
                        draggable: true,

                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2.1,
                        slidesToScroll: 2,
                        // initialSlide: 2
                        arrows: true,
                        draggable: true,

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1.1,
                        slidesToScroll: 1,
                        // initialSlide: 2
                        
                        arrows: false,
                        draggable: true,

                        focusOnSelect: true,
                        centerMode: true,
                        centerPadding: '40px',
                        variableWidth: false,





                    }
                },



            ]
        };
        return (
            <>
                <Container className='cata-header' >
                    <Row >
                        <Col >
                            <h1>Categories</h1>
                            <SwrilDivider />
                        </Col>
                    </Row>
                </Container>
                <Container style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                    <Slider {...settings}>
                        <div>
                            <a href=" " className="catacard archive">
                                <div className="overlay"></div>
                                <div className="circle">
                                    {/* img file */}
                                    <span> <img src={ArchiveIcon} alt='' style={{ width: '78px', height: '78px' }} /></span>


                                </div>
                                <p>Archive</p>
                            </a>
                        </div>
                        <div>
                            <a href=" " className="catacard credentialing">
                                <div className="overlay"></div>
                                <div className="circle">
                                    {/* img file */}
                                    <span> <img src={VideoIcon} alt='' style={{ width: '78px', height: '78px' }} /></span>

                                </div>
                                <p>Videos</p>
                            </a>
                        </div>
                        <div>
                            <a href=" " className="catacard wallet">
                                <div className="overlay"></div>
                                <div className="circle">
                                    {/* img file */}
                                    <span> <img src={AudioIcon} alt='' style={{ width: '78px', height: '78px' }} /></span>

                                </div>
                                <p>Audios</p>
                            </a>
                        </div>
                        <div>
                            <a href=" " className="catacard human-resources">
                                <div className="overlay"></div>
                                <div className="circle">
                                    {/* img file */}
                                    <span> <img src={FortIcon} alt='' style={{ width: '78px', height: '78px' }} /></span>

                                </div>
                                <p>Forts of India</p>
                            </a>
                        </div>
                        <div>
                            <a href=" " className="catacard manuscript">
                                <div className="overlay"></div>
                                <div className="circle">
                                    {/* img file */}
                                    <span> <img src={ManuICon} alt='' style={{ width: '78px', height: '78px' }} /></span>

                                </div>
                                <p>Manuscripts</p>
                            </a>
                        </div>
                        <div>
                            <a href=" " className="catacard digital">
                                <div className="overlay"></div>
                                <div className="circle">
                                    <span> <img src={DigiIcon} alt='' style={{ width: '78px', height: '78px' }} /></span>

                                </div>
                                <p>Digital Distric Repository</p>
                            </a>
                        </div>
                        <div>
                            <a href=" " className="catacard human-resources">
                                <div className="overlay"></div>
                                <div className="circle">
                                    {/* img file */}
                                    <span> <img src={FortIcon} alt='' style={{ width: '78px', height: '78px' }} /></span>

                                </div>
                                <p>Forts of India</p>
                            </a>
                        </div>
                        <div>
                            <a href=" " className="catacard archive">
                                <div className="overlay"></div>
                                <div className="circle">
                                    {/* img file */}
                                    <span> <img src={ArchiveIcon} alt='' style={{ width: '78px', height: '78px' }} /></span>


                                </div>
                                <p>Archive</p>
                            </a>
                        </div>
                    </Slider>
                </Container>
            </>
        );
    }
}