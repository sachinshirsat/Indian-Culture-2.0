import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

/* import ArchiveIcon from '../image/black icons/ArchivesGolden_2.png';
import AudioIcon from '../image/black icons/AudioBlue_0.png';
import FortIcon from '../image/black icons/FortsofIndia.png';
import VideoIcon from '../image/black icons/Video_2.png';
import ManuICon from '../image/black icons/manuscriptOrange.png';
import DigiIcon from '../image/india_0.png'; */

// All Icons files start here
import Allicon1 from "../image/ebooksOrange1 1.webp";
import Allicon2 from "../image/mopa 1.webp";
import Allicon3 from "../image/ArchivesGolden_2 1.webp";
import Allicon4 from "../image/images_0 1.webp";
import Allicon5 from "../image/cuisineGreen_0 1.webp";
import Allicon6 from "../image/images_0 12.webp";

import Allicon7 from "../image/imagesOrange_3 1.webp";
import Allicon8 from "../image/other 1.webp";
import Allicon9 from "../image/Painting_128x128 1.webp";
import Allicon10 from "../image/report 1.webp";
import Allicon11 from "../image/ich 1.webp";
import Allicon12 from "../image/Video_2 1.webp";

import Allicon13 from "../image/unseco 1.webp";
import Allicon14 from "../image/ResearchPaper 1.webp";
import Allicon15 from "../image/GalleryGreen_0 1.webp";
import Allicon16 from "../image/RareBook_0 1.webp";
import Allicon17 from "../image/manuscriptOrange 1.webp";
import Allicon18 from "../image/museum 1.webp";

import Allicon19 from "../image/Gazettes 1.webp";
import Allicon20 from "../image/Bibilography 1.webp";
import Allicon21 from "../image/Bibilography_1 1.webp";
import Allicon22 from "../image/Story 1.webp";
import Allicon23 from "../image/NEA-1 1.webp";
import Allicon24 from "../image/ajanta-icon 1.webp";

import Allicon25 from "../image/Textiles 1.webp";
import Allicon26 from "../image/HistoricCities 1.webp";
import Allicon27 from "../image/snippets 1.webp";
import Allicon28 from "../image/FortsofIndia 1.webp";
// All Icons end here

import SwrilDivider from "./SwrilDivider";

import { Button, Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import AllCategories from "./AllCategories";

const CategoriesOpt = () => {
  const navigate = useNavigate();

  const categoriesopt = () => {
    navigate("/allcategories");
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 4,
    // initialSlide: 1,
    // autoplay: true,
    // autoplaySpeed: 10000,
    pauseOnHover: true,
    arrows: true,
    draggable: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4.1,
          slidesToScroll: 2,
          arrows: true,
          draggable: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 2,
          // initialSlide: 2
          arrows: false,
          draggable: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2

          arrows: false,
          draggable: true,

          focusOnSelect: true,
          centerMode: true,
          centerPadding: "40px",
          variableWidth: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2

          arrows: false,
          draggable: true,

          focusOnSelect: true,
          centerMode: true,
          centerPadding: "40px",
          variableWidth: false,
        },
      },
    ],
  };

  const arclistpage = () => {
    navigate("/arclistpage");
  };

  return (
    <>
      <Container id="Catagory" className="cata-header #skip">
        <Row>
          <Col>
            <h1>Categories</h1>
            <SwrilDivider />
          </Col>
        </Row>
      </Container>
      <Container
        style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}
      >
        <Slider {...settings}>
          <div className="cata-lst">
            <a
              href="/fortsofindia"
              className="catacard forts_of_india categoriescard"
            >
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon28}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Forts of India</p>
            </a>
          </div>

          <div className="cata-lst">
            <a
              href="/musicalinstrument"
              className="catacard musical_instrument categoriescard"
            >
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon2}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Musical Instruments</p>
            </a>
          </div>

          <div className="cata-lst">
            <a href="/arclistpage" className="catacard archives categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon3}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Archives</p>
            </a>
          </div>

          <div className="cata-lst">
            <a
              href="/foodnculture"
              className="catacard food_culture categoriescard"
            >
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon5}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Food & Culture</p>
            </a>
          </div>

          <div className="cata-lst">
            <a
              href="/photoeassy"
              className="catacard photo_essay categoriescard"
            >
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon15}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Photo Essays</p>
            </a>
          </div>

          <div className="cata-lst">
            <a
              href="/northeastarchive"
              className="catacard north-east_archives categoriescard"
            >
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon23}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>North-East Archives</p>
            </a>
          </div>

          <div className="cata-lst">
            <a href="/ajanta" className="catacard ajanta_caves categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon24}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Ajanta Caves</p>
            </a>
          </div>
          {/* next 8 categories */}
          <div className="cata-lst">
            <a
              href="/textilenfabric"
              className="catacard textile_fab categoriescard"
            >
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon25}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Textiles & Fabrics</p>
            </a>
          </div>

          <div className="cata-lst">
            <a
              href="/historiccities"
              className="catacard historic_cities categoriescard"
            >
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon26}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Historic Cities</p>
            </a>
          </div>

          <div className="cata-lst">
            <a href=" " className="catacard e-books categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon1}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>e-Books</p>
            </a>
          </div>

          <div className="cata-lst">
            <a href=" " className="catacard audios categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon4}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Audios</p>
            </a>
          </div>

          <div className="cata-lst">
            <a href=" " className="catacard images categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                <span>
                  {" "}
                  <img
                    src={Allicon6}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Images</p>
            </a>
          </div>

          <div className="cata-lst">
            <a href=" " className="catacard photo_archives categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon7}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Photo Archives</p>
            </a>
          </div>

          <div className="cata-lst">
            <a href=" " className="catacard other_collections categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon8}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Other Collections</p>
            </a>
          </div>
          {/* next 8 categories */}
          <div className="cata-lst">
            <a href=" " className="catacard painting categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon9}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Paintings</p>
            </a>
          </div>

          <div className="cata-lst">
            <a href=" " className="catacard reports categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon10}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Reports</p>
            </a>
          </div>

          <div className="cata-lst">
            <a href=" " className="catacard cultural_heritage categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon11}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Cultural Heritage</p>
            </a>
          </div>

          <div className="cata-lst">
            <a href=" " className="catacard videos categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon12}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Videos</p>
            </a>
          </div>

          <div className="cata-lst">
            <a href=" " className="catacard unesco categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon13}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>UNESCO</p>
            </a>
          </div>

          <div className="cata-lst">
            <a href=" " className="catacard research_paper categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                <span>
                  {" "}
                  <img
                    src={Allicon14}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Research Paper</p>
            </a>
          </div>

          <div className="cata-lst">
            <a href=" " className="catacard rarebook categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon16}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Rare Books</p>
            </a>
          </div>
          {/* next 8 categories */}
          <div className="cata-lst">
            <a href=" " className="catacard manuscript categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon17}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Manuscripts</p>
            </a>
          </div>

          <div className="cata-lst">
            <a href=" " className="catacard museum_collections categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon18}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Museum Collections</p>
            </a>
          </div>

          <div className="cata-lst">
            <a href=" " className="catacard gazettes categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon19}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Gazettes</p>
            </a>
          </div>

          <div className="cata-lst">
            <a href=" " className="catacard union_catalogue categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon20}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Union Catalogue</p>
            </a>
          </div>

          <div className="cata-lst">
            <a href=" " className="catacard bibilography categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon21}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Bibilography</p>
            </a>
          </div>

          <div className="cata-lst">
            <a href=" " className="catacard stories categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                <span>
                  {" "}
                  <img
                    src={Allicon22}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Stories</p>
            </a>
          </div>

          <div className="cata-lst">
            <a href=" " className="catacard snippets categoriescard">
              <div className="overlay"></div>
              <div className="circle">
                {/* img file */}
                <span>
                  {" "}
                  <img
                    src={Allicon27}
                    alt=""
                    style={{ width: "78px", height: "78px" }}
                  />
                </span>
              </div>
              <p>Snippets</p>
            </a>
          </div>
        </Slider>
      </Container>
      <Container className="catacenter">
        <Row>
          <Col>
            <button className="catabtn" onClick={categoriesopt}>
              <span>View All</span>
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CategoriesOpt;
