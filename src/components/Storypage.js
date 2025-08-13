import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'; 
import SwrilDivider from '../image/SwirlDivider 12.png';

// import Stoimg1 from '../image/Rectangle 14.png';

function Storypage() {
    const story = () => {
        window.open('/underconstructor', '_parent');
      };  
    return (
        <div>

            <section>

                <div className="section " id="section-2" >
                    <Container className='story-header'>
                        <Row >
                            <Col >
                                <h1>Stories</h1>
                                <img src={SwrilDivider} alt="" style={{ width: '90px', height: '15px', backgroundColor: 'transparent' }}/>

                            </Col>
                        </Row>
                    </Container>
                    <Container style={{width:'100%', maxWidth: '1440px', margin:'0 auto'}}>
                        <div className="storygrid">
                            <div className="item item--medium">
                                <div className="item__details">
                                Koh-i-Noor
                                </div>
                                {/* <img src={Stoimg1}  alt="Koh-i-Noor" /> */}
                            </div>
                            <div className="item item--large">
                                <div className="item__details">
                                Rath Yatra
                                </div>
                            </div>

                            <div className="item item--medium">
                                <div className="item__details">
                                Dakshina Meru
                                </div>
                            </div>
                            <div className="item item--large">
                                <div className="item__details">
                                Soulful Sivsagar
                                </div>
                            </div>

                            <div className="item item--large">
                                <div className="item__details">
                                Sanchi Monument
                                </div>
                            </div>

                            <div className="item item--large">
                                <div className="item__details">
                                Lord Padmanabha
                                </div>
                            </div>


                            <div className="item item--large">
                                <div className="item__details">
                                Sher-e-Punjab
                                </div>
                            </div>

                            <div className="item item--large">
                                <div className="item__details">
                                Delhi Durbars
                                </div>
                            </div>
                            <div className="item item--large">
                                <div className="item__details">
                                The Jagannath Temple
                                </div>
                            </div>
                            
                            <div className="item item--large">
                                <div className="item__details">
                                Diskit Monastery
                                </div>
                            </div>
                            <div className="item item--medium">
                                <div className="item__details">
                                Hampi
                                </div>
                            </div>
                            <div className="item item--medium">
                                <div className="item__details">
                                Bahadur shah jafar
                                </div>
                            </div>
                           {/*  <div className="item ">
                                <div className="item__details">
                                    13
                                </div>
                            </div> */}

                            {/*  Extra thumbnails*/}
                            {/*  <div class="item">
                            <div class="item__details">
                                cake cookie croissant
                            </div>
                        </div>
                        <div class="item item--medium">
                            <div class="item__details">
                                liquorice sweet roll
                            </div>
                        </div>
                        <div class="item item--large">
                            <div class="item__details">
                                toffee bear claw
                            </div>
                        </div>                       
                        <div class="item item--full">
                            <div class="item__details">
                                danish dessert lollipop
                            </div>
                        </div> */}

                        </div>
                    </Container>
                    <Container className='storycenter'>
                        <Row >
                            <Col>
                                <button class="storybtn" onClick={story}><span>View All </span></button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    )
}

export default Storypage
