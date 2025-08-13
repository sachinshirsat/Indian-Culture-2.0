import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './JNOrigin.css'

import JNOriginBan from '../image/JNOriginBan.png';
import JNMonuImg1 from '../image/Ellipse 12.png';


function JNOrigin() {
    return (
        <>
            <div className='jnorigin-parent-container'>
                <img src={JNOriginBan} className='jnorigin-banner' alt='Free Banner' />
            </div>
            {/* left start */}
            <Container className="jnorigin-header" fluid style={{ maxWidth: '1440px', margin: '0 auto' }}>
                <Row>
                    <Col>
                        <h1>Origins</h1>
                    </Col>
                </Row>

                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={6} lg={4} className="d-flex justify-content-center mb-4 mb-lg-0">
                        <div className="jnorigin-img">
                            <img
                                src={JNMonuImg1}
                                alt="Today in History"
                                className="img-fluid mx-auto" // Centers the image on smaller screens
                            />
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={8}>
                        <p>The Nizams of Hyderabad belonged to the Asaf Jahi dynasty established by Mir Qamaruddin Khan in the 1720s.
                            This dynasty traces its origins to the Mughal Empire.</p>
                        <p>  During the reign of the Mughal Emperor, Muhammad Shah, he was given  the governorship of Deccan in 1721 along with the title of “Asaf Jah”.</p>
                        <p> After just one year, Mir Qamaruddin came back to the north to  become the Wazir. However, owing to a rebellion in the Deccan he  returned there in 1724.</p>
                        <p> In doing so, he transitioned from a loyal Mughal noble to a semi-independent ruler.</p>
                        <p> Even though detached from the imperial centre, he still recognized  the over-lordship of the Mughal Emperor and never declared complete  independence.</p>
                        <p>In this way, the Asaf Jahi dynasty was established in 1724.</p>
                        <p>However, it was only after defeating the Marathas in 1742 that the Nizam’s rule was properly established in the region.</p>
                        <p>His territory encompassed the entire plateau south of the Tapti  river except for a narrow strip of land along the west coast ruled by  the Marathas.</p>
                        <p>The Asaf Jahi empire also extended down till Trichinopoly (present  day Tiruchirappalli) and Madurai and included the Golconda mines.  </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default JNOrigin
