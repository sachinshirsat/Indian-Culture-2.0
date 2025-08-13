import React from 'react'
// import './FreedomArchive.css';
import FIFolkBan from '../image/FIFolkBan.png'
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './FIFolkFestivals.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FIFolkimg1 from '../image/folkimg1.png';
import FIFolkimg2 from '../image/folkimg2.png';
import FIFolkimg3 from '../image/folkimg3.png';
import SwrilDivider from './SwrilDivider';

function FIFolkFestivals() {
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
    const ficelebratingnature = () => {
        window.open('/ficelebratingnature', '_parent');
      };
    return (
        <>
            <div className='fifolkfest-parent-container'>
                <img src={FIFolkBan} className='fifolkfest-banner' alt='Free Banner' />
            </div>

            <Container className='fifolkfest-header'>
                <Row >
                    <Col >
                        <h1>folk festivals</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='fifolkfest-cover'>
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
                        <div className="fifolkfest-card-2"><img src={FIFolkimg1} className="img img-responsive" alt='rarebook' />
                            <div className="fifolkfest-name" style={{ left: '80px', top: '215px' }}><p>celebrating nature</p></div>
                            <div className="fifolkfest-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='fifolkfest-icons' variant="outline-light" onClick={ficelebratingnature}>Explore</Button>

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
                        <div className="fifolkfest-card-2"><img src={FIFolkimg2} className="img img-responsive" alt='rarebook' />
                            <div className="fifolkfest-name" style={{ left: '80px', top: '215px' }}><p>social traditions</p></div>
                            <div className="fifolkfest-username"></div>
                            <Button className='fifolkfest-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="fifolkfest-card-2"><img src={FIFolkimg3} className="img img-responsive" alt='rarebook' />
                            <div className="fifolkfest-name" style={{ left: '80px', top: '215px' }}><p>honoring deities</p></div>
                            <div className="fifolkfest-username" ></div>
                            <Button className='fifolkfest-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    

                    
                </Slider1>
            </Container>


       
        </>
    )
}

export default FIFolkFestivals
