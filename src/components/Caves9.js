import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Cave9.css';
import { Container, Row, Col } from 'react-bootstrap'

import Cave9FloorPlanBan from '../image/cave 9 floorplan 1.png'
import ACaveIcon from '../image/caveicon.png'

import Cave9Img1 from '../image/cave9img1.png'
import Cave9Img2 from '../image/cave9img2.png'
import View3DModel from './View3DModel';

function Cave9() {
    // State to control the modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className='cave9-parent-container'>
                <img src={Cave9FloorPlanBan} className='cave9-banner' alt='Free Banner' />
                <button className='view-3d-model-btn' onClick={openModal}>View 3D Model</button>

                {/* Modal */}
                {isModalOpen && (
                    <div className='modal-overlay' onClick={closeModal}>
                        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                            <button className='close-modal-btn' onClick={closeModal}>
                                &times;
                            </button>
                            <View3DModel/>
                            {/* Embed 3D Model Viewer or any other content */}
                        </div>
                    </div>
                )}
            </div>


            <Container >

                <Row style={{ marginTop: '20px' }}>

                    <Col xs={0} className='cave9-title' >
                        <img src={ACaveIcon} className='cave9-icon' alt='Archive Icon' />
                        <div className='cave9-vertical'></div>
                        Garo tribe of Meghalaya performing traditional dance


                    </Col>
                    {/* <Col  className='arcqrcode'>

                        <img src={ArcQR} alt='Archive Icon' />
                    </Col>
                    <Col >
                        <img src={ArcShare} alt='Archive Icon' />

                    </Col> */}

                </Row>
            </Container>
            <hr />

            <Container className='cave9-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>
                            Cave type</p>

                        <p>A caityagrḥa or prayer hall from the Early phase - this cave once had a courtyard. It is 45 feet by 23 feet and has 23 pillars and has a stūpa at the nave.</p>

                        <p>Period</p>

                        <p>This cave is from the 1st century BCE and presents the iconography from the period. Throughout the cave, you see innovations brought from the 5th century - when additions of new paintings and sculptures of the Buddha were made.</p>

                        <p>Elements</p>

                        <p>The stone facade is adorned with five caitya window motifs. The interiors of the caves were once painted, only traces of the narrative paintings remain on the walls.</p>

                        <p>Patron</p>

                        <p>Several inscriptions at the cave are painted and are from the Later period. One on the top of the 9th pillar on the right side of the cave is from Monk Badanta of Gopiputra. The donation of the Buddha image is supposed to accrue merit to all sentient beings who would be blessed by the attainment of supreme knowledge.

                        </p>
                    </Col>
                </Row>

            </Container>

            <div className='cave9-image-container'>
                <div class="cave9-image-item">
                    <img src={Cave9Img1} alt="Image 1" />
                    <div class="cave9-caption">Cave Interior</div>
                </div>
                <div class="cave9-image-item">
                    <img src={Cave9Img2} alt="Image 2" />
                    <div class="cave9-caption">Cave Exterior</div>
                </div>
            </div>
        </>
    )
}

export default Cave9
