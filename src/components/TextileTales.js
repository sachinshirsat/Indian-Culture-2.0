import React from 'react';
// import './TextileTales.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SwrilDivider from './SwrilDivider';

function TextileTales() {
    return (
        <>

            <Container className='txtile-tales-header'>
                <Row>
                    <Col>
                        <h1>Textile tales</h1>
                        <SwrilDivider/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="destinations">
                    <ul className="grid">
                        <li className="large" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1488992783499-418eb1f62d08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1453&q=80)' }}></li>
                        <li className="med" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80)' }}></li>
                        <li className="small" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571057103081-9e0b18e861f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1326&q=80)' }}></li>
                        <li className="large" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)' }}></li>
                        <li className="xlarge" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)' }}></li>
                    </ul>
                </div>
            </Container>

        </>
    )
}

export default TextileTales
