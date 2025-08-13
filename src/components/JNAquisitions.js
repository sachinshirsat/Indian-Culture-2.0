import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './JNAquisitions.css'

import JNTypeBan from '../image/JNGemBan.png';
import JNMonuImg1 from '../image/Ellipse 12.png';
import JNFamousGems from './JNFamousGems';


function JNAquisitions() {
    return (
        <>
            <div className='jnaqua-parent-container'>
                <img src={JNTypeBan} className='jnaqua-banner' alt='Free Banner' />
            </div>
            {/* left start */}
            <Container className="jnaqua-header" fluid style={{ maxWidth: '1440px', margin: '0 auto' }}>
                <Row>
                    <Col>
                        <h1>Aquisition</h1>
                    </Col>
                </Row>

                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={6} lg={4} className="d-flex justify-content-center mb-4 mb-lg-0">
                        <div className="jnaqua-img">
                            <img
                                src={JNMonuImg1}
                                alt="Today in History"
                                className="img-fluid mx-auto" // Centers the image on smaller screens
                            />
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={8}>
                        <p>
                            The Asaf Jah were not always among the wealthiest  royal families in India. Geographical advantages such as the fertility  of the Deccan and access to maritime trade did not suffice in periods of  political or financial ebbs and flows.</p>
                        <p>The reign of the 6th and 7th Nizams brought  cultural and economic growth for Hyderabad State. One example of the  wealth of the Nizams are the Jewels of the Nizams, which were an  international tourist attraction when they were displayed in the Salar  Jung Museum.They are now secured in an RBI vault.</p>
                        <p>In 1948, the Hyderabad state had an estimated population of 17  million, and it generated an estimated annual revenue of £90,029,000.</p>
                        <p>The state had its own currency known as the Hyderabadi rupee/Hali and the Osmania sicca until 1951. By 1954, only Indian currency became the legal tender in the state of Hyderabad.</p>
                        <p> The last Nizam Mir Osman Ali Khan was estimated to be worth ₹6,660  million back in 1937. According to the Forbes All-Time Wealthiest List  of 2008, he was the fifth richest man in recorded history.
                        </p >
                    </Col >
                </Row >
            </Container >
        </>
    )
}

export default JNAquisitions
