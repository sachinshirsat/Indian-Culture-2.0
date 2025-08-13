import React from 'react'
// import './FreedomArchive.css';
import FIFairssBan from '../image/FIFairssBan.png'
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './FIFairs.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FIFairsimg1 from '../image/fairsimg1.png';
import FIFairsimg2 from '../image/fairsimg2.png';
import FIFairsimg3 from '../image/fairsimg3.png';
import FIFairsimg4 from '../image/fairsimg4.png';
import SwrilDivider from './SwrilDivider';

function FIFairs() {
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
const fimallinath = () => {
    window.open('/fimallinath', '_parent');
  };
    return (
        <>
            <div className='fifairs-parent-container'>
                <img src={FIFairssBan} className='fifairs-banner' alt='Free Banner' />
            </div>

            <Container className='fifairs-header'>
                <Row >
                    <Col >
                        <h1>worshiping Nature</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='fifairs-cover'>
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
                        <div className="fifairs-card-2"><img src={FIFairsimg1} className="img img-responsive" alt='rarebook' />
                            <div className="fifairs-name" style={{ left: '100px', top: '215px' }}><p>Mallinath Fair</p></div>
                            <div className="fifairs-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='fifairs-icons' variant="outline-light" onClick={fimallinath}>Explore</Button>

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
                        <div className="fifairs-card-2"><img src={FIFairsimg2} className="img img-responsive" alt='rarebook' />
                            <div className="fifairs-name" style={{ left: '130px', top: '215px' }}><p>Bhagoria Mela</p></div>
                            <div className="fifairs-username"></div>
                            <Button className='fifairs-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="fifairs-card-2"><img src={FIFairsimg3} className="img img-responsive" alt='rarebook' />
                            <div className="fifairs-name" style={{ left: '30px', top: '215px' }}><p>KOTAPPAKONDA TEMPLE FAIR</p></div>
                            <div className="fifairs-username" ></div>
                            <Button className='fifairs-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="fifairs-card-2"><img src={FIFairsimg4} className="img img-responsive" alt='rarebook' />
                            <div className="fifairs-name" style={{ left: '100px', top: '215px' }}><p>KUNDA MELA</p></div>
                            <div className="fifairs-username" ></div>
                            <Button className='fifairs-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    
                </Slider1>
            </Container>


       
        </>
    )
}

export default FIFairs
