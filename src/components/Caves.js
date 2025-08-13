import React from 'react'
import CavesBan from '../image/CavesBan.png'
import { Container, Row, Col } from 'react-bootstrap';
import CavesImg1 from '../image/cavesimg1.png';
import CavesImg2 from '../image/cavesimg2.png';
import SwrilDivider from './SwrilDivider';

// import './Caves.css';

function Caves() {
    const earlycaves = () => {
        window.open('/earlycaves', '_parent');
      };

      const latercaves = () => {
        window.open('/latercaves', '_parent');
      };
    return (
        <>
            <div className='ajanta-caves-parent-container'>
                <img src={CavesBan} className='ajanta-caves-banner' alt='Free Banner' />
            </div>

            <Container className='ajanta-caves-header'>
                <Row >
                    <Col >
                        <h1>Ajanta Caves</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='ajanta-caves-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>The U-shaped valley at Ajanta was carved by the Waghora river over many centuries. As the river thundered down the valley every varṣāvāsa or rainy season, it eroded away the layered volcanic basalt rock. It was only a day’s walk from the ancient trade route extending to Sopārā. The cliff is set amidst lush green forests next to a cascading waterfall. It was an ideal spot to create saṅghārāmas or monastic dwelling units where the monks could retreat and congregate.</p>

                        <p>The caves at Ajantā are at different stages of completion. They were created in two phases. The Early phase was during the Satavahana period (2nd century BCE to 1st century CE). There are five Early caves at Ajantā which include two Chaityagṛhas (space housing the stūpa used for congregational worship by Buddhists) Cave 9 and 10, and three vihāras (caves that have dwelling cells for monks) Cave 12, 13 and 15A. These Early caves were built through collective patronage - from donations made by monks, merchants and common people . Parts of the caves have inscriptions from individual donors. There has been considerable debate surrounding the dating of the Later caves. The general consensus is that these caves were made in the 5th century CE. There are about twenty-five caves from this period of extensive activity at Ajantā. These include two chaityagṛhas (Cave 19 and 26) and a new kind of cave type at Ajanta - a type of vihāra that also includes a Buddha shrine. Caves 1, 2, 16 and 17 have the best preserved paintings from this period. The Later phase is known for its bigger scale and ambition and this would not have been possible without the direct patronage of the aristocrats. Inscriptions outside cave 16, 17 and 26 indicate a direct relationship between the Vakataka ruling class and the Ajanta caves.</p>
                    </Col>
                </Row>

            </Container>

            <div className='ajanta-caves-image-container'>
                <div class="ajanta-caves-image-item" onClick={earlycaves}>
                    <img src={CavesImg1} alt="Image 1" />
                    <div class="ajanta-caves-caption">Early caves</div>
                </div>
                <div class="ajanta-caves-image-item" onClick={latercaves}>
                    <img src={CavesImg2} alt="Image 2" />
                    <div class="ajanta-caves-caption">Later caves</div>
                </div>
            </div>

        </>
    )
}

export default Caves
