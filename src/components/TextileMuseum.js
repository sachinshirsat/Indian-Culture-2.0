import React from 'react'
// import './TextileMuseum.css';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// install swiper.js npm i swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

import TxtMusBanner from '../image/TextileMuseum.png';
// import images
import slide_image_1 from '../image/fig2.webp';
import slide_image_2 from '../image/fig3.webp';
import slide_image_3 from '../image/fig4.webp';
import slide_image_4 from '../image/fig5.webp';
import SwrilDivider from './SwrilDivider';

function TextileMuseum() {

    const museumlistpage = () => {
        window.open('/museumlistpage', '_parent');
    };
    return (
        <>
            <div className='txtile-museum-parent-container'>
                <img src={TxtMusBanner} className='txtile-museum-banner' alt='Free Banner' />
            </div>
            <Container className='txtile-museum-header'>
                <Row >
                    <Col >
                        <h1>Export Textiles from Museums across India</h1>
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>

            <Container>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 20,
                        stretch: 20,
                        depth: 150,
                        modifier: 1,
                        slideShadows: true,

                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide onClick={museumlistpage}>
                        <img src={slide_image_1} alt='3dimg1' />
                        {/* <div className='swipetext' style={{ left: '40px', top: '320px' }}><p>Allahabad Museum, Prayajraj</p></div> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_2} alt='3dimg2' />
                        {/* <div className='swipetext' style={{ left: '40px', top: '360px' }}><p>Indian Museum, Kolkata</p></div> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_3} alt='3dimg3' />
                        {/* <div className='swipetext' style={{ left: '20px', top: '320px' }}><p>Victoria Memorial Hall, Kolkata</p></div> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_4} alt='3dimg4' />
                        {/* <div className='swipetext' style={{ left: '20px', top: '320px' }}><p>Salar Jung Museum, Hyderabad</p></div> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_1} alt='3dimg5' />
                        {/* <div className='swipetext' style={{ left: '40px', top: '360px' }}><p>National Museum, Delhi</p></div> */}
                    </SwiperSlide>

                </Swiper>



            </Container>
        </>
    )
}

export default TextileMuseum
