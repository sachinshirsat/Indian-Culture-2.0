import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './NEASnapshotResultpage.css';
import NEASnapshotReBan from '../image/NEASnapResultBan.png'
import NEAIcon from '../image/neaicon.png'
function NEASnapshotResultpage() {
    return (
        <>
            <div className='neasnapresult-parent-container'>
                <img src={NEASnapshotReBan} className='neasnapresult-banner' alt='Free Banner' />
            </div>

            <Container >

                <Row style={{ marginTop: '20px' }}>

                    <Col xs={0} className='neasnapresult-title' >
                        <img src={NEAIcon} className='neasnapresult-icon' alt='Archive Icon' />
                        <div className='neasnapresult-vertical'></div>
                        My Grandmother Lady Jasbir Kaur by Amrita Shergil
                    </Col>

                </Row>
            </Container>
            <hr/>
            <Container className='neasnapresult-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>Keywords: Bodo Kachari House</p>
                        <p>Publisher: Indira Gandhi Rashtriya Manav Sangrahalaya,Bhopal</p>
                        <p>Description:  The Dwelling Complex of a bodo-kachari family surrounded by a high  fence consists of four thatched structures around a central courtyard.  The hut structure are prepared mostly of bamboo and grass with a partial  application of wood and mud.</p>
                        <p>Source: Indira Gandhi Rashtriya Manav Sangrahalaya,Bhopal</p>
                        <p>Type: Exhibitions</p>
                        <p>Received From: Indira Gandhi Rashtriya Manav Sangrahalaya</p>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default NEASnapshotResultpage
