import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './FlagshipEvent.css';

import PMBanner from '../image/langPmIndiaBanner.png';
import FEimg1 from '../image/flagimg1.png';
import FEimg2 from '../image/flagimg2.png';
import FEimg3 from '../image/flagimg3.png';
import SwrilDivider from './SwrilDivider';

function FlagshipEvent() {
    const flageventlib = () => {
        window.open('/flageventlib', '_parent');
    };
    return (
        <>

            <div className='flagevent-parent-container'>
                <img src={PMBanner} className='flagevent-banner' alt='Free Banner' />
            </div>



            <Container className='flagevent-header'>
                <Row >
                    <Col >
                        <h1>flagship events</h1>
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>

            <Container>
                <div class="flagevent-thumbnail-container">
                    <figure class="flagevent-thumbnail">
                        <img src={FEimg1} alt="Image 1" />
                        <figcaption className='flagevent-item__details'>The Delicate Flavors of Awadh</figcaption>
                    </figure>

                    <figure class="flagevent-thumbnail" onClick={flageventlib}>
                        <img src={FEimg2} alt="Image 2" />
                        <figcaption className='flagevent-item__details'>Lucknow: Food Fit for the Kings</figcaption>
                    </figure>
                    <figure class="flagevent-thumbnail">
                        <img src={FEimg3} alt="Image 1" />
                        <figcaption className='flagevent-item__details'>The Delicate Flavors of Awadh</figcaption>
                    </figure>

                </div>



            </Container>
        </>
    )
}

export default FlagshipEvent
