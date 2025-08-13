import React, { useState, useRef } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import { FaChevronLeft, FaChevronRight, FaSearchMinus, FaSearchPlus, FaExpand } from "react-icons/fa";

const RarebookFortsPdfViewer = ({ pdfUrls }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [numPages, setNumPages] = useState(0);
    const viewerRef = useRef(null);
    const zoomPluginInstance = zoomPlugin();

    const { ZoomInButton, ZoomOutButton } = zoomPluginInstance;

    const handleNextPage = () => {
        if (currentPage < numPages) setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
    };

    const handlePageChange = (e) => {
        const targetPage = parseInt(e.target.value, 10);
        if (targetPage >= 1 && targetPage <= numPages) setCurrentPage(targetPage);
    };

    const handleDocumentLoad = ({ numPages }) => {
        setNumPages(numPages);
        setCurrentPage(1);
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

    if (!pdfUrls || pdfUrls.length === 0) {
        return <p>No PDF file available to display.</p>;
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
                {/* Custom Toolbar */}


                {/* PDF Viewer */}
                <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.worker.min.js">
                    <div ref={viewerRef} className="pdf-viewer">
                        <Viewer
                            fileUrl={pdfUrls[0]}
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

export default RarebookFortsPdfViewer;
