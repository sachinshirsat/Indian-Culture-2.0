import {React } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HomeGallery.css';


import Homegallery from '../image/Rectangle 224.png';
import Homegallery1 from '../image/Rectangle 225.png';
import Homegallery2 from '../image/Rectangle 226.png';
import Homegallery3 from '../image/Rectangle 227.png';
// import SwrilDivider from './SwrilDivider';

import SwrilDivider from '../image/SwirlDivider 12.png';

// import { Container } from 'react-bootstrap';
/* 
import Homegallery4 from '../image/Rectangle 228.png';
import Homegallery5 from '../image/Rectangle 229.png'; */

function HomeGallery() {

  
    return (
        <>
        <div className='galle'>
            <Container fluid >
                <Container className='homegallery-header'>
                    <Row >
                        <Col >
                            <h1>Gallery</h1>
                            <img src={SwrilDivider} alt="" style={{ width: '90px', height: '15px', backgroundColor: 'transparent' }}/>

                            {/* <SwrilDivider /> */}
                        </Col>
                    </Row>
                </Container>
                {/* 2nd option*/}
                <div id='photos' class="image-collage " >
                    <img src={Homegallery} alt="1" />

                    <img src={Homegallery1} alt="2" />
                    <img src={Homegallery2} alt="3" className='gallery' />
                    <img src={Homegallery3} alt="4" />
                    <img src={Homegallery} alt="5" />


                    <img src={Homegallery2} alt="6" className='gallery' />
                    <img src={Homegallery3} alt="7" />
                    <img src={Homegallery} alt="8" />
                    <img src={Homegallery3} alt="9" />
                    <img src={Homegallery} alt="10" />
                </div>

            </Container>
            <Container className='storycenter'>
                <Row >
                    <Col>
                        {/* after clicking on 'View All' btn, user will redirect to Gallery List page  */}
                        <button className="homegallerybtn" ><span>View All </span></button>


                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}

export default HomeGallery
