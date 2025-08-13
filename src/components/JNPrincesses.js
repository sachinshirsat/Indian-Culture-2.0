import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './JNPrincesses.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import JNPriBAn from '../image/JNPriBAn.png'

import JNPriImg1 from '../image/jnpriimg1.png';
import JNpriImg2 from '../image/jnpriimg2.png';
import JNpriImg3 from '../image/jnpriimg3.png';

// import JNHisImg4 from '../image/jnhis4.png'


function JNPrincesses() {
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
    
    const jndurrushehvar = () => {
        window.open('/jndurrushehvar', '_parent');
    };
    
    const jnniloufer = () => {
        window.open('/jnniloufer', '_parent');
    };
    
    const jnesra = () => {
        window.open('/jnesra', '_parent');
    };
    
    return (
        <>
            <div className='jnprincesses-parent-container'>
                <img src={JNPriBAn} className='jnprincesses-banner' alt='Free Banner' />
            </div>

            <Container className='jnprincesses-header'>
                <Row >
                    <Col >
                        <h1>Nizami Princesses</h1>
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
                        <div className="jnprincesses-card-2"><img src={JNPriImg1} className="img img-responsive" alt='rarebook' />
                            <div className="jnprincesses-name" style={{ left: '60px', top: '215px' }}><p>Princess DurruShehvar</p></div>
                            <div className="jnprincesses-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='jnprincesses-icons' variant="outline-light" onClick={jndurrushehvar}>Explore</Button>

                        </div>
                    </div>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="jnprincesses-card-2"><img src={JNpriImg2} className="img img-responsive" alt='rarebook' />
                            <div className="jnprincesses-name" style={{ left: '80px', top: '215px' }}><p>Princess Niloufer</p></div>
                            <div className="jnprincesses-username"></div>
                            <Button className='jnprincesses-icons' variant="outline-light" onClick={jnniloufer}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="jnprincesses-card-2"><img src={JNpriImg3} className="img img-responsive" alt='rarebook' />
                            <div className="jnprincesses-name" style={{ left: '120px', top: '215px' }}><p>Princess ESRA</p></div>
                            <div className="jnprincesses-username" ></div>
                            <Button className='jnprincesses-icons' variant="outline-light" onClick={jnesra}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    


                </Slider1>
            </Container>
        </>
    )
}

export default JNPrincesses
