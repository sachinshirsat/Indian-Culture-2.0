import React, { useState } from 'react';
// import './PaintingTxt.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';

import { Filter } from 'feather-icons-react';
import SearchIcon from '../image/search.svg';

import TFBPianBan from '../image/TFBPainBan.png';
import SwrilDivider from './SwrilDivider';
/* import Painimg1 from '../image/pain1.png';
import Painimg2 from '../image/pain2.png';
import Painimg3 from '../image/pain3.png';
import Painimg4 from '../image/pain4.png';
import Painimg5 from '../image/pain5.png';
import Painimg6 from '../image/pain6.png';
import Painimg7 from '../image/pain7.png';
import Painimg8 from '../image/pain8.png'; */


function TxtilePainting() {
    // constructor for filter side panel start
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // To avoid any unintended navigation, you can add event.preventDefault()
    const handleShow = (event) => {
        event.preventDefault();
        setShow(true);
    };
    // filter side panel end


    const txtilepaintingresultpage = () => {
        window.open('/txtilepaintingresultpage', '_parent');
      };
    return (
        <>
            <div className='txtile-paint-parent-container'>
                <img src={TFBPianBan} className='txtile-paint-banner' alt='Free Banner' />
            </div>

            <Container className='txtile-paint-header'>
                <Row>
                    <Col>
                        <h1>Painting</h1>
                        <SwrilDivider/>
                    </Col>
                </Row>
            </Container>

            <div className='txtile-paint-lst'>

                {/* Archive img thumbnails start */}
                <main className="txtile-paint-page-content">
                    <div className="txtile-paint-listcard">
                        <div className="txtile-paint-content">

                            <h2 className="txtile-paint-title ">Khadi Weaving</h2>

                            {/* <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p> */}
                            <Button className="txtile-paint-listbtn" onClick={txtilepaintingresultpage}>View</Button>
                        </div>
                    </div>
                    <div className="txtile-paint-listcard">
                        <div className="txtile-paint-content">
                            <h2 className="txtile-paint-title">Title 2</h2>
                            {/* <p className="copy">Plan your next beach trip with these fabulous destinations</p> */}
                            <Button className="txtile-paint-listbtn">View</Button>
                        </div>
                    </div>
                    <div className="txtile-paint-listcard">
                        <div className="txtile-paint-content">
                            <h2 className="txtile-paint-title">Title 3</h2>
                            {/* <p className="copy">It's the desert you've always dreamed of</p> */}
                            <Button className="txtile-paint-listbtn">View</Button>
                        </div>
                    </div>
                    <div className="txtile-paint-listcard">
                        <div className="txtile-paint-content">
                            <h2 className="txtile-paint-title">Title 4</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-paint-listbtn">View</Button>
                        </div>
                    </div>

                    <div className="txtile-paint-listcard">
                        <div className="txtile-paint-content">
                            <h2 className="txtile-paint-title">Title 5</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-paint-listbtn">View</Button>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="txtile-paint-listcard">
                        <div className="txtile-paint-content">
                            <h2 className="txtile-paint-title">Title 6</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-paint-listbtn">View</Button>
                        </div>
                    </div>

                    <div className="txtile-paint-listcard">
                        <div className="txtile-paint-content">
                            <h2 className="txtile-paint-title">Title 7</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-paint-listbtn">View</Button>
                        </div>
                    </div>

                    <div className="txtile-paint-listcard">
                        <div className="txtile-paint-content">
                            <h2 className="txtile-paint-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-paint-listbtn">View</Button>
                        </div>
                    </div>

                </main>
                {/* Archive img thumbnails end */}

                <Container>
                    <Row>
                        {/* Pagination start here */}
                        <Col className='txtile-paint-paginattion-place'>
                            <Pagination>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>

                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item active>{3}</Pagination.Item>
                                <Pagination.Item >{4}</Pagination.Item>
                                <Pagination.Item>{5}</Pagination.Item>
                                <Pagination.Item >{6}</Pagination.Item>

                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </Col>
                        {/* Pagination end here */}
                    </Row>

                </Container>

            </div>
        </>
    )
}

export default TxtilePainting
