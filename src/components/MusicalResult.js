// import React from 'react';
import { useEffect, React } from 'react';

import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// npm install @fortawesome/free-solid-svg-icons
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

// Glider.js npm i glider-js
import "glider-js/glider.min.css";
import Glider from "glider-js";

import FoodnCulThumbnails from '../image/d1.png';
import FoodnCulThumbnails2 from '../image/d2.png';
import FoodnCulThumbnails3 from '../image/d3.png';
// import FoodnCulThumbnails4 from '../images/';

import MusicalDamruBan from '../image/Damaru-Ladakh 1.png';
import SwrilDivider from './SwrilDivider';
// import './MusicalResult.css';

function MusicalInstrument() {
    useEffect(() => {
        new Glider(document.querySelector('.glider'), {
            slidesToShow: 1.1,
            slidesToScroll: 1,
            draggable: false,
            dots: '.dots',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2.1,
                        slidesToScroll: 1,
                        duration: 0.8,
                        arrows: {
                            prev: '.glider-prev',
                            next: '.glider-next',
                        },
                    },
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        duration: 0.8,
                        arrows: {
                            prev: '.glider-prev',
                            next: '.glider-next',
                        },
                    },
                },
            ],
        });
    }, []);
    //slider end here 

    const musicalresultpage = () => {
        window.open('/musicalresultpage', '_parent');
    };
    return (
        <>
            <div className='music-result-parent-container'>
                <img src={MusicalDamruBan} className='music-result-banner' alt='Free Banner' />
                {/* <p className='foodnculban-text'>Indian Cuisine</p> */}
            </div>

            <Container className='music-result-header'>
                <Row >
                    <Col >
                        <h1>Damaru</h1>
                        {/* <img src={SwrilDivider} style={{ width: '90px', height: '20px' }} alt='divider' /> */}
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>

            <div className="music-result-float-container">
                <a href="#" className="icon one"> Share</a>
                <a href="#" className="icon two">QR Code</a>

            </div>

            <Container className='music-result-cover'>
                {/* <Row className="justify-content-md-center ">
                    <Col>
                        <p>Type: AVANADDHA VADYA</p>
                    </Col>
                </Row> */}
                <Row className="justify-content-md-center">

                    <Col >
                        <p>Damaru is a percussion instrument made of human skull, parchment, cloth, silk, metal, brass, cotton, wood, parchment and bamboo. It is a local instrument, found in Ladakh, Tamil Nadu, Gujarat, Bihar and other parts of North India. It is used by the Lamas in ritualistic dance in Ladakh. Moreover, it is used by ‘Kudukuduppai Andi’ of Tamil Nadu and by mendicants, snake charmers, gypsies and jugglers in North India.</p>
                    </Col>
                </Row>

            </Container>

            <main className="main">
                <div className="container">
                    <div className="glider-contain">
                        <div className="glider hide-scrollbar">
                            <div className="card-image ">
                                {/* <img src="https://source.unsplash.com/1280x720/?animal" alt="Slider " /> */}
                                <img src={FoodnCulThumbnails} onClick={musicalresultpage} alt="Slider " />
                                {/* <div className='didknowtext' style={{ left: '30px', top: '180px' }}><p>Lorem Ipsum</p></div> */}


                            </div>
                            <div className="card-image">
                                <img src={FoodnCulThumbnails2} alt="Slider Imag" />
                            </div>

                            <div className="card-image">
                                <img src={FoodnCulThumbnails3} alt="Slider Ima" />
                            </div>
                            <div className="card-image">
                                <img src={FoodnCulThumbnails2} alt="Slider Imag" />
                            </div>

                            <div className="card-image">
                                <img src={FoodnCulThumbnails3} alt="Slider Ima" />
                            </div>

                        </div>
                        <span role="button" aria-label="Previous" className="glider-prev">
                            <FontAwesomeIcon icon={faChevronLeft} style={{ marginLeft: '14px' }} />
                        </span>
                        <span role="button" aria-label="Next" className="glider-next">
                            <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: '14px' }} />
                        </span>
                        {/*<span role="tablist" className="dots"></span>*/}
                    </div>
                </div>
            </main>
        </>
    )
}

export default MusicalInstrument
