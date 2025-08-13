import React, { useEffect } from 'react';
// import './FIMythsLegendsss.css';
import { Container, Row, Col } from 'react-bootstrap';

import FIMytBan from '../image/myimg1.png';
import FIMytimg1 from '../image/myimg1.png';


import 'bootstrap/dist/css/bootstrap.min.css';
import SwrilDivider from './SwrilDivider';

function FIMallinathMythLeg() {

    return (
        <>
            <div className='fimallinath-mythleg-parent-container'>
                <img src={FIMytBan} className='fimallinath-mythleg-banner' alt='Free Banner' />
            </div>
            <Container className='fimallinath-mythleg-header'>
                <Row >
                    <Col >
                        <h1>myths & legends</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='fimallinath-mythleg-wrapper'>
                <div className="fimallinath-mythleg-text">
                    <h2>Tale of origin</h2>
                    <p>It is believed that Rawal Malli Nath possessed supernatural abilities, drawing admirers from distant places to Tilwara to witness his presence. These visitors arrived on various animals or mounts, attracting the interest of potential buyers and initiating small-scale transactions. Legend has it that the first organised fair occurred under the auspices of Mota Raja Udai Singh in Samvat 1656 (1599 A.D.). In bygone eras, the Rawal of Jasol, the local landholder, oversaw the fair's organisation and levied a nominal fee from participants.</p>
                </div>

                <div className="fimallinath-mythleg-slider">
                    <div className="fimallinath-mythleg-slider-wrapper" id="slider-wrapper">
                        <img src={FIMytimg1} alt="Kheer 1" />

                    </div>
                </div>
            </Container>
            {/*  */}
            


        </>
    );
}

export default FIMallinathMythLeg;
