import { useState, useEffect } from "react";
// install 'react-photo-album' npm install react-photo-album
import PhotoAlbum from "react-photo-album";
// install light-box npm i yet-another-react-lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import '../index.css';

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "./photos";
import { Container, Row, Col } from "react-bootstrap";
import SwrilDivider from "./SwrilDivider";
import { ArrowLeft } from 'react-feather';

const slides = photos.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
    })),
}));

function HomeGalleryList() {
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        console.log("Photos data:", photos);
        console.log("Slides data:", slides);
    }, []);

    const backtopre = () => {
        window.open('/', '_parent');
    }

    return (
        <>
            <Container className='homegallerylit-header'>
                <Row>
                    <Col>
                        <h1>GalleryList</h1>
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>
            <div style={{ padding: '20px' }}>
                <PhotoAlbum 
                    photos={photos} 
                    layout="masonry" 
                    targetRowHeight={200} 
                    onClick={({ index }) => setIndex(index)}
                />
            </div>

            <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </>
    )
}

export default HomeGalleryList
