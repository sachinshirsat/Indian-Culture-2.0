import { React, useEffect } from 'react'
import './ExternalLinks.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Moc1 from '../image/e1.png';
import Moc2 from '../image/e2.jpg';
import Moc3 from '../image/e3.jpg';
import Moc4 from '../image/e4.png';
import SwrilDivider from './SwrilDivider';

// Glider.js
import "glider-js/glider.min.css";
import Glider from "glider-js";

function ExternalLinks() {

    useEffect(() => {
        new Glider(document.querySelector('.glider'), {
            slidesToShow: 1.1,
            slidesToScroll: 1,
            draggable: true,
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
                        slidesToShow: 4.1,
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

    return (
        <>
            <Container className='external-header'>
                <Row >
                    <Col >
                        <h1>External Links</h1>
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>
            <main className="main">
                <div className="container">
                    <div className="glider-contain">
                        <div className="glider hide-scrollbar">
                            <div className="card-image ">
                                {/* <img src="https://source.unsplash.com/1280x720/?animal" alt="Slider " /> */}
                                <img src={Moc1} alt="Slider " />

                            </div>
                            <div className="card-image">
                                <img src={Moc2} alt="Slider Imag" />
                            </div>
                            <div className="card-image">
                                <img src={Moc3} alt="Slider Ima" />
                            </div>
                            <div className="card-image">
                                <img src={Moc1} alt="Slider I" />
                            </div>
                            <div className="card-image">
                                <img src={Moc2} alt="Slider " />
                            </div>
                            <div className="card-image">
                                <img src={Moc4} alt="Slide" />
                            </div>
                            <div className="card-image">
                                <img src={Moc1} alt="Slid" />
                            </div>
                            <div className="card-image">
                                <img src={Moc3} alt="Sli" />
                            </div>
                        </div>
                        <span role="button" aria-label="Previous" className="glider-prev"><FontAwesomeIcon icon={faChevronLeft} style={{ marginLeft: '14px' }} /></span>
                        <span role="button" aria-label="Next" className="glider-next"><FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: '14px' }} /></span>
{/*                         <span role="tablist" className="dots"></span>
 */}                    </div>
                </div>
            </main>

            
        </>
    )
}

export default ExternalLinks
