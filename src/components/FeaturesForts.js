import React from 'react';
import FF1 from '../image/FF1.png';
import FF2 from '../image/ff2.png';
import FF3 from '../image/ff3.png';
import FF4 from '../image/ff4.png';
import FF5 from '../image/ff5.png';
import FF6 from '../image/ff6.png';
import FF7 from '../image/ff7.png';
import FF8 from '../image/ff8.png';
import FF9 from '../image/ff9.png';

import { ArrowLeft } from 'react-feather';

// import './FeaturesForts.css';
import { Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import SwrilDivider from './SwrilDivider';


function FeaturesForts() {

    const wall = () => {
        window.open('/wall', '_parent');
    }

    const backtopre = () => {
        window.open('/understandingforts', '_parent');
    };

    const redirectfortsofindia = () => {
        window.open('/fortsofindia', '_parent');
    };

    const backtocategory = () => {
        window.open('/allcategories', '_parent');
      };

      const redirecthomepage = () => {
        window.open('/', '_parent');
    };
    return (
        <>
            <Container fluid>
                <Row>
                   {/*  <Col sm={1}>
                        <ArrowLeft className='backtoprevious' onClick={backtopre} size={35} />
                    </Col> */}
                    <Col >
                        <Breadcrumb className="d-flex justify-content-left">
                            <Breadcrumb.Item href="#" onClick={redirecthomepage} >Home</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={backtocategory}>
                                Categories
                            </Breadcrumb.Item>
                            <Breadcrumb.Item onClick={redirectfortsofindia}>Forts Of India</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={backtopre}>Understanding Forts</Breadcrumb.Item>
                            <Breadcrumb.Item active className='dead'>Features of Forts</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
            <Container className='fortindi-header'>
                <Row >
                    <Col >
                        <h1>Features of Forts</h1>
<SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            {/*   <div class="thumbnail-container">
            <img class="thumbnail-image" src={FF1} alt="Thumbnail Image" />
            <div class="thumbnail-title">Thumbnail Title</div>
        </div> */}

            <div class="thumbnail-container">
                <div class="thumbnail">
                    <div class="thumbnail-image-container">
                        <img class="thumbnail-image" src={FF1} alt="Thumbnail 1" onClick={wall} />
                    </div>
                    <div class="thumbnail-title">Wall</div>
                </div>

                <div class="thumbnail">
                    <div class="thumbnail-image-container">
                        <img class="thumbnail-image" src={FF2} alt="Thumbnail 2" />
                    </div>
                    <div class="thumbnail-title">Rampart</div>
                </div>

                <div class="thumbnail">
                    <div class="thumbnail-image-container">
                        <img class="thumbnail-image" src={FF3} alt="Thumbnail 3" />
                    </div>
                    <div class="thumbnail-title">Bastion</div>
                </div>

                <div class="thumbnail">
                    <div class="thumbnail-image-container">
                        <img class="thumbnail-image" src={FF4} alt="Thumbnail 4" />
                    </div>
                    <div class="thumbnail-title">Moat</div>
                </div>
            </div>

            <div class="thumbnail-container">
                <div class="thumbnail">
                    <div class="thumbnail-image-container">
                        <img class="thumbnail-image" src={FF5} alt="Thumbnail 1" />
                    </div>
                    <div class="thumbnail-title">Gate</div>
                </div>

                <div class="thumbnail">
                    <div class="thumbnail-image-container">
                        <img class="thumbnail-image" src={FF6} alt="Thumbnail 2" />
                    </div>
                    <div class="thumbnail-title">Watchtower</div>
                </div>

                <div class="thumbnail">
                    <div class="thumbnail-image-container">
                        <img class="thumbnail-image" src={FF7} alt="Thumbnail 3" />
                    </div>
                    <div class="thumbnail-title">Parapet</div>
                </div>

                <div class="thumbnail">
                    <div class="thumbnail-image-container">
                        <img class="thumbnail-image" src={FF8} alt="Thumbnail 4" />
                    </div>
                    <div class="thumbnail-title">Merlon</div>
                </div>
            </div>

            <div class="thumbnail-container">
                <div class="thumbnail">
                    <div class="thumbnail-image-container">
                        <img class="thumbnail-image" src={FF9} alt="Thumbnail 1" />
                    </div>
                    <div class="thumbnail-title">Turret</div>
                </div>


            </div>

        </>
    )
}

export default FeaturesForts
