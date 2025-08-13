import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './TTAncientTimeline.css'; // Import the custom CSS for the timeline styles
import { Container, Row,Col } from 'react-bootstrap';
import SwrilDivider from './SwrilDivider';

const TTAncientTimeline = () => {
    return (
        <>

            <Container className='ttat-header'>
                <Row >
                    <Col >
                        <h1>Clothing: Ancient Timeline </h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='ttat-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>This timeline traces the various historical  developments observed in clothing during the ancient period in the  Indian subcontinent. </p>
                    </Col>
                </Row>

            </Container>
            <div class="ttat-timeline">
                <div class="ttat-timeline-line"></div>

                <div class="ttat-timeline-item">
                    <span class="ttat-timeline-badge">3000 BCE - 1000 BCE</span>
                    <div class="ttat-timeline-marker"></div>
                    <div class="ttat-timeline-content-wrapper">
                        <div class="ttat-timeline-content">
                            <div class="ttat-timeline-image">
                                <img src="https://via.placeholder.com/200" alt="Timeline Image" />
                            </div>
                            <div className='ttat-timeline-content2'>
                                <h5 class="ttat-timeline-title">What is Lorem Ipsum?</h5>
                                <h6>What is Lorem Ipsum?</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <button class="ttat-button">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="ttat-timeline-item">
                    <span class="ttat-timeline-badge">3000 BCE - 1000 BCE</span>
                    <div class="ttat-timeline-marker"></div>
                    <div class="ttat-timeline-content-wrapper">
                        <div class="ttat-timeline-content">
                            <div class="ttat-timeline-image">
                                <img src="https://via.placeholder.com/200" alt="Timeline Image" />
                            </div>
                            <div className='ttat-timeline-content2'>
                                <h5 class="ttat-timeline-title">What is Lorem Ipsum?</h5>
                                <h6>What is Lorem Ipsum?</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <button class="ttat-button">Read More</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="ttat-timeline-item">
                    <span class="ttat-timeline-badge">3000 BCE - 1000 BCE</span>
                    <div class="ttat-timeline-marker"></div>
                    <div class="ttat-timeline-content-wrapper">
                        <div class="ttat-timeline-content">
                            <div class="ttat-timeline-image">
                                <img src="https://via.placeholder.com/200" alt="Timeline Image" />
                            </div>
                            <div className='ttat-timeline-content2'>
                                <h5 class="ttat-timeline-title">What is Lorem Ipsum?</h5>
                                <h6>What is Lorem Ipsum?</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <button class="ttat-button">Read More</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="ttat-timeline-item">
                    <span class="ttat-timeline-badge">3000 BCE - 1000 BCE</span>
                    <div class="ttat-timeline-marker"></div>
                    <div class="ttat-timeline-content-wrapper">
                        <div class="ttat-timeline-content">
                            <div class="ttat-timeline-image">
                                <img src="https://via.placeholder.com/200" alt="Timeline Image" />
                            </div>
                            <div className='ttat-timeline-content2'>
                                <h5 class="ttat-timeline-title">What is Lorem Ipsum?</h5>
                                <h6>What is Lorem Ipsum?</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <button class="ttat-button">Read More</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default TTAncientTimeline;
