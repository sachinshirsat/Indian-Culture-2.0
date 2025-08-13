import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './JNAnecdotes.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import JNAnecBan from '../image/JNAnecBan.png'

import JNAneImg1 from '../image/jnaneimg1.png';
import JNAneImg2 from '../image/jnaneimg2.png';
import JNAneImg3 from '../image/jnaneimg3.png';
import JNAneImg4 from '../image/jnaneimg4.png';

// import JNHisImg4 from '../image/jnhis4.png'


function JNAnecdotes() {
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
    
    const jnnizamnecklace = () => {
        window.open('/jnnizamnecklace', '_parent');
    };
    
    const jnstolentiffin = () => {
        window.open('/jnstolentiffin', '_parent');
    };
    
    const jnkulcha = () => {
        window.open('/jnkulcha', '_parent');
    };
    const jnmarriagealliances = () => {
        window.open('/jnmarriagealliances', '_parent');
    };
    return (
        <>
            <div className='jnanecdo-parent-container'>
                <img src={JNAnecBan} className='jnanecdo-banner' alt='Free Banner' />
            </div>

            <Container className='jnanecdo-header'>
                <Row >
                    <Col >
                        <h1>anecdotes</h1>
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
                        <div className="jnanecdo-card-2"><img src={JNAneImg1} className="img img-responsive" alt='rarebook' />
                            <div className="jnanecdo-name" style={{ left: '100px', top: '215px' }}><p>Nizam necklace</p></div>
                            <div className="jnanecdo-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='jnanecdo-icons' variant="outline-light" onClick={jnnizamnecklace}>Explore</Button>

                        </div>
                    </div>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="jnanecdo-card-2"><img src={JNAneImg2} className="img img-responsive" alt='rarebook' />
                            <div className="jnanecdo-name" style={{ left: '80px', top: '215px' }}><p>Stolen tiffin</p></div>
                            <div className="jnanecdo-username"></div>
                            <Button className='jnanecdo-icons' variant="outline-light" onClick={jnstolentiffin}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="jnanecdo-card-2"><img src={JNAneImg3} className="img img-responsive" alt='rarebook' />
                            <div className="jnanecdo-name" style={{ left: '120px', top: '215px' }}><p>kulcha on the flag</p></div>
                            <div className="jnanecdo-username" ></div>
                            <Button className='jnanecdo-icons' variant="outline-light" onClick={jnkulcha}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="jnanecdo-card-2"><img src={JNAneImg4} className="img img-responsive" alt='rarebook' />
                            <div className="jnanecdo-name" style={{ left: '100px', top: '215px' }}><p>marriage Alliances</p></div>
                            <div className="jnanecdo-username" ></div>
                            <Button className='jnanecdo-icons' variant="outline-light" onClick={jnmarriagealliances}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                


                </Slider1>
            </Container>
        </>
    )
}

export default JNAnecdotes
