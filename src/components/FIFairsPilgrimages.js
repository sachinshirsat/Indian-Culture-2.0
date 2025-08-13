import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './FIFairsPilgrimages.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FIFairBan from '../image/FIFairBan.png'

import FIFairimg1 from '../image/fairimg1.png'
import FIFairimg2 from '../image/fairimg2.png'
import FIFairs from './FIFairs';
import SwrilDivider from './SwrilDivider';

function FIFairsPilgrimages() {
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
    const fifairs = () => {
        window.open('/fifairs', '_parent');
      };
    return (
        <>
            <div className='fifairspil-parent-container'>
                <img src={FIFairBan} className='fifairspil-banner' alt='Free Banner' />
            </div>

            <Container className='fifairspil-header'>
                <Row >
                    <Col >
                        <h1>fairs & pilgrimages</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='fifairspil-cover'>
                <Row className="justify-content-md-center">

                    <Col >

                        <p>Fairs and pilgrimages become points of multiple intersections and cannot  be viewed simply as a gathering of pilgrims. These gatherings have a  rich cultural heritage because they reflect a community's history and  tradition. They are points of convergence in a variety of ways,  including religious, economic, social, cultural, and political. Devotees  gather in great numbers in pilgrimages sites and shrines on particular  sacred days which also becomes an opportunity of the merchants, traders,  shopkeepers for business. These pilgrimage sites have evolved into a  hub of exchange and a meeting place for socio-cultural networks.</p>
                    </Col>
                </Row>

            </Container>


            <Container fluid style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                <Slider1 {...settings1}>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="fifairspil-card-2"><img src={FIFairimg1} className="img img-responsive" alt='rarebook' />
                            <div className="fifairspil-name" style={{ left: '80px', top: '215px' }}><p>Fairs</p></div>
                            <div className="fifairspil-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='fifairspil-icons' variant="outline-light" onClick={fifairs}>Explore</Button>

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
                        <div className="fifairspil-card-2"><img src={FIFairimg2} className="img img-responsive" alt='rarebook' />
                            <div className="fifairspil-name" style={{ left: '50px', top: '215px' }}><p>pilgrimages</p></div>
                            <div className="fifairspil-username"></div>
                            <Button className='fifairspil-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>
                </Slider1>
            </Container>
        </>
    )
}

export default FIFairsPilgrimages
