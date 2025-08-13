import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FoodnCulThumbnails from '../image/Rectangle 196.png';
import FoodnCulThumbnails2 from '../image/Rectangle 197.png';
import FoodnCulThumbnails3 from '../image/Rectangle 198.png';
import FoodnCulThumbnails4 from '../image/Rectangle 199.png';

import FoodnCulturebanner from '../image/musicalinstrubanner.png';
import SwrilDivider from './SwrilDivider';
// import './MusicalInstrument.css';

function MusicalInstrument() {
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

  const musicallistingpage = () => {
    window.open('/musicallistingpage', '_parent');
  };

  return (
    <>
      <div className='music-parent-container'>
        <img src={FoodnCulturebanner} className='music-banner' alt='Free Banner' />
        {/* <p className='foodnculban-text'>Indian Cuisine</p> */}
      </div>

      <Container className='music-header'>
        <Row >
          <Col >
            <h1>Musical Instruments</h1>
            {/* <img src={SwrilDivider} style={{ width: '90px', height: '20px' }} alt='divider' /> */}
          <SwrilDivider/>
          </Col>
        </Row>
      </Container>
      <Container className='music-cover'>
        <Row className="justify-content-md-center">

          <Col >
            <p>The Musical Instruments section of the Indian Culture portal contains information about a range of instruments from across India. The Indian Culture portal has researched and is happy to present information about the countless exquisite musical instruments of our country. The extent and diversity of such instruments is vast and we will keep on adding to this section.</p>
          </Col>
        </Row>
      {/*   <Row>
          <div className='music-center'>
            <button className="music-btn" ><span>Read More</span></button>
          </div>

        </Row> */}

      </Container>

      <Container fluid style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
        <Slider1 {...settings1}>
          <div>
            {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
            <div className="music-card-2"><img src={FoodnCulThumbnails} className="img img-responsive" alt='rarebook' />
              <div className="music-name" style={{ left: '120px', top: '215px' }}><p>Avanaddha Vadya</p></div>
              <div className="music-username"></div>
              {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
              <Button className='music-icons' onClick={musicallistingpage} variant="outline-light">Explore</Button>

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
            <div className="music-card-2"><img src={FoodnCulThumbnails2} className="img img-responsive" alt='rarebook' />
              <div className="music-name" style={{ left: '130px', top: '215px' }}><p>Tat Vadya</p></div>
              <div className="music-username"></div>
              <Button className='music-icons' variant="outline-light" onClick="">Explore</Button>

              {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
            </div>
          </div>

          <div>
            {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
            <div className="music-card-2"><img src={FoodnCulThumbnails3} className="img img-responsive" alt='rarebook' />
              <div className="music-name" style={{ left: '120px', top: '215px' }}><p>Ghan Vadya</p></div>
              <div className="music-username" ></div>
              <Button className='music-icons' variant="outline-light" onClick="">Explore</Button>

              {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
            </div>
          </div>

          <div>
            {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
            <div className="music-card-2"><img src={FoodnCulThumbnails4} className="img img-responsive" alt='rarebook' />
              <div className="music-name" style={{ left: '120px', top: '215px' }}><p>Sushir Vadya</p></div>
              <div className="music-username"></div>
              <Button className='music-icons' variant="outline-light" onClick="">Explore</Button>

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
            <div className="music-card-2"><img src={FoodnCulThumbnails2} className="img img-responsive" alt='rarebook' />
              <div className="music-name" style={{ left: '100px', top: '215px' }}><p>Incredible Texts</p></div>
              <div className="music-username"></div>
              <Button className='music-icons' variant="outline-light" onClick="">Explore</Button>

              {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
            </div>
          </div>

          <div>
            {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
            <div className="music-card-2"><img src={FoodnCulThumbnails4} className="img img-responsive" alt='rarebook' />
              <div className="music-name" style={{ left: '100px', top: '215px' }}><p>Title</p></div>
              <div className="music-username"></div>
              <Button className='music-icons' variant="outline-light" onClick="">Explore</Button>

              {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
            </div>

          </div>
        </Slider1>
      </Container>
    </>
  )
}

export default MusicalInstrument
