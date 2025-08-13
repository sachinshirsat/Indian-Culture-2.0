import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RetrievedArtefactsBanner from '../image/tt 1.png';
// import './RetrievedArtefacts.css';
// import './RetrvdArtSlickCust.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FreeThumbnails from '../image/ra2.png';
import FreeThumbnails2 from '../image/ra3.png';
import FreeThumbnails3 from '../image/ra4.png';
import FreeThumbnails4 from '../image/ra5.png';
import ArtExpHub from './ArtExpHub';
import SwrilDivider from './SwrilDivider';

function RetrievedArtefacts() {
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
    // 
    const artefactsmore = () => {
        window.open('/artefactsmore', '_parent');
    };
    const artefactsresultpage = () => {
        window.open('/artefactsresultpage', '_parent');
    };
    return (
        <>
            <div className='retriv-art-parent-container'>
                <img src={RetrievedArtefactsBanner} className='retriv-art-banner' alt='Free Banner' />
            </div>

            <Container className='retriv-art-header'>
                <Row >
                    <Col >
                        <h1>Retrieved Artefacts of India</h1>
                        <SwrilDivider />
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container className='retriv-art-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>For millennia India has been a melting pot of diverse cultures, boasting a rich heritage of breathtaking sculptures and artwork. Yet, over centuries, conquerors and colonial powers relentlessly pillaged this heritage, a trend continued by modern looters and smugglers. Consequently, much of India’s historical wealth found its way to Western museums and private collections, resulting in a profound cultural loss that deprives future generations of their rich and intricate heritage.</p>
                        <p>The theft or loss of an artefact signifies the erasure of a piece of history and the collective memory it embodies. Removing artefacts from their original locations strips them of their intrinsic significance, depriving future generations of cultural insights. However, in the past decade, concerted efforts by Indian and international governments, NGOs, journalists, and heritage activists have succeeded in repatriating 358 artefacts back to India.</p>
                        <p>Explore this section to delve into the world of Retrieved Artefacts, uncovering their repatriation stories, heritage, and the legal frameworks that protect them. </p>
                    </Col>
                </Row>

            </Container>

            <Container className='retriv-art-header'>
                <Row >
                    <Col >
                        <h1>Artefact Chronicles</h1>
                        <SwrilDivider />
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container className='retriv-art-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>The tales of theft, smuggling and their return home surrounding these  artefacts offer insights into the clandestine realm of art smuggling.  They also serve as testaments to the triumphs and unwavering endeavour  to restore the nation’s invaluable heritage. Click on the artefacts to  explore its journey.</p>
                    </Col>
                </Row>

            </Container>

            <Container fluid style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                <Slider1 {...settings1}>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="retriv-art-card-2"><img src={FreeThumbnails} className="img img-responsive" alt='rarebook' />
                            <div className="retriv-art-name" style={{ left: '50px', top: '215px' }}><p>Red Sandstone Couple</p></div>
                            <div className="retriv-art-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='retriv-art-icons' variant="outline-light" onClick={artefactsresultpage}>Explore</Button>

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
                        <div className="retriv-art-card-2"><img src={FreeThumbnails2} className="img img-responsive" alt='rarebook' />
                            <div className="retriv-art-name" style={{ left: '80px', top: '215px' }}><p>Marble Apsara</p></div>
                            <div className="retriv-art-username"></div>
                            <Button className='retriv-art-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="retriv-art-card-2"><img src={FreeThumbnails3} className="img img-responsive" alt='rarebook' />
                            <div className="retriv-art-name" style={{ left: '80px', top: '215px' }}><p>Seated Buddha</p></div>
                            <div className="retriv-art-username" ></div>
                            <Button className='retriv-art-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="retriv-art-card-2"><img src={FreeThumbnails4} className="img img-responsive" alt='rarebook' />
                            <div className="retriv-art-name" style={{ left: '50px', top: '215px' }}><p>Goddess Pratyangira or Narasimhi</p></div>
                            <div className="retriv-art-username"></div>
                            <Button className='retriv-art-icons' variant="outline-light" onClick="">Explore</Button>

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
                        <div className="retriv-art-card-2"><img src={FreeThumbnails2} className="img img-responsive" alt='rarebook' />
                            <div className="retriv-art-name" style={{ left: '100px', top: '215px' }}><p>Newspaper</p></div>
                            <div className="retriv-art-username"></div>
                            <Button className='retriv-art-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="retriv-art-card-2"><img src={FreeThumbnails4} className="img img-responsive" alt='rarebook' />
                            <div className="retriv-art-name" style={{ left: '100px', top: '215px' }}><p>Unsung Heros</p></div>
                            <div className="retriv-art-username"></div>
                            <Button className='retriv-art-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>

                    </div>
                </Slider1>
            </Container>

            <Container className='retriv-art-cover'>

                <Row>
                    <div className='retriv-art-center'>
                        <button className="retriv-art-btn " onClick={artefactsmore}><span>Explore more</span></button>
                    </div>
                </Row>

            </Container>

            <Container className='retriv-art-header'>
                <Row >
                    <Col >
                        <h1>Artefact Exploration Hub </h1>
                        <SwrilDivider />
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container className='retriv-art-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>Embark on a journey through India’s rich history, filled with relics  that narrate tales of its past. Explore a compelling essay on India’s  ongoing battle to reclaim its stolen heritage. Delve into a curated list  of returned treasures, and navigate the legal and international  framework of artefact repatriation with our informative timeline.  Immerse yourself in the world of Indian art and iconography through our  carefully curated book collection. Begin your exploration now.</p>
                    </Col>
                </Row>

            </Container>

            <ArtExpHub />
        </>
    )
}

export default RetrievedArtefacts
