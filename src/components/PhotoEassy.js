import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './PhotoEassy.css';
import PhotoEassyBan from '../image/Banner Images Kamarband.jpg';
import SwrilDivider from './SwrilDivider';


function PhotoEassy() {
    const photoeassyresultpage = () => {
        window.open('/photoeassyresultpage', '_parent');
    };
    return (
        <>
            <div className='photo-eassy-parent-container'>
                <img src={PhotoEassyBan} className='photo-eassy-banner' alt='Free Banner' />
            </div>


            <Container className='photo-eassy-header'>
                <Row >
                    <Col >
                        <h1>Photo Eassy</h1>
                        {/* <img src={Divider} alt="Caption Divider" style={{ marginTop: '-17px', width: '90px', height: '15px', backgroundColor: 'transparent' }} /> */}
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>

            <div className='photo-eassy-lst'>
                {/* Archive img thumbnails start */}
                <main className="photo-eassy-page-content">
                    <div className="photo-eassy-listcard" onClick={photoeassyresultpage}>
                        <div className="photo-eassy-content">

                            <h2 className="photo-eassy-title ">Timeless Tresses: The Braid</h2>

                            {/* <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p> */}
                            <Button className="photo-eassy-listbtn" >View</Button>
                        </div>
                    </div>
                    <div className="photo-eassy-listcard">
                        <div className="photo-eassy-content">
                            <h2 className="photo-eassy-title">Title 2</h2>
                            {/* <p className="copy">Plan your next beach trip with these fabulous destinations</p> */}
                            <Button className="photo-eassy-listbtn">View</Button>
                        </div>
                    </div>
                    <div className="photo-eassy-listcard">
                        <div className="photo-eassy-content">
                            <h2 className="photo-eassy-title">Title 3</h2>
                            {/* <p className="copy">It's the desert you've always dreamed of</p> */}
                            <Button className="photo-eassy-listbtn">View</Button>
                        </div>
                    </div>
                    <div className="photo-eassy-listcard">
                        <div className="photo-eassy-content">
                            <h2 className="photo-eassy-title">Title 4</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="photo-eassy-listbtn">View</Button>
                        </div>
                    </div>

                    <div className="photo-eassy-listcard">
                        <div className="photo-eassy-content">
                            <h2 className="photo-eassy-title">Title 5</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="photo-eassy-listbtn">View</Button>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="photo-eassy-listcard">
                        <div className="photo-eassy-content">
                            <h2 className="photo-eassy-title">Title 6</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="photo-eassy-listbtn">View</Button>
                        </div>
                    </div>

                    <div className="photo-eassy-listcard">
                        <div className="photo-eassy-content">
                            <h2 className="photo-eassy-title">Title 7</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="photo-eassy-listbtn">View</Button>
                        </div>
                    </div>

                    <div className="photo-eassy-listcard">
                        <div className="photo-eassy-content">
                            <h2 className="photo-eassy-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="photo-eassy-listbtn">View</Button>
                        </div>
                    </div>
                    <div className="photo-eassy-listcard">
                        <div className="photo-eassy-content">
                            <h2 className="photo-eassy-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="photo-eassy-listbtn">View</Button>
                        </div>
                    </div>
                    <div className="photo-eassy-listcard">
                        <div className="photo-eassy-content">
                            <h2 className="photo-eassy-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="photo-eassy-listbtn">View</Button>
                        </div>
                    </div>

                </main>
            </div>
        </>

    )
}

export default PhotoEassy
