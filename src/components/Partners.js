import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// external css
import './Partners.css';

// import images from local system
import MOC from '../image/MoC.png';
import IIT from '../image/IIT.png';
import IGNOU from '../image/ignou.png';
import SwrilDivider from './SwrilDivider';

function Partners() {
   /*  const handleClick = () => {
        window.location.href = 'https://indiaculture.gov.in/';
      }; */
      const moc = () => {
        window.open('https://indiaculture.gov.in/', '_blank');
      };  
      const iitb = () => {
        window.open('https://www.iitb.ac.in/', '_blank');
      }; 
      const ignou = () => {
        window.open('http://www.ignou.ac.in/', '_blank');
      };  
    return (
        <div>
          
            <Container className='partners-header'>
                <Row >
                    <Col >
                        <h1>Partners</h1>

                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>
            <Container >
                <Row style={{ marginTop: '5px' }}>
                    {/* 1st card */}
                    <Col>
                        <Card className='partcard' style={{}}>
                            <Card.Img className='partimg' variant="top" src={MOC} />
                            <Card.Body>
                                <Card.Title className='partheading'>Ministry of Culture</Card.Title>
                                <Card.Text className='parttext'>
                                    Government of India
                                </Card.Text>
                                <Button className='partbtn' onClick={moc} variant="outline-dark">Explore</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 2nd card */}
                    <Col>
                        <Card className='partcard' style={{}}>
                            <Card.Img className='partimg' variant="top" src={IIT} />
                            <Card.Body>
                                <Card.Title className='partheading'>IIT Bombay</Card.Title>
                                <Card.Text className='parttext'>
                                    Indian Institute of Technology Bombay
                                </Card.Text>
                                <Button className='partbtn' onClick={iitb} variant="outline-dark">Explore</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 3rd card */}
                    <Col>
                        <Card className='partcard' style={{}}>
                            <Card.Img className='partimg' variant="top" src={IGNOU} />
                            <Card.Body>
                                <Card.Title className='partheading'>IGNOU</Card.Title>
                                <Card.Text className='parttext'>
                                    Indira Gandhi National Open University
                                </Card.Text>
                                <Button className='partbtn' onClick={ignou} variant="outline-dark">Explore</Button>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
            </Container>
            <Container style={{marginTop: '15px', textAlign: 'center'}}>
                <Row >
                    <Col >
                        <SwrilDivider />
                    </Col>
                </Row>
                <Row></Row>

            </Container>
        </div>
    )
}

export default Partners
