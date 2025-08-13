import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import './RecRelResultpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'


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
function RecRelResultpage() {
    return (
        <>
            <div >
                <div className='recrel-result-parent-container'>
                    <img src={ArtefactsResultBanner} className='recrel-result-banner' alt='Moc Banner' />

                </div>

                <div className="recrel-result-float-container">
                <a href="#" className="icon one"> Share</a>
                <a href="#" className="icon two">QR Code</a>

            </div>


                <Container >

                    <Row style={{ marginTop: '20px' }}>
                        {/* <Col xs={1} className='arcicon'>
                        <img src={Arcicon} alt='Archive Icon' />

                    </Col> */}
                        <Col xs={0} className='recrel-result-title' >
                            <img src={Artefactsicon} className='arcicon' alt='Archive Icon' />
                            <div className='recrel-result-vertical'></div>
                            Photograph of Maharaja Sir Kishen Pershad Yamin by Lala Deen Dayal

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
                            <p className='recrel-result-para'>
                                <span className='recrel-result-bold'> Material:</span> Red Sandstone<br />

                                <span className='recrel-result-bold'> State/Region:</span> Western India (possibly Bombay/Mumbai)
                                <br />
                                <span className='recrel-result-bold'> Antiquity:</span> 1903<br />


                                <span className='recrel-result-bold'> Date (year) of Retrieval:</span> 2022<br />

                                <span className='recrel-result-bold'> Retrieved from:</span> Australia

                            </p>
                        </Col>

                    </Row>
                </Container>
                <Container>
                    <Accordion defaultActiveKey='0' className='recrel-result-accord-component'>
                        <Accordion.Item eventKey="0" className='recrel-result-accord-item'>
                            <Accordion.Header className='recrel-result-accord-item-header'>Brief Description:</Accordion.Header>
                            <Accordion.Body className='recrel-result-accord-para'>
                                <p>
                                    The photograph captures Maharaja Sir Kishen Pershad Bahadur, also known as Yamin-us-Sultanat (right hand of the realm), who served as Diwan (prime minister) of Hyderabad from 1901 to 1911 and again from 1926 to 1937 under Nizam Mahbub Ali Khan and Mir Osman Ali Khan respectively. Esteemed for his competence, he was a prominent figure in Hyderabad's nobility and a staunch advocate of ganga-jamuni tehzeeb, which promotes harmony between different communities. During his tenure, he significantly increased Hyderabad's revenue and provided substantial aid to those affected by the catastrophic Musi River flood in 1908, regardless of caste or religion. Maharaja Sir Kishen Pershad was honoured with the KCIE (Knight Commander) in 1903 and the GCIE (Knight Grand Commander) in 1910 of the Most Eminent Order of the Indian Empire, as evidenced by the insignia displayed on his chest in the photograph.</p>
                                <p>
                                    Dressed in a full-sleeved, front-open coat with intricate embroidery and a high stand-up collar, Maharaja Sir Kishen Pershad is also wearing European-style pants with side linings. His head is adorned with a white beehive-shaped turban known as a dastar. The photograph, dated 1903 and featuring the State’s emblem along with the word "Bombay," was taken by Lala Deen Dayal and Sons, a renowned studio founded by Lala Deen Dayal, a distinguished Indian photographer of the late 19th century. Lala Deen Dayal was awarded the title of Raja by Nizam Mahbub Ali Khan for his exceptional photographic skills and served as the court photographer for the Nizam of Hyderabad.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </Container>


            </div>
        </>
    )
}

export default RecRelResultpage
