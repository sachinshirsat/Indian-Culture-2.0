import {useEffect, React} from 'react';
// import './Didyouknow.css';
// import './Didyouknow.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

import DidYouKnow from '../image/Temple-Varanasi 1.png';
import SwirlDivider from '../image/SwirlDivider.png';

// install font awesome npm install @fortawesome/react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// npm install @fortawesome/free-solid-svg-icons
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Moc1 from '../image/Rectangle 33.png';
import Moc2 from '../image/Rectangle 34.png';
import Moc3 from '../image/Rectangle 35.png';
import Moc4 from '../image/Rectangle 36.png';
// import SwrilDivider from './SwrilDivider';
import { ArrowLeft } from 'react-feather';

// Glider.js npm i glider-js
import "glider-js/glider.min.css";
import Glider from "glider-js";

function Ltwodidyouknow() {
    useEffect(() => {
        new Glider(document.querySelector('.glider'), {
            slidesToShow: 1.1,
            slidesToScroll: 1,
            draggable: true,
            dots: '.dots',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2.1,
                        slidesToScroll: 1,
                        duration: 0.8,
                        arrows: {
                            prev: '.glider-prev',
                            next: '.glider-next',
                        },
                    },
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4.1,
                        slidesToScroll: 1,
                        duration: 0.8,
                        arrows: {
                            prev: '.glider-prev',
                            next: '.glider-next',
                        },
                    },
                },
            ],
        });
    }, []);
    // BacktoPrevious page
    const backtopre = () => {
        window.open('/', '_parent');
    }

    return (
        <>
            <div className='did-parent-container'>
                <img src={DidYouKnow} className='didknowbanner' alt='Moc Banner' />
            </div>
            <Container fluid>
            <Row>
                <Col sm={1}>
                <ArrowLeft className='backtoprevious' onClick={backtopre} size={45} />

                </Col>
            </Row>
           </Container>
            <Container className='didknow-header'>
                <Row>
                    <Col>
                        <h1>Varanasi</h1>
                        <img src={SwirlDivider} className='swrildivider' alt='divider' />
                    </Col>
                </Row>
            </Container>

            <Container className='didknowcover'>
                <Row>
                    <Col>
                        {/* <h1>06 September 1889</h1> */}

                        <p>Varanasi, or Benaras, (also known as Kashi) is one of the oldest living cities in the world. Varanasi`s Prominence in Hindu mythology is virtually unrevealed. Mark Twain, the English author and literature, who was enthralled by the legend and sanctity of Benaras, once wrote : “Benaras is older than history, older than tradition, older even than legend and looks twice as old as all of them put together. ”</p>
                        <p>The land of Varanasi (Kashi) has been the ultimate pilgrimage spot for Hindus for ages. Hindus believe that one who is graced to die on the land of Varanasi would attain salvation and freedom from the cycle of birth and re-birth. Abode of Lord Shiva and Parvati, the origins of Varanasi are yet unknown. Ganges in Varanasi is believed to have the power to wash away the sins of mortals.</p>
                        <p>Ganges is said to have its origins in the tresses of Lord Shiva and in Varanasi, it expands to the mighty river that we know of. The city is a center of learning and civilization for over 3000 years. With Sarnath, the place where Buddha preached his first sermon after enlightenment, just 10 km away, Varanasi has been a symbol of Hindu renaissance. Knowledge, philosophy, culture, devotion to Gods, Indian arts and crafts have all flourished here for centuries. Also a pilgrimage place for Jains, Varanasi is believed to be the birthplace of Parsvanath, the twenty-third Tirthankar.</p>
                        <p>Vaishnavism and Shaivism have co-existed in Varanasi harmoniously. With a number of temples, Mrs. Annie Besant chose Varanasi as the home for her ‘Theosophical Society’ and Pandit Madan Mohan Malviya, to institute ‘Benares Hindu University, the biggest University in Asia. Ayurveda is said to be originated at Varanasi and is believed to be the basis of modern medical sciences such as Plastic surgery, Cataract and Calculus operations. Maharshi Patanjali, the preceptor of Ayurveda and Yoga, was also affiliated with Varanasi, the holy city. Varanasi is also famous for its trade and commerce, especially for the finest silks and gold and silver brocades, since the early days.</p>
                        <p>Varanasi has also been a great center of learning for ages. Varanasi is associated with promotion of spiritualism, mysticism, Sanskrit, yoga and Hindi language and honored authors such as the ever-famous novelist Prem Chand and Tulsi Das, the famous saint-poet who wrote Ram Charit Manas. Aptly called as the cultural capital of India, Varanasi has provided the right platform for all cultural activities to flourish. Many exponents of dance and music have come from Varanasi. Ravi Shankar, the internationally renowned Sitar maestro and Ustad Bismillah Khan, (the famous Shehnai player) are all sons of the blessed city or have lived here for major part of their lives.</p>
                    </Col>
                </Row>

            </Container>
            <Container className='didknow-header'>
                <Row>
                    <Col>
                        <h1>Previous Did you knows?</h1>
                        <img src={SwirlDivider} className='swrildivider' alt='divider' />
                    </Col>
                </Row>
            </Container>

            <main className="main">
                <div className="container">
                    <div className="glider-contain">
                        <div className="glider hide-scrollbar">
                            <div className="card-image ">
                                {/* <img src="https://source.unsplash.com/1280x720/?animal" alt="Slider " /> */}
                                <img src={Moc1} alt="Slider " />
                                {/* <div className='didknowtext' style={{ left: '30px', top: '180px' }}><p>Lorem Ipsum</p></div> */}


                            </div>
                            <div className="card-image">
                                <img src={Moc2} alt="Slider Imag" />
                            </div>

                            <div className="card-image">
                                <img src={Moc3} alt="Slider Ima" />
                            </div>

                            <div className="card-image">
                                <img src={Moc4} alt="Slider I" />
                            </div>

                            <div className="card-image">
                                <img src={Moc1} alt="Slider " />
                             </div>

                            <div className="card-image">
                                <img src={Moc2} alt="Slide" />
                             </div>

                            <div className="card-image">
                                <img src={Moc3} alt="Slid" />
                             </div>
                             
                            <div className="card-image">
                                <img src={Moc4} alt="Sli" />

                            </div>
                        </div>
                        <span role="button" aria-label="Previous" className="glider-prev">
                            <FontAwesomeIcon icon={faChevronLeft} style={{ marginLeft: '14px' }} />
                            </span>
                        <span role="button" aria-label="Next" className="glider-next">
                            <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: '14px' }} />
                            </span>
                        {/*<span role="tablist" className="dots"></span>*/}
                    </div>
                </div>
            </main>

            <Container className='didknow-header'>
                <Row>
                    <Col>
                        {/* <h1>Previous Did you knows?</h1> */}
                        <img src={SwirlDivider} className='swrildivider' alt='divider' />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Ltwodidyouknow
