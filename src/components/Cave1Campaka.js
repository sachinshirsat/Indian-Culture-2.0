import React, { useState } from 'react';
import ACCaveCampakBAn from '../image/Campaka1.jpg';
import ACPaintingBan from '../image/Campaka2.jpg';
import ACNarrativeBan from '../image/Campaka3.jpg'; // Assuming this is a different image
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SwrilDivider from './SwrilDivider';
// import './Cave1Campaka.css';

function Cave1Campaka() {

    const [sliderValue, setSliderValue] = useState(1); // React state for slider value

    const getImageSrc = () => {
        // Based on slider value, return the corresponding image source
        if (sliderValue === 1) {
            return ACCaveCampakBAn; // Image for the first breakpoint
        } else if (sliderValue === 2) {
            return ACPaintingBan; // Image for the second breakpoint
        } else {
            return ACNarrativeBan; // Image for the third breakpoint
        }
    };

    return (
        <>

            <div className="cavecampaka-parent-container">
                <img src={getImageSrc()} alt="Selected View" className="cavecampaka-banner" />
            </div>

            <Container className="cavecampaka-slider-container">
                <input
                    type="range"
                    min="1"
                    max="3"
                    value={sliderValue}
                    className="cavecampaka-slider"
                    id="slider"
                    onChange={(e) => setSliderValue(parseInt(e.target.value))} // Update the slider value on change
                />
                <div className="cavecampaka-labels">
                    <span className='cavecampaka-value-output'>Painting</span>
                    <span className='cavecampaka-value-output' style={{ marginLeft: "15%" }}>Painting & Line Drawing</span>
                    <span className='cavecampaka-value-output' style={{ float: "right", marginLeft: "55px" }}>Line Drawing</span>
                </div>


            </Container>

            <Container className='cavecampaka-header'>
                <Row>
                    <Col>
                        <h1>Cave 1 - Campaka</h1>
                        <SwrilDivider/>
                    </Col>
                </Row>
            </Container>

            <Container className='cavecampaka-cover'>
                <Row className="justify-content-md-center">
                    <Col>
                        <p>Description:</p>
                        <p>This painting is found in Cave 1 at the back aisle before the antechamber. This painting is done in the space around the two doors. The king's palace is the principal location in the painting. Different scenes are shown in different mandapas or rooms in the palace.</p>
                        <p>Story:</p>
                        <p>The story is about a pious Nāga king who wants to attain salvation. For this, he leaves the Nāga world and comes to perform penance in a forest. He is captured by a hunter. The Nāga queen is worried about her missing husband and comes looking for him. She pleads with the human king of the region and asks him to help her find her husband. The hunter is summoned and asked to free the Nāga. The Nāga king gives a sermon to the court telling them about the virtues of following a spiritual path.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Cave1Campaka;
