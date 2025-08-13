import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MocBannerImg from '../image/MaincourseBAn.png';
import SwrilDivider from './SwrilDivider';


// import SwirlDivider from '../image/SwirlDivider.png';

// import './FCMainCourseResultpage.css';

function FCMainCourseResultpage() {
    return (
        <>

            <div className='fnc-main-course-result-parent-container'>
                <img src={MocBannerImg} className='fnc-main-course-result-banner' alt='Moc Banner' />
            </div>

            <Container className='fnc-main-course-result-header'>
                <Row >
                    <Col >
                        <h1>Amti</h1>
                        {/* <img src={Divider} alt="Caption Divider" style={{ marginTop: '-17px', width: '90px', height: '15px', backgroundColor: 'transparent' }} /> */}
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>

            <Container className='fnc-main-course-result-cover'>
                <Row>
                    <Col sm={7} >
                        {/* <h1>Archeological Survey of India</h1> */}
                        <p>Amti is a Maharashtrian version of daal that has a distinct sweet and tangy flavour. the word amti literally means tangy with the combination of spice and sweetness. the tangy taste is mainly due addition of kokum, sweetness from jaggery and spice is from the goda masala. it is ideally served with plain rice jeera rice for lunch and dinner.</p>
                    </Col>

                    <Col sm={5}>
                        {/* <div className='moccenter'>
                            <h1>Information</h1>
                        </div> */}

                        <div className='fnc-main-course-result-table'>
                            <p>Cuisine: Maharashtrian
                            </p>
                            <p>Total Time : 30 mins
                            </p>
                            <p>Preparation: 10 mins
                            </p>
                            <p>Cooking Time : 20 mins
                            </p>
                            <p>Serves : 3 to 4
                            </p>
                        </div>
                    </Col>

                </Row>

            </Container>

            {/*  */}

            <Container className='fnc-main-course-result-cover main-course-result'>
                <Row>
                    <Col sm={7} >
                        <h1>Directions</h1>
                        <h5>Cooking the  toor dal</h5>
                        <ul>
                            <li>Pressure cook the toor daal along with haldi and water for 3 to 4 whistles (or till the daal reaches a mash-able consistency).</li>
                            <li> Turn off the heat and let the pressure escape on its own.</li>
                            <li> Open the lid and mash the daal with a ladle.</li></ul>

                        <h5>Tempering</h5>

                        <ul>
                            <li>Heat oil or ghee in a kadhai.</li>
                            <li>Add jeera (cumin seeds) and mustard seeds. Wait till they pop and crackle.</li>
                            <li>Add haldi (turmeric powder) and hing (asafoetida) and stir.</li>
                            <li>Add curry leaves and green chilli.</li>
                            <li>Now add the cooked toor daal and stir well.</li>
                            <li>Add water to get the required consistency</li>
                        </ul>

                        <h5>Seasoning</h5>
                        <ul>
                            <li>Add goda masala, jaggery, coconut, kokum or tamarind juice and salt. (For using tamarind in place of kokum, add the tamarind to two tablespoons of hot water and keep aside for 15 mins. Then extract the juice by squeezing the pulp, and add to the daal.)</li>
                            <li>Let the daal simmer for 5 minutes. </li>
                        </ul>

                        <p>Finally, garnish with coriander leaves.</p>
                        <p>Amti pairs incredibly well with hot steamed rice garnished with ghee. Enjoy a comforting meal!</p>
                    </Col>

                    <Col sm={5}>
                        {/* <div className='moccenter'>
                            <h1>Information</h1>
                        </div> */}
                        <h1>Ingredients</h1>
                        <h5>For pressure cooking the daal</h5>

                        <ul>
                            <li>Pressure cook the toor daal along with haldi and water for 3 to 4 whistles (or till the daal reaches a mash-able consistency).</li>
                            <li> Turn off the heat and let the pressure escape on its own.</li>
                            <li> Open the lid and mash the daal with a ladle.</li></ul>


                        <h5>For tempering</h5>
                        <ul>
                            <li>1 teaspoon: Mustard seeds</li>
                            <li>1 teaspoon: Jeera or cumin seeds</li>
                            <li>½ teaspoon: Haldi or turmeric powder</li>
                            <li>1 pinch: Hing or asafoetida</li>
                            <li>8 to 10: Kadi patta or curry leaves</li>
                            <li>1 : Green chilli</li>
                            <li>2 tablespoons: Oil or ghee (home-made ghee takes the dish to another level)</li>
                        </ul>


                        <h5>For seasoning</h5>
                        <ul>
                            <li> 2 teaspoons: Goda masala</li>
                            <li> ½ teaspoon: Gur or jaggery (powdered)</li>
                            <li>1 tablespoon: Coconut (grated)</li>
                            <li>1 pinch: Kokums</li>
                            <li> 2: Kadi patta or curry leaves</li>
                            <li>1 tablespoon: Tamarind juice</li>
                            <li>1 cup: Water (to be added later as per the required consistency).</li>
                            <li> Salt as per taste</li>
                        </ul>

                        <h5>For garnishing</h5>
                        <ul>
                            <li> 1 teaspoons: Coriander leaves (chopped)</li>

                        </ul>

                    </Col>

                </Row>

            </Container>


        </>
    )
}

export default FCMainCourseResultpage

