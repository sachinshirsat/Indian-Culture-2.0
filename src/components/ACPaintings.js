import React from 'react'
import ACPaintingBan from '../image/ACPaintingBan.png'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';

import 'bootstrap/dist/css/bootstrap.min.css';

import ACPaintImg1 from '../image/acpaintimg1.png';
import ACPaintImg2 from '../image/acpaintimg2.png';
import ACPaintImg3 from '../image/acpaintimg3.png';
import ACPaintImg4 from '../image/acpaintimg4.png';

import ACCaveImg1 from '../image/accave1.png';
import ACCaveImg2 from '../image/accave2.png';
import ACCaveImg3 from '../image/accave3.png';
import ACCaveImg4 from '../image/accave5.png';
import SwrilDivider from './SwrilDivider';


// import './Paintings.css';

function ACPaintings() {
    const cave1campaka = () => {
        window.open('/cave1campaka', '_parent');
    };

    return (
        <>
            <div className='ac-paint-parent-container'>
                <img src={ACPaintingBan} className='acpaintbanner' alt='Free Banner' />
            </div>

            <Container className='acpaint-header'>
                <Row >
                    <Col >
                        <h1>Ajanta paintings</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>


            <div className='acpaint-image-container'>
                <div class="acpaint-image-item">
                    <img src={ACPaintImg1} alt="Image 1" />
                    <div class="acpaint-caption">Art of Ajanta</div>
                </div>
                <div class="acpaint-image-item">
                    <img src={ACPaintImg2} alt="Image 2" />
                    <div class="acpaint-caption">The process of making the Ajanta paintings
                    </div>
                </div>
            </div>

            <Container className='acpaint-fi-wrapper'>
                <div className="acpaint-text">
                    <h2>Narrative Paintings of Ajanta</h2>
                    <p>Narrative Buddhist paintings were made at the caves of Ajanta in both  the Early and the Later phase. The oldest surviving Buddhist paintings  in India are found in Caves 9 and 10. These Early paintings are based on  Jātaka Tales - stories about the previous existences of the Bodhisatva.  To many, it might seem absurd, that the Bodhisatva appears in these  stories as different animals like the monkey, elephant or deer, but he  displays in each story eternal compassion for all beings.</p>
                    <p>The best preserved copies of the Later paintings from the 5th century  CE are found in caves 1, 2,16, and 17. They also tell stories from the  Jātakas. We also find certain stories from the Avadāna, which detail  glorious deeds by Bodhisatvas - who as kings, merchants and princes  perform acts of great moral merit. Events from Śākyamūni Buddha’s life  are also depicted in the caves.</p>
                    <p>Major portions of the paintings are missing or damaged due to the  ravages of time, vandalism and misled conservation efforts. Written  sources of the stories have been a great help in identifying and  understanding these paintings. Dieter Schlingloff and Monica Zin have been documenting and identifying the paintings of Ajanta. Their work has been critical in creating a general understanding of the paintings at Ajanta.</p>
                    <p>These stories were perhaps commonly known to Buddhists who came to  these caves.Through a few scenes, the painting unlocked whole epic tales  in the minds of the viewer who knew the entire story in all its  details, like the image of the Gautama Buddha conjures up the great tale  of Prince Siddhartha and his journey to Enlightenment.
                        Even if you do not understand the stories, the beautiful figures and  stunning geographies present in the paintings will transport you to  another age where the ancient artists created these narratives.</p>
                    <p>You may not always find uniform form and style, aesthetic principles,  or narrative structures across even a single wall in the caves in  Ajanta. Multiple artist  guilds  seem to have been responsible for these paintings which often seem to  be done by many artists who worked together to create them.</p>
                </div>

                <div className="acpaint-slider">
                    <div className="acpaint-slider-wrapper" id="slider-wrapper">
                        <img src={ACPaintImg3} alt="Kheer 1" />

                    </div>
                </div>
            </Container>
            {/*  */}
            <Container className='acpaint-fi-wrapper'>
                <div className="acpaint-slider">
                    <div className="acpaint-slider-wrapper" id="slider-wrapper">
                        <img src={ACPaintImg4} alt="Kheer 1" />

                    </div>
                </div>

                <div className="acpaint-text">
                    <h2>The Paint Process</h2>
                    <p>The process of creating these paintings couldn’t have been easy. Though we see many different methods employed by the artists, a general pattern does emerge. Based on recent scientific studies undertaken by Manager Singh. The paintings are created using mineral colours on a smooth lime plaster. The walls in the cave were first chiselled to create a rough texture so that mud plaster can stick better to it. A rough mud plaster made perhaps from mud acquired from the river-side was mixed and applied to the walls.</p>
                    <p> Then a smooth mud plaster made with fine clay like texture mixed with vegetable fibre and grain husks was then applied to the wall. On top of this a smooth coat of lime was applied. Once the lime dried, the outline of the paintings were made in red ochre and soot black. Finally colour was applied. Artists used mineral colours such as lapis lazuli, yellow ochre, terra verte etc which were mixed with animal glue. The sheen that characterises the paintings at Ajanta was perhaps achieved by smoothening the painted surface with a trowel. And the result is their endurance across the centuries, even after the jungle had moved into the caves, the paintings have survived. All it needs is the keen eye of the viewer to appreciate the intricate and painstaking work on display.</p>
                </div>


            </Container>
            {/*  */}
            <Container className='acpaint-header'>
                <Row >
                    <Col >
                        <h1>Search By</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container>
                <div class="row justify-content-center acpaint-custom-dropdown">
                    <div class="col-md-3 mb-3">
                        <select class="form-select" aria-label="Cave Number">
                            <option selected value="Any">- Select Cave Number -</option>
                            <option value="1">Cave 1</option>
                            <option value="2">Cave 2</option>
                            <option value="3">Cave 3</option>
                        </select>
                    </div>

                    <div class="col-md-3 mb-3">
                        <select class="form-select" aria-label="Story-Wise">
                            <option selected value="Any">- Select Story-wise -</option>
                            <option value="1">Story 1</option>
                            <option value="2">Story 2</option>
                            <option value="3">Story 3</option>
                        </select>
                    </div>

                    <div class="col-md-1 mb-3 d-flex justify-content-center">
                        <Button type="button" class="btn acpaint-search-button">Apply</Button>
                    </div>
                </div>
            </Container>

            <Container>
                <div class="row justify-content-center g-0">
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1" onClick={cave1campaka}>
                            <img src={ACCaveImg1} alt="Image 1" />
                            <div class="ajanta-latercaves-caption1">Cave 1 - Campaka</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={ACCaveImg2} alt="Image 2" />
                            <div class="ajanta-latercaves-caption1">Cave 1 -</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={ACCaveImg3} alt="Image 1" />
                            <div class="ajanta-latercaves-caption1">Cave 1 -</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={ACCaveImg4} alt="Image 2" />
                            <div class="ajanta-latercaves-caption1">Cave 1 -</div>
                        </div>
                    </div>





                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={ACCaveImg1} alt="Image 1" />
                            <div class="ajanta-latercaves-caption1">Cave 1 -</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={ACCaveImg2} alt="Image 2" />
                            <div class="ajanta-latercaves-caption1">Cave 1 -</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={ACCaveImg3} alt="Image 1" />
                            <div class="ajanta-latercaves-caption1">Cave 1 -</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={ACCaveImg4} alt="Image 2" />
                            <div class="ajanta-latercaves-caption1">Cave 1 -</div>
                        </div>
                    </div>



                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={ACCaveImg1} alt="Image 1" />
                            <div class="ajanta-latercaves-caption1">Cave 1 -</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={ACCaveImg2} alt="Image 2" />
                            <div class="ajanta-latercaves-caption1">Cave 1 -</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={ACCaveImg3} alt="Image 1" />
                            <div class="ajanta-latercaves-caption1">Cave 1 -</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="ajanta-latercaves-image-item1">
                            <img src={ACCaveImg4} alt="Image 2" />
                            <div class="ajanta-latercaves-caption1">Cave 1 -</div>
                        </div>
                    </div>

                </div>
            </Container>

            <Container>
                <div class="d-flex justify-content-center">
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </div>
            </Container>



        </>
    )
}

export default ACPaintings
