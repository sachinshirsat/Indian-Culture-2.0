import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./CuisinesofIndia.css";

import CoIimg1 from '../image/fccuisine1.png';
import CoIimg2 from '../image/fccuisine2.png';
import CoIimg3 from '../image/fccuisine3.png';
import CoIimg4 from '../image/fccuisine4.png';
import CoIimg5 from '../image/fccuisine5.png';
import CoIimg6 from '../image/fccuisine6.png';
import CoIimg7 from '../image/fccuisine7.png';
import CoIimg8 from '../image/fccuisine8.png';
import SwrilDivider from "./SwrilDivider";

function CuisinesofIndia() {

    const fccuisinelistpage = () => {
        window.open('/fccuisinelistpage', '_parent');
      };
    return (
        <>
            <Container className="fnc-cuisine-header">
                <Row>
                    <Col>
                        <h1>Cuisines of India</h1>
                        <SwrilDivider/>
                    </Col>
                </Row>
            </Container>

            <div class="fnc-cuisine-thumbnail-container">
                <div class="fnc-cuisine-thumbnail" onClick={fccuisinelistpage}>
                    <div class="fnc-cuisine-thumbnail-image-container">
                        <img class="fnc-cuisine-thumbnail-image" src={CoIimg1} alt="fnc-cuisine-Thumbnail 1" />
                    </div>
                    <div class="fnc-cuisine-thumbnail-title">North</div>
                </div>

                <div class="fnc-cuisine-thumbnail">
                    <div class="fnc-cuisine-thumbnail-image-container">
                        <img class="fnc-cuisine-thumbnail-image" src={CoIimg2} alt="fnc-cuisine-Thumbnail 2" />
                    </div>
                    <div class="fnc-cuisine-thumbnail-title">East</div>
                </div>

                <div class="fnc-cuisine-thumbnail">
                    <div class="fnc-cuisine-thumbnail-image-container">
                        <img class="fnc-cuisine-thumbnail-image" src={CoIimg3} alt="fnc-cuisine-Thumbnail 3" />
                    </div>
                    <div class="fnc-cuisine-thumbnail-title">South</div>
                </div>

                <div class="fnc-cuisine-thumbnail">
                    <div class="fnc-cuisine-thumbnail-image-container">
                        <img class="fnc-cuisine-thumbnail-image" src={CoIimg4} alt="fnc-cuisine-Thumbnail 4" />
                    </div>
                    <div class="fnc-cuisine-thumbnail-title">West</div>
                </div>
            </div>

            <div class="fnc-cuisine-thumbnail-container">
                <div class="fnc-cuisine-thumbnail">
                    <div class="fnc-cuisine-thumbnail-image-container">
                        <img class="fnc-cuisine-thumbnail-image" src={CoIimg5} alt="fnc-cuisine-Thumbnail 1" />
                    </div>
                    <div class="fnc-cuisine-thumbnail-title">North-East</div>
                </div>

                <div class="fnc-cuisine-thumbnail">
                    <div class="fnc-cuisine-thumbnail-image-container">
                        <img class="fnc-cuisine-thumbnail-image" src={CoIimg6} alt="fnc-cuisine-Thumbnail 2" />
                    </div>
                    <div class="fnc-cuisine-thumbnail-title">Central</div>
                </div>

                <div class="fnc-cuisine-thumbnail">
                    <div class="fnc-cuisine-thumbnail-image-container">
                        <img class="fnc-cuisine-thumbnail-image" src={CoIimg7} alt="fnc-cuisine-Thumbnail 3" />
                    </div>
                    <div class="fnc-cuisine-thumbnail-title">Distinctive Cuisin</div>
                </div>

                <div class="fnc-cuisine-thumbnail">
                    <div class="fnc-cuisine-thumbnail-image-container">
                        <img class="fnc-cuisine-thumbnail-image" src={CoIimg8} alt="fnc-cuisine-Thumbnail 4" />
                    </div>
                    <div class="fnc-cuisine-thumbnail-title">Street Food of India</div>
                </div>
            </div>
        </>
    );
}

export default CuisinesofIndia;
