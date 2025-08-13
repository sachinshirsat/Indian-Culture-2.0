import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import * as pdfjsLib from "pdfjs-dist/webpack";
import { Button } from "react-bootstrap";
import { FaSearchMinus, FaSearchPlus, FaExpand, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Api from "../api"; // Import the API utility

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.worker.min.js`;

const PdfFlipbook = ({ title }) => {
    const [pdfUrls, setPdfUrls] = useState([]); // State for PDF URLs
    const [pages, setPages] = useState([]);
    const [scale, setScale] = useState(1); // State to manage zoom level
    const [currentPage, setCurrentPage] = useState(0); // Track current page
    const [dimensions, setDimensions] = useState({ width: 500, height: 700 }); // Manage dynamic dimensions
    const flipbookRef = useRef(null); // Reference for HTMLFlipBook

    useEffect(() => {
        const fetchPdfUrls = async () => {
            try {
                const data = await Api.getManuscriptByTitle(title);
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
            } catch (error) {
                console.error("Error fetching PDF URLs:", error);
            }
        };

        if (title) {
            fetchPdfUrls();
        }
    }, [title]);

    useEffect(() => {
        const renderPages = async () => {
            if (pdfUrls.length === 0) return; // No PDFs to render

            try {
                const loadingTask = pdfjsLib.getDocument(pdfUrls[0]);
                const pdf = await loadingTask.promise;

                const renderedPages = [];
                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const viewport = page.getViewport({ scale: 1 });
                    const canvas = document.createElement("canvas");
                    const context = canvas.getContext("2d");

                    canvas.width = viewport.width;
                    canvas.height = viewport.height;

                    await page.render({ canvasContext: context, viewport }).promise;
                    renderedPages.push(canvas.toDataURL());
                }

                setPages(renderedPages);
            } catch (error) {
                console.error("Error rendering PDF pages:", error);
            }
        };

        renderPages();
    }, [pdfUrls]);

    const handleZoomIn = () => {
        setScale((prevScale) => Math.min(prevScale + 0.1, 2)); // Max zoom level: 2x
    };

    const handleZoomOut = () => {
        setScale((prevScale) => Math.max(prevScale - 0.1, 0.5)); // Min zoom level: 0.5x
    };

    const handleFullscreen = () => {
        if (flipbookRef.current) {
            if (flipbookRef.current.requestFullscreen) {
                flipbookRef.current.requestFullscreen();
            } else if (flipbookRef.current.webkitRequestFullscreen) {
                flipbookRef.current.webkitRequestFullscreen();
            } else if (flipbookRef.current.msRequestFullscreen) {
                flipbookRef.current.msRequestFullscreen();
            }
        }
    };

    const handlePrevPage = () => {
        if (flipbookRef.current && flipbookRef.current.pageFlip()) {
            flipbookRef.current.pageFlip().flipPrev(); // Use pageFlip() to access the flipPrev method
        }
    };

    const handleNextPage = () => {
        if (flipbookRef.current && flipbookRef.current.pageFlip()) {
            flipbookRef.current.pageFlip().flipNext(); // Use pageFlip() to access the flipNext method
        }
    };

    const onPageChange = (e) => {
        setCurrentPage(e.data); // Update the current page state
    };

    if (!pdfUrls || pdfUrls.length === 0) {
        return <p>No PDF file available to display.</p>;
    }

    if (pages.length === 0) {
        return (
            <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
        </div>
                <p className="mt-3">Loading PDF flipbook...</p>
            </div>
        );
    }

    return (
        <>
            <div
                className="pdf-flipbook-container"
                ref={flipbookRef}
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "center center",
                    transition: "transform 0.3s ease",
                    position: "relative",
                }}
            >
                {/* Previous Page Button */}
                <Button
                    variant="outline-primary"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "10px",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                    }}
                    onClick={handlePrevPage}
                >
                    <FaArrowLeft />
                </Button>

                {/* Next Page Button */}
                <Button
                    variant="outline-primary"
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                    }}
                    onClick={handleNextPage}
                >
                    <FaArrowRight />
                </Button>


                {/* Flipbook */}
                <HTMLFlipBook
                    ref={flipbookRef}
                    width={dimensions.width}
                    height={dimensions.height}
                    maxShadowOpacity={0.5}
                    drawShadow={true}
                    flippingTime={800}
                    useMouseEvents={true}
                    showCover={true}
                    onFlip={onPageChange} // Track page change
                    style={{ margin: "0 auto" }}
                >
                    {pages.map((src, index) => (
                        <div
                            key={index}
                            className="page"
                            style={{ backgroundColor: "#fff", overflow: "hidden" }}
                        >
                            <img
                                src={src}
                                alt={`Page ${index + 1}`}
                                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                            />
                        </div>
                    ))}
                </HTMLFlipBook>
            </div>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
                <p>Page: {currentPage + 1} / {pages.length}</p>
            </div>
        </>
    );
};

export default PdfFlipbook;