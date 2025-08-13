import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import TimelessTrendsBan from '../image/TimelessBan.png'
import TimelessTrendsImg1 from '../image/timelessimg1.png';
import TimelessTrendsImg2 from '../image/timelessimg2.png';
import TimelessTrendsImg3 from '../image/timelessimg3.png';
import TimelessTrendsImg4 from '../image/timelessimg4.png';

// import './TimelessTrends.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TimelessTrendsImg5 from '../image/timelessimg5.png';
import TimelessTrendsImg6 from '../image/timelessimg6.png';
import TimelessTrendsImg7 from '../image/timelessimg7.png';

import TimeGameImg1 from '../image/timegame1.png';
import TimeGameImg2 from '../image/timegame2.png';
import TimeGameImg3 from '../image/timegame3.png';
import TimeGameImg4 from '../image/timegame4.png';
import SwrilDivider from './SwrilDivider';

function TimelessTrends() {
     // slider start here
     var settings1 = {
        dots: false,
        infinite: false,
        lazyload: true,
        speed: 500,
        slidesToShow: 4,
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
    //slider end here 

    const ttclothing = () => {
        window.open('/ttclothing', '_parent');
      };

      const ttreadinglist = () => {
        window.open('/ttreadinglist', '_parent');
      };

      const ttvideostories = () => {
        window.open('/ttvideostories', '_parent');
      };

      const ttphotoessays = () => {
        window.open('/ttphotoessays', '_parent');
      };

      const ttsnippets = () => {
        window.open('/ttsnippets', '_parent');
      };
    return (
        <>
            <div className='timelesstrends-parent-container'>
                <img src={TimelessTrendsBan} className='timelesstrends-banner' alt='Free Banner' />
            </div>

            <Container className='timelesstrends-header'>
                <Row >
                    <Col >
                        <h1>Timeless trends</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='timelesstrends-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>In both its traditional and modern manifestations, Indian art exhibits a powerful sense of design and a vivid imagination. These are reflected in sculptures, paintings, murals, architecture, coins, and items of personal adornment like jewellery, clothing, and more. Surviving the vagaries of time, many of these artefacts are now preserved in museums, archaeological sites and cultural institutions. These seemingly ordinary artefacts act as a repository of knowledge that conveys information about the society of their time. Explore these artefacts and the stories they tell at your own pace. Click on the right to explore the ‘Digital Catalogue', which looks at individual artefacts and highlights their most enthralling features. The icons below are dedicated sections, offering a collection of photos, videos, books, and much more. To celebrate the interconnectedness of the past and the present, visit Culture Connects—a dedicated corner to discuss the links between the cultures and traditions we cherish, the structures and sites that dot our modern landscapes, and the little things that we do and say every day.</p>
                    </Col>
                </Row>

            </Container>

            <Container>
                <div class="timelesstrends-grid-container">
                    <div class="timelesstrends-grid-item" id="pan-india" onClick={ttclothing}>
                        <div class="timelesstrends-overlay">Clothing</div>
                    </div>
                    <div class="timelesstrends-grid-item" id="folk">
                        <div class="timelesstrends-overlay">Accessories</div>
                    </div>
                    <div class="timelesstrends-grid-item" id="tribal">
                        <div class="timelesstrends-overlay">Hairstyles</div>
                    </div>
                    <div class="timelesstrends-grid-item" id="fairs">
                        <div class="timelesstrends-overlay">Decorative Art</div>
                    </div>
                </div>
            </Container>

            <Container className='timelesstrends-header'>
                <Row >
                    <Col >
                        <h1>Then & Now</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                <Slider1 {...settings1}>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="timelesstrends-card-2"><img src={TimelessTrendsImg5} className="img img-responsive" alt='rarebook' />
                            <div className="timelesstrends-name" style={{ left: '120px', top: '215px' }}><p>Books</p></div>
                            <div className="timelesstrends-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='timelesstrends-icons' variant="outline-light" onClick={ttreadinglist}>Explore</Button>

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
                        <div className="timelesstrends-card-2"><img src={TimelessTrendsImg6} className="img img-responsive" alt='rarebook' />
                            <div className="timelesstrends-name" style={{ left: '130px', top: '215px' }}><p>Videos</p></div>
                            <div className="timelesstrends-username"></div>
                            <Button className='timelesstrends-icons' variant="outline-light" onClick={ttvideostories}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="timelesstrends-card-2"><img src={TimelessTrendsImg7} className="img img-responsive" alt='rarebook' />
                            <div className="timelesstrends-name" style={{ left: '120px', top: '215px' }}><p>Photo Essays</p></div>
                            <div className="timelesstrends-username" ></div>
                            <Button className='timelesstrends-icons' variant="outline-light" onClick={ttphotoessays}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="timelesstrends-card-2"><img src={TimelessTrendsImg6} className="img img-responsive" alt='rarebook' />
                            <div className="timelesstrends-name" style={{ left: '120px', top: '215px' }}><p>Snippets & Stories</p></div>
                            <div className="timelesstrends-username"></div>
                            <Button className='timelesstrends-icons' variant="outline-light" onClick={ttsnippets}>Explore</Button>

                            {/*   <Button className='next-button' variant="outline-light" onClick=""> */}
                            {/* <img src={NextButon} alt='next btn'/> */}
                            {/* <ArrowRight size={50} color="Black" /> */}
                            {/*  </Button> */}

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>

                    </div>

                   
                </Slider1>
            </Container>


            <Container className='timelesstrends-header'>
                <Row >
                    <Col >
                        <h1>games of india</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                <Slider1 {...settings1}>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="timelesstrends-card-2"><img src={TimeGameImg1} className="img img-responsive" alt='rarebook' />
                            <div className="timelesstrends-name" style={{ left: '120px', top: '215px' }}><p>Chess</p></div>
                            <div className="timelesstrends-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='timelesstrends-icons' variant="outline-light" onClick="">Explore</Button>

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
                        <div className="timelesstrends-card-2"><img src={TimeGameImg2} className="img img-responsive" alt='rarebook' />
                            <div className="timelesstrends-name" style={{ left: '130px', top: '215px' }}><p>Ganjifa cards</p></div>
                            <div className="timelesstrends-username"></div>
                            <Button className='timelesstrends-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="timelesstrends-card-2"><img src={TimeGameImg3} className="img img-responsive" alt='rarebook' />
                            <div className="timelesstrends-name" style={{ left: '120px', top: '215px' }}><p>snakes & ladders</p></div>
                            <div className="timelesstrends-username" ></div>
                            <Button className='timelesstrends-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="timelesstrends-card-2"><img src={TimeGameImg4} className="img img-responsive" alt='rarebook' />
                            <div className="timelesstrends-name" style={{ left: '120px', top: '215px' }}><p>Ludo</p></div>
                            <div className="timelesstrends-username"></div>
                            <Button className='timelesstrends-icons' variant="outline-light" onClick="">Explore</Button>

                            {/*   <Button className='next-button' variant="outline-light" onClick=""> */}
                            {/* <img src={NextButon} alt='next btn'/> */}
                            {/* <ArrowRight size={50} color="Black" /> */}
                            {/*  </Button> */}

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>

                    </div>

                   
                </Slider1>
            </Container>
        </>
    )
}

export default TimelessTrends
