import { React, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './TTDigiCatelogue.css';

import TTDigiImage1 from '../image/ttdigiimg1.png'
import TTDigiImage2 from '../image/ttdigiimg2.png'
import TTDigiImage3 from '../image/ttdigiimg3.png'
import TTDigiImage4 from '../image/ttdigiimg4.png'

import TTIcon from '../image/tticon.png'
import TTDigiCateBan from '../image/TTDigiCateBan.png'

function TTDigiCatelogue() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openPopup = (imageSrc) => {
        setSelectedImage(imageSrc);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedImage('');
    };

    // 
    const underconstructor = () => {
        window.open('/underconstructor', '_parent');
      };
    return (
        <>
            <div className='ttdigicatelog-parent-container'>
                <img src={TTDigiCateBan} className='ttdigicatelog-banner' alt='Free Banner' />
            </div>

            <Container >

                <Row style={{ marginTop: '20px' }}>

                    <Col xs={0} className='ttdigicatelog-title' >
                        <img src={TTIcon} className='ttdigicatelog-icon' alt='Archive Icon' />
                        <div className='ttdigicatelog-vertical'></div>
                        My Grandmother Lady Jasbir Kaur by Amrita Shergil
                    </Col>

                </Row>
            </Container>
            <hr/>

            <Container className='ttdigicatelog-cover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>Highlight</p>
                        <p>The painting shows an older woman wearing a blouse and a blue bordered white sari  covering her head. The blouse has a Peter Pan collar, which is said to have its origin in early 20th-century New York.</p>
                        <p>About the image</p>
                        <p>Amrita Shergil was one of the most prominent painters of  the colonial period. She was born in 1913 in Hungary and moved to  Shimla, India, in 1921. Her paintings include self-portraits, portraits  of men and women, and paintings of village girls, which are a reflection  of her travels to different parts of the world, including Italy,  Hungary, Paris, and India.</p>
                        <p>Where to find it?</p>
                        <p>National Gallery of Modern Art, New Delhi</p>
                    </Col>
                </Row>

            </Container>

            <Container>
                {/* Image Thumbnails Container */}
                <div className="ttdigicatelog-gallery">
                    <div className="ttdigicatelog-thumbnail" onClick={() => openPopup(TTDigiImage1)}>
                        <img src={TTDigiImage1} alt="Image 1" />
                    </div>
                    <div className="ttdigicatelog-thumbnail" onClick={() => openPopup(TTDigiImage2)}>
                        <img src={TTDigiImage2} alt="Image 2" />
                    </div>
                    <div className="ttdigicatelog-thumbnail" onClick={() => openPopup(TTDigiImage3)}>
                        <img src={TTDigiImage3} alt="Image 3" />
                    </div>
                </div>

                {/* Popup Container */}
                {isPopupOpen && (
                    <div className="ttdigicatelog-popup" onClick={closePopup}>
                        <span className="ttdigicatelog-close" onClick={closePopup}>
                            &times;
                        </span>
                        <img className="ttdigicatelog-popup-content" src={selectedImage} alt="Popup" />
                    </div>
                )}
            </Container>

            <Container className='ttdigicatelog-wrapper'>
                <div className="ttdigicatelog-text">
                    <h2>To learn more about this painting</h2>
                    <button class=" ttdigicatelog-btn" onClick={underconstructor}><span>Read More </span></button>
                </div>

                <div className="ttdigicatelog-slider">
                    <div className="ttdigicatelog-slider-wrapper" id="slider-wrapper">
                        <img src={TTDigiImage4} alt="painting" />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default TTDigiCatelogue
