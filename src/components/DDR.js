import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import FortHistoryBanner from '../image/ddr.png';
/* import DDR1 from '../image/maincourse 1.png';
import DDR2 from '../image/Component 34.png';
import DDR3 from '../image/Default.png';
import DDR4 from '../image/Default1.png'; */
// import IndianMap from '/l_Map_Transparent.png'
import { ArrowLeft } from 'react-feather';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import IndiaMap from './IndiaMap';
import SwrilDivider from './SwrilDivider';

// import './DDR.css';
function DDR() {
    const ddrlistingpage = () => {
        window.open('/ddrlistingpage', '_parent');
    };

    // back to previous btn page
    const backtopre = () => {
        window.open('/allcategories', '_parent');
    };
    const redirecthomepage = () => {
        window.open('/', '_parent');
    };


    return (
        <>
            <div className='parent-container'>
                <img src={FortHistoryBanner} className='ddrbanner' alt='Free Banner' />
            </div>
            {/* <Container fluid style={{marginTop:'10px'}}>
                <Row>
                    <Col sm={1}>
                        <ArrowLeft className='backtoprevious' onClick={backtopre} size={35} />
                    </Col>
                    <Col>
                        <Breadcrumb className="d-flex justify-content-left">
                            <Breadcrumb.Item href="#"  onClick={redirecthomepage}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={backtopre}>
                                Categories
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active className='dead'>Archives</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container> */}

            <Container fluid className="skip">
                <Row>
                    {/* <Col xs={2} sm={1}>
                        <ArrowLeft className='backtoprevious' onClick={backtopre} size={35} />
                    </Col> */}
                    {/* <Col xs={10} sm={11}> */}
                    <Col >
                        <Breadcrumb className="d-flex justify-content-left">
                            <Breadcrumb.Item href="#" onClick={redirecthomepage}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={backtopre}>
                                Categories
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active className='dead'>DDR</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>

            <Container className='ddr-header'>
                <Row >
                    <Col >
                        <h1>Digital District Repository</h1>
                        <SwrilDivider />
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container className='ddrcover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>The history of the freedom movement in India comprises a multitude of revolutionary events that helped achieve independence. While a few momentous upheavals and personalities stand out in this historical narrative, the independence of India is also attributed to a series of valuable yet lesser-known incidents that took place in different districts across the country. The Digital District Repository is an attempt to discover and document the memory of these countless stories, events, sites and individuals.</p>
                    </Col>
                </Row>
                <Row>
                    <div className='ddrcenter'>
                        <button className="ddrbtn " onClick={ddrlistingpage} ><span>View Repository</span></button>
                    </div>
                </Row>

            </Container>
            <IndiaMap />




        </>
    )
}

export default DDR
