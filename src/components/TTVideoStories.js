import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './TTVideoStories.css';

import TTVideoStoriesBan from '../image/ttvideostoriesimg1.png';
import TTVideoStoriesImg1 from '../image/ttvideostoriesimg1.png';
import TTVideoStoriesImg2 from '../image/ttvideostoriesimg2.png';
import SwrilDivider from './SwrilDivider';

function TTVideoStories() {

    const ttvideoresultpage = () => {
        window.open('/ttvideoresultpage', '_parent');
    };
    return (
        <>
            <div className='ttvs-parent-container'>
                <img src={TTVideoStoriesBan} className='ttvs-banner' alt='Free Banner' />
            </div>

            <Container className='ttvs-header'>
                <Row >
                    <Col >
                        <h1>Video Story</h1>
                        <SwrilDivider />
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container className='ttvs-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>Dive into the possdible origin stories, interesting etymologies and other tales associated with various trends seen in history.</p>
                    </Col>
                </Row>

            </Container>

            <Container class="ttvs-container">
                <div class="row ttvs-thumbnails-container">
                    <div class="col-12 col-md-6 mb-4">
                        <div class="ttvs-thumbnail" onClick={ttvideoresultpage}>
                            <img src={TTVideoStoriesImg1} class="img-fluid" alt="Image 1" />
                            <div class="ttvs-thumbnail-ttitle text-center mt-2">The Ahmednagar Fort: A Legacy of Resistance</div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-4">
                        <div class="ttvs-thumbnail">
                            <img src={TTVideoStoriesImg2} class="img-fluid" alt="Image 2" />
                            <div class="ttvs-thumbnail-ttitle text-center mt-2">The Jhansi Fort: A Siege to Remember</div>
                        </div>
                    </div>
                </div>
            </Container>

            {/*  */}

        </>
    )
}

export default TTVideoStories
