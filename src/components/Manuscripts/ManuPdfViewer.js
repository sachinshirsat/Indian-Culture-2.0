import React, { useEffect, useState, useRef } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { Button } from "react-bootstrap";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import { FaSearchMinus, FaSearchPlus, FaExpand } from "react-icons/fa";
import Api from "../api"; // Import the API utility

const PdfViewer = ({ title }) => {
    const [pdfUrls, setPdfUrls] = useState([]); // State for PDF URLs
    const [currentPage, setCurrentPage] = useState(1);
    const [numPages, setNumPages] = useState(0);
    const viewerRef = useRef(null);
    const zoomPluginInstance = zoomPlugin();

    const { ZoomInButton, ZoomOutButton } = zoomPluginInstance;

    useEffect(() => {
        if (!title) return;

        console.log("Fetching PDF for:", title);

        Api.getManuscriptByTitle(title)
            .then((data) => {
                if (data && data.rows?.search_results?.length > 0) {
                    const record = data.rows.search_results.find(
                        (item) => item.title === title
                    );

                    // Fetch PDFs
                    if (record?.field_pdf_digital_file) {
                        const pdfArray = record.field_pdf_digital_file.split(",").map((pdf) => Api.getFileUrl(pdf.trim()));
                        setPdfUrls(pdfArray); // Set the pdfUrls state to the array of URLs
                    }
                }
            })
            .catch((error) => {
                console.error("Error fetching manuscript details:", error);
            });
    }, [title]);

    const handleDocumentLoad = ({ numPages }) => {
        setNumPages(numPages);
        setCurrentPage(1); // Reset to the first page when a new document is loaded
    };

    const handleFullscreen = () => {
        if (viewerRef.current) {
            if (viewerRef.current.requestFullscreen) {
                viewerRef.current.requestFullscreen();
            } else if (viewerRef.current.webkitRequestFullscreen) {
                viewerRef.current.webkitRequestFullscreen();
            } else if (viewerRef.current.msRequestFullscreen) {
                viewerRef.current.msRequestFullscreen();
            }
        }
    };

    if (pdfUrls.length === 0) {
        return null; // Do not render anything if there are no PDF URLs
    }

    return (
        <>
            <div className="custom-toolbar">
                <div className="toolbar-section">
                    <ZoomOutButton>
                        {(props) => (
                            <Button variant="outline-secondary" onClick={props.onClick}>
                                <FaSearchMinus />
                            </Button>
                        )}
                    </ZoomOutButton>
                    <ZoomInButton>
                        {(props) => (
                            <Button variant="outline-secondary" onClick={props.onClick}>
                                <FaSearchPlus />
                            </Button>
                        )}
                    </ZoomInButton>
                </div>
                <div className="toolbar-section">
                    <Button variant="outline-success" onClick={handleFullscreen}>
                        <FaExpand />
                    </Button>
                </div>
            </div>
            <div className="pdf-flipbook-container">
                <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.worker.min.js">
                    <div ref={viewerRef} className="pdf-viewer">
                        <Viewer
                            fileUrl={pdfUrls[0]} // Display the first PDF in the array
                            onDocumentLoad={handleDocumentLoad}
                            plugins={[zoomPluginInstance]}
                            initialPage={currentPage - 1}
                            onPageChange={(e) => setCurrentPage(e.currentPage + 1)}
                        />
                    </div>
                </Worker>
            </div>
        </>
    );
};

export default PdfViewer;