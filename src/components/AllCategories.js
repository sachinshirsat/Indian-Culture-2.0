import React, { useState } from 'react';
import { Button, Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';
import SwrilDivider from './SwrilDivider';

function AllCategories() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Define navigation functions
  const navigateTo = (path) => {
    navigate(path); // Use navigate to change routes

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Container fluid>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Categories</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <Container className='all-cate-header'>
        <Row>
          <Col>
            <h1>Categories</h1>
            <SwrilDivider />
          </Col>
        </Row>
      </Container>

      <section className="page-contain">
        <a className="all-cate-data-card" onClick={() => navigateTo('/arclistpage')}>
          <img src={require('../image/ArchivesGolden_2 1.webp')} alt="icon 3" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Archives</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/videoslistpage')}>
          <img src={require('../image/Video_2 1.webp')} alt="icon 25" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Videos</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/audioslistpage')}>
          <img src={require('../image/AudioBlue_0.webp')} alt="icon 25" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Audios</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/photoarchivelistpage')}>
          <img src={require('../image/imagesOrange_3 1.webp')} alt="icon 25" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Photo Archives</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/manuscriptslistpage')}>
          <img src={require('../image/manuscriptOrange 1.webp')} alt="icon 25" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Manuscripts</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/museumcollections')}>
          <img src={require('../image/museum 1.webp')} alt="icon 1" className='data_card_img image__img' loading='lazy' />
          <span className="image-hover-text-title">Museum Collections</span>
        </a>


      </section>

      <section className="page-contain">
        <a className="all-cate-data-card" onClick={() => navigateTo('/othercollection')}>
          <img src={require('../image/other 1.webp')} alt="icon 2" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Other Collection</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/researchpapers')}>
          <img src={require('../image/ResearchPaper 1.webp')} alt="icon 28" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Research Papers</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/images')}>
          <img src={require('../image/images_0 12.webp')} alt="icon 6" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Images</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/ebooks')}>
          <img src={require('../image/ebooksOrange1 1.webp')} alt="icon 28" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">E-books</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/rarebooks')}>
          <img src={require('../image/RareBook_0 1.webp')} alt="icon 7" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Rarebooks</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/reportsproceedings')}>
          <img src={require('../image/report 1.webp')} alt="icon 23" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Reports & Proceedings</span>
        </a>

      </section>



      <section className="page-contain">
        <a className="all-cate-data-card" onClick={() => navigateTo('/gazettesgazetteers')}>
          <img src={require('../image/Gazettes 1.webp')} alt="icon 23" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Gazettes & Gazetteers</span>
        </a>


        <a className="all-cate-data-card" onClick={() => navigateTo('/snippets')}>
          <img src={require('../image/snippets 1.webp')} alt="icon 8" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Snippets</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/stories')}>
          <img src={require('../image/Story 1.webp')} alt="icon 24" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Stories</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/fortsofindia')}>
          <img src={require('../image/FortsofIndia 1.webp')} alt="icon 28" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Forts of India</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/paintingcollections')}>
          <img src={require('../image/Painting_128x128 1.webp')} alt="icon 25" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Paintings</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/virtual-walkthrough')}>
          <img src={require('../image/walkthrough-removebg-preview.png')} alt="icon 15" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Virtual Walkthrough</span>
        </a>

      </section>

      <section className="page-contain">
       <a className="all-cate-data-card " onClick={() => navigateTo('/unesco')}>
          <img src={require('../image/unseco 1.webp')} alt="icon 26" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">UNESCO</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/foodnculture')}>
          <img src={require('../image/cuisineGreen_0 1.webp')} alt="icon 5" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Food & Culture</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/musicalinstrument')}>
          <img src={require('../image/mopa 1.webp')} alt="icon 2" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Musical Instruments</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/retrievedartefacts')}>
          <img src={require('../image/ArtefactsIcon.png')} alt="icon 28" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Retrieved Artefacts</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/ddr')}>
          <img src={require('../image/district-1.png')} alt="icon 6" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">DDR</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/festivalsofindia')}>
          <img src={require('../image/festival-logo.png')} alt="icon 7" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Festivals Of India</span>
        </a>

      </section>

      <section className="page-contain">
        <a className="all-cate-data-card" onClick={() => navigateTo('/northeastarchive')}>
          <img src={require('../image/NEA-1 1.webp')} alt="icon 23" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">North-East Archives</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/flagshipevent')}>
          <img src={require('../image/ebooksOrange1 1.webp')} alt="icon 1" className='data_card_img image__img' loading='lazy' />
          <span className="image-hover-text-title">Flagship Events</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/timelesstrends')}>
          <img src={require('../image/Timeless_Tr.png')} alt="icon 8" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Timeless Trends</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/ajanta')}>
          <img src={require('../image/ajanta-icon 1.webp')} alt="icon 24" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Ajanta Caves</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/textilenfabric')}>
          <img src={require('../image/Textiles 1.webp')} alt="icon 25" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Textiles & Fabrics</span>
        </a>

        <a className="all-cate-data-card" onClick={() => navigateTo('/photoeassy')}>
          <img src={require('../image/GalleryGreen_0 1.webp')} alt="icon 15" className='data_card_img' loading='lazy' />
          <span className="image-hover-text-title">Photo Essays</span>
        </a>
      </section>

      <Container className='all-cate-header'>
        <Row>
          <Col>
            <SwrilDivider />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AllCategories;