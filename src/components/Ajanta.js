import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
// import './Ajanta.css';

import { Player, BigPlayButton, LoadingSpinner, ControlBar } from 'video-react';
import '../../node_modules/video-react/dist/video-react.css';

import AjantaBan from '../image/AjantaBan.png'

import { Swiper, SwiperSlide } from 'swiper/react';
// install swiper.js npm i swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper';

import AboutAjantaImg from '../image/aboutajnimg1.png'

import AjntaImg1 from '../image/ajnata-2.webp';
import AjntaImg2 from '../image/ajnata-3.webp';
import AjntaImg3 from '../image/ajnata-4.webp';
import AjntaImg4 from '../image/ajnata-5.webp';
import AjntaImg5 from '../image/Sahid_Smarak.webp';
import Caves from './Caves';
import SwrilDivider from './SwrilDivider';

function Ajanta() {
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
    const caves = () => {
        window.open('/caves', '_parent');
    };

    const acpaintings = () => {
        window.open('/acpaintings', '_parent');
    };
    return (
        <>
            <div className='ajanta-parent-container'>
                <img src={AjantaBan} className='ajanta-banner' alt='Free Banner' />
            </div>
            <Container className='ajanta-header'>
                <Row >
                    <Col >
                        <h1>Ajanta</h1>
                        <SwrilDivider />
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='ajanta-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>The Ajantā caves are rock-cut Buddhist cave temples carved out of a horseshoe shaped valley near the Waghora river at the edge of the Indyadhri range. The caves are a UNESCO World Heritage site and are thronged by thousands of tourists who come to admire its serene location, rock-cut architecture and beautiful Buddhist paintings that are found in the caves. These 30 rock-cut caves are part of a constellation of Buddhist cave temples dotting the Sahayādri or Western Ghats in Maharashtra. But Ajantā is unique as it hosts the finest specimens of art - Cave 9 and 10 contain the oldest Buddhist narrative paintings in India.</p>
                    </Col>
                </Row>

            </Container>

            <Container className='ajanta-header'>
                <Row >
                    <Col >
                        <h1>Watch a short introduction to Ajanta</h1>
                        <SwrilDivider />
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container className="ajanta-banner-container ">

                <Player className="ajanta-player" playsInline src="https://videoserver.nvli.in/nvli/ich/CategoryVideos/varanasi/IntroductionAjanta.mp4">
                    <BigPlayButton position="center" />
                    <LoadingSpinner />
                    <ControlBar autoHide={true} className="my-class" />
                </Player>

            </Container>



            <Container className='ajanta-header'>
                <Row >
                    <Col >
                        <h1>Freedom Struggle: Symbols & Spaces</h1>
                        <SwrilDivider />
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            {/* swiper 3d slider start here */}

            <div className="ajanta-contain-slider ">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
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
                        <div className="ajanta-slide-content">
                            <img src={AboutAjantaImg} alt="Ajanta Image 1" />
                            <div className="ajanta-overlay">
                                <h3 className="ajanta-title">Name of the site</h3>
                                <span className="ajanta-caption">Caption for Image 1</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="ajanta-slide-content">
                            <img src={AboutAjantaImg} alt="Ajanta Image 2" />
                            <div className="ajanta-overlay">
                                <h3 className="ajanta-title">Title for Image 2</h3>
                                <span className="ajanta-caption">Caption for Image 2</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="ajanta-slide-content">
                            <img src={AboutAjantaImg} alt="Ajanta Image 3" />
                            <div className="ajanta-overlay">
                                <h3 className="ajanta-title">Title for Image 3</h3>
                                <span className="ajanta-caption">Caption for Image 3</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="ajanta-slide-content">
                            <img src={AboutAjantaImg} alt="Ajanta Image 4" />
                            <div className="ajanta-overlay">
                                <h3 className="ajanta-title">Title for Image 4</h3>
                                <span className="ajanta-caption">Caption for Image 4</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/*  */}

            <Container>
                <div class="ajanta-lst-imgs-grid">
                    <div class="ajanta-grid-item" id="caves" onClick={caves}>
                        <img src={AjntaImg5} alt="Caves" />
                        <div class="ajanta-overlay">
                            <div class="ajanta-text">Caves</div>
                        </div>
                    </div>
                    <div class="ajanta-grid-item" id="paintings" onClick={acpaintings}>
                        <img src={AjntaImg2} alt="Paintings" />
                        <div class="ajanta-overlay">
                            <div class="ajanta-text">Paintings</div>
                        </div>
                    </div>
                    <div class="ajanta-grid-item center" id="stories">
                        <img src={AjntaImg4} alt="Stories" />
                        <div class="ajanta-overlay">
                            <div class="ajanta-text">Stories</div>
                        </div>
                    </div>
                    <div class="ajanta-grid-item" id="material-culture">
                        <img src={AjntaImg1} alt="Material Culture" />
                        <div class="ajanta-overlay">
                            <div class="ajanta-text">Material Culture</div>
                        </div>
                    </div>
                    <div class="ajanta-grid-item" id="sculptures">
                        <img src={AjntaImg3} alt="Sculptures & Architecture" />
                        <div class="ajanta-overlay">
                            <div class="ajanta-text">Sculptures & Architecture</div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Ajanta
