import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './TTClothing.css';

import TTClothingBan from '../image/TTClothingBan.png'
import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TTClothingImg1 from '../image/timelessimg8.png';
import TTClothingImg2 from '../image/timelessimg9.png';
import TTClothingImg3 from '../image/timelessimg10.png';

import TTClothingImg4 from '../image/timelessimg12.png';
import TTClothingImg5 from '../image/timelessimg13.png';
import TTClothingImg6 from '../image/timelessimg14.png';
import TTClothingImg7 from '../image/timelessimg15.png';


import TTClothingImg11 from '../image/timelessimg11.png';
import SwrilDivider from './SwrilDivider';

function TTClothing() {
    // slider start here
    var settings1 = {
        dots: false,
        infinite: false,
        lazyload: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 0,
        arrow: false,
        autoplay: false,
        autoplaySpeed: 6000,
        pauseOnHover: false,

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

    const ttdigicatelist = () => {
        window.open('/ttdigicatelist', '_parent');
      };
      
      const ttancienttimeline = () => {
        window.open('/ttancienttimeline', '_parent');
      };

      const ttancienthistoryresultpage = () => {
        window.open('/ttancienthistoryresultpage', '_parent');
      };

      const ttmedievalhistoryresultpage = () => {
        window.open('/ttmedievalhistoryresultpage', '_parent');
      };
      
      const ttcolonialhistoryresultpage = () => {
        window.open('/ttcolonialhistoryresultpage', '_parent');
      };
    return (
        <>
            <div className='ttcloth-parent-container'>
                <img src={TTClothingBan} className='ttcloth-banner' alt='Free Banner' />
            </div>

            <Container className='ttcloth-header'>
                <Row >
                    <Col >
                        <h1>Clothing</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='ttcloth-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>Clothing in India has been an integral part of life since antiquity. This is especially reflected in the long and diverse tradition of textiles in India. Geographical conditions, cross-cultural interactions, and economic and political changes have all contributed to trends in clothing. Under the section, ‘A Brief History’, find essays and timelines detailing the various historical developments and changes in clothing in India. The ‘Trends — Then & Now’ section explores the continuity and change in clothing through a collection of books, photo essays, video stories, and audio stories.</p>
                    </Col>
                </Row>

            </Container>

            {/*  */}
            <Container fluid className='ttcloth-bg-color'>
                <Container className='ttcloth-header ttcloth-head-color'>
                    <Row >
                        <Col >
                            <h1>Digital Catalogue</h1>
                            {/* <SwrilDivider /> */}
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <div class="row justify-content-center g-3">
                        <div class="col-auto">
                            <div class="ttcloth-image-item1" onClick={ttdigicatelist}>
                                <img src={TTClothingImg4} alt="Image 1" />
                                <div class="ttcloth-caption1">Title</div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="ttcloth-image-item1">
                                <img src={TTClothingImg5} alt="Image 2" />
                                <div class="ttcloth-caption1">Title</div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="ttcloth-image-item1">
                                <img src={TTClothingImg6} alt="Image 1" />
                                <div class="ttcloth-caption1">Title</div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="ttcloth-image-item1">
                                <img src={TTClothingImg7} alt="Image 2" />
                                <div class="ttcloth-caption1">Title</div>
                            </div>
                        </div>

                        <div class="col-auto">
                            <div class="ttcloth-image-item1">
                                <img src={TTClothingImg4} alt="Image 1" />
                                <div class="ttcloth-caption1">Title</div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="ttcloth-image-item1">
                                <img src={TTClothingImg5} alt="Image 2" />
                                <div class="ttcloth-caption1">Title</div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="ttcloth-image-item1">
                                <img src={TTClothingImg6} alt="Image 1" />
                                <div class="ttcloth-caption1">Title</div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="ttcloth-image-item1">
                                <img src={TTClothingImg7} alt="Image 2" />
                                <div class="ttcloth-caption1">Title</div>
                            </div>
                        </div>


                    </div>
                </Container>

                <Container className='ttcloth-catacenter'>
                    <Row >
                        <Col >
                            <button className="ttcloth-catabtn"><span>View All</span></button>
                        </Col>
                    </Row>
                </Container>

            </Container>
            {/*  */}

            <Container className='ttcloth-header'>
                <Row >
                    <Col >
                        <h1>A brief history</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                <Slider1 {...settings1}>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="ttcloth-card-2"><img src={TTClothingImg1} className="img img-responsive" alt='rarebook' />
                            <div className="ttcloth-name" style={{ left: '120px', top: '215px' }}><p>Ancient</p></div>
                            <div className="ttcloth-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='ttcloth-icons' variant="outline-light" onClick={ttancienthistoryresultpage}>Explore</Button>

                        </div>
                    </div>

                    {/*  <Col>
                        
                        <div class="profile-card-2"><img src={Rareimg4} class="img img-responsive" alt='rarebook' />
                            <div class="profile-name" style={{ left: '50px', top: '215px' }}>Sayajirao Gaekwad - III</div>
                            <div class="profile-username"></div>
                            <Button className='profile-icons' variant="outline-light">Explore</Button>

                        </div>
                    </Col> */}

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="ttcloth-card-2"><img src={TTClothingImg2} className="img img-responsive" alt='rarebook' />
                            <div className="ttcloth-name" style={{ left: '130px', top: '215px' }}><p>medieval</p></div>
                            <div className="ttcloth-username"></div>
                            <Button className='ttcloth-icons' variant="outline-light" onClick={ttmedievalhistoryresultpage}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="ttcloth-card-2"><img src={TTClothingImg3} className="img img-responsive" alt='rarebook' />
                            <div className="ttcloth-name" style={{ left: '120px', top: '215px' }}><p>Colonial</p></div>
                            <div className="ttcloth-username" ></div>
                            <Button className='ttcloth-icons' variant="outline-light" onClick={ttcolonialhistoryresultpage}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    


                </Slider1>
            </Container>


            <Container className='ttcloth-header'>
                <Row >
                    <Col >
                        <h1>Timeline</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <div class="ttcloth-timeline-container">
                <div class="ttcloth-timeline">
                    <a href='#' class="ttcloth-timeline-event" onClick={ttancienttimeline}>
                        <div class="ttcloth-circle ttcloth-ancient">ANCIENT</div>
                        <div class="ttcloth-date">5000 BCE</div>
                    </a>
                    <a href='#' class="ttcloth-timeline-event">
                        <div class="ttcloth-circle ttcloth-medieval">MEDIEVAL</div>
                        <div class="ttcloth-date">700 CE</div>
                    </a>
                    <a href='#' class="ttcloth-timeline-event">
                        <div class="ttcloth-circle ttcloth-colonial">COLONIAL</div>
                        <div class="ttcloth-date">1700 CE</div>
                        {/* <div class="date3">1947</div> */}
                    </a>
                    {/* <div class="timeline-date">
                        <div class="date no-circle">2022 CE</div>
                    </div> */}


                </div>
            </div>



        </>
    )
}

export default TTClothing
