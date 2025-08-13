import { useEffect, React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './HistoricCities.css';

import HistoricCitiesBanner from '../image/hcbanner 1.png';
import HisCitiTimeline from './HisCitiTimeline';

// Glider.js npm i glider-js
import "glider-js/glider.min.css";
import Glider from "glider-js";

import Moc1 from '../image/HCco1.png';
import Moc2 from '../image/HCco2.png';
import Moc3 from '../image/HCco3.png';
import Moc4 from '../image/HCco4.png';

// install font awesome npm install @fortawesome/react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// npm install @fortawesome/free-solid-svg-icons
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import SwrilDivider from './SwrilDivider';

function HistoricCities() {
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
    // BacktoPrevious page
    /*    const backtopre = () => {
           window.open('/', '_parent');
       } */

    //    
    const historicstates = () => {
        window.open('/historicstates', '_parent');
    };

    const hcdelhihome = () => {
        window.open('/hcdelhihome', '_parent');
    };
    return (
        <>
            <div className='hc-parent-container'>
                <img src={HistoricCitiesBanner} className='hc-banner' alt='Free Banner' />
            </div>



            <Container className='hc-header'>
                <Row >
                    <Col >
                        <h1>Historic cities</h1>
                        <SwrilDivider />
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container className='hc-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>The map of India is dotted with cities that so many of us call home.

                            Many of these cities have origins in our collective history. While they may now be modern and dynamic centres, they continue to represent centuries of culture and heritage that even today, sets them apart from every other city across the globe.

                            Explore these unique urban centres and everything that they have to offer at your own pace, through a virtual expedition. Click on the icons to the right to begin a virtual visit to these historic cities!

                            Each city has its own story, one that is told here through a collection of rare photographs, multimedia, specially-narrated tales, and more. We invite you to sift through them, explore, and discover your own favourite stories about every city.</p>
                    </Col>
                </Row>


            </Container>

            <section>

                <div className="hc-section " id="section-2" >

                    <Container >
                        <div className="hc-grid" >
                            <div className="hc-item hc-item--medium" onClick={hcdelhihome}>
                                <div className="hc-item__details">
                                    Delhi
                                </div>

                            </div>
                            <div className="hc-item hc-item--medium">
                                <div className="hc-item__details">
                                    Varanasi
                                </div>
                            </div>

                            <div className="hc-item hc-item--medium">
                                <div className="hc-item__details">
                                    Ahmedabad
                                </div>
                            </div>
                            <div className="hc-item hc-item--medium">
                                <div className="hc-item__details">
                                    Thanjavur
                                </div>
                            </div>

                            <div className="hc-item hc-item--medium">
                                <div className="hc-item__details">
                                    Patna
                                </div>
                            </div>

                            <div className="hc-item hc-item--medium" onClick={historicstates}>
                                <div className="hc-item__details">
                                    Lucknow
                                </div>
                            </div>

                        </div>
                    </Container>

                    <Container className='hc-center'>
                        <Row >
                            <Col >
                                <button className="hc-btn" ><span>View All</span></button>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </section>

            <Container className='hc-header'>
                <Row >
                    <Col >
                        <h1>What connects this cities?</h1>
                        <SwrilDivider />
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <HisCitiTimeline />

            <Container className='hc-header'>
                <Row>
                    <Col>
                        <h1>Coming soon</h1>
                        <SwrilDivider/>
                        {/* <img src={SwirlDivider} className='swrildivider' alt='divider' /> */}
                    </Col>
                </Row>
            </Container>
            <Container>
                <main className="hc-main">
                    <div className="hc-container">
                        <div className="glider-contain">
                            <div className="glider hc-hide-scrollbar">
                                <div className="hc-card-image ">
                                    {/* <img src="https://source.unsplash.com/1280x720/?animal" alt="Slider " /> */}
                                    <img src={Moc1} alt="Slider " />
                                    {/* <div className='didknowtext' style={{ left: '30px', top: '180px' }}><p>Lorem Ipsum</p></div> */}


                                </div>
                                <div className="hc-card-image">
                                    <img src={Moc2} alt="Slider Imag" />
                                </div>

                                <div className="hc-card-image">
                                    <img src={Moc3} alt="Slider Ima" />
                                </div>

                                <div className="hc-card-image">
                                    <img src={Moc4} alt="Slider I" />
                                </div>

                                <div className="hc-card-image">
                                    <img src={Moc1} alt="Slider " />
                                </div>

                                <div className="hc-card-image">
                                    <img src={Moc2} alt="Slide" />
                                </div>

                                <div className="hc-card-image">
                                    <img src={Moc3} alt="Slid" />
                                </div>

                                <div className="hc-card-image">
                                    <img src={Moc4} alt="Sli" />

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
            </Container>
        </>
    )
}

export default HistoricCities
