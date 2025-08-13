import React from 'react'
import EarlyBan from '../image/EarlyBan.png'
import { Container, Row, Col } from 'react-bootstrap';
import CavesImg1 from '../image/cavesimg1.png';
import CavesImg2 from '../image/cavesimg2.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import EarlyImg1 from '../image/earlyimg1.png';
import EarlyImg2 from '../image/earlyimg2.png';

import EarlyImg3 from '../image/earlyimg3.png';
import EarlyImg4 from '../image/earlyimg4.png';
import SwrilDivider from './SwrilDivider';
// import './EarlyCaves.css';

function EarlyCaves() {
    const cave9 = () => {
        window.open('/cave9', '_parent');
      };
    return (
        <>
            <div className='ajanta-earlycaves-parent-container'>
                <img src={EarlyBan} className='ajanta-earlycaves-banner' alt='Free Banner' />
            </div>

            <Container className='ajanta-earlycaves-header'>
                <Row >
                    <Col >
                        <h1>Early Caves</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='ajanta-earlycaves-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>
                            The first caves at Ajanta were made sometime between the 2nd century BCE and 1st century CE. These caves are part of a constellation of rock-cut Buddhist temples that dot the slopes of the Sahayādri or western ghats in the region. The Early caves at Ajanta were made through donations made by upāsakas or laity, monks, traders and ordinary people. There is a chiselled inscription in Cave 12 made by a vaṇija or merchant. Similarly, parts of the caves including a wooden facade (that didn't survive) for Cave 10 were made through individual donations. In this Early period, we find two chaityagṛha’s or congregation halls where worshippers assembled. During this period, upāsaya or dwellings with avarakas or cells were also created. Commonly known as vihāras, the monks resided in three such caves (12, 13 and 15A).</p>

                        <p>These rock-cut temples made at Ajanta mimicked their wooden predecessors in design and aesthetic. We can still find markings left behind by wooden rafters that once adorned the ceiling. This period in Buddhism was also known for aniconism. The Buddha was generally not represented in his human form, instead he was represented through various symbols like the stūpa, a tree, parasol etc. So what do we make of the many Buddha images both painted inside the cave and sculpted outside it? These are part of 5th century CE renovations performed at the site. The many Buddha sculptures outside have been attributed to votary donations. At the apse inside Cave 10 and 9 we also find a stūpa. The design of the cave, which is a U-shaped hall with pillars running round the stūpa, seems to be ideal for the performance of circumambulation around the sacred stūpa.
                        </p>
                    </Col>
                </Row>

            </Container>

            <div className='ajanta-earlycaves-image-container'>
                <div class="ajanta-earlycaves-image-item">
                    <img src={CavesImg1} alt="Image 1" />
                    <div class="ajanta-earlycaves-caption">Pattern left by wooden rafter (now missing) on the roof of Cave 9</div>
                </div>
                <div class="ajanta-earlycaves-image-item">
                    <img src={CavesImg2} alt="Image 2" />
                    <div class="ajanta-earlycaves-caption">Stūpa in Cave 10, one of the early chaityagṛhas</div>
                </div>
            </div>

            <Container className='ajanta-earlycaves-header'>
                <Row >
                    <Col >
                        <h1>Early ChaityagRhas</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container>
                <div class="row justify-content-center g-0">
                    <div class="col-auto">
                        <div class="ajanta-earlycaves-image-item1" onClick={cave9}>
                            <img src={EarlyImg1} alt="Image 1"/>
                                <div class="ajanta-earlycaves-caption1">Cave 9</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-earlycaves-image-item1">
                            <img src={EarlyImg2} alt="Image 2"/>
                                <div class="ajanta-earlycaves-caption1">Cave 10</div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container className='ajanta-earlycaves-header'>
                <Row >
                    <Col >
                        <h1>Early viharas</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container>
                <div class="row justify-content-center g-0">
                    <div class="col-auto">
                        <div class="ajanta-earlycaves-image-item1">
                            <img src={EarlyImg3} alt="Image 1"/>
                                <div class="ajanta-earlycaves-caption1">Cave 12</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-earlycaves-image-item1">
                            <img src={EarlyImg4} alt="Image 2"/>
                                <div class="ajanta-earlycaves-caption1">Cave 13</div>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default EarlyCaves
