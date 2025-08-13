import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import PdfViewer from "./RepoProPdfViewer";
import PdfFlipbook from "./RepoProPdfFlipbook";
import Arcicon from "../../image/ResearchPaper 1.webp";
import Api from "../api"; // Import the universal API file
import { Modal, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Linkedin } from "feather-icons-react";
import QRCodeImg from "../../image/QRCode.webp";
import "bootstrap/dist/css/bootstrap.min.css";

function ReportsProceedingsResultpage() {
    const [showShareModal, setShowShareModal] = useState(false);
    const [showQRModal, setShowQRModal] = useState(false);
    const [selectedPdfUrl, setSelectedPdfUrl] = useState("");
    const [allPdfUrls, setAllPdfUrls] = useState([]);

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
    });

    useEffect(() => {
    if (itemData?.title) {
        Api.getReportsProceedingsByTitle(itemData.title)
            .then((data) => {
                if (data && data.rows?.search_results?.length > 0) {
                    const record = data.rows.search_results.find(
                        (item) => item.title === itemData.title
                    );

                    if (record) {
                        // Process PDF URLs
                        const pdfUrlsString = record.field_pdf_digital_file || '';
                        const pdfUrlsArray = pdfUrlsString.split(',')
                            .map(url => url.trim())
                            .filter(url => url) // Remove empty strings
                            .map(url => Api.getFileUrl(url)); // Apply getFileUrl to each URL
                        
                        setAllPdfUrls(pdfUrlsArray);
                        setSelectedPdfUrl(pdfUrlsArray[0] || ''); // Set first PDF as default

                        setDetails({
                            title: record.title || "Title not available",
                            keywords: record.field_dc_subject || "-NA-",
                            source: record.field_dc_source || "-NA-",
                            subject: record.field_dc_subject || "-NA-",
                            medium: record.field_dc_format_medium || "-NA-",
                            author: record.field_dc_contributor_author || "-NA-",
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
                        });
                    } else {
                        console.error("No matching record found for the given title.");
                    }
                } else {
                    console.error("Invalid API response structure or no results found.");
                }
            })
            .catch((error) => console.error("Error fetching details:", error));
    }
}, [itemData]);

    const [isFlipbook, setIsFlipbook] = useState(false);

    return (
        <>
            <Container>
                <Row className="mb-3 align-items-center">
                    {/* PDF parts dropdown - only shown when not in flipbook mode */}
                    {!isFlipbook && allPdfUrls.length > 1 ? (
                        <Col md={4}>
                            <Form.Select 
                                value={selectedPdfUrl}
                                onChange={(e) => setSelectedPdfUrl(e.target.value)}
                                style={{ maxWidth: '300px' }}
                            >
                                {allPdfUrls.map((url, index) => (
                                    <option key={index} value={url}>
                                        Parts of PDF File {index + 1}
                                    </option>
                                ))}
                            </Form.Select>
                        </Col>
                    ) : (
                        <Col md={4}></Col> // Empty column for spacing when dropdown is hidden
                    )}
                    
                    {/* Switch button - centered */}
                    <Col md={4} className="text-center">
                        <Button
                            variant="primary"
                            onClick={() => setIsFlipbook(!isFlipbook)}
                            style={{ fontSize: "16px", padding: "10px 20px" }}
                        >
                            {isFlipbook ? "Switch to PDF Viewer" : "Switch to Flipbook"}
                        </Button>
                    </Col>
                    
                    {/* Empty column for balance */}
                    <Col md={4}></Col>
                </Row>

                <Row>
                    <Col>
                        {selectedPdfUrl ? (
                            isFlipbook ? (
                                <div style={{ 
                                    overflow: 'hidden',
                                    width: '100%',
                                    maxWidth: '100%',
                                    margin: '0 auto'
                                }}>
                                    <PdfFlipbook pdfUrls={[selectedPdfUrl]} />
                                </div>
                            ) : (
                                <PdfViewer pdfUrls={[selectedPdfUrl]} />
                            )
                        ) : (
                            <div className="text-center my-5">
                                <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <p className="mt-3">Loading PDF Viewer...</p>
                            </div>
                        )}
                    </Col>
                </Row>
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
                            <strong>Keywords:</strong> {details.keywords} <br />
                            <strong>Source:</strong> {details.source} <br />
                            <strong>Type:</strong> {details.type} <br />

                            {/* 
                            <strong>Publisher:</strong> {details.publisher} <br />
                            <strong>Description:</strong> {details.description} <br /> */}
                            
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
                                    <tr>
                                        <td>dc.source</td>
                                        <td>{details.source}</td>
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
                                        <td>dc.type</td>
                                        <td>{details.type}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.subject</td>
                                        <td>{details.subject}</td>
                                    </tr>
                                    <tr>
                                        <td>dc.format.medium</td>
                                        <td>{details.medium}</td>
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

export default ReportsProceedingsResultpage;