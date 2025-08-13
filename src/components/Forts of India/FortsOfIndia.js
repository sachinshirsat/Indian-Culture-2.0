import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

// npm install --save video-react react react-dom
// Controls ://video-react.js.org/components/big-play-button/
import { Player, BigPlayButton, LoadingSpinner, ControlBar } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';

import Vidicon from '../../image/amer-8 1.png';

import FortIndiaBanner from '../../image/hampi 1.png';

import FortIndia1 from '../../image/Bidar-1.jpg';
import FortIndia2 from '../../image/gul7.jpg';
import FortIndia3 from '../../image/agra1.jpg';
import FortIndia5 from '../../image/Janjira2.jpg';
import FortIndia4 from '../../image/agra3.jpg'; 
import FortIndia6 from '../../image/red17.jpg';
import FortIndia7 from '../../image/rarebook2.jpg';

import { ArrowLeft } from 'react-feather';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import SwrilDivider from '../SwrilDivider';

/* import FortIndia1 from '../images/Bidar-1.jpg';
import FortIndia1 from '../images/Bidar-1.jpg';
 */
/* import FortIndi from '../images/Component 43.png';
import FortIndione from '../images/Component 44.png';
import FortInditwo from '../images/Component 45.png';
import FortIndithree from '../images/Component 46.png';
import FortIndifour from '../images/Component 47.png'; */

// import '../components/FortsOfIndia.css';


function FortsOfIndia() {
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const discoveringfortslistpage = () => {
        navigate('/discoveringfortslistpage');
        scrollToTop();
    }

    const understandingforts = () => {
        navigate('/understandingforts');
        scrollToTop();
    }

    const forthistory = () => {
        navigate('/forthistory');
        scrollToTop();
    }

    const talesofforts = () => {
        navigate('/talesofforts');
        scrollToTop();
    }

    const fortsfreedom = () => {
        navigate('/fortsfreedom');
        scrollToTop();
    }

    const rarebooksofforts = () => {
        navigate('/rarebooksofforts');
        scrollToTop();
    }

    const backtopre = () => {
        navigate('/allcategories');
        scrollToTop();
    };

    const redirecthomepage = () => {
        navigate('/');
        scrollToTop();
    };
    return (
        <>
            <div className='parent-container'>
                <img src={FortIndiaBanner} className='fortindibanner' alt='Free Banner' />
            </div>
            <Container fluid className="skip">
                <Row>
                    {/* <Col sm={1}>
                        <ArrowLeft className='backtoprevious' onClick={backtopre} size={35} />
                    </Col> */}
                    <Col >
                        {/* Adjust the column size for extra small and small screens */}
                        <Breadcrumb className="d-flex justify-content-left">
                            <Breadcrumb.Item href="#" onClick={redirecthomepage} >Home</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={backtopre}>
                                Categories
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active className='dead'>Forts Of India</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
            <Container className='fortindi-header'>
                <Row >
                    <Col >
                        <h1>Forts of India</h1>
                        <SwrilDivider />
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='fortindicover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>The Forts of India are some of the most awe-inspiring monuments found in the country. From the Himalayas to the peninsular tip, from the deserts to the lush valleys of North-East, forts adorn each and every corner of the landscape of the Indian subcontinent. This section aims to provide a comprehensive overview of these magnificent monuments that bear the stories of the political vicissitudes of our country.</p>
                    </Col>
                </Row>

            </Container>
            <Container >
                <Player className="foiplayer" playsInline poster={Vidicon} src="https://videoserver.nvli.in/nvli/ich/CategoryVideos/VirtualTour.mp4" >

                    <BigPlayButton position="center" />
                    <LoadingSpinner />
                    <ControlBar autoHide={false} className="my-class" />
                </Player>
            </Container>


            <div className="container">

                <div id='layout' className="layout layout--collage">
                    <div className="image image--3-of-5" onClick={talesofforts}>
                        <img src={FortIndia2} alt='as' />
                        {/* <Player playsInline poster={FortIndia2} src="https://videoserver.nvli.in/nvli/ich/CategoryVideos/VirtualTour.mp4" >

                            <BigPlayButton position="center" />
                            <LoadingSpinner />
                            <ControlBar autoHide={false} className="my-class" />
                        </Player> */}
                        <div className="fortofindia-ttitle">TALES OF FORTS</div>
                    </div>


                    <div className="image image--2-of-5" onClick={understandingforts}>
                        <img src={FortIndia5} alt='ass' />
                        <div className="fortofindia-ttitle">UNDERSTANDING FORTS</div>

                        {/* <div className="description">
                                <h1>UNDERSTANDING FORTS</h1>
                            </div> */}
                    </div>
                    <div className="image image--3" onClick={forthistory}>
                        <img src={FortIndia6} alt='ads' />
                        <div className="fortofindia-ttitle">HISTORY</div>

                        {/* <div className="description">
                                <h1>HISTORY</h1>
                            </div> */}
                    </div>
                    <div className="image image--3" onClick={rarebooksofforts}>
                        <img src={FortIndia7} alt='asas' />
                        <div className="fortofindia-ttitle">RARE BOOKS</div>

                        {/*  <div className="description">
                                <h1>RARE BOOKS</h1>
                            </div> */}
                    </div>
                    <div className="image image--3" onClick={discoveringfortslistpage}>
                        <img src={FortIndia1} alt='aaas' />
                        <div className="fortofindia-ttitle">DISCOVERING FORTS</div>

                        {/*   <div className="description">
                                <h1>DISCOVERING FORTS</h1>
                            </div> */}
                    </div>


                </div>
            </div>


            <Container className='fortindiheader' style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>

                <Row>
                    <Col>
                        <h1>Forts and the Freedom Struggle</h1>
                        <SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    {/* <Col xs lg="6"> */}
                    <Col id='did' >

                        {/* style={{ fontSize: `${textSize}px` }} */}
                        <p >The forts of India have stood witness to significant political events of the country. This section is dedicated to forts that have played a significant role in the freedom struggle of our country. It showcases stories and rare archival records linked to forts that acted as sites of resistance and struggle against the British.</p>
                        <button className=" fortindibtn" onClick={fortsfreedom}><span>Read More </span></button>

                    </Col>
                    <Col xs lg="4" className='justify-content-center'>
                        <div className="fortindiimg">
                            <img src={FortIndiaBanner} alt="Did you know" className='' />
                        </div>
                    </Col>
                </Row>
                {/*  <Row style={{ marginTop: '20px' }}>
                    <Col sm={8}>

                        <button className=" didyouknowbtn" ><span>Read More </span></button>
                    </Col>
                    <Col sm={4}></Col>
                </Row> */}


            </Container>
        </>
    )
}

export default FortsOfIndia
