import React from 'react'
// import './FlagEvenResultpage.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Player, BigPlayButton, LoadingSpinner, ControlBar } from 'video-react';
import '../../node_modules/video-react/dist/video-react.css';
/* import Vidthumicon from '../image/Rectangle 112.png';
import Vidthumicon2 from '../image/Rectangle 113.png'; */
import { Play } from 'feather-icons-react';
import $ from "jquery";

function FlagEvenResultpage() {
    // Trimdwn title
    $(document).ready(function () {
        var thumbTitle = $(".thumb-title");
        thumbTitle.each(function (index, element) {
            if (element.innerHTML.length > 50) {
                var shortendTitle = element.innerHTML.slice(0, 50);
                element.innerHTML = shortendTitle.concat("...");
            }
        });
    });

    return (
        <>
            <Container fluid className='flagresult-bg'>
                <Container className="flagresult-banner-container ">

                    <Player className="flagresult-txt-player" playsInline src="https://videoserver.nvli.in/nvli/ICP/flagshipevents/PM%20Modi%20addresses%20inaugural%20ceremony%20of%20International%20Museum%20Expo,%202023-%20With%20subtitles%20min.mp4">
                        <BigPlayButton position="center" />
                        <LoadingSpinner />
                        <ControlBar autoHide={true} className="my-class" />
                    </Player>

                </Container>
            </Container>

            <div className="flagresult-float-container">
                <a href="#" className="icon one"> Share</a>
                <a href="#" className="icon two">QR Code</a>

            </div>

            <Container style={{ marginTop: '20px' }}>
                <h4 className='flagresult-days-title'>DAY 1 - Pravesh</h4>
                <hr style={{ width: '100%', marginLeft: 'auto' }} title='Day 1 - Pravesh' />
            </Container>
            {/*  */}
            <article class="flagresult-video-sec-wrap">
                <div class="flagresult-video-sec">
                    {/* <p class="video-sec-title">Super Responsive Video Grid</p> */}
                    <ul class="flagresult-video-sec-middle" id="vid-grid">
                        <li class="flagresult-thumb-wrap"><a href="">
                            <img class="flagresult-thumb" src="https://images.unsplash.com/photo-1555661225-ade1bbf3fbb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1957&q=80" alt="" />
                            <Play className="flagresult-play-icon" size='32' />
                            <div class="flagresult-thumb-info">
                                <p class="flagresult-thumb-title">This is the longest title of them all, such a long title that it is beeing cut off</p>
                                {/* <p class="thumb-user">Username</p>
                                    <p class="thumb-text">1.3K Views</p> */}
                            </div>
                        </a></li>
                        <li class="flagresult-thumb-wrap"><a href="">
                            <img class="flagresult-thumb" src="https://images.unsplash.com/photo-1566075247408-2fc9e74810d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" />
                            <div class="flagresult-thumb-info">
                                <p class="flagresult-thumb-title">Video Title 2 - Super Long Title With Really Long New Line</p>
                                <Play className="flagresult-play-icon" size='32' />

                                {/*  <p class="thumb-user">Username</p>
                                    <p class="thumb-text">57K Views</p> */}
                            </div>
                        </a></li>
                        <li class="flagresult-thumb-wrap"><a href="">
                            <img class="flagresult-thumb" src="https://images.unsplash.com/photo-1559083991-9bdef0bb5a39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80" alt="" />
                            <div class="flagresult-thumb-info">
                                <p class="flagresult-thumb-title">Video Title 3 - Short Title</p>
                                <Play className="flagresult-play-icon" size='32' />

                                {/*  <p class="thumb-user">Username</p>
                                    <p class="thumb-text">4.6K Views</p> */}
                            </div>
                        </a></li>
                        <li class="flagresult-thumb-wrap"><a href="">
                            <img class="flagresult-thumb" src="https://images.unsplash.com/photo-1560800589-3d88290dd749?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80" alt="" />
                            <div class="flagresult-thumb-info">
                                <p class="flagresult-thumb-title">Video Title 4</p>
                                <Play className="flagresult-play-icon" size='32' />

                                {/*  <p class="thumb-user">Username</p>
                                    <p class="thumb-text">3K Views</p> */}
                            </div>
                        </a></li>
                        <li class="flagresult-thumb-wrap"><a href="">
                            <img class="flagresult-thumb" src="https://images.unsplash.com/photo-1560716092-203a1703e06e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80" alt="" />
                            <div class="flagresult-thumb-info">
                                <p class="flagresult-thumb-title">Video Title 5 - Long Title With New Line, but a bit longer</p>
                                <Play className="flagresult-play-icon" size='32' />

                                {/*  <p class="thumb-user">Username</p>
                                    <p class="thumb-text">126K Views</p> */}
                            </div>
                        </a></li>

                    </ul>
                    {/* <a class="video-showmore">Show more</a> */}
                </div>
            </article>


            {/*  */}
            <Container style={{ marginTop: '20px' }}>
                <h4 className='flagresult-days-title'>DAY 2 - Bagh-e-bahar</h4>
                <hr style={{ width: '100%', marginLeft: 'auto' }} title='Day 1 - Pravesh' />
            </Container>
            <article class="flagresult-video-sec-wrap">
                <div class="flagresult-video-sec">
                    {/* <p class="video-sec-title">Super Responsive Video Grid</p> */}
                    <ul class="flagresult-video-sec-middle" id="vid-grid">
                        <li class="flagresult-thumb-wrap"><a href="">
                            <img class="flagresult-thumb" src="https://images.unsplash.com/photo-1555661225-ade1bbf3fbb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1957&q=80" alt="" />
                            <Play className="flagresult-play-icon" size='32' />
                            <div class="flagresult-thumb-info">
                                <p class="flagresult-thumb-title">This is the longest title of them all, such a long title that it is beeing cut off</p>
                                {/* <p class="thumb-user">Username</p>
                                    <p class="thumb-text">1.3K Views</p> */}
                            </div>
                        </a></li>
                        <li class="flagresult-thumb-wrap"><a href="">
                            <img class="flagresult-thumb" src="https://images.unsplash.com/photo-1566075247408-2fc9e74810d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" />
                            <div class="flagresult-thumb-info">
                                <p class="flagresult-thumb-title">Video Title 2 - Super Long Title With Really Long New Line</p>
                                <Play className="flagresult-play-icon" size='32' />

                                {/*  <p class="thumb-user">Username</p>
                                    <p class="thumb-text">57K Views</p> */}
                            </div>
                        </a></li>
                        <li class="flagresult-thumb-wrap"><a href="">
                            <img class="flagresult-thumb" src="https://images.unsplash.com/photo-1559083991-9bdef0bb5a39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80" alt="" />
                            <div class="flagresult-thumb-info">
                                <p class="flagresult-thumb-title">Video Title 3 - Short Title</p>
                                <Play className="flagresult-play-icon" size='32' />

                                {/*  <p class="thumb-user">Username</p>
                                    <p class="thumb-text">4.6K Views</p> */}
                            </div>
                        </a></li>



                    </ul>
                    {/* <a class="video-showmore">Show more</a> */}
                </div>
            </article>

            {/*  */}
            <Container style={{ marginTop: '20px' }}>
                <h4 className='flagresult-days-title'>DAY 3 - Sampravah</h4>
                <hr style={{ width: '100%', marginLeft: 'auto' }} title='Day 1 - Pravesh' />
            </Container>
            <article class="flagresult-video-sec-wrap">
                <div class="flagresult-video-sec">
                    {/* <p class="video-sec-title">Super Responsive Video Grid</p> */}
                    <ul class="flagresult-video-sec-middle" id="vid-grid">
                        <li class="flagresult-thumb-wrap"><a href="">
                            <img class="flagresult-thumb" src="https://images.unsplash.com/photo-1555661225-ade1bbf3fbb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1957&q=80" alt="" />
                            <Play className="flagresult-play-icon" size='32' />
                            <div class="flagresult-thumb-info">
                                <p class="flagresult-thumb-title">This is the longest title of them all, such a long title that it is beeing cut off</p>
                                {/* <p class="thumb-user">Username</p>
                                    <p class="thumb-text">1.3K Views</p> */}
                            </div>
                        </a></li>
                        <li class="flagresult-thumb-wrap"><a href="">
                            <img class="flagresult-thumb" src="https://images.unsplash.com/photo-1566075247408-2fc9e74810d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" />
                            <div class="flagresult-thumb-info">
                                <p class="flagresult-thumb-title">Video Title 2 - Super Long Title With Really Long New Line</p>
                                <Play className="flagresult-play-icon" size='32' />

                                {/*  <p class="thumb-user">Username</p>
                                    <p class="thumb-text">57K Views</p> */}
                            </div>
                        </a></li>
                        <li class="flagresult-thumb-wrap"><a href="">
                            <img class="flagresult-thumb" src="https://images.unsplash.com/photo-1559083991-9bdef0bb5a39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80" alt="" />
                            <div class="flagresult-thumb-info">
                                <p class="flagresult-thumb-title">Video Title 3 - Short Title</p>
                                <Play className="flagresult-play-icon" size='32' />

                                {/*  <p class="thumb-user">Username</p>
                                    <p class="thumb-text">4.6K Views</p> */}
                            </div>
                        </a></li>
                        <li class="flagresult-thumb-wrap"><a href="">
                            <img class="flagresult-thumb" src="https://images.unsplash.com/photo-1560800589-3d88290dd749?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80" alt="" />
                            <div class="flagresult-thumb-info">
                                <p class="flagresult-thumb-title">Video Title 4</p>
                                <Play className="flagresult-play-icon" size='32' />

                                {/*  <p class="thumb-user">Username</p>
                                    <p class="thumb-text">3K Views</p> */}
                            </div>
                        </a></li>
                        <li class="flagresult-thumb-wrap"><a href="">
                            <img class="flagresult-thumb" src="https://images.unsplash.com/photo-1560716092-203a1703e06e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80" alt="" />
                            <div class="flagresult-thumb-info">
                                <p class="flagresult-thumb-title">Video Title 5 - Long Title With New Line, but a bit longer</p>
                                <Play className="flagresult-play-icon" size='32' />

                                {/*  <p class="thumb-user">Username</p>
                                    <p class="thumb-text">126K Views</p> */}
                            </div>
                        </a></li>


                    </ul>
                    {/* <a class="video-showmore">Show more</a> */}
                </div>
            </article>

        </>
    )
}

export default FlagEvenResultpage
