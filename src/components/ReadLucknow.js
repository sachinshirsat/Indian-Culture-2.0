import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Pagination from 'react-bootstrap/Pagination';

// import './ReadLucknow.css';
// css files bootstrap and external
import 'bootstrap/dist/css/bootstrap.min.css';
// import './ArcListpage.css';

// import img file

// import Header from '../image/header.PNG';
import CityCapCusiimg1 from '../image/image 31.png';
import CityCapCusiimg2 from '../image/image 32.png';
import CityCapStoryimg1 from '../image/image 34.png';
import SwrilDivider from './SwrilDivider';

function ReadLucknow({ name, ...props }) {

    return (
        <>

            <Container className='citycapsul-header'>
                <Row >
                    <Col >
                        <h1>Rare material on Lucknow</h1>
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>

            <div className='citycapsul-lst'>
                {/* option 1  */}
                <Container style={{ marginTop: '20px' }} >
                    <Row >
                        <Col className='citycapsul-rightplace'>
                            <p className='citycapsul-showing-result'>Showing 1 -16 results of 53259</p>
                        </Col>
                    </Row>


                </Container>
                {/* Archive img thumbnails start */}
                <main className="citycapsul-ccpage-cccontent">
                    <div className="citycapsul-cclistcard">
                        <div className="citycapsul-cccontent">

                            <h2 className="citycapsul-cctitle ">Conspiracy in 1856 against the Government</h2>

                            {/* <p className="copy">Ch eck out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p> */}
                            <button className="citycapsul-cclistbtn" >View</button>
                        </div>
                    </div>
                    <div className="citycapsul-cclistcard">
                        <div className="citycapsul-cccontent">
                            <h2 className="citycapsul-cctitle">Gazetter of the Oudh</h2>
                            {/* <p className="copy">Plan your next beach trip with these fabulous destinations</p> */}
                            <button className="citycapsul-cclistbtn">View</button>
                        </div>
                    </div>
                    <div className="citycapsul-cclistcard">
                        <div className="citycapsul-cccontent">
                            <h2 className="citycapsul-cctitle">Conspiracy in 1856 against the Government</h2>
                            {/* <p className="copy">It's the desert you've always dreamed of</p> */}
                            <button className="citycapsul-cclistbtn">View</button>
                        </div>
                    </div>
                    <div className="citycapsul-cclistcard">
                        <div className="citycapsul-cccontent">
                            <h2 className="citycapsul-cctitle">Gazetter of the Oudh</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="citycapsul-cclistbtn">View</button>
                        </div>
                    </div>

                    <div className="citycapsul-cclistcard">
                        <div className="citycapsul-cccontent">
                            <h2 className="citycapsul-cctitle">Conspiracy in 1856 against the Government</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="citycapsul-cclistbtn">View</button>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="citycapsul-cclistcard">
                        <div className="citycapsul-cccontent">
                            <h2 className="citycapsul-cctitle">ccTitle 6</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="citycapsul-cclistbtn">View</button>
                        </div>
                    </div>

                    <div className="citycapsul-cclistcard">
                        <div className="citycapsul-cccontent">
                            <h2 className="citycapsul-cctitle">ccTitle 7</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="citycapsul-cclistbtn">View</button>
                        </div>
                    </div>

                    <div className="citycapsul-cclistcard">
                        <div className="citycapsul-cccontent">
                            <h2 className="citycapsul-cctitle">ccTitle 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="citycapsul-cclistbtn">View</button>
                        </div>
                    </div>
                    <div className="citycapsul-cclistcard">
                        <div className="citycapsul-cccontent">
                            <h2 className="citycapsul-cctitle">ccTitle 9</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="citycapsul-cclistbtn">View</button>
                        </div>
                    </div>
                    <div className="citycapsul-cclistcard">
                        <div className="citycapsul-cccontent">
                            <h2 className="citycapsul-cctitle">ccTitle 10</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="citycapsul-cclistbtn">View</button>
                        </div>
                    </div>
                    {/* 3rd  */}
                    <div className="citycapsul-cclistcard">
                        <div className="citycapsul-cccontent">
                            <h2 className="citycapsul-cctitle">ccTitle 11</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="citycapsul-cclistbtn">View</button>
                        </div>
                    </div>

                    <div className="citycapsul-cclistcard">
                        <div className="citycapsul-cccontent">
                            <h2 className="citycapsul-cctitle">ccTitle 12</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="citycapsul-cclistbtn">View</button>
                        </div>
                    </div>

                    <div className="citycapsul-cclistcard">
                        <div className="citycapsul-cccontent">
                            <h2 className="citycapsul-cctitle">ccTitle 13</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="citycapsul-cclistbtn">View</button>
                        </div>
                    </div>
                    <div className="citycapsul-cclistcard">
                        <div className="citycapsul-cccontent">
                            <h2 className="citycapsul-cctitle">ccTitle 14</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="citycapsul-cclistbtn">View</button>
                        </div>
                    </div>
                    <div className="citycapsul-cclistcard">
                        <div className="citycapsul-cccontent">
                            <h2 className="citycapsul-cctitle">ccTitle 15</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="citycapsul-cclistbtn">View</button>
                        </div>
                    </div>

                </main>
                {/* Archive img thumbnails end */}
                <Container>
                    <Row>
                        {/* Pagination start here */}
                        <Col className='citycapsul-paginattion-place'>
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
                    <Row>
                        <Col className='citycapsul-end'>
                            {/* <img src={Divider} alt="Caption Divider" style={{ marginTop: '-17px', width: '90px', height: '15px', backgroundColor: 'transparent' }} /> */}

                        </Col>
                    </Row>
                </Container>

            </div>


            <Container className='citycapsul-cccuisine-header'>
                <Row >
                    <Col >
                        <h1>Cuisine</h1>
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>

            {/*   <div class="ccthumbnail-container">
                <figure class="ccthumbnail">
                    <img src={CityCapCusiimg1} alt="Image 1" />
                    <figcaption>The Delicate Flavors of Awadh</figcaption>
                </figure>

                <figure class="ccthumbnail">
                    <img src={CityCapCusiimg2} alt="Image 2" />
                    <figcaption>Lucknow: Food Fit for the Kings</figcaption>
                </figure>
            </div> */}

            <Container>
                <div class="row justify-content-center g-0">
                    <div class="col-auto">
                        <div class="citycapsul-image-item1" >
                            <img src={CityCapCusiimg1} alt="Image 1" />
                            <div class="citycapsul-caption1">The Delicate Flavors of Awadh</div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="citycapsul-image-item1">
                            <img src={CityCapCusiimg2} alt="Image 2" />
                            <div class="citycapsul-caption1">Lucknow: Food Fit for the Kings</div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container className='citycapsul-cccuisine-header'>
                <Row >
                    <Col >
                        <h1>Stories</h1>
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>

            {/*   <div class="ccthumbnail-container">
                <figure class="ccthumbnail">
                    <img src={CityCapStoryimg1} alt="Image 1" />
                    <figcaption>Begum Hazrat Mahal</figcaption>
                </figure>


            </div> */}

            <Container>
                <div class="row justify-content-center g-0">
                    <div class="col-auto">
                        <div class="citycapsul-image-item1" >
                            <img src={CityCapStoryimg1} alt="Image 1" />
                            <div class="citycapsul-caption1">Lucknow: Food Fit for the Kings</div>
                        </div>
                    </div>
                    {/* <div class="col-auto">
                        <div class="ajanta-earlycaves-image-item1">
                            <img src={CityCapCusiimg2} alt="Image 2" />
                            <div class="ajanta-earlycaves-caption1">Lucknow: Food Fit for the Kings</div>
                        </div>
                    </div> */}
                </div>
            </Container>
        </>
    );
}

export default ReadLucknow
