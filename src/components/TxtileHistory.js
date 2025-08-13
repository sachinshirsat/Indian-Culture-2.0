import React from 'react';
// import './HistoryTxt.css';
import HisTxtBanner from '../image/HistoryTxt.png';
import { Container, Row, Col, Button } from 'react-bootstrap';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'; 
// slider start here
import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
// slider end here

import HTimg1 from '../image/HTimg1.png';
import HTimg2 from '../image/HTimg2.png';
import HTimg3 from '../image/HTimg3.png';
import SwrilDivider from './SwrilDivider';

function TxtileHistory() {
    // slider start here
var settings1 = {
    dots: false,
    infinite: false,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 0,
    arrow:false,

    responsive: [

        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2.25,
                slidesToScroll: 1,
               
                arrows: false,
                draggable: true,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
               
                arrows: false,
                draggable: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1,
                // initialSlide: 1,
      
                arrows: false,
                draggable: true,

            }
        },



    ]
}; 

const txtilehistoryancient = () => {
    window.open('/txtilehistoryancient', '_parent');
  };  
//slider end here 
    return (
        <>
            <div className='txtile-history-parent-container'>
                <img src={HisTxtBanner} className='txtile-history-banner' alt='Free Banner' />
            </div>

            <Container className='txtile-history-children-header'>
                <Row >
                    <Col >
                        <h1>Children's Section</h1>
                        <SwrilDivider/>
                    </Col>
                </Row>
            </Container>

            <Container >
            <Slider1 {...settings1}>
                <div >
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="txtile-history-children-card-2"><img src={HTimg1} className="img img-responsive" alt='rarebook' />
                            <div className="txtile-history-children-name" style={{ left: '65px', top: '150px' }}><p>Ancient Period</p></div>
                            <div className="txtile-history-children-username"></div>
                            {/* <div className="profile-icons"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div> */}
                            <Button className='txtile-history-children-icons' variant="outline-light" onClick={txtilehistoryancient}>Explore</Button>

                        </div>
                        </div>
                        <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="txtile-history-children-card-2"><img src={HTimg2} className="img img-responsive" alt='rarebook' />
                            <div className="txtile-history-children-name" style={{ left: '55px', top: '150px' }}><p>Medieval Period</p></div>
                            <div className="txtile-history-children-username"></div>
                            <Button className='txtile-history-children-icons' variant="outline-light" >Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="txtile-history-children-card-2"><img src={HTimg3} className="img img-responsive" alt='rarebook' />
                            <div className="txtile-history-children-name" style={{ left: '55px', top: '150px' }}><p>Colonial Period</p></div>
                            <div className="txtile-history-children-username" ></div>
                            <Button className='txtile-history-children-icons' variant="outline-light" >Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                        </div>
                </Slider1>

            </Container>
        </>
    )
}

export default TxtileHistory
