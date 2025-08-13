import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './JNFamousGems.css'

import JNFamousBAn from '../image/JNFamousBAn.png';
import JNMonuImg1 from '../image/Ellipse 12.png';

function JNFamousGems() {
    return (
        <>
            <div className='jnfamgem-parent-container'>
                <img src={JNFamousBAn} className='jnfamgem-banner' alt='Free Banner' />
            </div>
            {/* left start */}
            <Container className="jnfamgem-header" fluid style={{ maxWidth: '1440px', margin: '0 auto' }}>
                <Row>
                    <Col>
                        <h1>The jacob diamond</h1>
                    </Col>
                </Row>

                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={6} lg={4} className="d-flex justify-content-center mb-4 mb-lg-0">
                        <div className="jnfamgem-img">
                            <img
                                src={JNMonuImg1}
                                alt="Today in History"
                                className="img-fluid mx-auto" // Centers the image on smaller screens
                            />
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={8}>
                        <p>
                            Built in 1591, Charminar is a monument and mosque in Hyderabad. The monument was originally
                            constructed by the fifth ruler of the Qutb Shahi Dynasty, Muhammad Quli Qutb Shah, after he shifted his
                            capital from Golconda to the newly formed city of Hyderabad.
                        </p>
                        <p>
                            With its unparalleled architectural brilliance, the Charminar is a UNESCO heritage site that has grand, ornate
                            towers attached and supported by four grand arches. Situated very strategically on the east bank of the Musi
                            river, the Charminar has the Laad Bazaar and the intricately built Makkah Masjid to its west.
                        </p>
                        <p>
                            It was constructed at the intersection of the historically significant trade route that connects the markets of
                            Hyderabad with the port city of Machilipatnam. The old city of Hyderabad was designed keeping in mind the
                            Charminar as its centerpiece and was thus spread around it in the form of four quadrants.
                        </p>
                        <p>
                            The monument is a representation of very distinct Indo-Islamic architecture, also highlighting certain Persian
                            architectural elements.
                        </p>
                    </Col>
                </Row>
            </Container>
            {/* left end */}

            <Container fluid style={{ marginTop: '60px' }}>
                <hr />
            </Container>
            {/* right start */}
            <Container className="jnfamgem-header" fluid style={{ maxWidth: '1440px', margin: '0 auto' }}>
                <Row>
                    <Col>
                        <h1>princie diamond</h1>
                    </Col>
                </Row>

                <Row className="justify-content-center align-items-center">
                    {/* Text Column: Order 2 on large screens, Order 1 on smaller screens */}
                    <Col xs={12} md={12} lg={8} className="order-lg-1">
                        <p>
                            The Falaknuma Palace, the ‘Mirror of the Sky,’ was built a few miles from the British Residency, on a higher elevation.
                            Both buildings were inspired by Grecian architecture. The palace covered 32 acres of land (220 rooms, 22 halls, a 101
                            seat dining room and its own petrol pumps) and was owned by Sir Nawab Viqar Ul Umra, the then Prime Minister of the state.
                            The construction took 9 years.
                        </p>
                        <p>
                            The Italian architect William Ward Marret designed the Palace in the shape of a scorpion using 32 types of Italian marble
                            as an ode to the Nizam’s zodiac sign, a framework also understood as the Kedleston plan of block and arms. This architectural
                            framework was common to all British residency buildings as well.
                        </p>
                        <p>
                            It is only in 1897, 5 years after its completion, that the sixth Nizam, Mir Mahboob Ali Khan purchased it to fulfill the
                            purposes of a Royal Guest house. The palace had once hosted the English and Russian monarchy as well as the Governor-General
                            of India. It is a luxury hotel today.
                        </p>
                    </Col>

                    {/* Image Column: Order 1 on large screens, Order 2 on smaller screens */}
                    <Col xs={12} md={6} lg={4} className="d-flex justify-content-center mb-4 mb-lg-1 order-lg-2">
                        <div className="jnfamgem-img">
                            <img
                                src={JNMonuImg1}
                                alt="Did you know"
                                className="img-fluid mx-auto" // Ensures the image scales well and is centered on all screens
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* right end */}
            <Container fluid style={{ marginTop: '60px' }}>
                <hr />
            </Container>
            {/* left */}
            <Container className="jnfamgem-header" fluid style={{ maxWidth: '1440px', margin: '0 auto' }}>
                <Row>
                    <Col>
                        <h1>Nageena - i- Zamarrud Kanval Wa Khurd</h1>
                    </Col>
                </Row>

                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={6} lg={4} className="d-flex justify-content-center mb-4 mb-lg-0">
                        <div className="jnfamgem-img">
                            <img
                                src={JNMonuImg1}
                                alt="Today in History"
                                className="img-fluid mx-auto" // Centers the image on smaller screens
                            />
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={8}>
                        <p>
                            Chowmahalla Palace was the residence of the  Nizams. It was from here that the Asaf Jahi ruled their state. Built by  Nizam Salabat Jung in the 1750s, it is currently owned by Mukarram Jah,  the grandson of Mir Osman Ali Khan, the seventh Nizam.</p>
                        <p>The word Chowmahalla means four palaces. ‘Chow’ stands for four and ‘Mahalla’ is the plural for palaces.
                            Known for its beautiful architecture, the palace is divided into  two courtyards; northern and southern. There is also the Durbar Hall,  known as the Grand Khilwat. It is made of marble and this is where the  royal throne ‘Takht-i-Nishan’ is located. The southern courtyard is the oldest portion with four palaces.</p>
                        <p> The chandeliers, beautiful arches and the ornate designs of stucco work used in this palace reflect the glory of the Nizams.</p>
                        <p>The restoration process of the palace was undertaken in the year  2005 under the patronage of Princess Esra. It was awarded the UNESCO  Asia Pacific Merit Award in 2010 for cultural heritage conservation.
                            The palace is open to public and displays a collection of artefacts, pictures of the Nizams and also vintage cars.
                        </p>
                    </Col>
                </Row>
            </Container>
            {/* left */}
            <Container fluid style={{ marginTop: '60px' }}>
                <hr />
            </Container>
           

        </>
    )
}

export default JNFamousGems
