import React, { useEffect } from 'react';
// import './FICulinaryTraditionss.css';
import { Container, Row, Col } from 'react-bootstrap';

import FICulTradiBan from '../image/cultradiimg1.png';
import FICulTradiimg1 from '../image/cultradiimg1.png';
import FICulTradiimg2 from '../image/cultradiimg2.png';


import 'bootstrap/dist/css/bootstrap.min.css';
import SwrilDivider from './SwrilDivider';

function FIDiscoverCulTrad() {

    return (
        <>
            <div className='ficultrad1-parent-container'>
                <img src={FICulTradiBan} className='ficultrad1-banner' alt='Free Banner' />
            </div>

            <div className="ficultrad1-float-container">
                <a href="#" className="icon one"> Share</a>
                <a href="#" className="icon two">QR Code</a>

            </div>

            <Container className='ficultrad1-header'>
                <Row >
                    <Col >
                        <h1>Culinary traditions</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='ficultrad1-wrapper'>
                <div className="ficultrad1-text">
                    <h2>Shrikhand</h2>
                    <p>During the celebration of Gudi Padwa, Shrikhand is  a culinary delight, cherished for both its savoury and sweet  variations. This popular dish is created by straining yogurt, a  technique ingeniously devised by herders around 500 years ago to  facilitate its transportation.</p>
                    <p>The evolution of Shrikhand has a historical root,  with its recipe as we know it today finding mention in the 11th-century  text Lokopakara. This ancient manuscript provides insight into the  enduring appeal and cultural significance of Shrikhand, showcasing its  journey from a practical innovation by herders to a revered culinary  tradition during festive occasions like Gudi Padwa.</p>

                    <p>Buddhist legends indicate that when Maya conceived her child, she dreamed of a white elephant with six tusks gently piercing her from the side. This was interpreted to mean that she would give birth either to a great ruler or a buddha (a supremely enlightened teacher). On a full moon night in Vaisakha, the queen was travelling to her parents’ home in Devdaha when she stopped at a grove in Lumbini and gave birth to a child. The child immediately took seven steps forward and a lotus bloomed at each step. He then declared in a noble voice that he was the chief of the world and this was his last rebirth. The ritual of bathing the image of the baby Buddha on Buddha Purnima is intended to commemorate this moment.</p>
                </div>

                <div className="ficultrad1-slider">
                    <div className="ficultrad1-slider-wrapper" id="slider-wrapper">
                        <img src={FICulTradiimg1} alt="Kheer 1" />

                    </div>
                </div>
            </Container>
            {/*  */}
            <Container className='ficultrad1-wrapper'>
                <div className="ficultrad1-slider">
                    <div className="ficultrad1-slider-wrapper" id="slider-wrapper">
                        <img src={FICulTradiimg2} alt="Kheer 1" />

                    </div>
                </div>

                <div className="ficultrad1-text">
                    <h2>Ghugrya/Ghugri</h2>
                    <p>Ghugrya or Ghugri is a traditional Marathi dish enjoyed across Maharashtra, particularly during the festive occasion of Gudi Padwa. This dish is made using a combination of freshly harvested grains, including wheat grains and chickpeas, along with a variety of spices and vegetables. The grains are soaked, boiled, and then mixed with finely chopped onions, tomatoes, green chillies, coriander leaves, and a blend of aromatic spices such as cumin and turmeric. The mixture is then cooked to perfection, resulting in a flavourful dish that celebrates the abundance of the harvest season. Ghugrya is often enjoyed as a savoury snack or side dish, showcasing the cultural heritage of Maharashtra.</p>
                </div>


            </Container>
            {/*  */}



        </>
    );
}

export default FIDiscoverCulTrad;
