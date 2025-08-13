import React from 'react';
import HistoricState from '../image/hcstatebanner 1.png';
// import './CentralDelhi.css';

import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StateMap from './StateMap';

import GlimpImg from '../image/glimpsimg.png';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper';

/* import slide_image_1 from '../image/fig2.webp';
import slide_image_2 from '../image/fig3.webp'; */

import slide_image_1 from '../image/hscapsule1.png';
import slide_image_2 from '../image/hscapsule2.png';
import slide_image_3 from '../image/hscapsule3.png';
import PhotoEassyResultpage from './PhotoEassyResultpage';
import SwrilDivider from './SwrilDivider';


function HCCentralDelhi() {
    // slider start here
    var settings1 = {
        dots: false,
        infinite: true,
        lazyload: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrow: false,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,

        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.05,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    draggable: true,
                    autoplay: false,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                    arrows: false,
                    draggable: true,
                    autoplay: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.04,
                    slidesToScroll: 1,
                    // initialSlide: 1,
                    dots: false,
                    arrows: false,
                    draggable: true,
                    autoplay: false,

                }
            },



        ]
    };
    //slider end here 
    return (
        <>
            <Container fluid>
                <StateMap />
            </Container>

            <Container className='hc-cd-header'>
                <Row >
                    <Col >
                        <h1>Central Delhi</h1>
                        <SwrilDivider />
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container className='hc-cd-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>Planned in the early 20th century, the city of New Delhi was envisioned as the Imperial Capital of British India. Designed as a mix of classical and Indian architectural styles, replete with Victorian facades and broad avenues, this part of Delhi is now the centre of political activity in the world’s largest democracy.</p>
                    </Col>
                </Row>
            </Container>

            <div className="hc-cd-section " id="section-2" >
                <Container className='hc-cd-header'>
                    <Row >
                        <Col >
                            <h1>History</h1>
                            <SwrilDivider />
                        </Col>
                    </Row>
                </Container>

                <Container className='hc-cd-coverr'>
                    <Row className="justify-content-md-center">
                        <Col >
                            <p>The land upon which New Delhi was built was originally part of the  sprawling, forested Delhi Ridge and the few villages in the area were  resettled by the British when they began the construction of the new  capital in this area. Today, this busy urban zone accommodates major  governmental institutions - which include the Parliament of India, the  Rashtrapati Bhavan, the National Museum, the National Archives, and the  offices of different Ministries.</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container className='hc-cd-header'>
                <Row >
                    <Col >
                        <h1>City Tales</h1>
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>

            <Container className='hc-cd-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>The structures on Raisina Hill are a testament to the bitter rivalry that is reflected in the architecture of the area. The structures on Raisina Hill are a testament to the bitter rivalry that is reflected in the architecture of the area. </p>
                    </Col>
                </Row>
            </Container>

            <Container>

                <PhotoEassyResultpage />
            </Container>

            {/*  */}
            <Container className='hc-cd-header'>
                <Row >
                    <Col >
                        <h1>City capsule</h1>
                        <SwrilDivider/>
                    </Col>
                </Row>
            </Container>

            {/* swiper 3d slider start here */}
            <Container >
                {/* New slider */}
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    initialSlide={1}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 3,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide_image_3} alt="Image 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_2} alt="Image 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_3} alt="Image 3" />
                    </SwiperSlide>
                </Swiper>
            </Container>

            {/* swiper 3d slider end here */}

            <div class="hc-cd-thumbnail-container ">

                <figure class="hc-cd-thumbnail">
                    <img src={GlimpImg} alt="Image 1" />
                    <figcaption>Glimpses of Central Delhi</figcaption>
                </figure>

            </div>
        </>
    )
}

export default HCCentralDelhi
