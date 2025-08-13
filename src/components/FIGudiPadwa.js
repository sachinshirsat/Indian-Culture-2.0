import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './FIGudiPadwa.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FIGudhiBan from '../image/FIGudhiBan.png'

import FIGudhiimg1 from '../image/gudhiimg1.png'
import FIGudhiimg2 from '../image/gudhiimg2.png'
import SwrilDivider from './SwrilDivider';

function FIGudiPadwa() {
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
    const fidiscovercultrad = () => {
        window.open('/fidiscovercultrad', '_parent');
      };
      const fidiscovermythleg = () => {
        window.open('/fidiscovermythleg', '_parent');
      };
    return (
        <>
            <div className='figudi-parent-container'>
                <img src={FIGudhiBan} className='figudi-banner' alt='Free Banner' />
            </div>

            <div className="figudi-float-container">
                <a href="#" className="icon one"> Share</a>
                <a href="#" className="icon two">QR Code</a>

            </div>


            <Container className='figudi-header'>
                <Row >
                    <Col >
                        <h1>Gudi Padwa</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='figudi-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p >The Gudi</p>
                        <p>The gudi, with its striking composition, stands as a testament to tradition and symbolism during Gudi Padwa. The gudi consists of a resplendent yellow or green scarf-like silk cloth intricately tied to a bamboo stick, and embellished with an assortment of gathya or gathi (a type of sugar candy strung together), flowers, mango, and neem leaves secured at its zenith. Atop the bamboo staff sits a kalash (pot), crafted from materials such as copper, bronze, or silver. This flag-like ensemble is ceremonially elevated from a terrace or window, strategically positioned to be visible from a distance. Symbolically, the gudi represents Brahma Dhwaj, serving as the divine flag of Lord Brahma.</p>

                        <p> The imagery encapsulated by the gudi extends beyond its religious symbolism, evoking the flags unfurled on the day of Lord Rama's coronation upon his return from Lanka. Some interpretations connect it to the victorious standard of King Shalivahan, raised in Paithan following his conquest over the Huns. For many Maharashtrians, it resonates as a symbol of valiant Maratha warriors returning triumphant from victorious military campaigns. Beyond its vibrant colours reminiscent of the spring bounty, the gudi is believed to usher good luck into homes and promote prosperity by safeguarding against malevolent influences.
                        </p>

                        <p>
                            Embracing New Beginnings with the Arrival of Spring</p>

                        <p>Gudi Padwa is a spring festival observed on the  initial day of the Chaitra month in the Hindu calendar. Predominantly  celebrated in Maharashtra and Goa, the festival signifies the  commencement of the Hindu New Year according to the lunisolar calendar.  The term "gudi" refers to a dhwaj (flag), and "padwa" is derived from "pratipada" or "prathama," signifying the first day of the bright phase of the moon.</p>

                        <p>The significance of Gudi Padwa is outlined in the  Brahma Purana, an ancient Indian text, which suggests that Lord Brahma  created the universe on this auspicious day. It is considered propitious  for initiating new ventures, as anything commenced on Gudi Padwa is  believed to prosper. Traditionally, celebrations begin with the  consumption of bitter neem tree leaves, as it is believed that starting  the new year with a bitter taste ensures success and happiness in the  upcoming year.</p>

                        <p>As part of customary practices, homes are  thoroughly cleaned, vibrant rangoli floor decorations are made, and  special flags, known as "gudi" or "gudhi," are hoisted  during the festivities. In rural areas, fresh cow dung is used to  plaster houses. The celebration includes lively shobha yatras,  or street processions, conducted with enthusiasm. The colourful  exuberance of the festivities mirrors the joy and happiness of spring.  The onset of the new year instils zeal and enthusiasm, prompting people  to cast aside past sorrows and embrace the promise of hope in the  approaching year.</p>

                        <p> With the echoes of joyous shobha yatras lingering in the air and the symbolic gudis  standing tall, Gudi Padwa heralds the arrival of spring and the Hindu  New Year. This day holds cultural importance in various other states as  well. In Karnataka, it is celebrated as Ugadi, while Kashmiri Pandits  observe it as Navreh, Sindhis as Cheti Chand, and in Konkan, it is known  as Sanvsar Padvo, among other names.
                        </p>
                    </Col>
                </Row>

            </Container>


            <Container className='figudi-header'>
                <Row >
                    <Col >
                        <h1>Discover Gudi Padwa Through</h1>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                <Slider1 {...settings1}>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="figudi-card-2"><img src={FIGudhiimg1} className="img img-responsive" alt='rarebook' />
                            <div className="figudi-name" style={{ left: '80px', top: '215px' }}><p>culinary traditions</p></div>
                            <div className="figudi-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='figudi-icons' variant="outline-light" onClick={fidiscovercultrad}>Explore</Button>

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
                        <div className="figudi-card-2"><img src={FIGudhiimg2} className="img img-responsive" alt='rarebook' />
                            <div className="figudi-name" style={{ left: '80px', top: '215px' }}><p>myths & legends</p></div>
                            <div className="figudi-username"></div>
                            <Button className='figudi-icons' variant="outline-light" onClick={fidiscovermythleg}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>
                </Slider1>
            </Container>
        </>
    )
}

export default FIGudiPadwa
