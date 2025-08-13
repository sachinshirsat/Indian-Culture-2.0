import React, { useRef, useState } from 'react';
// import './NissarAliTxt.css';
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
import NAtxtimg1 from '../image/Rogan-art-min 1.png';
import NAtxtimg2 from '../image/12 1.png';
import NAtxtimg3 from '../image/Starching_of_the_warp_threads 1.png';
import NAtxtimg4 from '../image/Spinning_of_cotton_yarns 1.png';

// import required modules
import { FreeMode, Pagination } from 'swiper';

// npm install react-feather
// import { Share2 } from 'react-feather';


function TxtileNissarAli() {
    return (
        <>
            <Container fluid className='txtile-ali-bg'>
                <Container className="txtile-ali-banner-container ">

                    <Player className="txtile-ali-nissarali-txt-player" playsInline src="https://videoserver.nvli.in/nvli/ich/CategoryVideos/textile/Nissar_Ali_Weaver_Kargil_Ladakh.mp4">
                        <BigPlayButton position="center" />
                        <LoadingSpinner />
                        <ControlBar autoHide={true} className="my-class" />
                    </Player>

                </Container>
            </Container>
            <Container >

                <Row style={{ marginTop: '20px' }}>

                    <Col xs={0} className='txtile-weav-result-title' >
                        <img src={NATxticon} className='txtile-weav-result-icon' alt='Archive Icon' />
                        <div className='txtile-weav-result-vertical'></div>
                        Nissar Ali, Weaver - Kargil, Ladakh

                    </Col>


                </Row>
            </Container>

            <hr style={{ width: '100%', marginLeft: 'auto' }} />
         {/*     <div className="float-container">
                <a href="#" className="icon one"> Share</a>
                <a href="#" className="icon two">QR Code</a>

            </div> */}
            <Container>
                <Row>

                    <Col>
                        <p className='txtile-ali-para'>
                            <span className='bold'> Description</span> : Ladakh is situated in north India’s high-altitude region of the Himalayas. It experiences frigid and long winters. The people who live here usually cover themselves in homespun woollens produced from locally available resources. Thus, its textile tradition in Ladakh reflects its physical, socio-economic and cultural environment.</p>

                        <p className='txtile-ali-para'> Weaving is done in almost every home of the Ladakhi villages. It’s a hereditary profession that has been followed by generations. While both men and women do the weaving, it is the women who carry out the arduous task of spinning the wool, sourced from sheep and the famous Pashmina goat. The sheep are sheared twice a year (April and September), after which the hair is combed and cleaned. If the textile requires a coloured warp or weft, the yarn is dyed before weaving.</p>
                        <p className='txtile-ali-para'>  Weavers traditionally used to weave woollen blankets and items for home consumption or the bride’s trousseau. They have now diversified their repertoire to cater to the market and produce items such as shawls and dress materials. While tourists are the primary buyers of such products, it is the opportunities provided by the government to sell their produce to a larger market that has helped the weavers. Providing them stalls in local fairs and festivals is one of the initiatives that has helped them connect with buyers across the country.</p>
                        <p className='txtile-ali-para'>The weavers would like institutional support for training. Spinning long yarn from the short animal hair is a time-consuming task, and any training to lessen the drudgery involved would be a welcome move according to the weavers. Of late, the government has set up a handloom weavers’ society that trains and provides support to all those involved in textile production.</p>

                    </Col>

                </Row>
            </Container >

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
                    <SwiperSlide><img src={NAtxtimg1} /></SwiperSlide>
                    <SwiperSlide><img src={NAtxtimg2} /></SwiperSlide>
                    <SwiperSlide><img src={NAtxtimg3} /></SwiperSlide>
                    <SwiperSlide><img src={NAtxtimg4} /></SwiperSlide>
                    <SwiperSlide><img src={NAtxtimg1} /></SwiperSlide>
                    <SwiperSlide><img src={NAtxtimg2} /></SwiperSlide>
                    <SwiperSlide><img src={NAtxtimg3} /></SwiperSlide>
                    <SwiperSlide><img src={NAtxtimg4} /></SwiperSlide>
                    <SwiperSlide><img src={NAtxtimg1} /></SwiperSlide>
                </Swiper>
            </Container>
        </>
    );
}

export default TxtileNissarAli;
