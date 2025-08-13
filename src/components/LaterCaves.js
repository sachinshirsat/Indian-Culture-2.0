import React from 'react'
import LaterBan from '../image/LaterBan.png'
import { Container, Row, Col } from 'react-bootstrap';
import CavesImg1 from '../image/cavesimg1.png';
import CavesImg2 from '../image/cavesimg2.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import LaterImg1 from '../image/laterimg1.png';
import LaterImg2 from '../image/laterimg2.png';

import LaterImg3 from '../image/laterimg3.png';
import LaterImg4 from '../image/laterimg4.png';
import SwrilDivider from './SwrilDivider';
// import './LaterCaves.css';

function LaterCaves() {
    const cave9 = () => {
        window.open('/cave9', '_parent');
      };
    return (
        <>
            <div className='ajanta-latercaves-parent-container'>
                <img src={LaterBan} className='ajanta-latercaves-banner' alt='Free Banner' />
            </div>

            <Container className='ajanta-latercaves-header'>
                <Row >
                    <Col >
                        <h1>Later Caves</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='ajanta-latercaves-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>
                            The second phase of activity at the site is dated to the 5th century  CE. Made through individual donations from wealthy patrons connected to  the Vakataka kings, these caves are more ambitious in scale and scope.  There are twenty-five caves  made in this period, each at various stages of completion. We again  find two chaityagṛhas (Cave 19 and 26) in this period. The curious  development of this period is the presence of the Buddha image which is  superimposed on the stūpa. Cave 19 is part of a set of caves (17-20)  donated by a king whose name cannot be clearly deciphered from the  inscription he left outside Cave 17.  Referring to himself as Dharādhipa, he writes that after the premature  death of his younger brother Ravisambha, he has decided to lead a pious  life adorning the earth with stūpas and vihāras. The other chaityagṛha  (Cave 26) is part of large cave-complex made by a powerful monk Buddhabhadra.</p>
                        <p>Cave 16 was donated by Vakataka King Hariṣeṇa’s secretary or minister  Varāhadeva. It is a perfect example of the vihāras in this period,  which are now larger in size and scale and house a Buddha shrine. The  interior of the cave consists of a pillared hall with cells on either  side and a large Buddha shrine at the back of the cave.  By the time we move to one of the last caves made at Ajanta, we see  that the entire cave is decorated with sculpted and painted elements.  The vihāras from this period have a facade, porch with cells at either  end. The walls of the cave are painted and the caves have exquisite sculptures.</p>
                        <p>We can conclude that the caves at Ajanta would not have been possible  without the will and need felt by the people who commissioned the  caves. But what can we make of the actual process of making these caves  and the labour involved? Spink has written extensively of the changing  modes of design, aesthetic and iconography of the caves. He also has  examined the “unfinished” caves at Ajanta like Cave 24  to gauge the process of creating the caves. The basalt rock cliff has  natural fault lines that would have made the process a difficult and  laborious one. The collapsed ceiling in Cave 4 and landslides that have  destroyed Caves 8 and 15A speak of the dangers involved. These man-made  caves required excavators to carve out the caves out of the tough  rock-face. Add to that the work done by artists and craftspeople to  carve out sculptured figures, flora, fauna and flying yakṣas. No wonder  that the caves remain a unique and important testament to Buddhist cave  architecture in the world.
                        </p>
                    </Col>
                </Row>

            </Container>

            <div className='ajanta-latercaves-image-container'>
                <div class="ajanta-latercaves-image-item" >
                    <img src={LaterImg1} alt="Image 1" />
                    <div class="ajanta-latercaves-caption">Stūpa with Buddha image from Cave 19, one of the later chaityagṛhas.</div>
                </div>
                <div class="ajanta-latercaves-image-item">
                    <img src={LaterImg2} alt="Image 2" />
                    <div class="ajanta-latercaves-caption">Cave 16 inscription made by its patron Varāhadeva.</div>
                </div>
            </div>

            <Container className='ajanta-latercaves-header'>
                <Row >
                    <Col >
                        <h1>Later ChaityagRhas</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container>
                <div class="row justify-content-center g-0">
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1" onClick={cave9}>
                            <img src={LaterImg3} alt="Image 1" />
                            <div class="ajanta-latercaves-caption1">Cave 19</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={LaterImg4} alt="Image 2" />
                            <div class="ajanta-latercaves-caption1">Cave 26</div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container className='ajanta-latercaves-header'>
                <Row >
                    <Col >
                        <h1>later viharas</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container>
                <div class="row justify-content-center g-0">
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={LaterImg3} alt="Image 1" />
                            <div class="ajanta-latercaves-caption1">Cave 19</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={LaterImg4} alt="Image 2" />
                            <div class="ajanta-latercaves-caption1">Cave 26</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={LaterImg3} alt="Image 1" />
                            <div class="ajanta-latercaves-caption1">Cave 19</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={LaterImg4} alt="Image 2" />
                            <div class="ajanta-latercaves-caption1">Cave 26</div>
                        </div>
                    </div>
                    
                   
            
          
                
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={LaterImg3} alt="Image 1" />
                            <div class="ajanta-latercaves-caption1">Cave 19</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={LaterImg4} alt="Image 2" />
                            <div class="ajanta-latercaves-caption1">Cave 26</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={LaterImg3} alt="Image 1" />
                            <div class="ajanta-latercaves-caption1">Cave 19</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={LaterImg4} alt="Image 2" />
                            <div class="ajanta-latercaves-caption1">Cave 26</div>
                        </div>
                    </div>
                   
               
           
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={LaterImg3} alt="Image 1" />
                            <div class="ajanta-latercaves-caption1">Cave 19</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={LaterImg4} alt="Image 2" />
                            <div class="ajanta-latercaves-caption1">Cave 26</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={LaterImg3} alt="Image 1" />
                            <div class="ajanta-latercaves-caption1">Cave 19</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={LaterImg4} alt="Image 2" />
                            <div class="ajanta-latercaves-caption1">Cave 26</div>
                        </div>
                    </div>
                   
                </div>
            </Container>




        </>
    )
}

export default LaterCaves
