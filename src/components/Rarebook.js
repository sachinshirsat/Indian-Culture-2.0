import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// external css
import './Rarebook.css';

import Rareimg1 from '../image/Rectangle 238.png'
import Rareimg2 from '../image/Rectangle 239.png'
import Rareimg3 from '../image/Rectangle 240.png'
// import Rareimg4 from '../image/Rare Book1.webp'

import NextButon from '../image/arrow-right 3.png';
import SwrilDivider from './SwrilDivider';

// import Rareimg4 from '../image/Rectangle 238.png'


function Rarebook() {
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
                <Row >
                    <Col>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="profile-card-2"><img src={Rareimg1} className="img img-responsive" alt='rarebook' />
                            <div className="profile-name" style={{ left: '50px', top: '215px' }}>A Comprehensive history</div>
                            <div className="profile-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='profile-icons' variant="outline-light">Explore</Button>

                        </div>
                    </Col>

                   {/*  <Col>
                        
                        <div class="profile-card-2"><img src={Rareimg4} class="img img-responsive" alt='rarebook' />
                            <div class="profile-name" style={{ left: '50px', top: '215px' }}>Sayajirao Gaekwad - III</div>
                            <div class="profile-username"></div>
                            <Button className='profile-icons' variant="outline-light">Explore</Button>

                        </div>
                    </Col> */}

                    <Col>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="profile-card-2"><img src={Rareimg2} className="img img-responsive" alt='rarebook' />
                            <div className="profile-name" style={{ left: '65px', top: '215px' }}>Abindranath Tagore</div>
                            <div className="profile-username"></div>
                            <Button className='profile-icons' variant="outline-light">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </Col>

                    <Col>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="profile-card-2"><img src={Rareimg3} className="img img-responsive" alt='rarebook' />
                            <div className="profile-name" style={{ left: '65px', top: '215px' }}>Travels of Fah-Hian</div>
                            <div className="profile-username" ></div>
                            <Button className='profile-icons' variant="outline-light">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </Col>

                    <Col>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="profile-card-2">
                            <div className="profile-name" style={{ left: '75px', top: '160px' }}>SEE ALL RAREBOOKS</div>
                            <div className="profile-username" style={{ left: '120px', top: '200px' }}>25,937 items</div>
                            <Button className='next-button' variant="outline-light"><img src={NextButon} alt='next btn'/></Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    )
}


export default Rarebook
