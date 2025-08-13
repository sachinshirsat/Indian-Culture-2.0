import React, { useEffect } from 'react';
// import './FIPerformativeTraditions.css';
import FIPerforImg from '../image/perfomimg1.png';
import { Container, Row, Col } from 'react-bootstrap';
import FIPerforBan from '../image/perfomimg1.png';

import 'bootstrap/dist/css/bootstrap.min.css';

function FIPerformativeTraditions() {
    
    return (
        <>
            <div className='fipertrad-parent-container'>
                <img src={FIPerforBan} className='fipertrad-banner' alt='Free Banner' />
            </div>
            <Container className='fipertrad-header'>
                <Row >
                    <Col >
                        <h1>performative tradition</h1>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='fipertrad-wrapper'>
                <div className="fipertrad-text">
                    <h2>lighting of lamps</h2>
                    <p>Lamps are a common feature in many Buddhist monasteries of India. They  are lit on several important occasions and throughout the sacred month  of Saga Dawa which marks the birth, enlightenment and death of the  Buddha. In certain places like Ladakh, the festive occasion is  traditionally celebrated by lighting butter lamps which are made using  yak butter, though oil or ghee is more commonly used at present. The  lighting of lamps symbolises the end of darkness and ignorance.  According to Buddhist teachings, ignorance is one of the main sources of  suffering in the world. Devotees who supply oil for lamps to monks are  also believed to earn merit for their generosity.</p>
                </div>

                <div className="fipertrad-slider">
                    <div className="fipertrad-slider-wrapper" id="slider-wrapper">
                        <img src={FIPerforImg} alt="Kheer 1" />
                        <img src={FIPerforImg} alt="Kheer 2" />
                        <img src={FIPerforImg} alt="Kheer 3" />
                    </div>
                </div>
            </Container>
        </>
    );
}

export default FIPerformativeTraditions;
