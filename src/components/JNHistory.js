import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './JNHistory.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JNHisBan from '../image/JNBanner.png'

import JNHisImg1 from '../image/jnhis1.png';
import JNHisImg2 from '../image/jnhis2.png';
import JNHisImg3 from '../image/jnhis3.png';
import JNHisImg4 from '../image/jnhis4.png'


function JNHistory() {
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

  const jnmonuments = () => {
    window.open('/jnmonuments', '_parent');
  };

  const jnterritories = () => {
    window.open('/jnterritories', '_parent');
  };
  
  const jnorigin = () => {
    window.open('/jnorigin', '_parent');
};

const jnsalarjungs = () => {
  window.open('/jnsalarjungs', '_parent');
};

const jnkeypersonalities = () => {
  window.open('/jnkeypersonalities', '_parent');
};
  return (
    <>
      <div className='jnhitory-parent-container'>
        <img src={JNHisBan} className='jnhitory-banner' alt='Free Banner' />
      </div>

      <Container className='jnhitory-header'>
        <Row >
          <Col >
            <h1>History</h1>
            {/* <img src={SwrilDivider} style={{ width: '90px', height: '20px' }} alt='divider' /> */}
            {/* <SwrilDivider /> */}
          </Col>
        </Row>
      </Container>

      <Container fluid style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
        <Slider1 {...settings1}>
          <div>
            {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
            <div className="jnhitory-card-2"><img src={JNHisImg1} className="img img-responsive" alt='rarebook' />
              <div className="jnhitory-name" style={{ left: '100px', top: '215px' }}><p>Monuments</p></div>
              <div className="jnhitory-username"></div>
              {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
              <Button className='jnhitory-icons' variant="outline-light" onClick={jnmonuments}>Explore</Button>

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
            <div className="jnhitory-card-2"><img src={JNHisImg2} className="img img-responsive" alt='rarebook' />
              <div className="jnhitory-name" style={{ left: '80px', top: '215px' }}><p>Nizam Territories</p></div>
              <div className="jnhitory-username"></div>
              <Button className='jnhitory-icons' variant="outline-light" onClick={jnterritories}>Explore</Button>

              {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
            </div>
          </div>

          <div>
            {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
            <div className="jnhitory-card-2"><img src={JNHisImg3} className="img img-responsive" alt='rarebook' />
              <div className="jnhitory-name" style={{ left: '120px', top: '215px' }}><p>Origins</p></div>
              <div className="jnhitory-username" ></div>
              <Button className='jnhitory-icons' variant="outline-light" onClick={jnorigin}>Explore</Button>

              {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
            </div>
          </div>

          <div>
            {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
            <div className="jnhitory-card-2"><img src={JNHisImg4} className="img img-responsive" alt='rarebook' />
              <div className="jnhitory-name" style={{ left: '110px', top: '215px' }}><p>Salar Jungs</p></div>
              <div className="jnhitory-username"></div>
              <Button className='jnhitory-icons' variant="outline-light" onClick={jnsalarjungs}>Explore</Button>

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
            <div className="jnhitory-card-2"><img src={JNHisImg3} className="img img-responsive" alt='rarebook' />
              <div className="jnhitory-name" style={{ left: '100px', top: '215px' }}><p>Key Personalities</p></div>
              <div className="jnhitory-username"></div>
              <Button className='jnhitory-icons' variant="outline-light" onClick={jnkeypersonalities}>Explore</Button>

              {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
            </div>
          </div>


        </Slider1>
      </Container>
    </>
  )
}

export default JNHistory
