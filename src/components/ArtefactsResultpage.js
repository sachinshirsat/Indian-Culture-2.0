import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import './ArtefactsResultpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
// import Table from 'react-bootstrap/Table';


import Artefactsicon from '../image/ArtefactsIcon.png';

import ArtefactsResultBanner from '../image/ArtefactsBanner.png';


const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});
function ArtefactsResultpage() {
    return (
        <>
            <div >
                <div className='artresult-parent-container'>
                    <img src={ArtefactsResultBanner} className='artresult-banner' alt='Moc Banner' />

                </div>

                <div className="artresult-float-container">
                <a href="#" className="icon one"> Share</a>
                <a href="#" className="icon two">QR Code</a>

            </div>

                <Container >

                    <Row style={{ marginTop: '20px' }}>
                        {/* <Col xs={1} className='arcicon'>
                        <img src={Arcicon} alt='Archive Icon' />

                    </Col> */}
                        <Col xs={0} className='artresult-title' >
                            <img src={Artefactsicon} className='artresult-icon' alt='Archive Icon' />
                            <div className='artresult-vertical'></div>
                            Red Sandstone Couple

                            {/*   <img src={ArcQR} alt='Archive Icon' />

                            <img src={ArcShare} alt='Archive Icon' /> */}
                        </Col>
                        {/* <Col  className='arcqrcode'>

                        <img src={ArcQR} alt='Archive Icon' />
                    </Col>
                    <Col >
                        <img src={ArcShare} alt='Archive Icon' />

                    </Col> */}

                    </Row>
                </Container>
                <hr style={{ width: '100%', marginLeft: 'auto' }} />
                <Container>
                    <Row>

                        <Col>
                            <p className='artresult-para'>
                                <span className='artresult-bold'> Type:</span> Bas Relief
                                <br />

                                <span className='artresult-bold'> Material:</span> Red Sandstone<br />

                                <span className='artresult-bold'> Antiquity:</span> 1st to 2nd century CE<br />

                                <span className='artresult-bold'>Place of origin:</span> Central India<br />

                                <span className='artresult-bold'> Date (year) when stolen:</span> Early 2000s<br />

                                <span className='artresult-bold'> Date (year) of Retrieval:</span> 2021<br />

                                <span className='artresult-bold'> Retrieved from:</span> The Nancy Wiener Art Gallery, Manhattan USA<br />

                                <span className='artresult-bold'> Mode of Retrieval:</span> Seized by the agents of the Department of Homeland Security in a raid and later repatriated to India.<br />

                                <span className='artresult-bold'> Present Location:</span> NA

                            </p>
                        </Col>

                    </Row>
                </Container>
                <Container>
                    <Accordion defaultActiveKey='0' className='artresult-accord-component'>
                        <Accordion.Item eventKey="0" className='artresult-accord-item'>
                            <Accordion.Header className='artresult-accord-item-header'>Heist Tale</Accordion.Header>
                            <Accordion.Body className='artresult-accord-para'>
                                <p>
                                    The  enigmatic saga of a nearly two-thousand-year-old red sandstone  sculpture of a couple, its odyssey across continents, and its eventual  repatriation, unfolds as a riveting tale of intrigue, redemption, and  the preservation of cultural legacy.</p>
                                <p> The sculpture was pilfered by a band of thieves allegedly  under the directives of Sharod Singh, a notorious figure in the realm of  art and antiquity theft and smuggling, likely in the early 2000s.  Singh, known for catering to international clientele, transmitted a  photograph of the stolen idol to Doris Wiener in 2002. These images,  referred to as ‘robber photos’ by law enforcement agencies, facilitate  communication among criminals, buyers, and smugglers in the clandestine  underworld of art trafficking. </p>
                                <p> Doris Wiener, was renowned for her extensive collection of  Asian art and antiquities and had made substantial contributions to  major museums across the United States since the 1980s. Operating from  her gallery in Manhattan, she collaborated closely with her daughter,  Nancy Wiener, in procuring artefacts from smugglers and idol thieves  operating in India. Consequently, Doris acquired the stolen sandstone  couple from Sharod Singh in 2002, although evidence suggests it did not  reach the United States until 2007, according to recovered emails and  records. This delay in transit can be attributed to Doris's tactic of  fencing the idol, a common strategy in the art world where stolen  objects are kept concealed in safe houses and free ports worldwide until  suspicions surrounding their provenance dissipate. </p>
                                <p>  To facilitate the smuggling of the artefact into the United  States, Doris utilised a shell company named Kurt Anderson Inc., owned  by her, for trafficking artefacts and antiquities into the country. The  Kurt Anderson Account ledger documents the transaction under line #49,  detailing the acquisition of "Sharod Singh Seated Stones (3) in  partnership with Nancy”, priced at $150,000 (USD).
                                    Following the demise of Doris Wiener in April 2011, her  entire collection was passed on to her daughter, Nancy Wiener. Nancy  decided to auction off a significant portion of the collection,  including the red sandstone couple and other stolen artefacts, through  Christie’s auction house. The auction commenced on March 20, 2012.  However, investigations later revealed that Nancy provided Christie's  auction house with falsified provenance documents, deceptively claiming  that her mother had acquired the statue in London in the late 1990s. </p>
                                <p> Engaging in further deception, Nancy employed a surrogate  to purchase the red sandstone couple statue at the auction for herself.  This tactic, commonly used to launder stolen artefacts, aims to create a  fictitious paper trail, and potentially increase the value of the  artefact as it acquires the status of a "previously published piece." </p>
                                <p> Upon reclaiming ownership of the statue, Nancy fabricated  additional provenance documents, asserting that the statue had been  circulating in the art market since the 1970s. She even obtained a  certificate from the Art Loss Register, an international database of  stolen art, affirming that the artefact had not been reported as stolen. </p>
                                <p> Eyewitness testimonies corroborate that the statue remained  in Nancy's gallery as of March 2016 when she attempted to sell it to  another individual. To further embellish her narrative, Nancy concocted a  third fake provenance, claiming that the statue had been part of her  mother’s collection since 1992. She even referenced the Christie's  catalogue from March 20, 2012, to lend credibility to her fabricated  story. </p>
                                <p> While the criminal underworld remained active in the  trafficking of stolen art and artefacts, law enforcement agencies in  India, Interpol, and the United States Department of Homeland Security  actively collaborated to dismantle the illicit art market and apprehend  smugglers and idol thieves.
                                    On March 11, 2016, acting on intelligence gathered by the  Department of Homeland Security, agents conducted simultaneous raids at  multiple locations in New York, including the Nancy Wiener art gallery.  This operation coincided with Asia Week in New York, a prestigious event  attracting esteemed art collectors and museum curators worldwide,  particularly interested in Asian and Southeast Asian art.
                                    During these raids, authorities confiscated numerous  artefacts from the Wiener collection, along with hundreds of emails and  several robber photos, implicating Doris Wiener and her daughter, Nancy  Wiener. Subsequently, US authorities arrested Nancy Wiener, and in March  2016, the two millennia-old red sandstone couple was recovered from the  Nancy Wiener gallery. </p>
                                <p> Finally, the bas-relief of the red sandstone couple,  alongside 157 other objects, was repatriated to India during the state  visit of the Honourable Prime Minister of India Mr. Narendra Modi to the  United States in September 2021. This marked the culmination of  extensive efforts aimed at returning the priceless artefact to its  homeland after more than a decade.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </Container>

                <Container>
                    <Accordion defaultActiveKey={null} className='artresult-accord-component'>
                        <Accordion.Item eventKey="0" className='artresult-accord-item'>
                            <Accordion.Header className='artresult-accord-item-header'>Iconography</Accordion.Header>
                            <Accordion.Body className='artresult-accord-para'>
                                <p>
                                    Crafted from red sandstone nearly 2,000 years ago, this bas-relief sculpture depicts a couple standing in the samabhanga (upright) posture, side by side. The male figure holds a padma, or lotus, in his right hand, while his left hand gently grasps the fold of his dhoti, or lower garment, near his waist. Conversely, the female figure holds a padma-shaped chauri, or lotus-shaped fly whisk, in her right hand, while her left-hand rests on the ornate girdle known as the mekhala, supporting the kativastra,  or lower garment. Both figures are adorned with intricate ornaments;  the male wears elaborate earrings that elongate his ears and bracelets  on his right arm, while the female dons large circular earrings and  multiple bangles that nearly cover her entire forearm.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </Container>
            </div>
        </>
    )
}

export default ArtefactsResultpage
