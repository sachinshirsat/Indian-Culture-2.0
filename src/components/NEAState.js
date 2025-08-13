import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './NEAState.css';

import NEAStateBanner from '../image/2opp.webp'

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NEAStateImg1 from '../image/neastateimg1.png';
import NEAStateImg2 from '../image/neastateimg2.png';
import NEAStateImg3 from '../image/neastateimg3.png';

// import NEAStateImg from '../image/kushal-medhi-hWd_bsBQx9w-unsplash.jpg';


// import './NEAState.css';
// import './VertiAccor.css';
import $ from "jquery";
import SwrilDivider from './SwrilDivider';

function NEAState() {
    $(document).ready(function () {

        $('.offerItemTitle').click(function () {

            $(this).parents('.offerslide').children('.offerItem').removeClass('active');
            $(this).parents('.offerslide').children('.offerItem').children('.offerItemTitle').removeClass('hide');
            $(this).parent('.offerItem').addClass('active');
            $(this).addClass('hide');

        });



    });


    // 
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

    // 
    const neabuildheritage = () => {
        window.open('/neabuildheritage', '_parent');
    };

    const neasnapshots = () => {
        window.open('/neasnapshots', '_parent');
    };
    return (
        <>
            <div className='neastate-parent-container'>
                <img src={NEAStateBanner} className='neastate-banner' alt='Free Banner' />
            </div>

            <Container className='neastate-header'>
                <Row >
                    <Col >
                        <h1>Assam</h1>
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>
            <Container className='neastate-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>Known for its beautiful lush tea gardens and the mighty Brahmaputra, Assam lies in the south of the eastern Himalayas and shares international boundaries with Bhutan and Bangladesh. It is believed that one of its first mentions was in the epics of Mahabharata and Ramayana, as the legendary kingdom of Pragjyotisha. Today the state covers an area of 78,438 Sq.Km. with a breath-taking landscape. Dispur is the state capital.
                        </p>
                        <p>Assam is acknowledged for its world-class tea, oil and petroleum resources, elegant Muga Silk, delicious Pithas, the magical land of Jatinga and much more. Blessed with rich biodiversity, historic structures and unique tribal traditions and festivals, Assam is a land of natural beauty and deep cultural history.</p>
                    </Col>
                </Row>

            </Container>

            <Container >
                <section className="offer-area section">
                    <div className="offer-tabs tab-content">
                        <div className="offerslide tab-pane fade active show" id="SOLUTIONS">

                            <div className="offerItem active">
                                <h4 className="offerItemTitle hide">Built Heritage</h4>
                                <div className="offer-detail">
                                    <div className="row">
                                        <div className="col">
                                            <div className="offer-img">
                                                <img src="https://srmahour.github.io/accordian/images/e-commerces_retail_b2b.jpg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="offer-content">
                                                <h2>Built Heritage</h2>
                                                <p>Lorem Ipsum has been
                                                    the industry's standard dummy text ever since the
                                                    1500s, when an unknown printer took a galley of
                                                    type and scrambled it to make a type specimen
                                                    book. It has survived not only five centuries, but
                                                    also the leap into electronic typesetting.</p>
                                                <Button onClick={neabuildheritage}>Read More  </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="offerItem">
                                <h4 className="offerItemTitle">Natural Heritage</h4>
                                <div className="offer-detail">
                                    <div className="row">
                                        <div className="col">
                                            <div className="offer-img">
                                                <img src="https://srmahour.github.io/accordian/images/healthcare_itness.jpg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="offer-content">
                                                <h2>Natural Heritage</h2>
                                                <p>Lorem Ipsum has been
                                                    the industry's standard dummy text ever since the
                                                    1500s, when an unknown printer took a galley of
                                                    type and scrambled it to make a type specimen
                                                    book. It has survived not only five centuries, but
                                                    also the leap into electronic typesetting.</p>
                                                <Button >Read More  </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="offerItem">
                                <h4 className="offerItemTitle"> Traditions & Expressions</h4>
                                <div className="offer-detail">
                                    <div className="row">
                                        <div className="col">
                                            <div className="offer-img">
                                                <img src="https://srmahour.github.io/accordian/images/real_estate_property.jpg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="offer-content">
                                                <h2>Traditions & Expressions</h2>
                                                <p>Lorem Ipsum has been
                                                    the industry's standard dummy text ever since the
                                                    1500s, when an unknown printer took a galley of
                                                    type and scrambled it to make a type specimen
                                                    book. It has survived not only five centuries, but
                                                    also the leap into electronic typesetting.</p>
                                                <Button >Read More  </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="offerItem">
                                <h4 className="offerItemTitle">Food & Culture</h4>
                                <div className="offer-detail">
                                    <div className="row">
                                        <div className="col">
                                            <div className="offer-img">
                                                <img src="https://srmahour.github.io/accordian/images/banking_finance_insurance.jpg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="offer-content">
                                                <h2>Food & Culture</h2>
                                                <p>Lorem Ipsum has been
                                                    the industry's standard dummy text ever since the
                                                    1500s, when an unknown printer took a galley of
                                                    type and scrambled it to make a type specimen
                                                    book. It has survived not only five centuries, but
                                                    also the leap into electronic typesetting.</p>
                                                <Button >Read More  </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="offerItem">
                                <h4 className="offerItemTitle">Performing Arts</h4>
                                <div className="offer-detail">
                                    <div className="row">
                                        <div className="col">
                                            <div className="offer-img">
                                                <img src="https://srmahour.github.io/accordian/images/construction.jpg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="offer-content">
                                                <h2>Performing Arts</h2>
                                                <p>Lorem Ipsum has been
                                                    the industry's standard dummy text ever since the
                                                    1500s, when an unknown printer took a galley of
                                                    type and scrambled it to make a type specimen
                                                    book. It has survived not only five centuries, but
                                                    also the leap into electronic typesetting.</p>
                                                <Button >Read More  </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="offerItem">
                                <h4 className="offerItemTitle">Textiles & Fabrics</h4>
                                <div className="offer-detail">
                                    <div className="row">
                                        <div className="col">
                                            <div className="offer-img">
                                                <img src="https://srmahour.github.io/accordian/images/travel_hospitality.jpg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="offer-content">
                                                <h2>Textiles & Fabrics</h2>
                                                <p>Lorem Ipsum has been
                                                    the industry's standard dummy text ever since the
                                                    1500s, when an unknown printer took a galley of
                                                    type and scrambled it to make a type specimen
                                                    book. It has survived not only five centuries, but
                                                    also the leap into electronic typesetting.</p>
                                                <Button >Read More  </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </Container >

            <Container className='neastate-header'>
                <Row >
                    <Col >
                        <h1>From the archives</h1>
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                <Slider1 {...settings1}>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="neastate-card-2"><img src={NEAStateImg1} className="img img-responsive" alt='rarebook' />
                            <div className="neastate-name" style={{ left: '120px', top: '215px' }}><p>Snapshots</p></div>
                            <div className="neastate-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='neastate-icons' variant="outline-light" onClick={neasnapshots}>Explore</Button>

                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="neastate-card-2"><img src={NEAStateImg2} className="img img-responsive" alt='rarebook' />
                            <div className="neastate-name" style={{ left: '130px', top: '215px' }}><p>Archives</p></div>
                            <div className="neastate-username"></div>
                            <Button className='neastate-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="neastate-card-2"><img src={NEAStateImg3} className="img img-responsive" alt='rarebook' />
                            <div className="neastate-name" style={{ left: '120px', top: '215px' }}><p>Reels</p></div>
                            <div className="neastate-username" ></div>
                            <Button className='neastate-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>


                </Slider1>
            </Container>

        </>
    )
}

export default NEAState
