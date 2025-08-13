import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './FIShadSukMynsiem.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FIShadBan from '../image/FIShadBan.png'

import FITribalimg1 from '../image/tribalimg1.png'
import FITribalimg2 from '../image/tribalimg2.png'
import SwrilDivider from './SwrilDivider';

function FIShadSukMynsiem() {
    return (
        <>
            <div className='fishadsuk-parent-container'>
                <img src={FIShadBan} className='fishadsuk-banner' alt='Free Banner' />
            </div>

            <div className="fishadsuk-float-container">
                <a href="#" className="icon one"> Share</a>
                <a href="#" className="icon two">QR Code</a>

            </div>

            <Container className='fishadsuk-header'>
                <Row >
                    <Col >
                        <h1>Shad Suk Mynsiem</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='fishadsuk-cover'>
                <Row className="justify-content-md-center">

                    <Col >

                        <p>Shad Suk Mynsiem Dance</p>

                        <p>The heart of Shad Suk Mynsiem lies in its enchanting dance performance, an elaborate display that beautifully encapsulates the essence of the festival. The male and female dancers don the traditional attire of the Khasi community, adding to the visual splendour of the celebration. Male performers, embodying the roles of protectors and leaders in society, wear distinctive war attire comprising a turban, waitlam (sword), and symphiah (whisk). In contrast, the female dancers showcase elegance in silk attire, adorned with intricate gold, coral, and silver accessories. The silver crown adorned with flowers worn by the women symbolises modesty and dignity.</p>

                        <p>The distinctive arrangement of the Shad Suk Mynsiem dance reflects the matrilineal structure of Khasi society. Positioned at the centre, the maidens symbolise the hearth and lineage of the clan and move with slow and coy steps. Surrounding them are male dancers, dressed in warrior garb, wielding waitlam and symphiah, serving as protective figures. This choreographic formation creates a harmonious and visually captivating spectacle that further enhances the cultural richness of the festival.
                        </p>

                        <p>
                            A Dance of Peaceful Hearts</p>

                            <p>The Shad Suk Mynsiem festival, held in April, showcases the  profound connection between the people of Khasi Hills and nature. This  annual three-day Thanksgiving celebration, embraced by the Khasis,  stands out as one of Meghalaya's most significant and popular dance  festivals.</p>
                            <p>At its core, the vibrant dance festival expresses gratitude to the  gods for their abundant blessings, particularly the rich harvest they  have reaped during the sowing season. It symbolises the commencement of a  new cycle in their agro-based life, marked by planting new seedlings.</p>

                            <p>The festivities of this agrarian celebration unfold over three days,  featuring symbolic rituals. Each day commences with a heartfelt prayer  to the gods in the courtyard of the Seng Khasi, an organisation  representing the indigenous Khasi people. Led by indigenous priests,  these prayers are offered along with songs, while various instruments  like the tangmuri, duitara, and ksing provide the music. Drums, including ksing and nakra, reverberate to beckon the community to the dance arena.</p>

                            <p>The Shad Suk Mynsiem festival encapsulates the profound gratitude of  the Khasi people towards nature and the divine, fostering a harmonious  celebration of life's cycles through vibrant dances and symbolic  rituals.
                        </p>
                    </Col>
                </Row>

            </Container>



        </>
    )
}

export default FIShadSukMynsiem
