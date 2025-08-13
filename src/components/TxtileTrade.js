import React from 'react';
// import './TxtileTrade.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// install react-slick npm i react-slick
// install slick-carousle npm install slick-carousel
import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TradeBanner from '../image/Trade.png';
import Tradeimg1 from '../image/tnfimg21.png';
import Tradeimg2 from '../image/tnfimg22.png';
import Tradeimg3 from '../image/tnfimg23.png';
import Tradeimg4 from '../image/tnfimg24.png';
import SwrilDivider from './SwrilDivider';

function TxtileTrade() {
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

  const txtilecolonialperiod = () => {
    window.open('/txtilecolonialperiod', '_parent');
  };
  return (
    <>
      <div className='txtile-trade-parent-container'>
        <img src={TradeBanner} className='txtile-trade-banner' alt='Free Banner' />
      </div>
      <Container className='txtile-trade-header'>
        <Row >
          <Col >
            <h1>Trade</h1>
            <SwrilDivider />
          </Col>
        </Row>
      </Container>

      <Container >
        <Slider1 {...settings1}>
          <div>
            {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
            <div className="txtile-trade-card-2"><img src={Tradeimg1} className="img img-responsive" alt='rarebook' />
              <div className="txtile-trade-name" style={{ left: '100px', top: '215px' }}><p>Ancient Period</p></div>
              <div className="txtile-trade-username"></div>
              {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
              <Button className='txtile-trade-icons' variant="outline-light" >Explore</Button>

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
            <div className="txtile-trade-card-2"><img src={Tradeimg2} className="img img-responsive" alt='rarebook' />
              <div className="txtile-trade-name" style={{ left: '100px', top: '215px' }}><p>Medieval Period</p></div>
              <div className="txtile-trade-username"></div>
              <Button className='txtile-trade-icons' variant="outline-light" >Explore</Button>

              {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
            </div>
          </div>

          <div>
            {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
            <div className="txtile-trade-card-2"><img src={Tradeimg3} className="img img-responsive" alt='rarebook' />
              <div className="txtile-trade-name" style={{ left: '90px', top: '215px' }}><p>Colonial Period</p></div>
              <div className="txtile-trade-username" ></div>
              <Button className='txtile-trade-icons' variant="outline-light" onClick={txtilecolonialperiod}>Explore</Button>

              {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
            </div>
          </div>

          <div>
            {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
            <div className="txtile-trade-card-2"><img src={Tradeimg4} className="img img-responsive" alt='rarebook' />
              <div className="txtile-trade-name" style={{ left: '60px', top: '215px' }}><p>Contemporary Period</p></div>
              <div className="txtile-trade-username"></div>
              <Button className='txtile-trade-icons' variant="outline-light" >Explore</Button>

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

export default TxtileTrade
