import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './JNDurrushehvar.css'

import JNDurrBan from '../image/JNDurrBan.png';
import JNMonuImg1 from '../image/Ellipse 12.png';


function JNDurrushehvar() {
    return (
        <>
            <div className='jndurru-parent-container'>
                <img src={JNDurrBan} className='jndurru-banner' alt='Free Banner' />
            </div>
            {/* left start */}
            <Container className="jndurru-header" fluid style={{ maxWidth: '1440px', margin: '0 auto' }}>
                <Row>
                    <Col>
                        <h1>Princess DurruShehvar</h1>
                    </Col>
                </Row>

                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={6} lg={4} className="d-flex justify-content-center mb-4 mb-lg-0">
                        <div className="jndurru-img">
                            <img
                                src={JNMonuImg1}
                                alt="Today in History"
                                className="img-fluid mx-auto" // Centers the image on smaller screens
                            />
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={8}>
                        <p>

                            The state of Hyderabad was a part of the Mughal subah (province) of Deccan. It included Aurangabad, Bidar, Khandesh, Berar and Hyderabad.</p>
                            <p> Mir Qamaruddin, the Mughal governor of Deccan established his own dynasty there called the Asaf Jahi dynasty in 1724.</p>
                            <p> Mir Qamaruddin never declared complete independence from the Mughals.</p>
                            <p>By 1742, the Hyderabad State extended southwards till Trichinopoly (present day Tiruchirappalli) and Madurai including the Golconda mines.</p>
                            <p> By 1795, the Hyderabad state lost almost half of its area due to political rivalry with the Marathas, French and British. It lost major areas like Daulatabad, Sholapur and Ahmednagar.</p>
                            <p>The Nizams regained their lost territories gradually. They allied with the British to defeat Tipu Sultan and also supported them during the First War of Independence in 1857. In return, the British rewarded them with the territories of Cudappah, Khammam, Naldurg and Raichur Doab.</p>
                            <p> In 1948, the Hyderabad State was incorporated into the Indian Union after an action launched by the Indian Government.</p>
                            <p> In 1956, the Indian States were reorganized along linguistic lines. The erstwhile Hyderabad state was divided into three parts viz. Andhra Pradesh, Karnataka and Bombay state (later divided into the states of Maharashtra and Gujarat in 1960).
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default JNDurrushehvar
