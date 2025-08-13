import React from 'react';
// import './TxtileManufacturing.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../image/Dyeing_0.jpg';
import img2 from '../image/Embroidery.jpg';
import img3 from '../image/Painting_0.jpg';
import img4 from '../image/Printing.jpg';
import SwrilDivider from './SwrilDivider';

function TxtileManufacturing() {

    const txtileweavinglistpage = () => {
        window.open('/txtileweavinglistpage', '_parent');
      };
      
    return (
        <>
            <Container className='txtile-manufac-header'>
                <Row>
                    <Col>
                        <h1>Manufacturing Technique</h1>
                        <SwrilDivider/>
                    </Col>
                </Row>
            </Container>

            {/*  */}
            {/*  */}
            <Container>
                <Carousel data-bs-theme="txtile-manufac-dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 txtile-manufac-carousel-image"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption className="txtile-manufac-carousel-caption">
                            <h5 className="txtile-manufac-text-custom-size txtile-manufac-text-custom-color txtile-manufac-txt-custom-title">WEAVING</h5>
                            <p className="txtile-manufac-text-custom-size txtile-manufac-text-custom-color txtile-manufac-Manufacture-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <Button className="txtile-manufac-listbtn" onClick={txtileweavinglistpage}>Explore</Button>
                            
                        </Carousel.Caption>
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 txtile-manufac-carousel-image"
                            src={img2}
                            alt="Second slide"
                        />
                        <Carousel.Caption className="txtile-manufac-carousel-caption">
                            <h5 className="txtile-manufac-text-custom-size txtile-manufac-text-custom-color txtile-manufac-txt-custom-title">DYEING</h5>
                            <p className="txtile-manufac-text-custom-size txtile-manufac-text-custom-color txtile-manufac-Manufacture-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <Button className="txtile-manufac-listbtn" >Explore</Button>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 txtile-manufac-carousel-image"
                            src={img3}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="txtile-manufac-carousel-caption">
                            <h5 className="txtile-manufac-text-custom-size txtile-manufac-text-custom-color txtile-manufac-txt-custom-title">PRINTING</h5>
                            <p className="txtile-manufac-text-custom-size txtile-manufac-text-custom-color txtile-manufac-Manufacture-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <Button className="txtile-manufac-listbtn" >Explore</Button>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 txtile-manufac-carousel-image"
                            src={img3}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="txtile-manufac-carousel-caption">
                            <h5 className="txtile-manufac-text-custom-size txtile-manufac-text-custom-color txtile-manufac-txt-custom-title">PAINTING</h5>
                            <p className="txtile-manufac-text-custom-size txtile-manufac-text-custom-color txtile-manufac-Manufacture-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <Button className="txtile-manufac-listbtn" >Explore</Button>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 txtile-manufac-carousel-image"
                            src={img3}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="txtile-manufac-carousel-caption">
                            <h5 className="txtile-manufac-text-custom-size txtile-manufac-text-custom-color txtile-manufac-txt-custom-title">EMBROIDERY</h5>
                            <p className="txtile-manufac-text-custom-size txtile-manufac-text-custom-color txtile-manufac-Manufacture-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <Button className="txtile-manufac-listbtn" >Explore</Button>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>





        </>
    )
}

export default TxtileManufacturing
