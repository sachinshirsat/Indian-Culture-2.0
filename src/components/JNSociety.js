import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './JNSociety.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import JNSocietyBan from '../image/JNSocietyBan.png'

import JNSouImg1 from '../image/jnsourceimg1.png';
import JNSouImg2 from '../image/jnsourceimg2.png';
// import JNHisImg4 from '../image/jnhis4.png'


function JNSociety() {
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
                    slidesToShow: 1.08,
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

    
    const jndiversity = () => {
        window.open('/jndiversity', '_parent');
    };

    
    const jncuisine = () => {
        window.open('/jncuisine', '_parent');
    };
    return (
        <>
            <div className='jnsociety-parent-container'>
                <img src={JNSocietyBan} className='jnsociety-banner' alt='Free Banner' />
            </div>

            <Container className='jnsociety-header'>
                <Row >
                    <Col >
                        <h1>Society</h1>
                        {/* <img src={SwrilDivider} style={{ width: '90px', height: '20px' }} alt='divider' /> */}
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                <Slider1 {...settings1}>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="jnsociety-card-2"><img src={JNSouImg1} className="img img-responsive" alt='rarebook' />
                            <div className="jnsociety-name" style={{ left: '120px', top: '215px' }}><p>Diversity</p></div>
                            <div className="jnsociety-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='jnsociety-icons' variant="outline-light" onClick={jndiversity}>Explore</Button>

                        </div>
                    </div>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="jnsociety-card-2"><img src={JNSouImg2} className="img img-responsive" alt='rarebook' />
                            <div className="jnsociety-name" style={{ left: '120px', top: '215px' }}><p>Cuisine</p></div>
                            <div className="jnsociety-username"></div>
                            <Button className='jnsociety-icons' variant="outline-light" onClick={jncuisine}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>


                </Slider1>
            </Container>
        </>
    )
}

export default JNSociety
