import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './FIMallinath.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FIMalliBan from '../image/FIMalliBan.png'

import FIMalliimg1 from '../image/mallimg1.png'
import FIMalliimg2 from '../image/mallimg2.png'
import SwrilDivider from './SwrilDivider';

function FIMallinath() {
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
    const fimallinathcultrad = () => {
        window.open('/fimallinathcultrad', '_parent');
      };
      
      const fimallinathmythleg = () => {
        window.open('/fimallinathmythleg', '_parent');
      };
    return (
        <>
            <div className='fimallinath-parent-container'>
                <img src={FIMalliBan} className='fimallinath-banner' alt='Free Banner' />
            </div>

            <div className="fimallinath-float-container">
                <a href="#" className="icon one"> Share</a>
                <a href="#" className="icon two">QR Code</a>

            </div>

            <Container className='fimallinath-header'>
                <Row >
                    <Col >
                        <h1>Mallinath Fair</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='fimallinath-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>The Mallinath Fair is renowned for the races conducted during the fair, showcasing superior breeds that compete for victory, in addition to devotees journeying from distant places on their steeds to pay homage to the saint. The triumphant animals, adorned with white badges, fetch premium prices. Witnessing the Mallinath races and enjoying the traditional folk songs performed during the festivities is truly a captivating experience.
                        </p>
                        <p>
                            The  Mallinath Fair is a vibrant annual celebration that takes place near  Tilwara village, situated in the Barmer district of Rajasthan, India.  This fair holds significant cultural and historical importance in the  region. It is renowned as one of the largest cattle fairs in the state  of Rajasthan, attracting numerous traders, farmers, and visitors from  far and wide. The fair spans a duration of approximately two weeks,  occurring from Chaitra Budi (new moon) to Chaitra Sudi (full moon),  which typically falls during the months of March and April according to  the Hindu calendar. During this period, the banks of the river Luni come  alive with a myriad of activities, colourful stalls, and bustling  crowds. At the heart of the Mallinath Fair is the 700-year-old shrine  dedicated to the revered saint, Rawal Mallinath. This shrine serves as  the focal point of the festivities, drawing devotees who come to pay  their respects and seek blessings.</p>
                        <p>The  fair holds particular importance for devotees of Rawal Mallinath, a  saint from the 14th century who once made the area his home and held a  special affection for horses. A tradition of exchange of prized cattle  breeds forstered and eventually evolved into the establishment of the  fair. Presently, a shrine stands in honour of this warrior-saint,  attracting thousands of pilgrims who fervently pray for their desires to  be granted.</p>
                        <p>The fair draws large crowds from Rajasthan, Gujarat, Mathura, and Agra in Uttar Pradesh, and from Madhya Pradesh. People offer batashas and laddoos at  the shrine, along with miniature horses made of wood, brass, or bronze.  The celebrations start with the hoisting of the flag of Rawal Mallinath  and songs eulogising his greatness are sung there. Some of the finest  breeds of cows, camels, sheep, goats, and horses are brought to the fair  for races and trading.
                        </p>
                    </Col>
                </Row>

            </Container>
            <Container className='fimallinath-header'>
                <Row >
                    <Col >
                        <h1>Discover Mallinath Fair Through</h1>
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
                        <div className="fimallinath-card-2"><img src={FIMalliimg1} className="img img-responsive" alt='rarebook' />
                            <div className="fimallinath-name" style={{ left: '80px', top: '215px' }}><p>culinary traditions</p></div>
                            <div className="fimallinath-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='fimallinath-icons' variant="outline-light" onClick={fimallinathcultrad}>Explore</Button>

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
                        <div className="fimallinath-card-2"><img src={FIMalliimg2} className="img img-responsive" alt='rarebook' />
                            <div className="fimallinath-name" style={{ left: '80px', top: '215px' }}><p>myths & legends</p></div>
                            <div className="fimallinath-username"></div>
                            <Button className='fimallinath-icons' variant="outline-light" onClick={fimallinathmythleg}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>
                </Slider1>
            </Container>
        </>
    )
}

export default FIMallinath
