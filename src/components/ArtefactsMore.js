import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './ArtefactsMore.css';
import SearchIcon from '../image/search.svg';

import Pagination from 'react-bootstrap/Pagination';
import SwrilDivider from './SwrilDivider';

function ArtefactsMore() {
    const artefactsresultpage = () => {
        window.open('/artefactsresultpage', '_parent');
    };
    return (
        <>
            <Container className='artmore-header'>
                <Row >
                    <Col >
                        <h1>Artefact Chronicles </h1>
                        <SwrilDivider />
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <div className='artmore-lst'>
                {/* option 1  */}
                <Container style={{ marginTop: '20px' }}>
                    <Row >
                        <Col className='artmore-equal'>

                            {/* Search bar start */}
                            <div class="search-box">
                                <button class="btn-search"><img src={SearchIcon} alt='Search icon'></img></button>
                                <input type="text" class="input-search" placeholder="Type to Search..." />
                            </div>

                            {/* Search bar end */}
                        </Col>


                        <Col className='artmore-leftplace'>
                            <p className='artmore-showing-result'>Showing 1 -16 results of 53259</p>
                        </Col>
                    </Row>



                </Container>

                {/* Archive img thumbnails start */}
                <main className="artmore-page-content">
                    <div className="artmore-listcard">
                        <div className="artmore-content">

                            <h2 className="artmore-title ">Red Sandstone Couple</h2>

                            {/* <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p> */}
                            <button className="artmore-listbtn" onClick={artefactsresultpage}>View</button>
                        </div>
                    </div>
                    <div className="artmore-listcard">
                        <div className="artmore-content">
                            <h2 className="artmore-title">Title 2</h2>
                            {/* <p className="copy">Plan your next beach trip with these fabulous destinations</p> */}
                            <button className="artmore-listbtn">View</button>
                        </div>
                    </div>
                    <div className="artmore-listcard">
                        <div className="artmore-content">
                            <h2 className="artmore-title">Title 3</h2>
                            {/* <p className="copy">It's the desert you've always dreamed of</p> */}
                            <button className="artmore-listbtn">View</button>
                        </div>
                    </div>
                    <div className="artmore-listcard">
                        <div className="artmore-content">
                            <h2 className="artmore-title">Title 4</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="artmore-listbtn">View</button>
                        </div>
                    </div>

                    <div className="artmore-listcard">
                        <div className="artmore-content">
                            <h2 className="artmore-title">Title 5</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="artmore-listbtn">View</button>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="artmore-listcard">
                        <div className="artmore-content">
                            <h2 className="artmore-title">Title 6</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="artmore-listbtn">View</button>
                        </div>
                    </div>

                    <div className="artmore-listcard">
                        <div className="artmore-content">
                            <h2 className="artmore-title">Title 7</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="artmore-listbtn">View</button>
                        </div>
                    </div>

                    <div className="artmore-listcard">
                        <div className="artmore-content">
                            <h2 className="artmore-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="artmore-listbtn">View</button>
                        </div>
                    </div>
                    <div className="artmore-listcard">
                        <div className="artmore-content">
                            <h2 className="artmore-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="artmore-listbtn">View</button>
                        </div>
                    </div>
                    <div className="artmore-listcard">
                        <div className="artmore-content">
                            <h2 className="artmore-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="artmore-listbtn">View</button>
                        </div>
                    </div>
                    {/* 3rd  */}
                    <div className="artmore-listcard">
                        <div className="artmore-content">
                            <h2 className="artmore-title">Title 6</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="artmore-listbtn">View</button>
                        </div>
                    </div>

                    <div className="artmore-listcard">
                        <div className="artmore-content">
                            <h2 className="artmore-title">Title 7</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="artmore-listbtn">View</button>
                        </div>
                    </div>

                    <div className="artmore-listcard">
                        <div className="artmore-content">
                            <h2 className="artmore-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="artmore-listbtn">View</button>
                        </div>
                    </div>
                    <div className="artmore-listcard">
                        <div className="artmore-content">
                            <h2 className="artmore-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="artmore-listbtn">View</button>
                        </div>
                    </div>
                    <div className="artmore-listcard">
                        <div className="artmore-content">
                            <h2 className="artmore-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="artmore-listbtn">View</button>
                        </div>
                    </div>

                </main>
                {/* Archive img thumbnails end */}


                <Container>
                    <Row>
                        {/* Pagination start here */}
                        <Col className='artmore-paginattion-place'>
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

export default ArtefactsMore
