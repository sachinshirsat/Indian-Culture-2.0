import React from "react";
// import "./FoodnCulture.css";
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FCBanner from "../image/FCbanner.png";
import FCimag1 from '../image/fcimg1.png';
import FCimag2 from '../image/fcimg2.png';
import FCimag3 from '../image/fcimg3.png';
import FCimag4 from '../image/fcimg4.png';
import SwrilDivider from "./SwrilDivider";

function FoodnCulture() {
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
    const foodncultureresultpage = () => {
        window.open('/foodncultureresultpage', '_parent');
      };

      const cuisinesofindia = () => {
        window.open('/cuisinesofindia', '_parent');
      };

      const timelessrecipes = () => {
        window.open('/timelessrecipes', '_parent');
      };
      
      
      const herbsnspicelsitpage = () => {
        window.open('/herbsnspicelsitpage', '_parent');
      };
      
      const foodlistpage = () => {
        window.open('/foodlistpage', '_parent');
      };
      
      const foodnfestivals = () => {
        window.open('/foodnfestivals', '_parent');
      };

  return (
    <>
      <div className="fnc-parent-container">
        <img src={FCBanner} className="fnc-banner" alt="Free Banner" />
      </div>

      <Container className="fnc-header">
        <Row>
          <Col>
            <h1>Journey to India’s Independence</h1>
            <SwrilDivider/>
          </Col>
        </Row>
      </Container>
      <Container className="fnc-cover">
        <Row className="justify-content-md-center">
          <Col>
            <p>
              This section contains a collection of rare archival material such
              as books, photographs, gazetteers, letters, newspaper clippings
              and much more on the freedom struggle of India. The freedom
              movement engulfed the entire country and people from all walks of
              life joined hands to drive the foreign oppressors out of this
              land. Even after more than 7 decades of freedom, these stories of
              courage, selflessness and determination continue to inspire and
              instill pride in us. The present section aims to preserve and
              bring to light rare glimpses of the fight for freedom in the form
              of digital records.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                <Slider1 {...settings1}>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="fnc-card-2"><img src={FCimag1} className="img img-responsive" alt='rarebook' />
                            <div className="fnc-name" style={{ left: '10px', top: '215px' }}><p>Evolution of Indian Gastronomy</p></div>
                            <div className="fnc-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='fnc-icons' variant="outline-light" onClick={foodncultureresultpage}>Explore</Button>

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
                        <div className="fnc-card-2"><img src={FCimag2} className="img img-responsive" alt='rarebook' />
                            <div className="fnc-name" style={{ left: '80px', top: '215px' }}><p>Cuisines of India</p></div>
                            <div className="fnc-username"></div>
                            <Button className='fnc-icons' variant="outline-light" onClick={cuisinesofindia}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="fnc-card-2"><img src={FCimag3} className="img img-responsive" alt='rarebook' />
                            <div className="fnc-name" style={{ left: '80px', top: '215px' }}><p>Timeless Recipes</p></div>
                            <div className="fnc-username" ></div>
                            <Button className='fnc-icons' variant="outline-light" onClick={timelessrecipes}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="fnc-card-2"><img src={FCimag4} className="img img-responsive" alt='rarebook' />
                            <div className="fnc-name" style={{ left: '90px', top: '215px' }}><p>Herbs & Spices</p></div>
                            <div className="fnc-username"></div>
                            <Button className='fnc-icons' variant="outline-light" onClick={herbsnspicelsitpage}>Explore</Button>

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
                        <div className="fnc-card-2"><img src={FCimag1} className="img img-responsive" alt='rarebook' />
                            <div className="fnc-name" style={{ left: '60px', top: '215px' }}><p>Rare Texts on Cuisine</p></div>
                            <div className="fnc-username"></div>
                            <Button className='fnc-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="fnc-card-2"><img src={FCimag2} className="img img-responsive" alt='rarebook' />
                            <div className="fnc-name" style={{ left: '80px', top: '215px' }}><p>Food & Festivals</p></div>
                            <div className="fnc-username"></div>
                            <Button className='fnc-icons' variant="outline-light" onClick={foodnfestivals}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>

                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="fnc-card-2"><img src={FCimag3} className="img img-responsive" alt='rarebook' />
                            <div className="fnc-name" style={{ left: '50px', top: '215px' }}><p>Food: Images of Diversity</p></div>
                            <div className="fnc-username"></div>
                            <Button className='fnc-icons' variant="outline-light" onClick={foodlistpage}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>

                    </div>
                </Slider1>
            </Container>
    </>
  );
}

export default FoodnCulture;
