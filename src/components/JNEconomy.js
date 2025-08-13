import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './JNEconomy.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import JNEcoBan from '../image/JNEcoBan.png'

import JNEcoImg1 from '../image/jneco1.png';
import JNEcoImg2 from '../image/jneco2.png';
import JNEcoImg3 from '../image/jneco3.png';
import { Link } from 'react-router-dom';
// import JNHisImg4 from '../image/jnhis4.png'


function JNEconomy() {
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
    
    const jnextentofwealth = () => {
        window.open('/jnextentofwealth', '_parent');
    };

    
    const jnecocrisis = () => {
        window.open('/jnecocrisis', '_parent');
    };
    
    const jnsourcesofwealth = () => {
        window.open('/jnsourcesofwealth', '_parent');
    };
    return (
        <>
            <div className='jneconomy-parent-container'>
                <img src={JNEcoBan} className='jneconomy-banner' alt='Free Banner' />
            </div>

            <Container className='jneconomy-header'>
                <Row >
                    <Col >
                        <h1>Economy</h1>
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
                        <div className="jneconomy-card-2"><img src={JNEcoImg1} className="img img-responsive" alt='rarebook' />
                            <div className="jneconomy-name" style={{ left: '80px', top: '215px' }}><p>Extent of Wealth</p></div>
                            <div className="jneconomy-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='jneconomy-icons' variant="outline-light" onClick={jnextentofwealth}>Explore</Button>

                        </div>
                    </div>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="jneconomy-card-2"><img src={JNEcoImg2} className="img img-responsive" alt='rarebook' />
                            <div className="jneconomy-name" style={{ left: '80px', top: '215px' }}><p>Economic Crisis</p></div>
                            <div className="jneconomy-username"></div>
                            <Button className='jneconomy-icons' variant="outline-light" onClick={jnecocrisis}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="jneconomy-card-2"><img src={JNEcoImg3} className="img img-responsive" alt='rarebook' />
                            <div className="jneconomy-name" style={{ left: '80px', top: '215px' }}><p>Sources of Wealth</p></div>
                            <div className="jneconomy-username" ></div>
                            <Button className='jneconomy-icons' variant="outline-light" onClick={jnsourcesofwealth}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>


                </Slider1>
            </Container>
        </>
    )
}

export default JNEconomy
