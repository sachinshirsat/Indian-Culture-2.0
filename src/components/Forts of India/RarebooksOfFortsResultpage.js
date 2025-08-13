import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import PdfViewer from "./RarebookFortsPdfViewer";
// import PdfFlipbook from "./PdfFlipbook";
import Arcicon from "../../image/ArchivesGolden_2 3.png";
import Api from "../api"; // Import the universal API file
import { Modal, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Linkedin, Share2 } from "feather-icons-react";
import QRCodeImg from "../../image/QRCode.webp";
import "bootstrap/dist/css/bootstrap.min.css";

function RarebooksOfFortsResultpage() {
    const [showShareModal, setShowShareModal] = useState(false);
    const [showQRModal, setShowQRModal] = useState(false);
    const location = useLocation();
    const title = location.state?.title; // Get title directly from state

    const [details, setDetails] = useState({
        title: title || "Loading...",
        author: "Loading...",
        dateAccessioned: "Loading...",
        dateAvailable: "Loading...",
        issueDate: "Loading...",
        description: "Loading...",
        sponsorship: "Loading...",
        extent: "Loading...",
        mimeType: "Loading...",
        language: "Loading...",
        publisher: "Loading...",
        isPartOfSeries: "Loading...",
        type: "Loading...",
        libraryName: "Loading...",
        pdfUrls: [],
    });

    useEffect(() => {
        console.log("Title received:", title); // Debug log

        if (title) {
            console.log("Fetching data for title:", title);
            Api.getRarebooksFortsByTitle(title)
                .then((data) => {
                    console.log("API Response:", data);
                    if (data && data.rows?.search_results?.length > 0) {
                        const record = data.rows.search_results[0];
                        console.log("Found record:", record);
                        
                        if (record) {
                            const updatedDetails = {
                                title: record.title || "Title not available",
                                author: record.field_dc_contributor_author || "-NA-",
                                copyright: record.field_dc_date_copyright || "-NA-",
                                dateAccessioned: record.field_dc_date_accessioned || "-NA-",
                                dateAvailable: record.field_dc_date_available || "-NA-",
                                issueDate: record.field_dc_date_issued || "-NA-",
                                description: record.field_dc_description_abstract || "-NA-",
                                sponsorship: record.field_dc_description_sponsorship || "-NA-",
                                extent: record.field_dc_format_extent || "-NA-",
                                mimeType: record.field_dc_format_mimetype || "-NA-",
                                language: record.field_dc_language_iso || "-NA-",
                                publisher: record.field_dc_publisher || "-NA-",
                                isPartOfSeries: record.field_dc_relation_ispartofseries || "-NA-",
                                type: record.field_dc_type || "-NA-",
                                libraryName: record.field_parent_library_name || "-NA-",
                                pdfUrls: record.field_pdf_digital_file ? Api.getFileUrl(record.field_pdf_digital_file) : "-NA-",
                            };
                            console.log("Setting details:", updatedDetails);
                            setDetails(updatedDetails);
                        } else {
                            console.error("No matching record found for the given title.");
                            setDetails(prev => ({ ...prev, title: "Record not found" }));
                        }
                    } else {
                        console.error("Invalid API response structure or no results found.");
                        setDetails(prev => ({ ...prev, title: "No data available" }));
                    }
                })
                .catch((error) => {
                    console.error("Error fetching details:", error);
                    setDetails(prev => ({ ...prev, title: "Error loading data" }));
                });
        } else {
            console.error("No title provided in location state");
            setDetails(prev => ({ ...prev, title: "No title provided" }));
        }
    }, [title]);

    const [isFlipbook, setIsFlipbook] = useState(false);

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

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        {details.pdfUrls !== "-NA-" ? (
                            <PdfViewer pdfUrls={[details.pdfUrls]} />
                        ) : (
                            <p>No PDF file available for this record.</p>
                        )}
                    </Col>
                </Row>
            </Container>
            {/* This i s code of Switch btn for Switch to PDF Viewer" : "Switch to Flipbook  */}
            {/* <Container>
                
                <Row className="justify-content-center align-items-center mb-3" style={{ height: "10vh" }}>
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

                {isFlipbook ? (
                    <PdfFlipbook pdfUrls={[details.pdfUrls]} />
                ) : (
                    <PdfViewer pdfUrls={[details.pdfUrls]} />
                )}
            </Container> */}
            {/* This i s code of Switch btn for Switch to PDF Viewer" : "Switch to Flipbook  */}
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
                            <strong>Author:</strong> {details.author} <br />
                            {/* <strong>Issue Date:</strong> {details.issueDate} <br /> */}
                            <strong>Publisher:</strong> {details.publisher} <br />
                            <strong>Description:</strong> {details.description} <br />
                            <strong>Type:</strong> {details.type} <br />
                            <strong>Received From:</strong> {details.libraryName} <br />
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
                                        <td>dc.contributor.author</td>
                                        <td>{details.author}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.date.accessioned</td>
                                        <td>{details.dateAccessioned}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.date.available</td>
                                        <td>{details.dateAvailable}</td>
                                    </tr>
                                    {/* <tr>
                                        <td>dc.date.issued</td>
                                        <td>{details.issueDate}</td>
                                    </tr> */}
                                    <tr>
                                        <td>dc.description.abstract</td>
                                        <td>{details.description}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.description.sponsorship</td>
                                        <td>{details.sponsorship}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.format.extent</td>
                                        <td>{details.extent}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.format.mimetype</td>
                                        <td>{details.mimeType}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.language.iso</td>
                                        <td>{details.language}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.publisher</td>
                                        <td>{details.publisher}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.relation.ispartofseries</td>
                                        <td>{details.isPartOfSeries}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.type</td>
                                        <td>{details.type}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.date.copyright</td>
                                        <td>{details.copyright}</td>
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

export default RarebooksOfFortsResultpage;
