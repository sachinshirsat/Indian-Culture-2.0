import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './MuseumResultpage.css';

import MusResBanner from '../image/bathtowelbig 1.png';
import MRicon from '../image/Textiles 2.png';

function MuseumResultpage() {
    return (
        <>
            <div className='txtile-museresult-parent-container'>
                <img src={MusResBanner} className='txtile-museresult-banner' alt='Free Banner' />
            </div>

            <Container >

                <Row style={{ marginTop: '20px' }}>

                    <Col xs={0} className='txtile-museresult-title' >
                        <img src={MRicon} className='txtile-museresult-icon' alt='Archive Icon' />
                        <div className='txtile-museresult-vertical'></div>
                        Saree Weaving, Kasargod

                    </Col>


                </Row>
            </Container>
            <hr style={{ width: '100%', marginLeft: 'auto' }} />

            <Container>
                <Row>

                    <Col>
                        <p className='txtile-museresult-para'>
                            <span className='txtile-museresult-bold'> Accession Number:</span> R.10996/S.6361<br />

                            <span className='txtile-museresult-bold'> Title:</span> Bath towel<br />

                            <span className='txtile-museresult-bold'>Object Type:</span> Towel<br />

                            <span className='txtile-museresult-bold'> Region:</span> Kanpur, Uttar Pradesh<br />

                            <span className='txtile-museresult-bold'> Main Material:</span> Cotton<br/>

                            <span className='txtile-museresult-bold'> Date:</span> 19th century<br/>

                            <span className='txtile-museresult-bold'> Manufacturing Technique:</span> Weaving<br/>

                            <span className='txtile-museresult-bold'> Description:</span> A honeycombed bath towel with floral designs.
                        </p>
                    </Col>

                </Row>
            </Container>

        </>
    )
}

export default MuseumResultpage
