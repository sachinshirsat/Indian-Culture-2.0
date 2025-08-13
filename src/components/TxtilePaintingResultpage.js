import React, { useRef, useState } from 'react';
// import './PaintingTxtResultpage.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Player, BigPlayButton, LoadingSpinner, ControlBar } from 'video-react';
import '../../node_modules/video-react/dist/video-react.css';
import NATxticon from '../image/AliTxt.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import WRimg1 from '../image/wr1.png';
import WRimg2 from '../image/wr2.png';
import WRimg3 from '../image/wr3.png';
import WRimg4 from '../image/wr4.png';
import WRimg5 from '../image/wr5.png';
import WRimg6 from '../image/wr6.png';
import WRimg7 from '../image/wr7.png';
import WRimg8 from '../image/wr8.png';
import BathToweling from '../image/bathtowelbig 1.png'

// import required modules
import { FreeMode, Pagination } from 'swiper';

// npm install react-feather
// import { Share2 } from 'react-feather';


function TxtilePaintingResultpage() {
    return (
        <>
            
            <div className='txtile-paint-result-parent-container'>
                <img src={BathToweling} className='txtile-paint-result-banner' alt='Free Banner' />
            </div>
            {/*  <div className="float-container">
        <a href="#" className="icon one"> Share</a>
        <a href="#" className="icon two">QR Code</a>

    </div> */}

            <Container >

                <Row style={{ marginTop: '20px' }}>

                    <Col xs={0} className='txtile-paint-result-title' >
                        <img src={NATxticon} className='txtile-paint-result-icon' alt='Archive Icon' />
                        <div className='txtile-paint-result-vertical'></div>
                        Roghan Painting, Gujarat

                    </Col>


                </Row>
            </Container>

            <hr style={{ width: '100%', marginLeft: 'auto' }} />
            <Container className='txtile-paint-result-cover'>
                <Row>

                    <Col>
                        <p >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </Col>

                </Row>
            </Container>



            <Container>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}

                    pagination={{
                        clickable: true,

                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={WRimg1} /></SwiperSlide>
                    <SwiperSlide><img src={WRimg2} /></SwiperSlide>
                    <SwiperSlide><img src={WRimg3} /></SwiperSlide>
                    <SwiperSlide><img src={WRimg4} /></SwiperSlide>
                    <SwiperSlide><img src={WRimg5} /></SwiperSlide>
                    <SwiperSlide><img src={WRimg6} /></SwiperSlide>
                    <SwiperSlide><img src={WRimg7} /></SwiperSlide>
                    <SwiperSlide><img src={WRimg8} /></SwiperSlide>
                </Swiper>
            </Container>

        </>
    )
}

export default TxtilePaintingResultpage
