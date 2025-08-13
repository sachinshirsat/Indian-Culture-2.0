import React from 'react';
// import './HistoryAncient.css';
import Imag2 from '../image/tnfimg3.png';
import Imag3 from '../image/tnfimg3.png';
import Imag4 from '../image/tnfimg3.png';
import Imag5 from '../image/tnfimg3.png';
import Imag1 from '../image/tnfimg3.png';

function TxtileHistoryAncientTimeline() {
    return (
        <>
            <div>
                <section id='timeline' >
                    <h1>Timeline</h1>
                    {/* <p class="leader">Testing</p> */}
                    <div class="demo-card-wrapper">
                        <div class="demo-card demo-card--step1">
                            <div class="head">
                                <div class="number-box">
                                    {/* <span>2023</span> */}
                                </div>
                                <h2><span class="small">Subtitle</span> Heading</h2>
                            </div>
                            <div class="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                                {/* <img src="http://placehold.it/1000x500" alt="Graphic"/> */}
                                <img className='haimg' src={Imag1} alt="Graphic" />
                            </div>
                        </div>

                        <div class="demo-card demo-card--step2">
                            <div class="head">
                                <div class="number-box">
                                    {/* <span>2022</span> */}
                                </div>
                                <h2><span class="small">Subtitle</span> Heading</h2>
                            </div>
                            <div class="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                                <img className='haimg' src={Imag2} alt="Graphic" />
                            </div>
                        </div>

                        <div class="demo-card demo-card--step3">
                            <div class="head">
                                <div class="number-box">
                                    {/* <span>2021</span> */}
                                </div>
                                <h2><span class="small">Subtitle</span> Heading</h2>
                            </div>
                            <div class="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                                <img className='haimg' src={Imag3} alt="Graphic" />
                            </div>
                        </div>

                        <div class="demo-card demo-card--step4">
                            <div class="head">
                                <div class="number-box">
                                    {/* <span>04</span> */}
                                </div>
                                <h2><span class="small">Subtitle</span> Heading</h2>
                            </div>
                            <div class="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                                <img className='haimg' src={Imag4} alt="Graphic" />
                            </div>
                        </div>

                        <div class="demo-card demo-card--step5">
                            <div class="head">
                                <div class="number-box">
                                    {/* <span>05</span> */}
                                </div>
                                <h2><span class="small">Subtitle</span> Heading</h2>
                            </div>
                            <div class="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                                <img className='haimg' src={Imag5} alt="Graphic" />
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default TxtileHistoryAncientTimeline
