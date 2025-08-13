import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './JNKeyPersonalities.css'

import JNKeyBan from '../image/JNKeyBan.png';
import JNMonuImg1 from '../image/Ellipse 12.png';


function JNKeyPersonalities() {
    return (
        <>
            <div className='jnkey-parent-container'>
                <img src={JNKeyBan} className='jnkey-banner' alt='Free Banner' />
            </div>
            {/* left start */}
            <Container className="jnkey-header" fluid style={{ maxWidth: '1440px', margin: '0 auto' }}>
                <Row>
                    <Col>
                        <h1>Key Personalities</h1>
                    </Col>
                </Row>

                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={6} lg={4} className="d-flex justify-content-center mb-4 mb-lg-0">
                        <div className="jnkey-img">
                            <img
                                src={JNMonuImg1}
                                alt="Today in History"
                                className="img-fluid mx-auto" // Centers the image on smaller screens
                            />
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={8}>
                        <p>
                            The Salar Jungs were one of the highest ranked noble families under the Nizams of Hyderabad.</p>
                        <p>‘Salar’ means ‘Lead’ and ‘Jung’ translates to battle or war. Thus, Salar Jung implies the leader in battle. Five members of this family served as Diwan or Prime Ministers out of which the title was conferred on three most important members. They are:</p>
                       <p> Mir Turab Ali Khan, Mukhtar-ul-Mulk Salar Jung I</p>
                       <p>Mir Laiq Ali Khan Salar Jung II</p>
                       <p>Mir Yousuf Ali Khan Salar Jung III</p>
                        <p>The Hyderabad state was undergoing a financial crisis but the situation improved with the efforts of Mir Turab Ali Khan Salar Jung I.</p>
                        <p>During the First War of Independence in 1857, Salar Jung I convinced the Nizam Nasir-ud-Daula to side with the British. When the uprising collapsed, the British richly rewarded the Hyderabad state.</p>
                        <p>He also introduced postal services in the State and connected it with the Bombay-Madras railway line.</p>
                        <p>After him, his son, Mir Laiq Ali Khan Salar Jung II assumed the office of the Diwan.</p >
                        <p>The third Salar Jung, Mir Yousuf Ali Khan had a private art collection of immense value.</p >
                        <p>This collection was housed in the ancestral palace of Salar Jung which was later converted into a museum called the ‘Salar Jung Museum.’</p >
                        <p>The museum was inaugurated in 1951 by then Prime Minister Jawaharlal Nehru.
                    </p >
                </Col >
            </Row >
        </Container >
        </>
    )
}

export default JNKeyPersonalities
