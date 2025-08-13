import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import DDRResultBanner from '../image/Jaisalmer_0 2.png'
import { ArrowLeft } from 'react-feather';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import SwrilDivider from './SwrilDivider';

// import '../components/DDRResultpage.css';

function DDRResultpage() {
    const backtopre = () => {
        const previousPageUrl = document.referrer;

        if (previousPageUrl) {
            window.open(previousPageUrl, '_parent');
        }
    };
    const redirecthomepage = () => {
        window.open('/', '_parent');
    };
    const backtorepository = () => {
        window.open('/DDRListingpage', '_parent');
      };
    const backtoddr = () => {
        window.open('/ddr', '_parent');
    };
    const backtocategory = () => {
        window.open('/allcategories', '_parent');
      };
    return (
        <>
            <div className='parent-container'>
                <img src={DDRResultBanner} className='DDRResultBanner' alt='Free Banner' />
            </div>

            <div className="DDRResult-float-container">
                <a href="#" className="icon one"> Share</a>
                <a href="#" className="icon two">QR Code</a>

            </div>

            <Container fluid className="skip">
                <Row>
                   {/*  <Col sm={1}>
                        <ArrowLeft className='backtoprevious' onClick={backtopre} size={45} />
                    </Col> */}
                    <Col >
                        {/* Adjust the column size for extra small and small screens */}
                        <Breadcrumb className="d-flex justify-content-left">
                            <Breadcrumb.Item href="#" onClick={redirecthomepage}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={backtocategory}>
                                Categories
                            </Breadcrumb.Item>
                            <Breadcrumb.Item onClick={backtoddr} >DDR</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={backtorepository} >Repository</Breadcrumb.Item>
                            <Breadcrumb.Item active className='dead'>Resultpage</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
            <Container className='DDRResult-header'>
                <Row >
                    <Col >
                        <h1>Kichak Vadh by K.P. Khadilkar</h1>
<SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container className='DDRResultcover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>Krushnaji Prabhakar Khadilkar was a Marathi playwright from Sangli, Maharashtra. He was a fiery journalist who wrote for Kesari and took inspiration from Bal Gangadhar Tilak. His satire on the British government in Kichak Vadh (1907, The Assassination of Kichak) achieved great public recognition.</p>
                        <p>
                            The play adapted an episode from Mahabharata where a minister of the court, Kichak, attempted to molest Draupadi and was thus killed by her husband Bhima. Khadilkar used the act of molestation as a metaphor for the unfair British policies in India. Lord Curzon was portrayed as Kichak, and Bhima was represented as an extremist nationalist in contrast to Yudhishtar, a moderate nationalist. The extreme nationalists took revenge for the crimes committed by the British empire. The play echoed the resentment Indians held against the foreign rule and voiced their resistance. The major themes of the play were the quest for freedom, sacrifice, war, and duty. It used allegory to critique the government and mythological characters to invoke sentiments of nationalism.</p>
                            <p>
                            Thereby employing the popular mythological episodes Indian playwrights managed to make the Indian masses question the unfair colonial rule.</p>
                    </Col>
                </Row>


            </Container>
        </>
    )
}

export default DDRResultpage
