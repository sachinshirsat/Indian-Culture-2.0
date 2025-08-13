import React from 'react';
// import './HistoryAncient.css';
import HisTxtBanner from '../image/HABanner.png';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TxtileHistoryAncientTimeline from './TxtileHistoryAncientTimeline';
import SwrilDivider from './SwrilDivider';
/* import Imag2 from '../images/Rectangle 14.png';
import Imag3 from '../images/Rectangle 14.png';
import Imag4 from '../images/Rectangle 14.png';
import Imag5 from '../images/Rectangle 14.png';
import Imag1 from '../images/Rectangle 14.png'; */

function TxtileHistoryAncient() {

    const txtilehistoryancientresult = () => {
        window.open('/txtilehistoryancientresult', '_parent');
      };

    return (
        <>
            <div className='txtile-hisanc-parent-container'>
                <img src={HisTxtBanner} className='txtile-hisanc-banner' alt='Free Banner' />
            </div>

            <Container className='txtile-hisanc-children-header'>
                <Row >
                    <Col >
                        <h1>Ancient period</h1>
                        <SwrilDivider/>
                    </Col>
                </Row>
            </Container>

            <Container className='txtile-hisanc-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>The story of textiles in India is one of the oldest in the world and goes back to prehistoric times. Examples have been found depicting waist garments in the cave paintings of the Mesolithic era but concrete evidence of textile production and use starts appearing from the proto-historic times i.e. 3rd Millennium BCE. The evidence of wild indigenous silk moth species from Harappa and Chanhudaro suggests the use of silk in the mid 3rd millennium BCE</p>
                    </Col>
                </Row>

            </Container>
            <Container className='txtile-hisanc-center'>
                <Row >
                    <Col >
                        <button className="txtile-hisanc-btn" onClick={txtilehistoryancientresult}><span>Read full essay here</span></button>
                    </Col>
                </Row>
            </Container>

            <Container>
                {/* <TxtileHistoryAncientTimeline /> */}
            </Container>

        </>
    )
}

export default TxtileHistoryAncient
