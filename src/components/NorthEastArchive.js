import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './NorthEastArchive.css';
import FEAbanner from '../image/NEABanner.png'
import NEAimg1 from '../image/neaimg11.png';
import NEAimg2 from '../image/neaimg12.png';
// import NEAimg3 from '../image/unsung hero1.png';
import NEAimg3 from '../image/unsung hero2.jpg';

import NEAimg4 from '../image/neaimg13.png';
import NEAimg5 from '../image/neaimg14.png';
import SwrilDivider from './SwrilDivider';

function NorthEastArchive() {
    const neastate = () => {
        window.open('/neastate', '_parent');
      };

      const neashillong = () => {
        window.open('/neashillong', '_parent');
      };
    return (
        <>
            <div className='neamain-parent-container'>
                <img src={FEAbanner} className='neamain-banner' alt='Free Banner' />
            </div>

            <Container className='neamain-header'>
                <Row >
                    <Col >
                        <h1>The North-east Archive</h1>
                        <SwrilDivider/>

                    </Col>
                </Row>
            </Container>
            <Container className='neamain-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>The North-Eastern region of India is often called the ‘Paradise of India’. The enthralling and vibrant states of the North-East, house within themselves rich history, culture and heritage. Seven Sisters, i.e. Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Tripura, and one brother state of Sikkim, have their own tales to tell. From jaw-dropping sceneries to astonishing rituals and traditions, North-East India is a place worth exploring. Discover the untamed and enchanted region of North-East India through a virtual expedition. Each state has its own collection of rare photos, videos, books, and much more. We welcome you to explore the wild and mysterious North-East India and discover its hidden gems.</p>
                        <p>
                            Note: This section is a compilation of all resources on North-East India, available on the Indian Culture portal.</p>
                    </Col>
                </Row>

            </Container>

            <Container fluid className=" neamain-black-bg neamain-lst">

                <Container className='neamain-header1'>
                    <Row >
                        <Col >
                            <h1>States</h1>

                        </Col>
                    </Row>
                </Container>


                {/* Archive img thumbnails start */}
                <main className="neamain-page-content">
                    <div className="neamain-listcard">
                        <div className="neamain-content">

                            <h2 className="neamain-title ">Assam</h2>

                            <button className="neamain-listbtn" onClick={neastate}>View</button>
                        </div>
                    </div>
                    <div className="neamain-listcard">
                        <div className="neamain-content">
                            <h2 className="neamain-title">Title 2</h2>
                            <button className="neamain-listbtn">View</button>
                        </div>
                    </div>
                    <div className="neamain-listcard">
                        <div className="neamain-content">
                            <h2 className="neamain-title">Title 3</h2>
                            <button className="neamain-listbtn">View</button>
                        </div>
                    </div>
                    <div className="neamain-listcard">
                        <div className="neamain-content">
                            <h2 className="neamain-title">Title 4</h2>
                            <button className="neamain-listbtn">View</button>
                        </div>
                    </div>

                    <div className="neamain-listcard">
                        <div className="neamain-content">

                            <h2 className="neamain-title ">Title 1</h2>

                            <button className="neamain-listbtn" >View</button>
                        </div>
                    </div>
                    <div className="neamain-listcard">
                        <div className="neamain-content">
                            <h2 className="neamain-title">Title 2</h2>
                            <button className="neamain-listbtn">View</button>
                        </div>
                    </div>
                    <div className="neamain-listcard">
                        <div className="neamain-content">
                            <h2 className="neamain-title">Title 3</h2>
                            <button className="neamain-listbtn">View</button>
                        </div>
                    </div>
                    <div className="neamain-listcard">
                        <div className="neamain-content">
                            <h2 className="neamain-title">Title 4</h2>
                            <button className="neamain-listbtn">View</button>
                        </div>
                    </div>

                </main>
                {/* Archive img thumbnails end */}
            </Container>

            <div className='neamain-image-container neamain-beige-bg'>
                <div class="neamain-image-item">
                    <img src={NEAimg1} alt="Image 1" />
                    <div class="neamain-caption">Early caves</div>
                </div>
                <div class="neamain-image-item">
                    <img src={NEAimg2} alt="Image 2" />
                    <div class="neamain-caption">Later caves</div>
                </div>
            </div>

            <Container fluid className=" neamain-black-bg1 neamain-lst">

                <Container className='neamain-header1'>
                    <Row >
                        <Col >
                            <h1>Capital Cities of North-east India</h1>

                        </Col>
                    </Row>
                </Container>


                {/* Archive img thumbnails start */}
                <main className="neamain-page-content">
                    <div className="neamain-listcard">
                        <div className="neamain-content">

                            <h2 className="neamain-title ">Shillong</h2>

                            <button className="neamain-listbtn" onClick={neashillong}>View</button>
                        </div>
                    </div>
                    <div className="neamain-listcard">
                        <div className="neamain-content">
                            <h2 className="neamain-title">Title 2</h2>
                            <button className="neamain-listbtn">View</button>
                        </div>
                    </div>
                    <div className="neamain-listcard">
                        <div className="neamain-content">
                            <h2 className="neamain-title">Title 3</h2>
                            <button className="neamain-listbtn">View</button>
                        </div>
                    </div>
                    <div className="neamain-listcard">
                        <div className="neamain-content">
                            <h2 className="neamain-title">Title 4</h2>
                            <button className="neamain-listbtn">View</button>
                        </div>
                    </div>

                    <div className="neamain-listcard">
                        <div className="neamain-content">

                            <h2 className="neamain-title ">Title 1</h2>

                            <button className="neamain-listbtn" >View</button>
                        </div>
                    </div>
                    <div className="neamain-listcard">
                        <div className="neamain-content">
                            <h2 className="neamain-title">Title 2</h2>
                            <button className="neamain-listbtn">View</button>
                        </div>
                    </div>
                    <div className="neamain-listcard">
                        <div className="neamain-content">
                            <h2 className="neamain-title">Title 3</h2>
                            <button className="neamain-listbtn">View</button>
                        </div>
                    </div>
                    <div className="neamain-listcard">
                        <div className="neamain-content">
                            <h2 className="neamain-title">Title 4</h2>
                            <button className="neamain-listbtn">View</button>
                        </div>
                    </div>

                </main>
                {/* Archive img thumbnails end */}
            </Container>

            <div className='neamain-image-container neamain-beige-bg'>
                <div class="neamain-image-item">
                    <img src={NEAimg4} alt="Image 1" />
                    <div class="neamain-caption">Glimpses of North-East India</div>
                </div>
                <div class="neamain-image-item">
                    <img src={NEAimg5} alt="Image 2" />
                    <div class="neamain-caption">Tetseo Sisters: A Conversation</div>
                </div>
            </div>

            <Container className='neamain-header' style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>

                <Row>
                    <Col>
                        <h1 >Unsung heroes</h1>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    {/* <Col xs lg="6"> */}
                    <Col id='did' >

                        {/* <h2 >Varanasi</h2> */}
                        {/* style={{ fontSize: `${textSize}px` }} */}
                        <p >Varanasi is one of the world's oldest continually inhabited cities.
                            Kashi, its ancient name, was associated with a kingdom of the same name of 2,500 years ago.
                            The Buddha is recorded in the Pali canon to have given his first sermon,
                            "The Setting in Motion of the Wheel of Dharma", at nearby Sarnath in 528 BCE.</p>
                        <button class=" neamain-btn" ><span>Explore</span></button>

                    </Col>
                    <Col xs lg="4" className='justify-content-center'>
                        <div className="neamain-img">
                            <img src={NEAimg3} alt="Did you know" className='' />
                        </div>
                    </Col>
                </Row>

            </Container>

            <div className='neamain-freed'>
                <Container className='neamain-header1'>
                    <Row >
                        <Col >
                            <h1>Virtual Walkthrough</h1>

                        </Col>
                    </Row>
                </Container>
                <div className='neamain' style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                    <div className="neamain-text">
                        <h1>Rang Ghar</h1>
                        {/* <SwrilDivider/> */}
                        {/*        <p className='freedom-para'>After more than 7 decades of freedom, these stories of courage,
                    selflessness and determination continue to inspire and instill pride in us.</p> */}
                        <button className="neamain-btn" ><span>Take a Virtual Tour</span></button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default NorthEastArchive
