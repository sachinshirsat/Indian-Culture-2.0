import React from 'react';
// import './TypesofTextiles.css';
import TofTBanner from '../image/ToTban.png';
import { Container, Row, Col } from 'react-bootstrap';
import SwrilDivider from './SwrilDivider';

function TypesofTextiles() {
    const txtilepainting = () => {
        window.open('/txtilepainting', '_parent');
      };
  return (
    <>
      <div className='txtile-types-parent-container'>
        <img src={TofTBanner} className='txtile-types-banner' alt='Free Banner' />
      </div>
      <Container className='txtile-types-header'>
        <Row>
          <Col>
            <h1>Export Textiles from Museums across India</h1>
            <SwrilDivider/>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="destinations">
          <ul className="grid">
            <li className="large" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1488992783499-418eb1f62d08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1453&q=80)' }} onClick={txtilepainting}></li>
            <li className="med" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80)' }}></li>
            <li className="small" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571057103081-9e0b18e861f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1326&q=80)' }}></li>
            <li className="large" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)' }}></li>
            <li className="xlarge" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)' }}></li>
          </ul>
        </div>
      </Container>
    </>
  );
}

export default TypesofTextiles;
