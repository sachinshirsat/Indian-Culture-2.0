import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// slider start here
import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
// slider end here
import Rareimg1 from '../image/Rectangle 238.webp'
import Rareimg2 from '../image/Rectangle 239.webp'
import Rareimg3 from '../image/Rectangle 240.webp'
// import Rareimg4 from '../image/Rare Book1.webp'

// import NextButon from '../image/arrow-right 3.png';
import { ArrowRight } from 'react-feather';

import SwrilDivider from './SwrilDivider';

// import Rareimg4 from '../image/Rectangle 238.png'


function Rarebook() {
  // slider start here
var settings1 = {
  dots: false,
  infinite: false,
  // speed: 500,
  slidesToShow: 4,
  slidesToScroll: 0,
  arrow:false,

  responsive: [

      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 3.02,
              slidesToScroll: 1,
             
              arrows: false,
              draggable: true,

          }
      },
      
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 2.04,
              slidesToScroll: 2,
             
              arrows: false,
              draggable: true,
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 2.04,
              slidesToScroll: 1,
              // initialSlide: 1,
    
              arrows: false,
              draggable: true,

          }
      },
      {
        breakpoint: 600,
        settings: {
            slidesToShow: 1.04,
            slidesToScroll: 1,
            // initialSlide: 1,
  
            arrows: false,
            draggable: true,

        }
    },



  ]
}; 
//slider end here 

const rarebooksec = () => {
    window.open('/underconstructor', '_parent');
  };  
    return (
        <>
            <Container className='rarebook-header'>
                <Row >
                    <Col >
                        <h1>Rarebook Collections</h1>
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{width:'100%', maxWidth: '1440px', margin:'0 auto'}}>
            <Slider1 {...settings1}>
               <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="profile-card-2"><img src={Rareimg1} className="img img-responsive" alt='rarebook' />
                            <div className="profile-name " style={{ left: '50px', top: '215px' }}><p>A Comprehensive history</p></div>
                            <div className="profile-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='profile-icons' variant="outline-light" onClick={rarebooksec}>Explore</Button>

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
                        <div className="profile-card-2"><img src={Rareimg2} className="img img-responsive" alt='rarebook' />
                            <div className="profile-name" style={{ left: '65px', top: '215px' }}><p>Abindranath Tagore</p></div>
                            <div className="profile-username"></div>
                            <Button className='profile-icons' variant="outline-light" onClick={rarebooksec}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                        </div>

                        <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="profile-card-2"><img src={Rareimg3} className="img img-responsive" alt='rarebook' />
                            <div className="profile-name" style={{ left: '65px', top: '215px' }}><p>Travels of Fah-Hian</p></div>
                            <div className="profile-username" ></div>
                            <Button className='profile-icons' variant="outline-light" onClick={rarebooksec}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                        </div>

                        <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="profile-card-2">
                            <div className="profile-name" style={{ left: '75px', top: '160px' }}><p>SEE ALL RAREBOOKS</p></div>
                            <div className="profile-username" style={{ left: '120px', top: '200px' }}><p>25,937 items</p></div>
                            <Button className='next-button' variant="outline-light" onClick={rarebooksec}>
                                {/* <img src={NextButon} alt='next btn'/> */}
                                <ArrowRight size={50} color="Black" />
                                </Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                        </div>
                </Slider1>
            </Container>
        </>
    )
}


export default Rarebook
