import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import { Player, BigPlayButton, LoadingSpinner, ControlBar } from "video-react";
import "video-react/dist/video-react.css";
import Arcicon from "../../image/images_0 12.webp";
import Api from "../api"; // Import the universal API file
import { Modal, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Linkedin } from "feather-icons-react";
import QRCodeImg from "../../image/QRCode.webp";
import "bootstrap/dist/css/bootstrap.min.css";

function ImagesResultpage() {
    const [showShareModal, setShowShareModal] = useState(false);
    const [showQRModal, setShowQRModal] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);

    const handleShowShareModal = () => setShowShareModal(true);
    const handleCloseShareModal = () => {
        setShowShareModal(false);
        window.history.replaceState(null, null, " "); // Removes hash from the URL
    };

    const handleShowQRModal = () => setShowQRModal(true);
    const handleCloseQRModal = () => {
        setShowQRModal(false);
        window.history.replaceState(null, null, " "); // Removes hash from the URL
    };

    const location = useLocation();
    const itemData = location.state?.item;

    const [details, setDetails] = useState({
        title: itemData?.title || "Loading...",
        field_parent_library_name: "Loading...",
        field_dc_type: "Loading...",
        field_dc_format_source: "Loading...",
        field_dc_coverage_spatial: "Loading...",
        field_dc_coverage_temporal: "Loading...",
        field_dc_date_accessioned: "Loading...",
        field_dc_date_available: "Loading...",
        field_dc_format_extent: "Loading...",
        field_dc_format_mimetype: "Loading...",
        field_dc_format_subject: "Loading...",
        field_dc_identifier_accessionnum: "Loading...",
        field_dc_format_medium: "Loading...",
        field_dc_format_material: "Loading...",
        videoUrl: null,
    });

    useEffect(() => {
        if (itemData?.title) {
            console.log("Fetching details for:", itemData.title);
            Api.getImagesByTitle(itemData.title)
                .then((data) => {
                    console.log("Full API Response:", data); // Log API response
                    if (data && data.rows?.search_results?.length > 0) {
                        const record = data.rows.search_results.find(
                            (item) => item.title === itemData.title
                        );
                        if (record) {
                            console.log("Record Found:", record); // Log record
                            setDetails({
                                title: record.title || "Title not available",
                                field_dc_subject: record.field_dc_subject || "-NA-",
                                field_dc_source: record.field_dc_source || "-NA-",
                                field_dc_identifier_other: record.field_dc_identifier_other || "-NA-",
                                field_parent_library_name: record.field_parent_library_name || "-NA-",
                                field_dc_description: record.field_dc_description || "-NA-",
                                field_cdwa_location: record.field_cdwa_location || "-NA-",
                                field_dc_format_source: record.field_dc_format_source || "-NA-",
                                field_dc_type: record.field_dc_type || "-NA-",
                                
                                field_dc_coverage_spatial: record.field_dc_coverage_spatial || "-NA-",
                                field_dc_coverage_temporal: record.field_dc_coverage_temporal || "-NA-",
                                field_dc_date_accessioned: record.field_dc_date_accessioned || "-NA-",
                                field_dc_date_available: record.field_dc_date_available || "-NA-",
                                field_dc_format_extent: record.field_dc_format_extent || "-NA-",
                                field_dc_format_mimetype: record.field_dc_format_mimetype || "-NA-",
                                field_dc_format_subject: record.field_dc_format_subject || "-NA-",
                                field_dc_identifier_accessionnum: record.field_dc_identifier_accessionnum || "-NA-",
                                field_dc_format_medium: record.field_dc_format_medium || "-NA-",
                                field_dc_format_material: record.field_dc_format_material || "-NA-",
                                videoUrl: record.field_video_streaming_url || null,
                            });
                            setImageSrc(record.field_digital_image_file ? Api.getFileUrl(record.field_digital_image_file) : null);
                        } else {
                            console.error("No matching record found for the given title.");
                        }
                    } else {
                        console.error("No data found or invalid response structure.");
                    }
                })
                .catch((error) => console.error("Error fetching details:", error));
        } else {
            console.error("Item data or title is not available.");
        }
    }, [itemData]);

    if (!itemData?.title) {
        return <p>No data available for this record.</p>;
    }

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const openPopup = (imageSrc) => {
        setSelectedImage(imageSrc);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedImage("");
    };

    return (
        <>
            {/* <Container>
                <div className="photoarcresult-gallery">
                    {imageSrc && (
                        <div className="photoarcresult-thumbnail" onClick={() => openPopup(imageSrc)}>
                            <img src={imageSrc} alt="Digital Archive" />
                        </div>
                    )}
                </div>

                {isPopupOpen && (
                    <div className="photoarcresult-popup" onClick={closePopup}>
                        <span className="photoarcresult-close" onClick={closePopup}>
                            &times;
                        </span>
                        <img className="photoarcresult-popup-content" src={selectedImage} alt="Popup" />
                    </div>
                )}
            </Container> */}

            <div className='parent-container'>
                <div className='image-container'>
                    <img src={imageSrc} className='photoarc-ResultBanner' alt='Free Banner' />
                    <button className='view-image-button' onClick={() => openPopup(imageSrc)}>
                        View Image
                    </button>
                </div>
            </div>
            {isPopupOpen && (
                <div className="photoarcresult-popup" onClick={closePopup}>
                    <span className="photoarcresult-close" onClick={closePopup}>
                        &times;
                    </span>
                    <img className="photoarcresult-popup-content" src={selectedImage} alt="Popup" />
                </div>
            )}

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

            {/* <Container>
                <Row style={{ marginTop: "20px" }}>
                    <Col className="arcreicon">
                        <img src={Arcicon} alt="Archive Icon" />
                    </Col>
                    <Col xs={10} className="arctitle">
                        {details.title}
                    </Col>
                </Row>
            </Container> */}

            <Container >

                <Row style={{ marginTop: '20px' }}>

                    <Col xs={0} className='txtile-weav-result-title ' >
                        <img src={Arcicon} className='txtile-weav-result-icon' alt='Archive Icon' />

                        <div className='txtile-weav-result-vertical'></div>
                        {details.title}

                    </Col>


                </Row>
            </Container>

            <hr />

            <Container>
                <Row>
                    <Col>
                        <p className="arcpara">
                            <strong>Keywords:</strong> {details.field_dc_subject} <br />
                            <strong>Publisher:</strong> {details.field_parent_library_name} <br />
                            <strong>Description:</strong> {details.field_dc_description} <br />
                            <strong>Source:</strong> {details.field_dc_source} <br />
                            <strong>Type:</strong> {details.field_dc_type} <br />
                            <strong>Received From:</strong> {details.field_parent_library_name} <br />

{/* 
                            <strong>Date Accessioned:</strong> {details.field_dc_coverage_temporal} <br />
                            <strong>Date Accessioned:</strong> {details.field_dc_date_accessioned} <br />
                            <strong>Date Available:</strong> {details.field_dc_date_available} <br />
                            <strong>Format Extent:</strong> {details.field_dc_format_extent} <br />
                            <strong>Format MIME Type:</strong> {details.field_dc_format_mimetype} <br />
                            <strong>Format Subject:</strong> {details.field_dc_format_subject} <br />
                            <strong>Accession Number:</strong> {details.field_dc_identifier_accessionnum} <br />
                            <strong>Format Medium:</strong> {details.field_dc_format_medium} <br />
                            <strong>Format Material:</strong> {details.field_dc_format_material} <br /> */}
                        </p>
                    </Col>
                </Row>

                <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Dublin Core Metadata</Accordion.Header>
                        <Accordion.Body>
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th>DC Field</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                        <td>dc.coverage.spatial</td>
                                        <td>{details.field_dc_coverage_spatial}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.date.accessioned</td>
                                        <td>{details.field_dc_date_accessioned}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.date.available</td>
                                        <td>{details.field_dc_date_available}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.description</td>
                                        <td>{details.field_dc_description}</td>
                                    </tr>

                                   <tr>
                                        <td>dc.publisher</td>
                                        <td>{details.field_parent_library_name}</td>
                                    </tr>
 
                                    <tr>
                                        <td>dc.source</td>
                                        <td>{details.field_dc_source}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.format.mimetype</td>
                                        <td>{details.field_dc_format_mimetype}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.subject</td>
                                        <td>{details.field_dc_subject}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.type</td>
                                        <td>{details.field_dc_type}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.format.medium</td>
                                        <td>{details.field_dc_format_medium}</td>
                                    </tr>
  
                                    
                                    <tr>
                                        <td>dc.identifier.other</td>
                                        <td>{details.field_dc_identifier_other}</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>cdwa.location </td>
                                        <td>{details.field_cdwa_location}</td>
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

export default ImagesResultpage;
