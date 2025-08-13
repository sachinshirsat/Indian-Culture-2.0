import React from 'react'
import DelhiHomeBan from '../image/DelhiHomeBan.png';
// import './DelhiHome.css';

import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StateMap from './StateMap';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from 'swiper/react';

// install swiper.js npm i swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper';

import DelhiHomeImg1 from '../image/delhihomeimg1.png';
import DelhiHomeImg2 from '../image/delhihomeimg2.png';
import DelhiHomeImg3 from '../image/delhihomeimg3.png';
import DelhiHomeImg4 from '../image/delhihomeimg4.png';
import DelhiHomeImg5 from '../image/delhihomeimg5.png';

import DelhiHomeImg6 from '../image/delhihomeimg6.png';
import DelhiHomeImg7 from '../image/delhihomeimg7.png';
import DelhiHomeImg8 from '../image/delhihomeimg8.png';
import SwrilDivider from './SwrilDivider';

function HCDelhiHome() {
    const hccentraldelhi = () => {
        window.open('/hccentraldelhi', '_parent');
    };
    return (
        <>
            <div className='hc-delhi-parent-container'>
                <img src={DelhiHomeBan} className='hc-delhi-banner' alt='Free Banner' />
            </div>
            <Container className='hc-delhi-header'>
                <Row >
                    <Col >
                        <h1>Delhi</h1>
                        <SwrilDivider />
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container className='hc-delhi-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>Delhi is no stranger to being at the centre of political power and cultural innovation. With a history that spans millennia, Delhi has appeared in mythology and legend, as well as in the expansive accounts left behind by generations of rulers, foreign emissaries, courtiers, poets, artists, and others who have passed through this beautiful capital city on the banks of the River Yamuna. Traces of this rich historical past are still alive in the many monuments that continue to inhabit corners of this bustling city.</p>
                    </Col>
                </Row>


            </Container>
            <Container>
                <StateMap />
            </Container>

            {/* swiper 3d slider start here */}
            <Container>
                {/* New slider */}
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    initialSlide={2}
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
                        <img src={DelhiHomeImg3} alt="Image 1" />
                        <div className="hc-delhi-caption">Caption for Image 1</div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={DelhiHomeImg2} alt="Image 2" />
                        <div className="hc-delhi-caption">Caption for Image 1</div>
                    </SwiperSlide>

                    <SwiperSlide onClick={hccentraldelhi}>
                        <img src={DelhiHomeImg1} alt="Image 3" />
                        <div className="hc-delhi-caption">Central Delhi</div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={DelhiHomeImg4} alt="Image 4" />
                        <div className="hc-delhi-caption">Caption for Image 1</div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={DelhiHomeImg5} alt="Image 5" />
                        <div className="hc-delhi-caption">Caption for Image 1</div>
                    </SwiperSlide>
                </Swiper>
            </Container>

            {/* swiper 3d slider end here */}

            <Container class=" my-5">
                <div class="row justify-content-center">
                    <div class="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                        <div class="hc-delhi-thumbnail-container">
                            <img src={DelhiHomeImg6} alt="Thumbnail 1" class="hc-delhi-img-fluid" />
                            {/* <div class="caption">Delicate Flavors of Awadh</div> */}
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                        <div class="hc-delhi-thumbnail-container">
                            <img src={DelhiHomeImg7} alt="Thumbnail 2" class="hc-delhi-img-fluid" />
                            {/* <div class="caption">The Bridges of the Gomti</div> */}
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                        <div class="hc-delhi-thumbnail-container">
                            <img src={DelhiHomeImg8} alt="Thumbnail 3" class="hc-delhi-img-fluid" />
                            {/* <div class="caption">The Bridges of the Gomti</div> */}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default HCDelhiHome
