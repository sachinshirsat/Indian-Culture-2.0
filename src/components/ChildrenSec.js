import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// external css
import './ChildrenSec.css';

import Childimg1 from '../image/Rectangle 235.png'
import Childimg2 from '../image/Rectangle 236.png'
import Childimg3 from '../image/Rectangle 237.png'

// import NextButon from '../image/arrow-right 3.png';
import SwrilDivider from './SwrilDivider';




function ChildrenSec() {

 
    
  return (
    <>
            <Container className='children-header'>
                <Row >
                    <Col >
                        <h1>Children's Section</h1>
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>
            <Container style={{width:'100%', maxWidth: '1440px', margin:'0 auto'}}>
                <Row >
                    

                    <Col>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="children-card-2"><img src={Childimg1} className="img img-responsive" alt='rarebook' />
                            <div className="children-name" style={{ left: '75px', top: '150px' }}>Activities</div>
                            <div className="children-username"></div>
                            {/* <div className="profile-icons"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div> */}
                            <Button className='children-icons' variant="outline-light">Explore</Button>

                        </div>
                    </Col>

                    <Col>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="children-card-2"><img src={Childimg2} className="img img-responsive" alt='rarebook' />
                            <div className="children-name" style={{ left: '95px', top: '150px' }}>Games</div>
                            <div className="children-username"></div>
                            <Button className='children-icons' variant="outline-light">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </Col>

                    <Col>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="children-card-2"><img src={Childimg3} className="img img-responsive" alt='rarebook' />
                            <div className="children-name" style={{ left: '75px', top: '150px' }}>Interesting Stories</div>
                            <div className="children-username" ></div>
                            <Button className='children-icons' variant="outline-light">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </Col>

                    

                </Row>
            </Container>
        </>
  )
}

export default ChildrenSec
