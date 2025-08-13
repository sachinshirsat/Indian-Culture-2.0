import React, { useState } from "react";
import { Button, Col, Container, Row, Breadcrumb } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
// css files bootstrap and external
import "bootstrap/dist/css/bootstrap.min.css";
// import './Paintings.css'

// import img file
// import FilterIcon from '../image/filter-13.png';
import SearchIcon from "../../image/search.svg";
// import Header from '../image/header.PNG';

// import Divider from '../image/SwirlDivider.png';

// import { ArrowLeft } from 'react-feather';
import { Filter } from "react-feather";
import SwrilDivider from "../SwrilDivider";
// import SwrilDivider from './SwrilDivider';
// import Breadcrumb from 'react-bootstrap/Breadcrumb';


function PaintingCollections() {
  // constructor for filter side panel start
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // To avoid any unintended navigation, you can add event.preventDefault()
  const handleShow = (event) => {
    event.preventDefault();
    setShow(true);
  };
  // filter side panel end

  const navigate = useNavigate();
  return (
    <>
      {/* Breadcrumb Navigation */}
      <Container fluid>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/allcategories">Categories</Breadcrumb.Item>
          <Breadcrumb.Item active>Paintings Collections</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <Container className="archive-header">
        <Row>
          <Col>
            <h1>Paintings Collections</h1>
                <SwrilDivider />
              {/* style={{
                marginTop: "-17px",
                width: "90px",
                height: "15px",
                backgroundColor: "transparent",
              }}
            /> */}
          </Col>
        </Row>
      </Container>

      <div className="paint-ings-lst-lst">
        {/* option 1  */}
        <Container style={{ marginTop: "20px" }}>
          <Row>
            
            <Col className="paint-ings-lst-leftplace">
              <p className="paint-ings-lst-showing-result">
                Showing 1 - 2 results of 2
              </p>
            </Col>
          </Row>
         
        </Container>

        {/* Archive img thumbnails start */}
        <main className="paint-ings-lst-page-content">


          <div className="paint-ings-lst-listcard" onClick={() => navigate('/paintings')}>
            <div className="paint-ings-lst-content">
              <h2 className="paint-ings-lst-title ">Painting Portfolios</h2>

              {/* <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p> */}
              <button className="paint-ings-lst-listbtn" onClick={() => navigate('/paintings')}>View</button>
            </div>
          </div>

          <div className="paint-ings-lst-listcard" onClick={() => navigate('/museum-paintings')}>
            <div className="paint-ings-lst-content">
              <h2 className="paint-ings-lst-title">Museum Paintings</h2>
              {/* <p className="copy">Plan your next beach trip with these fabulous destinations</p> */}
              <button className="paint-ings-lst-listbtn" onClick={() => navigate('/museum-paintings')}>View</button>
            </div>
          </div>

          
        </main>
        {/* Archive img thumbnails end */}

        <Container>
          
          {/* <Row>
                        <Col className='archive-end'>
                            <img src={Divider} alt="Caption Divider" style={{ marginTop: '-17px', width: '90px', height: '15px', backgroundColor: 'transparent' }} />

                        </Col>
                    </Row> */}
        </Container>
      </div>
    </>
  );
}

export default PaintingCollections;
