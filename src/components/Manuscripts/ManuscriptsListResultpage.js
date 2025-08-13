import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Carousel,
  Button,
  Modal,
  Accordion,
  Table,
} from "react-bootstrap";
import Api from "../api";
import { Facebook, Instagram, Twitter, Linkedin } from "feather-icons-react";
import QRCodeImg from "../../image/QRCode.webp";
import Arcicon from "../../image/manuscriptOrange 1.webp";
import ManuPdfViewer from "./ManuPdfViewer";
import ManuPdfFlipbook from "./ManuPdfFlipbook";

function ManuscriptsListResultpage() {
  const location = useLocation();
  const navigate = useNavigate();
  const itemData = location.state?.item;
  const [isFlipbook, setIsFlipbook] = useState(false); // State to toggle between PdfViewer and PdfFlipbook

  const [details, setDetails] = useState(null);
  const [images, setImages] = useState([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);

  const handleShowShareModal = () => setShowShareModal(true);
  const handleCloseShareModal = () => {
    setShowShareModal(false);
    window.history.replaceState(null, null, " ");
  };

  const handleShowQRModal = () => setShowQRModal(true);
  const handleCloseQRModal = () => {
    setShowQRModal(false);
    window.history.replaceState(null, null, " ");
  };

  useEffect(() => {
    if (!itemData?.title) {
      console.warn("Item data or title is missing.");
      return;
    }

    console.log("Fetching details for:", itemData.title);

    Api.getManuscriptByTitle(itemData.title)
      .then((data) => {
        if (data && data.rows?.search_results?.length > 0) {
          const record = data.rows.search_results.find(
            (item) => item.title === itemData.title
          );
          setDetails(record || { title: "Record not found" });

          if (record?.field_digital_image_file_1) {
            const imageArray = record.field_digital_image_file_1
              .split(",")
              .map((img) => Api.getFileUrl(img.trim()));
            setImages(imageArray);
            console.log("✅ Extracted Image URLs:", imageArray);
          }
        } else {
          setDetails({ title: "No data available" });
        }
      })
      .catch((error) => {
        console.error("Error fetching manuscript details:", error);
        setDetails({ title: "Error loading data" });
      });
  }, [itemData]);

  if (!itemData?.title) {
    return (
      <Container>
        <h1>Record Not Found</h1>
        <p>It seems this record does not exist or is inaccessible.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </Container>
    );
  }

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* <Container>
        <Row>
          <Col>
            {details.title !== "-NA-" ? (
              <ManuPdfViewer title={details.title} />
            ) : (
              <p>No PDF file available for this record.</p>
            )}
          </Col>
        </Row>
      </Container> */}
      <Container>
        {images.length === 0 && (
          <Row
            className="justify-content-center align-items-center mb-3"
            style={{ height: "10vh" }}
          >
            <Col xs="auto">
              <Button
                variant="primary"
                onClick={() => setIsFlipbook(!isFlipbook)}
                style={{ fontSize: "16px", padding: "10px 20px" }}
              >
                {isFlipbook ? "Switch to PDF Viewer" : "Switch to Flipbook"}
              </Button>
            </Col>
          </Row>
        )}

        {details && details.title ? (
          isFlipbook ? (
            <ManuPdfFlipbook title={itemData.title} />
          ) : (
            <ManuPdfViewer title={itemData.title} />
          )
        ) : (
          <div className="text-center my-5">
            <div
              className="spinner-border text-primary"
              role="status"
              style={{ width: "3rem", height: "3rem" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading PDF Viewer...</p>
          </div>
        )}
      </Container>

      <Carousel
        className="parent-container mar-top"
        interval={null}
        controls
        indicators
        slide={false}
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="photoarc-ResultBanner"
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ margin: "0 auto", maxWidth: "100%", marginTop: "34px" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <Container>
        <div className="arclst-float-container">
          <a role="button" className="icon one" onClick={handleShowShareModal}>
            Share
          </a>
          <a role="button" className="icon two" onClick={handleShowQRModal}>
            QR Code
          </a>
        </div>

        <Modal show={showShareModal} onHide={handleCloseShareModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Share</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="share-options">
              <Facebook className="face" size="50" />
              <Instagram className="insta" size="50" />
              <Twitter className="twi" size="50" />
              <Linkedin className="linkd" size="50" />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseShareModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showQRModal} onHide={handleCloseQRModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>QR Code</Modal.Title>
          </Modal.Header>
          <Modal.Body className="qrcode-modal">
            <img src={QRCodeImg} alt="QR Code" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseQRModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>

      <Container>
        <Row style={{ marginTop: "20px" }}>
          <Col xs={0} className="txtile-weav-result-title">
            <img
              src={Arcicon}
              className="txtile-weav-result-icon"
              alt="Archive Icon"
            />
            <div className="txtile-weav-result-vertical"></div>
            {details.title}
          </Col>
        </Row>
      </Container>

      <hr />

      <Container>
        <Row>
          <Col>
            <p className="arcpara">
              {/* <strong>Title:</strong> {details.title} <br /> */}
              <strong>Keywords:</strong> {details.field_dc_subject || "-NA-"}{" "}
              <br />
              <strong>Publisher:</strong> {details.field_dc_publisher || "-NA-"}{" "}
              <br />
              <strong>Description:</strong>{" "}
              {details.field_dc_description || "-NA-"} <br />
              <strong>Type:</strong> {details.field_dc_type || "-NA-"} <br />
              <strong>Received From:</strong>{" "}
              {details.field_parent_library_name || "-NA-"} <br />
              {/* <strong>Coverage Temporal:</strong> {details.field_dc_coverage_temporal || "-NA-"} <br />
                            <strong>Date Accessioned:</strong> {details.field_dc_date_accessioned || "-NA-"} <br />
                            <strong>Date Available:</strong> {details.field_dc_date_available || "-NA-"} <br />
                            <strong>Format Extent:</strong> {details.field_dc_format_extent || "-NA-"} <br />
                            <strong>Format MIME Type:</strong> {details.field_dc_format_mimetype || "-NA-"} <br />
                            <strong>Language ISO:</strong> {details.field_dc_language_iso || "-NA-"} <br />
                            <strong>Accession Number:</strong> {details.field_dc_identifier_accessionnum || "-NA-"} <br />
                            <strong>Format Medium:</strong> {details.field_dc_format_medium || "-NA-"} <br />
                            <strong>Format Material:</strong> {details.field_dc_format_material || "-NA-"} <br /> */}
            </p>
          </Col>
        </Row>

        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Metadata Details</Accordion.Header>
            <Accordion.Body>
              <Table striped>
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>dc.coverage.spatial</td>
                    <td>{details.field_dc_coverage_spatial || "-NA-"}</td>
                  </tr>
                  <tr>
                    <td>dc.coverage.temporal</td>
                    <td>{details.field_dc_coverage_temporal || "-NA-"}</td>
                  </tr>
                  <tr>
                    <td>dc.date.accessioned</td>
                    <td>{details.field_dc_date_accessioned || "-NA-"}</td>
                  </tr>
                  <tr>
                    <td>dc.date.available</td>
                    <td>{details.field_dc_date_available || "-NA-"}</td>
                  </tr>
                  <tr>
                    <td>dc.description</td>
                    <td>{details.field_dc_description || "-NA-"}</td>
                  </tr>
                  <tr>
                    <td>dc.type</td>
                    <td>{details.field_dc_type || "-NA-"}</td>
                  </tr>

                  <tr>
                    <td>dc.format.extent</td>
                    <td>{details.field_dc_format_extent || "-NA-"}</td>
                  </tr>
                  <tr>
                    <td>dc.format.mimetype</td>
                    <td>{details.field_dc_format_mimetype || "-NA-"}</td>
                  </tr>
                  <tr>
                    <td>dc.language.iso</td>
                    <td>{details.field_dc_language_iso || "-NA-"}</td>
                  </tr>
                  <tr>
                    <td>dc.subject</td>
                    <td>{details.field_dc_subject || "-NA-"}</td>
                  </tr>
                  <tr>
                    <td>dc.publisher</td>
                    <td>{details.field_dc_publisher || "-NA-"}</td>
                  </tr>

                  <tr>
                    <td>dc.accession.number</td>
                    <td>
                      {details.field_dc_identifier_accessionnum || "-NA-"}
                    </td>
                  </tr>
                  <tr>
                    <td>dc.format.medium</td>
                    <td>{details.field_dc_format_medium || "-NA-"}</td>
                  </tr>
                  <tr>
                    <td>dc.format.material</td>
                    <td>{details.field_dc_format_material || "-NA-"}</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default ManuscriptsListResultpage;
