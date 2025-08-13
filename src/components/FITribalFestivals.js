import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './FITribalFestivals.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FITribalBan from '../image/FITribalBan.png'

import FITribalimg1 from '../image/tribalimg1.png'
import FITribalimg2 from '../image/tribalimg2.png'
import SwrilDivider from './SwrilDivider';

function FITribalFestivals() {
    // slider start here
    var settings1 = {
        dots: false,
        infinite: false,
        lazyload: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 0,
        arrow: false,
        autoplay: false,
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

    const fiworshipingnature = () => {
        window.open('/fiworshipingnature', '_parent');
      };
    return (
        <>
            <div className='fitribfest-parent-container'>
                <img src={FITribalBan} className='fitribfest-banner' alt='Free Banner' />
            </div>

            <Container className='fitribfest-header'>
                <Row >
                    <Col >
                        <h1>Tribal festivals</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='fitribfest-cover'>
                <Row className="justify-content-md-center">

                    <Col >

                        <p>India is home to numerous indigenous tribes, each with a distinct  culture and way of life. The festivals celebrated by India's various  tribes have many facets and are unique. These festivals exhibit the  traditional customs and beliefs of the tribes. The multi-hued tale of  cultural euphoria associated with nature, fertility, prosperity,  agriculture, ancestors, and tribal deities is narrated in these tribal  festivals. The distinct way of life of these tribes is reflected in  their numerous observances and festivals. </p>
                    </Col>
                </Row>

            </Container>


            <Container fluid style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                <Slider1 {...settings1}>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="fitribfest-card-2"><img src={FITribalimg1} className="img img-responsive" alt='rarebook' />
                            <div className="fitribfest-name" style={{ left: '80px', top: '215px' }}><p>Worshiping Nature</p></div>
                            <div className="fitribfest-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='fitribfest-icons' variant="outline-light" onClick={fiworshipingnature}>Explore</Button>

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
                        <div className="fitribfest-card-2"><img src={FITribalimg2} className="img img-responsive" alt='rarebook' />
                            <div className="fitribfest-name" style={{ left: '50px', top: '215px' }}><p>venerating ancestors & deities</p></div>
                            <div className="fitribfest-username"></div>
                            <Button className='fitribfest-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>
                </Slider1>
            </Container>
        </>
    )
}

export default FITribalFestivals
