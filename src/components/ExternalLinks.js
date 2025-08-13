import { React, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import Moc1 from "../image/exl1.jpg";
import Moc2 from "../image/exl2.jpg";
import Moc3 from "../image/exl3.png";
import Moc4 from "../image/exl4.png";
import Moc5 from "../image/exl5.png";
import Moc6 from "../image/exl6.png";
import Moc7 from "../image/exl7.png";
import Moc8 from "../image/exl8.png";
import Moc9 from "../image/exl9.jpg";
import Moc10 from "../image/exl10.png";
import Moc11 from "../image/exl11.png";




import SwrilDivider from "./SwrilDivider";

// Glider.js
import "glider-js/glider.min.css";
import Glider from "glider-js";

// Add styles for image titles
const styles = {
  cardImage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // cursor: 'pointer',
    // gap: '10px',
  },
  imageTitle: {
    fontSize: '16px',
    fontWeight: '600',
    margin: '0px 0 0 0',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#333',
  }
};

function ExternalLinks() {
  useEffect(() => {
    new Glider(document.querySelector('.external-links-glider'), {
      slidesToShow: 1.1,
      slidesToScroll: 1,
      // draggable: true,
      autoPlay: 3000,
      dots: '.external-links-dots',
      arrows: {
        prev: '.external-links-prev',
        next: '.external-links-next',
      },
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.1,
            slidesToScroll: 1,
            duration: 0.8,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4.1,
            slidesToScroll: 1,
            duration: 0.8,
          },
        },
      ],
    });
  }, []);

  return (
    <>
      <Container className="external-header">
        <Row>
          <Col>
            <h1>External Links</h1>
            <SwrilDivider />
          </Col>
        </Row>
      </Container>
      <main className="main">
        <div className="container">
          <div className="glider-contain">
            <div className="external-links-glider hide-scrollbar">
            <div className="card-image" style={styles.cardImage}>
              <a href="https://nmma.nic.in/nmma/indexAction.do" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}> 
                  <img src={Moc1} alt="Slider " />
                  <h3 style={styles.imageTitle}>National Mission on Monuments and Antiquities</h3>
              </a>
            </div>

              <div className="card-image" style={styles.cardImage}>
              <a href="https://www.abhilekh-patal.in/jspui/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
             
                <img src={Moc2} alt="Slider Imag" />
                <h3 style={styles.imageTitle}>Abhilekh Patal</h3>
             
              </a>
               </div>
              <div className="card-image" style={styles.cardImage}>
              <a href="https://gandhiashramsabarmati.org/en/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
             
                <img src={Moc3} alt="Slider Ima" />
                <h3 style={styles.imageTitle}>Gandhi Ashram at Sabarmati</h3>
             
              </a>
               </div>
              <div className="card-image" style={styles.cardImage}>
              <a href="https://www.namami.gov.in/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
             
                <img src={Moc4} alt="Slider I" />
                <h3 style={styles.imageTitle}>National Mission for Manuscripts</h3>
             
              </a>
               </div>
              <div className="card-image" style={styles.cardImage}>
              <a href="https://www.gandhiheritageportal.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
             
                <img src={Moc5} alt="Slider " />
                <h3 style={styles.imageTitle}>Gandhi Heritage Portal</h3>
             
              </a>
               </div>
              <div className="card-image" style={styles.cardImage}>
              <a href="http://www.netajipapers.gov.in/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
             
                <img src={Moc6} alt="Slide" />
                <h3 style={styles.imageTitle}>Netaji Subhas Chandra Bose Papers</h3>
             
              </a>
               </div>
              <div className="card-image" style={styles.cardImage}>
             <a href="https://ncaa.gov.in/repository/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
             
                <img src={Moc7} alt="Slid" />
                <h3 style={styles.imageTitle}>National Cultural Audiovisual Archives</h3>
             
              </a>
               </div>
              <div className="card-image" style={styles.cardImage}>
             <a href="https://ndl.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
             
                <img src={Moc8} alt="Sli" />
                <h3 style={styles.imageTitle}>National Digital Library of India (NDLI)</h3>
             
              </a>
               </div>
              <div className="card-image" style={styles.cardImage}>
             <a href="https://vedicheritage.gov.in/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
             
                <img src={Moc9} alt="Sl" />
                <h3 style={styles.imageTitle}>Vedic Heritage</h3>
               
              </a>
               </div>
              <div className="card-image" style={styles.cardImage}>
             <a href="https://sangam.gov.in/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
             
                <img src={Moc10} alt="S" />
                <h3 style={styles.imageTitle}>Sangam App  Link to Download</h3>
             
              </a>
               </div>
              <div className="card-image" style={styles.cardImage}>
             <a href="https://museumsofindia.gov.in/repository" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
             
                <img src={Moc11} alt="" />
                <h3 style={styles.imageTitle}>Museums of India</h3>
             
              </a>
               </div>
            </div>

            <span role="button" aria-label="Previous" className="glider-prev external-links-prev">
              <FontAwesomeIcon icon={faChevronLeft} style={{ marginLeft: "14px" }} />
            </span>
            <span role="button" aria-label="Next" className="glider-next external-links-next">
              <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: "14px" }} />
            </span>
            {/*<span role="tablist" className="dots"></span>*/}
          </div>
          {/* <div style={{display: "flex", justifyContent: "flex-end", padding: "10px", marginRight: "0px", }} >
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              All External Links
            </a>
          </div> */}
        </div>
      </main>
    </>
  );
}

export default ExternalLinks;
