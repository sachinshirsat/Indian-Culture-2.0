import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './NEAShillong.css';

import NEAStateBanner from '../image/NEAShillBan.png'

import NEAShiImg1 from '../image/neashiimg1.png';
import NEAShiImg2 from '../image/neashiimg2.png';
import NEAShiImg3 from '../image/neashiimg3.png';
import NEAShiImg4 from '../image/neashiimg4.png';
import SwrilDivider from './SwrilDivider';

function NEAShillong() {
    const neashillongresultpage = () => {
        window.open('/neashillongresultpage', '_parent');
    };
    return (
        <>
            <div className='neastate-parent-container'>
                <img src={NEAStateBanner} className='neastate-banner' alt='Free Banner' />
            </div>

            <Container className='neastate-header'>
                <Row >
                    <Col >
                        <h1>Shillong</h1>
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>

            <Container className='neastate-container'>
                <div class="neastate-image-box" onClick={neashillongresultpage}>
                    <img src={NEAShiImg1} alt="History & Evolution" />
                    <div class="neastate-overlay">History & Evolution</div>
                </div>
                <div class="neastate-image-box">
                    <img src={NEAShiImg2} alt="Natural & Built Heritage" />
                    <div class="neastate-overlay">Natural & Built Heritage</div>
                </div>
                <div class="neastate-image-box">
                    <img src={NEAShiImg3} alt="Street & Localities" />
                    <div class="neastate-overlay">Street & Localities</div>
                </div>
                <div class="neastate-image-box">
                    <img src={NEAShiImg4} alt="Life in the City" />
                    <div class="neastate-overlay">Life in the City</div>
                </div>
            </Container>
        </>
    )
}

export default NEAShillong
