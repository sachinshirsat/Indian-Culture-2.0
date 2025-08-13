import React from 'react';
// import '../component/JNResultpage.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import JNresult from '../image/Temple-Varanasi 1.png';
import Resone from '../image/Rectangle 183.png';
import Restwo from '../image/Rectangle 184.png';
import Resthree from '../image/Rectangle 185.png';

function JNResultpage() {
    return (
        <>
            <div className='parent-container'>
                <img src={JNresult} className='jnresultbanner' alt='Free Banner' />
            </div>
            <Container className='jnresult-header'>
                <Row >
                    <Col >
                        <h1>Charminar</h1>

                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container className='jnresultcover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>This section contains a collection of rare archival material such as books, photographs, gazetteers, letters, newspaper clippings and much more on the freedom struggle of India. The freedom movement engulfed the entire country and people from all walks of life joined hands to drive the foreign oppressors out of this land. Even after more than 7 decades of freedom, these stories of courage, selflessness and determination continue to inspire and instill pride in us. The present section aims to preserve and bring to light rare glimpses of the fight for freedom in the form of digital records.</p>
                    </Col>
                </Row>

            </Container>
<Container>
            <div class="jnresultresponsive">
                <div class="jnresultgallery">
                    <a target="_blank" href={Resone}>
                        <img src={Resone} alt="Cinque Terre" width="600" height="400" />
                    </a>
                    {/* <div class="desc">Add a description of the image here</div> */}
                </div>
            </div>


            <div class="jnresultresponsive">
                <div class="jnresultgallery">
                    <a target="_blank" href={Restwo}>
                        <img src={Restwo} alt="Forest" width="600" height="400" />
                    </a>
                    {/* <div class="desc">Add a description of the image here</div> */}
                </div>
            </div>

            <div class="jnresultresponsive">
                <div class="jnresultgallery">
                    <a target="_blank" href={Resthree}>
                        <img src={Resthree} alt="Northern Lights" width="600" height="400" />
                    </a>
                    {/* <div class="desc">Add a description of the image here</div> */}
                </div>
            </div>

           {/*  <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="img_mountains.jpg">
                        <img src="img_mountains.jpg" alt="Mountains" width="600" height="400" />
                    </a>
                    <div class="desc">Add a description of the image here</div>
                </div>
            </div> */}
            </Container>
        </>
    )
}

export default JNResultpage
