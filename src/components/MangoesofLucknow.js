import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import './MangoesofLucknow.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HCLIicon from '../image/Textiles 2.png';
/* import HCLIQR from '../image/QR 1.png';
import HCLIShare from '../image/share-2.png'; */
import LucknowIllusbnr from '../image/bathtowelbig 1.png';

function MangoesofLucknow() {
    return (
        <>
            <div >
                <div className='luck-mango-parent-container'>
                    <img src={LucknowIllusbnr} className='luck-mango-banner' alt='Moc Banner' />

                </div>

                <Container >

                    <Row style={{ marginTop: '20px' }}>
                        <Col xs={0} className='luck-mango-title' >
                            <img src={HCLIicon} className='luck-mango-icon' alt='Archive Icon' />
                            <div className='luck-mango-vertical'></div>
                       
                            Mangoes of Lucknow
                        </Col>

                        {/* Add QR and Share btn here. Just uncomment the below code n use it*/}
                        {/* NOTE: Use svg icons insted of img */}

                       {/*  <Col className='luckilluqrcode'>

                            <img src={HCLIQR} alt='Archive Icon' />
                        </Col>
                        <Col >
                            <img src={HCLIShare} alt='Archive Icon' />

                        </Col> */}
                    </Row>
                </Container>
                <hr/>
                <Container className='luck-mango-cover'>
                <Row className="justify-content-md-center">

                        <Col>
                            <p className='luck-mango-para'>
                                Situated close to Malihabad, summers in Lucknow mean an influx of freshly plucked mangoes. Interestingly, the most famous mango of Malihabad, the Dussehri, has its roots in Kakori-quite literally!
                                It is said that in a small village named Dussehri, there stands a mango tree that was once owned by the Nawabs. From here began the sweet journey of this mango!
                                Other popular varieties of mango- chausa and langda also flood Lucknow during the hot summers.
                                In and around Lucknow, these mangoes are known by their poetic names- Shams-ul-asmar, husnara, mehr-ul-asmar, and samar bahisht.
                            </p>
                        </Col>

                    </Row>
                </Container>

            </div>
        </>
    )
}

export default MangoesofLucknow
