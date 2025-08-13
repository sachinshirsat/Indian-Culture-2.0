import React, { useEffect } from 'react';
// import './FIMythsLegendss.css';
import { Container, Row, Col } from 'react-bootstrap';

import FIMythLegBan from '../image/mythlegimg1.png';
import FIMythLegimg1 from '../image/mythlegimg1.png';
import FIMythLegimg2 from '../image/mythlegimg2.png';


import 'bootstrap/dist/css/bootstrap.min.css';
import SwrilDivider from './SwrilDivider';

function FIDiscoverMythLeg() {

    return (
        <>
            <div className='fimyleg-parent-container'>
                <img src={FIMythLegBan} className='fimyleg-banner' alt='Free Banner' />
            </div>

            <div className="fimyleg-float-container">
                <a href="#" className="icon one"> Share</a>
                <a href="#" className="icon two">QR Code</a>

            </div>

            <Container className='fimyleg-header'>
                <Row >
                    <Col >
                        <h1>myths & legends</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='fimyleg-wrapper'>
                <div className="fimyleg-text">
                    <h2>The legend of shalivahana</h2>
                    <p>Another legend associated with Gudi Padwa revolves  around the ancient Hindu emperor Shalivahan, the ruler of present-day  Paithan in Maharashtra. Some medieval texts link King Shalivahan to the  Saka era which commenced in 78 CE.
                        According to the legend, the Huns posed a  significant threat to King Shalivahan's empire, endangering the safety  and well-being of his subjects. Faced with this challenge, the king made  the decision to confront the Huns, mobilising his army for battle. In a  decisive conflict, King Shalivahan emerged triumphant, and the victory  was celebrated with grandeur. To this day, the people of Maharashtra  commemorate his victory with enthusiasm, raising the gudi flag in honour of the monarch who liberated them from the invading Huns.</p>
                </div>

                <div className="fimyleg-slider">
                    <div className="fimyleg-slider-wrapper" id="slider-wrapper">
                        <img src={FIMythLegimg1} alt="Kheer 1" />

                    </div>
                </div>
            </Container>
            {/*  */}
            <Container className='fimyleg-wrapper'>
                <div className="fimyleg-slider">
                    <div className="fimyleg-slider-wrapper" id="slider-wrapper">
                        <img src={FIMythLegimg2} alt="Kheer 1" />

                    </div>
                </div>

                <div className="fimyleg-text">
                    <h2>The legend of rama</h2>
                    <p>In addition to the origin detailed in the Brahma Purana, Gudi Padwa is entwined with the legendary tale of Lord Rama. This narrative revolves around Lord Rama's triumphant return to Ayodhya after vanquishing the formidable Ravan of Lanka, warmly welcomed by the citizens of Ayodhya with exuberance.</p>

                    <p>In this tale, the citizens expressed their deep admiration for Lord Rama by ardently desiring his rightful coronation as the king. The day of his coronation synchronised with the Hindu New Year, becoming a joyous occasion marked by festivities. Gudi Padwa, therefore, serves as the day dedicated to commemorating Lord Rama's coronation in Ayodhya, a tale that adds to the cultural richness and significance of this festive celebration.</p>
                </div>


            </Container>
            {/*  */}



        </>
    );
}

export default FIDiscoverMythLeg;
