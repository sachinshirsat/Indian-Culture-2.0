import React from 'react';
import HistoricState from '../image/hcstatebanner 1.png';
// import './HistoricStates.css';

import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StateMap from './StateMap';
import HisStateTimeline from './HisStateTimeline';

import LucknowIllusImg1 from '../image/hsiilu1.png';
import LucknowIllusImg2 from '../image/hsiilu2.png';
import LucknowIllusImg3 from '../image/hsiilu3.png';
import LucknowIllusImg4 from '../image/hsiilu4.png';

import Glimpimg1 from '../image/hsiilu5.png';
import Glimpimg2 from '../image/hsiilu6.png';

import CitiTalesimg1 from '../image/hscitytale1.png';
import CitiTalesimg2 from '../image/hscitytale2.png';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from 'swiper/react';

// install swiper.js npm i swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper';

/* import slide_image_1 from '../image/fig2.webp';
import slide_image_2 from '../image/fig3.webp'; */

import slide_image_1 from '../image/hscapsule1.png';
import slide_image_2 from '../image/hscapsule2.png';
import slide_image_3 from '../image/hscapsule3.png';

import Homegallery from '../image/Rectangle 224.webp';
import Homegallery1 from '../image/Rectangle 225.webp';
import Homegallery2 from '../image/Rectangle 226.webp';
import Homegallery3 from '../image/Rectangle 227.webp';
import Homegallery4 from '../image/Rectangle 228.webp';
import SwrilDivider from './SwrilDivider';

function HistoricStates() {
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
    //slider end here 
    const mangoesoflucknow = () => {
        window.open('/mangoesoflucknow', '_parent');
    };

    const readlucknow = () => {
        window.open('/readlucknow', '_parent');
    };

    const underconstructor = () => {
        window.open('/underconstructor', '_parent');
    };
    return (
        <>
            {/* <div className='parent-container'>
                <img src={HistoricState} className='hsbanner' alt='Free Banner' />
            </div> */}
            <Container fluid className='hs-parent-container'>
                <StateMap />
            </Container>
            <Container className='hs-header'>
                <Row >
                    <Col >
                        <h1>Lucknow</h1>
                        <SwrilDivider />
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container className='hs-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>Situated along the River Gomti, Lucknow is the state capital of Uttar Pradesh. The city is dotted with magnificent structures. All of them have been witness to centuries of prosperity and events that have shaped Indian history.
                            The Nawabs left such an indelible mark on Lucknow that their lifestyle, cuisine, art and craft traditions continue to be the essence of the city. Every community that settled in this region melded into its culture, and made Lucknow the home of what is popularly known as the Ganga Jamuni tehzeeb.</p>
                    </Col>
                </Row>


            </Container>
            {/*  <Container>
                <StateMap />
            </Container> */}



            <div className="hs-section " id="section-2" >
                <Container className='hs-header'>
                    <Row >
                        <Col >
                            <h1>History</h1>
                            <SwrilDivider />
                        </Col>
                    </Row>
                </Container>
                <Container className='hs-coverr'>
                    <Row className="justify-content-md-center">

                        <Col >
                            <p>Lucknow‘s history begins from the time of the epics. In the middle ages, it came under the rule of the Delhi Sultanate and was under the control of the Sheikhzadas. From the Sheikhzadas, the region was taken over by the Nawabs. Under Nawab Asaf-ud-Daula, Lucknow became the capital of the Awadh province of the Mughal Empire. In 1856 Awadh was annexed by the British and was known as the United Provinces of Agra and Oudh.
                                Click below to read more on the long history of this city.</p>
                        </Col>
                    </Row>


                </Container>
                <Container >
                    <HisStateTimeline />
                </Container>

            </div>

            {/*  */}

            <Container class="hs-citithumbnail-bg">
                <Container className='hs-header'>
                    <Row >
                        <Col >
                            <h1>City tales</h1>
                            <SwrilDivider />
                        </Col>
                    </Row>
                </Container>
                <Container className='hs-coverrr'>
                    <Row className="justify-content-md-center">

                        <Col >
                            <p>The story of the city of Lucknow begins at the Macchi Bhawan, once situated on the mound called the Lakshman Tila. Many believe that the top of the mound had an opening that led to Sheshnag - the King of all Nagas. The mound itself was named after Lord Rama’s brother, Lakshman, who is believed to be an avatar of Sheshnag. Interestingly, Lakshman is also considered to be the founder of the city of Lucknow. Click below to learn more about the city of Lucknow.</p>
                        </Col>
                    </Row>


                </Container>
                <div class="hs-citithumbnail-container">
                    <figure class="hs-citithumbnail">
                        <img src={CitiTalesimg1} alt="Image 1" />
                        <figcaption>Lucknow</figcaption>
                    </figure>

                    <figure class="hs-citithumbnail">
                        <img src={CitiTalesimg2} alt="Image 2" />
                        <figcaption>Behind the Name</figcaption>
                    </figure>
                </div>
            </Container>

            {/*  */}
            {/*  */}

            <Container className='hs-header'>
                <Row >
                    <Col >
                        <h1>Lucknow illustrated</h1>
                        {/*   <img src={SwrilDivider} style={{ width: '90px', height: '20px' }} alt='divider' /> */}
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>


            <Container fluid style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                <Slider1 {...settings1}>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="hs-card-2"><img src={LucknowIllusImg1} className="img img-responsive" alt='rarebook' />
                            <div className="hs-name" style={{ left: '120px', top: '215px' }}><p>Title</p></div>
                            <div className="hs-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='hs-icons' variant="outline-light" onClick="">Explore</Button>

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
                        <div className="hs-card-2"><img src={LucknowIllusImg2} className="img img-responsive" alt='rarebook' />
                            <div className="hs-name" style={{ left: '130px', top: '215px' }}><p>Title</p></div>
                            <div className="hs-username"></div>
                            <Button className='hs-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="hs-card-2"><img src={LucknowIllusImg3} className="img img-responsive" alt='rarebook' />
                            <div className="hs-name" style={{ left: '120px', top: '215px' }}><p>Title</p></div>
                            <div className="hs-username" ></div>
                            <Button className='hs-icons' variant="outline-light" onClick={mangoesoflucknow}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="hs-card-2"><img src={LucknowIllusImg4} className="img img-responsive" alt='rarebook' />
                            <div className="hs-name" style={{ left: '120px', top: '215px' }}><p>Title</p></div>
                            <div className="hs-username"></div>
                            <Button className='hs-icons' variant="outline-light" onClick="">Explore</Button>

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
                        <div className="hs-card-2"><img src={LucknowIllusImg1} className="img img-responsive" alt='rarebook' />
                            <div className="hs-name" style={{ left: '100px', top: '215px' }}><p>Title</p></div>
                            <div className="hs-username"></div>
                            <Button className='hs-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="hs-card-2"><img src={LucknowIllusImg2} className="img img-responsive" alt='rarebook' />
                            <div className="hs-name" style={{ left: '100px', top: '215px' }}><p>Title</p></div>
                            <div className="hs-username"></div>
                            <Button className='hs-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>

                    </div>
                </Slider1>
            </Container>

            <div class="hs-thumbnail-container">

                <figure class="hs-thumbnail" onClick={underconstructor}>
                    <img src={Glimpimg1} alt="Image 1" />
                    <figcaption>Lucknow & Freedom Struggle</figcaption>
                </figure>

                <figure class="hs-thumbnail">
                    <img src={Glimpimg2} alt="Image 2" />
                    <figcaption>Glimpses of Lucknow</figcaption>
                </figure>
            </div>

            {/*  */}
            <Container className='hs-header'>
                <Row >
                    <Col >
                        <h1>City capsule</h1>
                        {/*   <img src={SwrilDivider} style={{ width: '90px', height: '20px' }} alt='divider' /> */}
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>
            {/* swiper 3d slider start here */}
            <Container>
                {/* New slider */}
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    initialSlide={1}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 3,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide onClick={readlucknow}>
                        <img src={slide_image_1} alt="Image 1" />
                        {/* <div className='swipetext' style={{ left: '220px', top: '450px' }}><p>Forts</p></div> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_2} alt="Image 2" />
                        {/* <div className='swipetext' style={{ left: '200px', top: '450px' }}><p>Textiles</p></div> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_3} alt="Image 3" />
                        {/* <div className='swipetext' style={{ left: '120px', top: '450px' }}><p>Historic Cities</p></div> */}
                    </SwiperSlide>
                </Swiper>
            </Container>

            {/* swiper 3d slider end here */}

            {/*  */}

            <div className='hs-galle'>
                {/* <Container  > */}
                <Container className='hs-gallery-header'>
                    <Row >
                        <Col >
                            <h1>Gallery</h1>
                            {/* <img src={SwrilDivider} alt="" style={{ width: '90px', height: '15px', backgroundColor: 'transparent' }} /> */}

                            <SwrilDivider />
                        </Col>
                    </Row>
                </Container>
                {/* Gallery thumbnails*/}
                {/* <div className="gallery-container galryfit" style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}> */}

                <div className="hs-gallery-container " >

                    <div className="hs-gallery">

                        <div className="hs-gallery-item hs-gallitem1">
                            <img className="hs-gallery-image" src={Homegallery4} alt="" />
                        </div>

                        <div className="hs-gallery-item hs-gallitem2">
                            <img className="hs-gallery-image" src={Homegallery} alt="" />
                        </div>
                        <div className="hs-gallery-item hs-gallitem3">
                            <img className="hs-gallery-image" src={Homegallery1} alt="" />
                        </div>

                        <div className="hs-gallery-item hs-gallitem4">
                            <img className="hs-gallery-image" src={Homegallery2} alt="" />
                        </div>

                        <div className="hs-gallery-item hs-gallitem5">
                            <img className="hs-gallery-image" src={Homegallery4} alt="" />
                        </div>

                        <div className="hs-gallery-item hs-gallitem6">
                            <img className="hs-gallery-image" src={Homegallery3} alt="" />
                        </div>
                        {/*  */}
                        <div className="hs-gallery-item hs-gallitem7">
                            <img className="hs-gallery-image" src={Homegallery} alt="" />
                        </div>

                        <div className="hs-gallery-item hs-gallitem8">
                            <img className="hs-gallery-image" src={Homegallery4} alt="" />
                        </div>
                        <div className="hs-gallery-item hs-gallitem9">
                            <img className="hs-gallery-image" src={Homegallery} alt="" />
                        </div>

                        <div className="hs-gallery-item hs-gallitem10">
                            <img className="hs-gallery-image" src={Homegallery2} alt="" />
                        </div>
                        <div className="hs-gallery-item hs-gallitem11">
                            <img className="hs-gallery-image" src={Homegallery3} alt="" />
                        </div>

                        <div className="hs-gallery-item hs-gallitem12">
                            <img className="hs-gallery-image" src={Homegallery1} alt="" />
                        </div>
                        {/* <div class="gallery-item gallitem2">
                                <img class="gallery-image" src={Homegallery} alt="" />
                            </div>
                            <div class="gallery-item gallitem3">
                                <img class="gallery-image" src={Homegallery1} alt="" />
                            </div>
                            <div class="gallery-item gallitem2">
                                <img class="gallery-image" src={Homegallery} alt="" />
                            </div> */}


                    </div>

                </div>


            </div>
        </>
    )
}

export default HistoricStates
