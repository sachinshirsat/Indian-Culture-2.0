import React, { useEffect } from 'react';
// import './FICulinaryTraditionsss.css';
import { Container, Row, Col } from 'react-bootstrap';

import FICulinaryBan from '../image/culinaryimg1.png';
import FICulinaryimg1 from '../image/culinaryimg1.png';
import FICulinaryimg2 from '../image/culinaryimg2.png';


import 'bootstrap/dist/css/bootstrap.min.css';
import SwrilDivider from './SwrilDivider';

function FIMallinathCulTrad() {

    return (
        <>
            <div className='fimallinath-cultrad-parent-container'>
                <img src={FICulinaryBan} className='fimallinath-cultrad-banner' alt='Free Banner' />
            </div>
            <Container className='fimallinath-cultrad-header'>
                <Row >
                    <Col >
                        <h1>Culinary traditions</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='fimallinath-cultrad-wrapper'>
                <div className="fimallinath-cultrad-text">
                    <h2>Batasha</h2>
                    <p>Visitors to the temple of Rawal Malli Nathji commonly present offerings of batashas. Upon offering, a portion of these batashas is retained by the priest, while the remainder is returned to devotees, who often choose to share them with onlookers as prasad (food or sweets that have been offered to a deity and distributed to devotees as a form of divine blessing). Batasha is a sweet confection shaped like a coat button and known for its long shelf life. It is made from sugar or jaggery, which is melted and brought to a boiling point. The resulting mixture is then carefully dripped onto a specialised cooling mat made of green cane, locally known as sitalpati. </p>
                </div>

                <div className="fimallinath-cultrad-slider">
                    <div className="fimallinath-cultrad-slider-wrapper" id="slider-wrapper">
                        <img src={FICulinaryimg1} alt="Kheer 1" />

                    </div>
                </div>
            </Container>
            {/*  */}
            <Container className='fimallinath-cultrad-wrapper'>
                <div className="fimallinath-cultrad-slider">
                    <div className="fimallinath-cultrad-slider-wrapper" id="slider-wrapper">
                        <img src={FICulinaryimg2} alt="Kheer 1" />

                    </div>
                </div>

                <div className="fimallinath-cultrad-text">
                    <h2>Laddoo</h2>
                    <p>At the temple of Rawal Malli Nathji, another customary offering is laddoo (round-shaped sweets). A renowned sweet, found across many regions of India, laddoos are also distributed as prasad to the devotees.  </p>
                </div>


            </Container>
            {/*  */}



        </>
    );
}

export default FIMallinathCulTrad;
