import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './RiverGomti.css';

import RiverGomtiBan from '../image/RiverBan.png'

import RiverGomtiImg1 from '../image/riverimg1.png';
import RiverGomtiImg2 from '../image/riverimg2.png';
import RiverGomtiImg3 from '../image/riverimg3.png';
import SwrilDivider from './SwrilDivider';

function RiverGomti() {
    return (
        <>
            <div className='river-gom-parent-container'>
                <img src={RiverGomtiBan} className='river-gom-banner' alt='Free Banner' />
            </div>

            <Container className='river-gom-header'>
                <Row >
                    <Col >
                        <h1>River Gomti</h1>
                        <SwrilDivider />
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container className='river-gom-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>The Gomti that flows through Lucknow is a tributary of the Ganga. Beginning at the Gomti Tal in Pilibhit, the river is at its widest when it enters the city of Lucknow, where it flows for twelve kilometres, past many of the city’s historic structures.</p>

                        <p>Historically, Lucknow’s location on the banks of the Gomti made it an important tradepost, connecting traders from the Bay of Bengal to the plains of Northern India. Even before Lucknow was the capital of Awadh, it was known as a commercial centre, thanks to its location on the Gomti.
                        </p>
                    </Col>
                </Row>


            </Container>

            <Container class=" my-5">
                <div class="row justify-content-center">
                    <div class="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                        <div class="river-gom-thumbnail-container">
                            <img src={RiverGomtiImg1} alt="Thumbnail 1" class="river-gom-img-fluid" />
                            <div class="river-gom-caption">Delicate Flavors of Awadh</div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                        <div class="river-gom-thumbnail-container">
                            <img src={RiverGomtiImg2} alt="Thumbnail 2" class="river-gom-img-fluid" />
                            <div class="river-gom-caption">The Bridges of the Gomti</div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                        <div class="river-gom-thumbnail-container">
                            <img src={RiverGomtiImg3} alt="Thumbnail 3" class="river-gom-img-fluid" />
                            <div class="river-gom-caption">The Bridges of the Gomti</div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default RiverGomti
