import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Arcicon from '../image/mopa 1.png';
import FoodnCulturebanner from '../image/Damaru-Ladakh 1.png';
// import './MusicalResultpage.css';

function MusicalInstrument() {

    return (
        <>
            <div className='musical-result-parent-container'>
                <img src={FoodnCulturebanner} className='musical-result-banner' alt='Free Banner' />
                {/* <p className='foodnculban-text'>Indian Cuisine</p> */}
            </div>

            <div className="musical-result-float-container">
                <a href="#" className="icon one"> Share</a>
                <a href="#" className="icon two">QR Code</a>

            </div>

            <Container >

                    <Row style={{ marginTop: '20px' }}>
                        {/* <Col xs={1} className='arcicon'>
                        <img src={Arcicon} alt='Archive Icon' />

                    </Col> */}
                        <Col xs={0} className='musical-result-title' >
                            <img src={Arcicon} className='musical-result-icon' alt='Archive Icon' />
                            <div className='musical-result-vertical'></div>
                            DAMARU in Ladakh

                        </Col>
                       

                    </Row>
                </Container>

                <hr style={{ width: '100%', marginLeft: 'auto' }} />
                <Container className='musical-result-cover'>
                    <Row>

                        <Col>
                            <p >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </Col>

                    </Row>
                </Container>
        </>
    )
}

export default MusicalInstrument
