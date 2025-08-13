import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import SwrilDivider from '../image/SwirlDivider 12.png';
import JNBanner from '../image/JNBanner.png';
import { ArrowLeft } from 'react-feather';

// import './JewelleryOfNizam.css';

function JewelleryOfNizam() {
    const jnhistory = () => {
        window.open('/jnhistory', '_parent');
    };

    const jneconomy = () => {
        window.open('/jneconomy', '_parent');
    };
    
    const jnsociety = () => {
        window.open('/jnsociety', '_parent');
    };

    const jnjewels = () => {
        window.open('/jnjewels', '_parent');
    };
    
    const jnanecdotes = () => {
        window.open('/jnanecdotes', '_parent');
    };
    
    const jnprincesses = () => {
        window.open('/jnprincesses', '_parent');
    };
    // 
    const backtopre = () => {
        window.open('/', '_parent');
      };

    return (
        <>
            <div className='parent-container'>
                <img src={JNBanner} className='jnbanner' alt='Free Banner' />
            </div>
            <Container fluid>
                <Row>
                    <Col sm={1}>
                        <ArrowLeft className='backtoprevious' onClick={backtopre} size={45} />
                    </Col>
                </Row>
            </Container>
            <div>
                <section>

                    <div className="section " id="section-2" >
                        <Container className='jn-header'>
                            <Row >
                                <Col >
                                    <h1>Jewellery of the Nizams</h1>
                                    {/* <img src={SwrilDivider} alt="" style={{ width: '90px', height: '15px', backgroundColor: 'transparent' }}/> */}

                                </Col>
                            </Row>
                        </Container>
                        <Container style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                            <div className="jngrid" >
                                <div className="jnitem jnitem--medium" onClick={jnhistory}>
                                    <div className="jnitem__details">
                                        HISTORY
                                    </div>

                                </div>
                                <div className="jnitem jnitem--large" onClick={jneconomy}>
                                    <div className="jnitem__details">
                                        Economy
                                    </div>
                                </div>

                                <div className="jnitem jnitem--medium" onClick={jnsociety}>
                                    <div className="jnitem__details">
                                        Society
                                    </div>
                                </div>
                                <div className="jnitem jnitem--medium" onClick={jnjewels}>
                                    <div className="jnitem__details">
                                        Jewels
                                    </div>
                                </div>

                                <div className="jnitem jnitem--medium" onClick={jnanecdotes}>
                                    <div className="jnitem__details">
                                        Anecdotes
                                    </div>
                                </div>

                                <div className="jnitem jnitem--large" onClick={jnprincesses}>
                                    <div className="jnitem__details">
                                        Princess
                                    </div>
                                </div>

                            </div>
                        </Container>
                        
                    </div>
                </section>
            </div>
        </>
    )
}

export default JewelleryOfNizam
