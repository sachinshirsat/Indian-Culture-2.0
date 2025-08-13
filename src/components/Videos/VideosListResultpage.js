import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import { Player, BigPlayButton, LoadingSpinner, ControlBar } from "video-react";
import "video-react/dist/video-react.css";
import Arcicon from "../../image/Video_2 1.webp";
import Api from "../api"; // Import the universal API file
import { Modal, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Linkedin } from "feather-icons-react";
import QRCodeImg from "../../image/QRCode.webp";
import "bootstrap/dist/css/bootstrap.min.css";

function VideosListResultpage() {
    const [showShareModal, setShowShareModal] = useState(false);
    const [showQRModal, setShowQRModal] = useState(false);

    const handleShowShareModal = () => setShowShareModal(true);
    const handleCloseShareModal = () => {
        setShowShareModal(false);
        // window.history.replaceState(null, null, " "); // Removes hash from the URL
    };

    const handleShowQRModal = () => setShowQRModal(true);
    const handleCloseQRModal = () => {
        setShowQRModal(false);
        // window.history.replaceState(null, null, " "); // Removes hash from the URL
    };

    const location = useLocation();
    const itemData = location.state?.item;

    const [details, setDetails] = useState({
        title: itemData?.title || "Loading...",
        keywords: "Loading...",
        publisher: "Loading...",
        description: "Loading...",
        source: "Loading...",
        type: "Loading...",
        libraryName: "Loading...",
        coverageSpatial: "Loading...",
        dateAccessioned: "Loading...",
        dateAvailable: "Loading...",
        formatDuration: "Loading...",
        formatMimeType: "Loading...",
        languageIso: "Loading...",
        subject: "Loading...",
        formatMedium: "Loading...",
        videoUrl: null,
    });

    useEffect(() => {
        if (itemData?.title) {
            console.log("Fetching details for:", itemData.title);
            Api.getVideoByTitle(itemData.title)
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
                                keywords: record.field_dc_subject || "-NA-",
                                publisher: record.field_dc_publisher || "-NA-",
                                description: record.field_dc_description || "-NA-",
                                source: record.field_dc_publisher || "-NA-",
                                type: record.field_dc_type || "-NA-",
                                libraryName: record.field_parent_library_name || "-NA-",
                                coverageSpatial: record.field_dc_coverage_spatial || "-NA-",
                                dateAccessioned: record.field_dc_date_accessioned || "-NA-",
                                dateAvailable: record.field_dc_date_available || "-NA-",
                                formatDuration: record.field_dc_format_duration || "-NA-",
                                formatMimeType: record.field_dc_format_mimetype || "-NA-",
                                languageIso: record.field_dc_language_iso || "-NA-",
                                subject: record.field_dc_subject || "-NA-",
                                formatMedium: record.field_dc_format_medium || "-NA-",
                                videoUrl: record.field_video_streaming_url || null,
                            });
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

    const customStyles = {
        playerWrapper: {
            width: '800px',
            height: 'auto',
            margin: '0 auto',
            // padding: '20px 0'
        },
        videoBackground: {
            background: '#000000',
            // padding: '20px 0',
            minHeight: 'auto'
        }
    };

    return (
        <>
            {/* <Container>
                <Row>
                    <Col>
                        {details.videoUrl ? (
                            <Player
                                className="txtile-ali-nissarali-txt-player"
                                playsInline
                                src={details.videoUrl}
                            >
                                <BigPlayButton position="center" />
                                <LoadingSpinner />
                                <ControlBar autoHide={true} className="my-class" />
                            </Player>
                        ) : (
                            <p>No video file available for this record.</p>
                        )}
                    </Col>
                </Row>
            </Container> */}

            <Container fluid style={customStyles.videoBackground} className='txtile-ali-bg'>
                <Container className="txtile-ali-banner-container">
                    <div style={customStyles.playerWrapper}>
                        {details.videoUrl ? (
                            <Player
                                className="txtile-ali-nissarali-txt-player"
                                playsInline
                                src={details.videoUrl}
                                width={800}
                                height={500}
                                fluid={true}
                            >
                                <BigPlayButton position="center" />
                                <LoadingSpinner />
                                <ControlBar autoHide={true} className="my-class" />
                            </Player>
                        ) : (
                            <p>No video file available for this record.</p>
                        )}
                    </div>
                </Container>
            </Container>

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

                    <Col xs={0} className='txtile-weav-result-title arcreicon' >
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
                            <strong>Keywords:</strong> {details.keywords} <br />
                            <strong>Publisher:</strong> {details.publisher} <br />
                            <strong>Description:</strong> {details.description} <br />
                            <strong>Source:</strong> {details.source} <br />
                            <strong>Type:</strong> {details.type} <br />
                            <strong>Received From:</strong> {details.libraryName} <br />

                           {/*  <strong>Spatial Coverage:</strong> {details.coverageSpatial} <br />
                            <strong>Date Accessioned:</strong> {details.dateAccessioned} <br />
                            <strong>Date Available:</strong> {details.dateAvailable} <br />
                            <strong>Duration:</strong> {details.formatDuration} <br />
                            <strong>MIME Type:</strong> {details.formatMimeType} <br />
                            <strong>Language:</strong> {details.languageIso} <br />
                            <strong>Subject:</strong> {details.subject} <br />
                            <strong>Format Medium:</strong> {details.formatMedium} <br /> */}
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
                                        <td>{details.coverageSpatial}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.date.accessioned</td>
                                        <td>{details.dateAccessioned}</td>
                                    </tr>

                                    <tr>
                                        <td>dc.publisher</td>
                                        <td>{details.publisher}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.date.available</td>
                                        <td>{details.dateAvailable}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.description</td>
                                        <td>{details.description}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.source</td>
                                        <td>{details.source}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.format.mimetype</td>
                                        <td>{details.formatMimeType}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.language.iso</td>
                                        <td>{details.languageIso}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.publisher</td>
                                        <td>{details.source}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.subject</td>
                                        <td>{details.subject}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.type</td>
                                        <td>{details.type}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.format.medium</td>
                                        <td>{details.formatMedium}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.format.duration</td>
                                        <td>{details.formatDuration}</td>
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

export default VideosListResultpage;
