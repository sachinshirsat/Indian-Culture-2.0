import React, { useEffect } from 'react';
// import './FICulinaryTraditions.css';
import FICulTraimg from '../image/cultraimg1.png';
import { Container, Row, Col } from 'react-bootstrap';
import FICulTraBan from '../image/cultraimg1.png';

import 'bootstrap/dist/css/bootstrap.min.css';

function FICulinaryTraditions() {
   
    return (
        <>
            <div className='ficultra-parent-container'>
                <img src={FICulTraBan} className='ficultra-banner' alt='Free Banner' />
            </div>
            <Container className='ficultra-header'>
                <Row >
                    <Col >
                        <h1>pan india festivals</h1>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='ficultra-wrapper'>
                <div className="ficultra-text">
                    <h2>Kheer</h2>
                    <p>The most popular prasada or religious offering prepared for Buddha Purnima is kheer. A type of sweet porridge or pudding, kheer is made by boiling milk, rice and sugar. Dry fruits and spices like cardamom and saffron are sometimes added to enhance the flavour of the dish.</p>
                    <p>There is an interesting Buddhist legend that explains the connection between kheer and Buddha Purnima. It states that a woman named Sujata once met Gautama Buddha when he was living as an ascetic. Looking at his emaciated body, she mistook him for a tree-spirit that had granted her wish. As a result, she offers Gautama a bowl of kheer. Having realised that moderation and not extreme practices are required for enlightenment, Gautama accepts the food. His six years of ascetic life thus come to an end.</p>
                    <p>The kheer prepared on Buddha Purnima is first symbolically offered to the Buddha and then consumed. It is also offered to monks and distributed among the needy.</p>
                </div>

                <div className="ficultra-slider">
                    {/* <button className="arrow arrow-left" id="left-arrow">&#10094;</button> */}
                    <div className="ficultra-slider-wrapper" id="slider-wrapper">
                        <img src={FICulTraimg} alt="Kheer 1" />
                        <img src={FICulTraimg} alt="Kheer 2" />
                        <img src={FICulTraimg} alt="Kheer 3" />
                    </div>
                    {/* <button className="arrow arrow-right" id="right-arrow">&#10095;</button> */}
                </div>
            </Container>
        </>
    );
}

export default FICulinaryTraditions;
