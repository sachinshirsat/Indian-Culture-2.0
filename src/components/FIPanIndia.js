import React from 'react'
// import './FreedomArchive.css';
import PanIndiBan from '../image/PanIndiBan.png'
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './FIPanIndia.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PanThumbnails1 from '../image/panindiimg1.png';
import PanThumbnails2 from '../image/panindiimg2.png';
import PanThumbnails3 from '../image/panindiimg3.png';
import PanThumbnails4 from '../image/panindiimg4.png';
import SwrilDivider from './SwrilDivider';

function FIPanIndia() {
    // slider start here
    var settings1 = {
        dots: false,
        infinite: true,
        lazyload: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrow: false,
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
    const fibuddhapurnima = () => {
        window.open('/fibuddhapurnima', '_parent');
      };
    return (
        <>
            <div className='fipanindia-parent-container'>
                <img src={PanIndiBan} className='fipanindia-banner' alt='Free Banner' />
            </div>

            <Container className='fipanindia-header'>
                <Row >
                    <Col >
                        <h1>pan india festivals</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='fipanindia-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>India, a culturally rich country, hosts a variety of festivals, and the celebrations have their own distinct extravaganzas across the country. There are numerous festivals that set the spirit for the year, and several of these festivals are celebrated in communities across the country. While the core belief systems remain broadly similar, these festivals are marked by regional variation in terms of customs, traditions, and rituals of celebration. A particular event can have a myriad of regional meanings in different communities across the country. These festivals highlight the various ways in which the festivities are marked within a larger, unified, pan-Indian context.</p>
                    </Col>
                </Row>

            </Container>
            <Container fluid style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                <Slider1 {...settings1}>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="fipanindia-card-2"><img src={PanThumbnails2} className="img img-responsive" alt='rarebook' />
                            <div className="fipanindia-name" style={{ left: '120px', top: '215px' }}><p>Buddha Purnima</p></div>
                            <div className="fipanindia-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='fipanindia-icons' variant="outline-light" onClick={fibuddhapurnima}>Explore</Button>

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
                        <div className="fipanindia-card-2"><img src={PanThumbnails1} className="img img-responsive" alt='rarebook' />
                            <div className="fipanindia-name" style={{ left: '130px', top: '215px' }}><p>Images</p></div>
                            <div className="fipanindia-username"></div>
                            <Button className='fipanindia-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="fipanindia-card-2"><img src={PanThumbnails2} className="img img-responsive" alt='rarebook' />
                            <div className="fipanindia-name" style={{ left: '120px', top: '215px' }}><p>Mahashivratri</p></div>
                            <div className="fipanindia-username" ></div>
                            <Button className='fipanindia-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="fipanindia-card-2"><img src={PanThumbnails3} className="img img-responsive" alt='rarebook' />
                            <div className="fipanindia-name" style={{ left: '120px', top: '215px' }}><p>Good friday</p></div>
                            <div className="fipanindia-username"></div>
                            <Button className='fipanindia-icons' variant="outline-light" onClick="">Explore</Button>

                            {/*   <Button className='next-button' variant="outline-light" onClick=""> */}
                            {/* <img src={NextButon} alt='next btn'/> */}
                            {/* <ArrowRight size={50} color="Black" /> */}
                            {/*  </Button> */}

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>

                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="fipanindia-card-2"><img src={PanThumbnails4} className="img img-responsive" alt='rarebook' />
                            <div className="fipanindia-name" style={{ left: '140px', top: '215px' }}><p>Holi</p></div>
                            <div className="fipanindia-username"></div>
                            <Button className='fipanindia-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    
                </Slider1>
            </Container>


       
        </>
    )
}

export default FIPanIndia
