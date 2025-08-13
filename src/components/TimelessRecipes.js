import React from "react";
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SwrilDivider from "./SwrilDivider";

// import './TimelessRecipes.css';

/* import TRimg1 from '../images/maincourse 1.png';
import TRimg2 from '../images/samosas 1.png';
import TRimg3 from '../images/Rectangle 216.png';
import TRimg4 from '../images/Rectangle 214.png'; */

function TimelessRecipes() {
    const maincourse = () => {
        window.open('/maincourse', '_parent');
      };

  return (
    <>
      <Container className="fnc-timeless-header">
        <Row>
          <Col>
            <h1>Timeless Recipes</h1>
            <SwrilDivider/>
          </Col>
        </Row>
      </Container>
      <Container className="fnc-timeless-cover">
        <Row className="justify-content-md-center">
          <Col>
            <p>
              India, with its rich heritage, and physical and cultural diversity, cradles countess cuisines. Every culture, inhabiting this ancient land, lends a unique culinary touch to the treasures of nature’s basket, found here. This is a collection of recipes from different corners of our country, that range from simple household dishes to lip-smacking delicacies. The recipes provided here are of course only one of the countless ways in which these dishes can be prepared.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <div class="fnc-timeless-grid-container">
          <div class="fnc-timeless-grid-item" id="pan-india" onClick={maincourse}>
            <div class="fnc-timeless-overlay">Main Course</div>
          </div>
          <div class="fnc-timeless-grid-item" id="folk">
            <div class="fnc-timeless-overlay">Snacks</div>
          </div>
          <div class="fnc-timeless-grid-item" id="tribal">
            <div class="fnc-timeless-overlay">Desserts</div>
          </div>
          <div class="fnc-timeless-grid-item" id="fairs">
            <div class="fnc-timeless-overlay">Accompaniments</div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default TimelessRecipes;
