import React from 'react'
// import './FreedomArchive.css';
import FIWorshipBan from '../image/FIWorshipBan.png'
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './FIWorshipingNature.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FIWorshipimg1 from '../image/worshipimg1.png';
import FIWorshipimg2 from '../image/worshipimg2.png';
import FIWorshipimg3 from '../image/worshipimg3.png';
import FIWorshipimg4 from '../image/worshipimg4.png';
import SwrilDivider from './SwrilDivider';

function FIWorshipingNature() {
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
    const fishadsukmynsiem = () => {
        window.open('/fishadsukmynsiem', '_parent');
      };
    return (
        <>
            <div className='fiworshipnature-parent-container'>
                <img src={FIWorshipBan} className='fiworshipnature-banner' alt='Free Banner' />
            </div>

            <Container className='fiworshipnature-header'>
                <Row >
                    <Col >
                        <h1>worshiping Nature</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='fiworshipnature-cover'>
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
                        <div className="fiworshipnature-card-2"><img src={FIWorshipimg1} className="img img-responsive" alt='rarebook' />
                            <div className="fiworshipnature-name" style={{ left: '100px', top: '215px' }}><p>Poi Sangken</p></div>
                            <div className="fiworshipnature-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='fiworshipnature-icons' variant="outline-light" onClick="">Explore</Button>

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
                        <div className="fiworshipnature-card-2"><img src={FIWorshipimg2} className="img img-responsive" alt='rarebook' />
                            <div className="fiworshipnature-name" style={{ left: '130px', top: '215px' }}><p>Erok Sim</p></div>
                            <div className="fiworshipnature-username"></div>
                            <Button className='fiworshipnature-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="fiworshipnature-card-2"><img src={FIWorshipimg3} className="img img-responsive" alt='rarebook' />
                            <div className="fiworshipnature-name" style={{ left: '80px', top: '215px' }}><p>Shad Suk Mynsiem</p></div>
                            <div className="fiworshipnature-username" ></div>
                            <Button className='fiworshipnature-icons' variant="outline-light" onClick={fishadsukmynsiem}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="fiworshipnature-card-2"><img src={FIWorshipimg4} className="img img-responsive" alt='rarebook' />
                            <div className="fiworshipnature-name" style={{ left: '100px', top: '215px' }}><p>Phagu Sendra</p></div>
                            <div className="fiworshipnature-username" ></div>
                            <Button className='fiworshipnature-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    
                </Slider1>
            </Container>


       
        </>
    )
}

export default FIWorshipingNature
