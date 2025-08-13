import React from 'react'
// import './FreedomArchive.css';
import FICeleBan from '../image/FICeleBan.png'
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './FICelebratingNature.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FICeleimg1 from '../image/celeimg1.png';
import FICeleimg2 from '../image/celeimg2.png';
import FICeleimg3 from '../image/celeimg3.png';
import FICeleimg4 from '../image/celeimg4.png';
import SwrilDivider from './SwrilDivider';

function FICelebratingNature() {
    // slider start here
    var settings1 = {
        dots: false,
        infinite: true,
        lazyload: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrow: true,
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
// 
const figudipadwa = () => {
    window.open('/figudipadwa', '_parent');
  };
    return (
        <>
            <div className='ficelenat-parent-container'>
                <img src={FICeleBan} className='ficelenat-banner' alt='Free Banner' />
            </div>

            <Container className='ficelenat-header'>
                <Row >
                    <Col >
                        <h1>Celebrating Nature</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='ficelenat-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>Folk festivals are markers of cultural assimilation uniting various  components of the traditional expressions found in a community. The  festivals reflect the diverse constituents of social folk customs  revering nature, preserving social traditions, and commemorating  ancestors and deities. They are the periodic celebrations where the  communities interact ceremonially in the festivities.</p>
                    </Col>
                </Row>

            </Container>
            <Container fluid style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                <Slider1 {...settings1}>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="ficelenat-card-2"><img src={FICeleimg1} className="img img-responsive" alt='rarebook' />
                            <div className="ficelenat-name" style={{ left: '120px', top: '215px' }}><p>gudi padwa</p></div>
                            <div className="ficelenat-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='ficelenat-icons' variant="outline-light" onClick={figudipadwa}>Explore</Button>

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
                        <div className="ficelenat-card-2"><img src={FICeleimg2} className="img img-responsive" alt='rarebook' />
                            <div className="ficelenat-name" style={{ left: '130px', top: '215px' }}><p>Onam</p></div>
                            <div className="ficelenat-username"></div>
                            <Button className='ficelenat-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="ficelenat-card-2"><img src={FICeleimg3} className="img img-responsive" alt='rarebook' />
                            <div className="ficelenat-name" style={{ left: '120px', top: '215px' }}><p>Navreh</p></div>
                            <div className="ficelenat-username" ></div>
                            <Button className='ficelenat-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="ficelenat-card-2"><img src={FICeleimg4} className="img img-responsive" alt='rarebook' />
                            <div className="ficelenat-name" style={{ left: '80px', top: '215px' }}><p>Chatrali Festival</p></div>
                            <div className="ficelenat-username" ></div>
                            <Button className='ficelenat-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    
                </Slider1>
            </Container>


       
        </>
    )
}

export default FICelebratingNature
