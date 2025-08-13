import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './TextilenFabric.css';

import TxtFabBanner from '../image/TnFBan.png';
import SwrilDivider from './SwrilDivider';

function TextilenFabric() {

    const textilemuseum = () => {
        window.open('/textilemuseum', '_parent');
    };

    const txtiletrade = () => {
        window.open('/txtiletrade', '_parent');
    };


    const typesoftextiles = () => {
        window.open('/typesoftextiles', '_parent');
    };


    const txtilemanufacturing = () => {
        window.open('/txtilemanufacturing', '_parent');
    };

    const txtileartisans = () => {
        window.open('/txtileartisans', '_parent');
    };


    const txtileartifacts = () => {
        window.open('/txtileartifacts', '_parent');
    };

    const textiletales = () => {
        window.open('/textiletales', '_parent');
    };

    const txtilefreedommovement = () => {
        window.open('/txtilefreedommovement', '_parent');
    };


    const txtilehistory = () => {
        window.open('/txtilehistory', '_parent');
    };
    return (
        <>
            <div className='txtile-fab-parent-container'>
                <img src={TxtFabBanner} className='txtile-fab-banner' alt='Free Banner' />
            </div>
            {/* <Container fluid>
                <Row>
                    <Col sm={1}>
                        <ArrowLeft className='backtoprevious' onClick={backtopre} size={45} />

                    </Col>
                </Row>
            </Container> */}
            <Container className='txtile-fab-header'>
                <Row >
                    <Col >
                        <h1>Textiles & fabrics of india</h1>
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>
            <Container className='txtile-fab-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>Textiles and Fabrics of India is an attempt to showcase and celebrate the long and diverse tradition of Textiles in India. The history of this craft goes back to the ancient period. This section highlights and honours the craftsmanship of the Indian handloom workers, embroiderers, block printers, painters and others who have immensely contributed to build a distinct textile industry for India.</p>
                    </Col>
                </Row>

            </Container>

            <section>

                <div className="txtile-fab-section " id="section-2" >

                    <Container >
                        <div className="txtile-fab-storygrid">
                            <div className="txtile-fab-item txtile-fab-item--medium" onClick={textilemuseum}>
                                <div className="txtile-fab-item__details">
                                    Textiles from Museums
                                </div>
                                {/* <img src={Stoimg1}  alt="Koh-i-Noor" /> */}
                            </div>
                            <div className="txtile-fab-item txtile-fab-item--large" onClick={txtileartifacts}>
                                <div className="txtile-fab-item__details">
                                    Textiles as Artefacts
                                </div>
                            </div>

                            <div className="txtile-fab-item txtile-fab-item--medium">
                                <div className="txtile-fab-item__details">
                                    Textiles & Fabrics of Indian States
                                </div>
                            </div>
                            <div className="txtile-fab-item txtile-fab-item--large" onClick={txtilefreedommovement}>
                                <div className="txtile-fab-item__details">
                                    Freedom Movement & Textiles
                                </div>
                            </div>

                            <div className="txtile-fab-item txtile-fab-item--large" onClick={txtileartisans}>
                                <div className="txtile-fab-item__details">
                                    Artisans
                                </div>
                            </div>

                            <div className="txtile-fab-item txtile-fab-item--large" onClick={txtilehistory}>
                                <div className="txtile-fab-item__details">
                                    History
                                </div>
                            </div>


                            <div className="txtile-fab-item txtile-fab-item--large" onClick={typesoftextiles}>
                                <div className="txtile-fab-item__details">
                                    Type of Textile
                                </div>
                            </div>

                            <div className="txtile-fab-item txtile-fab-item--large">
                                <div className="txtile-fab-item__details">
                                    Glossary
                                </div>
                            </div>
                            <div className="txtile-fab-item txtile-fab-item--large" onClick={txtiletrade}>
                                <div className="txtile-fab-item__details">
                                    Trade
                                </div>
                            </div>

                            <div className="txtile-fab-item txtile-fab-item--large" onClick={textiletales}>
                                <div className="txtile-fab-item__details">
                                    Textile Tales
                                </div>
                            </div>

                            <div className="txtile-fab-item txtile-fab-item--medium" onClick={txtilemanufacturing}>
                                <div className="txtile-fab-item__details">
                                    Manufacturing Process
                                </div>
                            </div>

                            <div className="txtile-fab-item txtile-fab-item--medium">
                                <div className="txtile-fab-item__details">

                                </div>
                            </div>



                        </div>
                    </Container>

                </div>
            </section>
        </>
    )
}

export default TextilenFabric
