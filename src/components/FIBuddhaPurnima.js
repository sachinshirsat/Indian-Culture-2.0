import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './FIBuddhaPurnima.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BuddhaBan from '../image/BuddhaBan.png'

import FIBuddhaimg1 from '../image/fibuddhaimg1.png'
import FIBuddhaimg2 from '../image/fibuddhaimg2.png'
import FIBuddhaimg3 from '../image/fibuddhaimg3.png'
import SwrilDivider from './SwrilDivider';

function FIBuddhaPurnima() {
    // slider start here
    var settings1 = {
        dots: false,
        infinite: false,
        lazyload: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 0,
        arrow: false,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,

        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.05,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    draggable: true,
                    autoplay: false,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                    arrows: false,
                    draggable: true,
                    autoplay: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.04,
                    slidesToScroll: 1,
                    // initialSlide: 1,
                    dots: false,
                    arrows: false,
                    draggable: true,
                    autoplay: false,

                }
            },



        ]
    };

    // 
    const ficulinarytraditions = () => {
        window.open('/ficulinarytraditions', '_parent');
    };


    const fiperformativetraditions = () => {
        window.open('/fiperformativetraditions', '_parent');
    };

    
    const fimythslegends = () => {
        window.open('/fimythslegends', '_parent');
    };
    return (
        <>
            <div className='fibudaha-parent-container'>
                <img src={BuddhaBan} className='fibudaha-banner' alt='Free Banner' />
            </div>

            <div className="fibudaha-float-container">
                <a href="#" className="icon one"> Share</a>
                <a href="#" className="icon two">QR Code</a>

            </div>

            <Container className='fibudaha-header'>
                <Row >
                    <Col >
                        <h1>BUddha Purnima</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='fibudaha-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p >The Triple Blessed Festival</p>
                        <p>Considered the most important Buddhist festival, Buddha Purnima is celebrated by Buddhists around the world. In India, this annual festival is particularly significant in the states of Sikkim, Arunachal Pradesh and Maharashtra, as well as parts of Himachal Pradesh, West Bengal and Ladakh. Also known as Buddha Jayanti or Vesak, this auspicious occasion is usually celebrated on the Purnima (full moon day) of the Vaisakha month of the Buddhist and Hindu calendars. This typically corresponds to the month of April or May in the Gregorian tradition.</p>

                        <p>The significance of Buddha Purnima differs across various countries. In India and other South and Southeast Asian nations, Buddha Purnima is celebrated as the "thrice-blessed day." It commemorates all the three major life events of the Buddha– birth, enlightenment and attainment of Mahiparinirvana (release) after death. However, in other parts of the world, the day signifies the birth of the Buddha while his spiritual awakening and death are honoured on separate occasions.</p>

                        <p>On this day, followers of the Buddha participate in prayers and listen to various philosophical discourses. They maintain sila (moral discipline) and engage in samadhi (meditation), in addition to making offerings to monks. Homes are decorated, and alms are distributed to the needy. Monks recite Buddhist scriptures, invoking peace, love, compassion, and unity. Some Buddhist monasteries place an image of the baby Buddha in a small basin filled with flowers and water. Devotees pour water over the statue, symbolically representing the heavenly offerings made by devas (celestial beings) and spirits.</p>

                        <p>The festival of Buddha Purnima celebrates the message of Gautama Buddha and acts as a reminder to live a life of kindness, non-violence and wisdom.</p>

                        <p>Celebration at Bodh Gaya</p>

                        <p>A grand celebration of Buddha Purnima takes place at the ancient site of Bodh Gaya in the Gaya district of Bihar.  During this occasion, Bodh Gaya becomes particularly significant, as thousands of visitors from India and around the world gather at the Mahabodhi Temple. According to Buddhist beliefs, the Buddha attained enlightenment under the Bodhi Tree, the ‘Tree of Awakening,’ at Bodh Gaya. It is a large sacred fig tree located inside the premises of the Mahabodhi Temple and is considered a descendant of the original Bodhi Tree.</p>

                        <p>The temple is decorated with panchsheel flags, representing the five moral precepts (abstain from acts like stealing, sexual misconduct, killing living beings, lying, and intoxication) of Buddhism. The festivities begin with a large ceremonial procession along the temple road, from the 80 ft. tall Great Buddha statue to the Mahabodhi Temple. Upon reaching the temple, the monks and devotees engage in chanting suttas from Buddhist holy texts under the shade of the sacred Bodhi tree, followed by prayers at the Sujata Stupa. Kheer (rice pudding) is offered as prasad (food offerings made in the name of the god and later distributed among followers) and lamps are lit at the butter lamp house in the evening.</p>

                        <p>Buddha Mahotsav in Sarnath</p>

                        <p>The town of Sarnath, near Varanasi in Uttar Pradesh, is renowned as the site of the Buddha’s first sermon and it becomes the focal point of festivities during Buddha Mahotsav. During this grand occasion, the town hosts a range of events including special prayers, fairs, religious sermons, discourses, lectures, and photo exhibitions. Pilgrims and local communities gather to honour and celebrate the life and teachings of Lord Buddha. A procession of monks and devotees travels through the town, carrying relics of the Buddha on a beautifully decorated chariot. These relics are then displayed for public viewing at the Mahabodhi Temple of Sarnath for just one day, allowing devotees to pay their respects and seek blessings. Additionally, the ancient Dhamek Stupa and the Mulagandha Kuty Vihara temple are exquisitely illuminated, and many devotees visit the nearby Ganga ghat to take a ceremonial dip in the holy river.</p>

                        <p>Saga Dawa</p>
                        <p>Saga Dawa, or the Triple Blessed Festival, is celebrated with great religious fervour by the Tibetan Buddhists in Sikkim, Arunachal Pradesh, Himachal Pradesh and Ladakh. Saga Dawa is the 4th month in the Tibetan lunar calendar. It usually corresponds to May or June in the Gregorian calendar and Vaisakha or Jyestha in the Hindu calendar. This month-long festival culminates on Saga Dawa Düchen, the full moon night that marks the birth, enlightenment and Mahaparinirvana (release after death) of the Buddha. Since the Tibetan and Hindu calendars are quite similar, Saga Dawa Duchen and Buddha Purnima coincide often, but not always.</p>

                        <p>Saga Dawa, also known as Bumgyur Dawa, is celebrated as the "month of merits". It is believed that the good deeds performed during this “month of merits” are rewarded many times over in the future. Alongside commemorating Buddha and his activities, the festival's primary purpose is to engage in prayer.</p>

                        <p>During the Saga Dawa Festival, Tibetan Buddhists visit monasteries and temples to offer prayers. The festival's overarching purpose is to pray for the longevity of all revered Gurus across traditions, the propagation and endurance of Buddha's teachings in the hearts of all sentient beings, and global peace.</p>

                        <p>For an entire month, devotees give alms to the needy, honouring the message of the Buddha’s life. On the final day, a vibrant procession of monks wearing elaborate masks and playing musical instruments can be seen on the streets. The monks are followed by devotees carrying sacred texts, portraits and statues. People gather outside to watch the procession and touch the sacred objects in reverence.</p>

                    </Col>
                </Row>

            </Container>


            <Container fluid style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                <Slider1 {...settings1}>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="fibudaha-card-2"><img src={FIBuddhaimg1} className="img img-responsive" alt='rarebook' />
                            <div className="fibudaha-name" style={{ left: '80px', top: '215px' }}><p>culinary traditions</p></div>
                            <div className="fibudaha-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='fibudaha-icons' variant="outline-light" onClick={ficulinarytraditions}>Explore</Button>

                        </div>
                    </div>

                    {/*  <Col>
                        
                        <div class="profile-card-2"><img src={Rareimg4} class="img img-responsive" alt='rarebook' />
                            <div class="profile-name" style={{ left: '50px', top: '215px' }}>Sayajirao Gaekwad - III</div>
                            <div class="profile-username"></div>
                            <Button className='profile-icons' variant="outline-light">Explore</Button>

                        </div>
                    </Col> */}

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="fibudaha-card-2"><img src={FIBuddhaimg2} className="img img-responsive" alt='rarebook' />
                            <div className="fibudaha-name" style={{ left: '50px', top: '215px' }}><p>performative traditions</p></div>
                            <div className="fibudaha-username"></div>
                            <Button className='fibudaha-icons' variant="outline-light" onClick={fiperformativetraditions}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="fibudaha-card-2"><img src={FIBuddhaimg3} className="img img-responsive" alt='rarebook' />
                            <div className="fibudaha-name" style={{ left: '80px', top: '215px' }}><p>myths & legends</p></div>
                            <div className="fibudaha-username" ></div>
                            <Button className='fibudaha-icons' variant="outline-light" onClick={fimythslegends}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>




                </Slider1>
            </Container>
        </>
    )
}

export default FIBuddhaPurnima
