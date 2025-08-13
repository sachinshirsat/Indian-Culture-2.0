import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './JNJewels.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import JNJewelBan from '../image/JNJewelBan.png'

import JNJewImg1 from '../image/jnjewelimg1.png';
import JNJewImg2 from '../image/jnjewelimg2.png';
import JNJewImg3 from '../image/jnjewelimg3.png';
import JNJewImg4 from '../image/jnjewelimg4.png';

// import JNHisImg4 from '../image/jnhis4.png'


function JNJewels() {
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

    
    const jnfamousgems = () => {
        window.open('/jnfamousgems', '_parent');
    };
    
    const jndesignvocabulary = () => {
        window.open('/jndesignvocabulary', '_parent');
    };

    const jntype = () => {
        window.open('/jntype', '_parent');
    };
    
    const jngems = () => {
        window.open('/jngems', '_parent');
    };
    

    const jnaquisitions = () => {
        window.open('/jnaquisitions', '_parent');
    };
    return (
        <>
            <div className='jnjewels-parent-container'>
                <img src={JNJewelBan} className='jnjewels-banner' alt='Free Banner' />
            </div>

            <Container className='jnjewels-header'>
                <Row >
                    <Col >
                        <h1>Jewels</h1>
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
                        <div className="jnjewels-card-2"><img src={JNJewImg1} className="img img-responsive" alt='rarebook' />
                            <div className="jnjewels-name" style={{ left: '100px', top: '215px' }}><p>Famous Gems</p></div>
                            <div className="jnjewels-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='jnjewels-icons' variant="outline-light" onClick={jnfamousgems}>Explore</Button>

                        </div>
                    </div>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="jnjewels-card-2"><img src={JNJewImg2} className="img img-responsive" alt='rarebook' />
                            <div className="jnjewels-name" style={{ left: '80px', top: '215px' }}><p>Design Vocabulary</p></div>
                            <div className="jnjewels-username"></div>
                            <Button className='jnjewels-icons' variant="outline-light" onClick={jndesignvocabulary}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="jnjewels-card-2"><img src={JNJewImg3} className="img img-responsive" alt='rarebook' />
                            <div className="jnjewels-name" style={{ left: '120px', top: '215px' }}><p>Types</p></div>
                            <div className="jnjewels-username" ></div>
                            <Button className='jnjewels-icons' variant="outline-light" onClick={jntype}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="jnjewels-card-2"><img src={JNJewImg4} className="img img-responsive" alt='rarebook' />
                            <div className="jnjewels-name" style={{ left: '100px', top: '215px' }}><p>Gems & Stones</p></div>
                            <div className="jnjewels-username" ></div>
                            <Button className='jnjewels-icons' variant="outline-light" onClick={jngems}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="jnjewels-card-2"><img src={JNJewImg2} className="img img-responsive" alt='rarebook' />
                            <div className="jnjewels-name" style={{ left: '100px', top: '215px' }}><p>Acquisition</p></div>
                            <div className="jnjewels-username" ></div>
                            <Button className='jnjewels-icons' variant="outline-light" onClick={jnaquisitions}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>


                </Slider1>
            </Container>
        </>
    )
}

export default JNJewels
