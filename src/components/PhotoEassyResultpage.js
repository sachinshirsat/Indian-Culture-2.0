import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

// import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../image/pe12.png';
import ExampleCarouselImage1 from '../image/pe13.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
// import './PhotoEassyResultpage.css'

function PhotoEassyResultpage() {
    const flipBookRef = useRef(null);

    const goToPreviousPage = () => {
        if (flipBookRef.current) {
            flipBookRef.current.pageFlip().flipPrev();
        }
    };

    const goToNextPage = () => {
        if (flipBookRef.current) {
            flipBookRef.current.pageFlip().flipNext();
        }
    };
    return (
        <>

            <Container className="per-flipbook-container">
                <button onClick={goToPreviousPage} className="per-flip-button per-left-button">◀</button>

                <HTMLFlipBook
                    width={600} // Default size for larger screens
                    height={550} // Default size for larger screens
                    maxShadowOpacity={1}
                    mobileScrollSupport={true} // Enable scroll on mobile
                    className="per-responsive-flipbook"
                    drawShadow={true} // Enable shadow for page turns
                    flippingTime={800} // Slower flipping time for a hard effect
                    useMouseEvents={true} // Mouse events enabled for manual flipping
                    swipeDistance={250} // Increase swipe distance for harder flip
                    ref={flipBookRef} // Reference to control the book pages programmatically
                >
                    {/* Front Cover */}
                    <div className="per-page per-cover per-front-cover">
                        <h1 className="per-title">Sample Flipbook</h1>
                        <p className="per-subtitle">The Braid</p>
                    </div>

                    {/* Pages */}
                    {/* <div className="per-page">Page 1</div> */}
                    {/*  <div className="per-page">
                        <div className="content-container">
                            <div className="text-content">
                                <h2>Page 1</h2>
                                <p>This is the text content for Page 1. It will be displayed on the left side of the page.</p>
                            </div>
                            <div className="image-content">
                                <img src={ExampleCarouselImage} alt="Image for Page 1" />
                            </div>
                        </div>
                    </div> */}
                    <div className="per-page">Page 1</div>
                    <div className="per-page">Page 2</div>
                    <div className="per-page">Page 3</div>
                    <div className="per-page">Page 4</div>
                    <div className="per-page">Page 5</div>
                    <div className="per-page">Page 6</div>

                    {/* Back Cover */}
                    <div className="per-page per-cover per-back-cover">
                        <h1 className="per-thanks">Thank you for reading!</h1>
                    </div>
                </HTMLFlipBook>

                <button onClick={goToNextPage} className="per-flip-button per-right-button">▶</button>
            </Container>
        </>
    )
}

export default PhotoEassyResultpage
