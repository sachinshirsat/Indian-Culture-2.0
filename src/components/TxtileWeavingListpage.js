import React from 'react'
import WLBanner from '../image/WLBanner.png';
// import './TxtileWeavingListpage.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination';
import SwrilDivider from './SwrilDivider';


function TxtileWeavingListpage() {

    const txtileweavingresultpage = () => {
        window.open('/txtileweavingresultpage', '_parent');
    };

    return (
        <>
            <div className='txtile-weavlst-parent-container'>
                <img src={WLBanner} className='txtile-weavlst-banner' alt='Free Banner' />
            </div>
            <Container className='txtile-weavlst-header'>
                <Row >
                    <Col >
                        <h1>Weaving</h1>
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>

            <div className='txtile-weavlst-lst'>

                {/* Archive img thumbnails start */}
                <main className="txtile-weavlst-page-content">
                    <div className="txtile-weavlst-listcard">
                        <div className="txtile-weavlst-content">

                            <h2 className="txtile-weavlst-title ">Khadi Weaving</h2>

                            {/* <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p> */}
                            <Button className="txtile-weavlst-listbtn" onClick={txtileweavingresultpage}>View</Button>
                        </div>
                    </div>
                    <div className="txtile-weavlst-listcard">
                        <div className="txtile-weavlst-content">
                            <h2 className="txtile-weavlst-title">Title 2</h2>
                            {/* <p className="copy">Plan your next beach trip with these fabulous destinations</p> */}
                            <Button className="txtile-weavlst-listbtn">View</Button>
                        </div>
                    </div>
                    <div className="txtile-weavlst-listcard">
                        <div className="txtile-weavlst-content">
                            <h2 className="txtile-weavlst-title">Title 3</h2>
                            {/* <p className="copy">It's the desert you've always dreamed of</p> */}
                            <Button className="txtile-weavlst-listbtn">View</Button>
                        </div>
                    </div>
                    <div className="txtile-weavlst-listcard">
                        <div className="txtile-weavlst-content">
                            <h2 className="txtile-weavlst-title">Title 4</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-weavlst-listbtn">View</Button>
                        </div>
                    </div>

                    <div className="txtile-weavlst-listcard">
                        <div className="txtile-weavlst-content">
                            <h2 className="txtile-weavlst-title">Title 5</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-weavlst-listbtn">View</Button>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="txtile-weavlst-listcard">
                        <div className="txtile-weavlst-content">
                            <h2 className="txtile-weavlst-title">Title 6</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-weavlst-listbtn">View</Button>
                        </div>
                    </div>

                    <div className="txtile-weavlst-listcard">
                        <div className="txtile-weavlst-content">
                            <h2 className="txtile-weavlst-title">Title 7</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-weavlst-listbtn">View</Button>
                        </div>
                    </div>

                    <div className="txtile-weavlst-listcard">
                        <div className="txtile-weavlst-content">
                            <h2 className="txtile-weavlst-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <Button className="txtile-weavlst-listbtn">View</Button>
                        </div>
                    </div>

                </main>
                {/* Archive img thumbnails end */}

                <Container>
                    <Row>
                        {/* Pagination start here */}
                        <Col className='txtile-weavlst-paginattion-place'>
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

export default TxtileWeavingListpage
