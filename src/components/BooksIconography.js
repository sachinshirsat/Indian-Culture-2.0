import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './BooksIconography.css';
import SearchIcon from '../image/search.svg';

import Pagination from 'react-bootstrap/Pagination';
import SwrilDivider from './SwrilDivider';

function BooksIconography() {

    const underconstructor = () => {
        window.open('/underconstructor', '_parent');
    };

    return (
        <>
            <Container className='booksicono-header'>
                <Row >
                    <Col >
                        <h1>Books on Indian Art and Iconography  </h1>
                        <SwrilDivider />
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <div className='booksicono-lst'>
                {/* option 1  */}
                <Container style={{ marginTop: '20px' }}>
                    <Row >
                        <Col className='booksicono-equal'>

                            {/* Search bar start */}
                            <div class="search-box">
                                <button class="btn-search"><img src={SearchIcon} alt='Search icon'></img></button>
                                <input type="text" class="input-search" placeholder="Type to Search..." />
                            </div>

                            {/* Search bar end */}
                        </Col>


                        <Col className='booksicono-leftplace'>
                            <p className='showing-result'>Showing 1 -16 results of 53259</p>
                        </Col>
                    </Row>



                </Container>

                {/* Archive img thumbnails start */}
                <main className="booksicono-page-content">
                    <div className="booksicono-listcard">
                        <div className="booksicono-content">

                            <h2 className="booksicono-title ">The Indian Buddhist Iconography: Mainly Based on the Sadhanamala - Second Edition</h2>

                            {/* <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p> */}
                            <button className="booksicono-listbtn" onClick={underconstructor}>View</button>
                        </div>
                    </div>
                    <div className="booksicono-listcard">
                        <div className="booksicono-content">
                            <h2 className="booksicono-title">Title 2</h2>
                            {/* <p className="copy">Plan your next beach trip with these fabulous destinations</p> */}
                            <button className="booksicono-listbtn">View</button>
                        </div>
                    </div>
                    <div className="booksicono-listcard">
                        <div className="booksicono-content">
                            <h2 className="booksicono-title">Title 3</h2>
                            {/* <p className="copy">It's the desert you've always dreamed of</p> */}
                            <button className="booksicono-listbtn">View</button>
                        </div>
                    </div>
                    <div className="booksicono-listcard">
                        <div className="booksicono-content">
                            <h2 className="booksicono-title">Title 4</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="booksicono-listbtn">View</button>
                        </div>
                    </div>

                    <div className="booksicono-listcard">
                        <div className="booksicono-content">
                            <h2 className="booksicono-title">Title 5</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="booksicono-listbtn">View</button>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="booksicono-listcard">
                        <div className="booksicono-content">
                            <h2 className="booksicono-title">Title 6</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="booksicono-listbtn">View</button>
                        </div>
                    </div>

                    <div className="booksicono-listcard">
                        <div className="booksicono-content">
                            <h2 className="booksicono-title">Title 7</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="booksicono-listbtn">View</button>
                        </div>
                    </div>

                    <div className="booksicono-listcard">
                        <div className="booksicono-content">
                            <h2 className="booksicono-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="booksicono-listbtn">View</button>
                        </div>
                    </div>
                    <div className="booksicono-listcard">
                        <div className="booksicono-content">
                            <h2 className="booksicono-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="booksicono-listbtn">View</button>
                        </div>
                    </div>
                    <div className="booksicono-listcard">
                        <div className="booksicono-content">
                            <h2 className="booksicono-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="booksicono-listbtn">View</button>
                        </div>
                    </div>
                    {/* 3rd  */}
                    <div className="booksicono-listcard">
                        <div className="booksicono-content">
                            <h2 className="booksicono-title">Title 6</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="booksicono-listbtn">View</button>
                        </div>
                    </div>

                    <div className="booksicono-listcard">
                        <div className="booksicono-content">
                            <h2 className="booksicono-title">Title 7</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="booksicono-listbtn">View</button>
                        </div>
                    </div>

                    <div className="booksicono-listcard">
                        <div className="booksicono-content">
                            <h2 className="booksicono-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="booksicono-listbtn">View</button>
                        </div>
                    </div>
                    <div className="booksicono-listcard">
                        <div className="booksicono-content">
                            <h2 className="booksicono-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="booksicono-listbtn">View</button>
                        </div>
                    </div>
                    <div className="booksicono-listcard">
                        <div className="booksicono-content">
                            <h2 className="booksicono-title">Title 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="booksicono-listbtn">View</button>
                        </div>
                    </div>

                </main>
                {/* Archive img thumbnails end */}


                <Container>
                    <Row>
                        {/* Pagination start here */}
                        <Col className='booksicono-paginattion-place'>
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

export default BooksIconography
