import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Breadcrumb, Carousel } from "react-bootstrap";
import Api from "../api";
import Divider from "../../image/SwirlDivider.png";

function PaintingsResultpage() {
  const location = useLocation();
  const [painting, setPainting] = useState(location.state?.item || {});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    if (!painting.title) {
      console.error("🚨 No painting data received.");
      setError("No painting data available");
      setIsLoading(false);
      return;
    }

    fetchPaintingDetails(painting.title);
  }, [painting.title]);

  const fetchPaintingDetails = async (title) => {
    setIsLoading(true);
    try {
      const data = await Api.getPaintingsByTitle(title);
      console.log("✅ API Response for painting details:", data);

      if (data.rows?.search_results?.length > 0) {
        // Find the record that has the writeup content
        const details = data.rows.search_results.find(item => item.field_painting_writeups) || data.rows.search_results[0];
        
        // Process all image URLs
        let processedImageUrls = [];
        if (details.field_paintings_image) {
          const images = details.field_paintings_image.split(',').map(url => url.trim());
          processedImageUrls = images.map(img => Api.getFileUrl(img));
          setImageUrls(processedImageUrls);
        } else if (details.field_painting_portfolio_thumbna) {
          processedImageUrls = [Api.getFileUrl(details.field_painting_portfolio_thumbna)];
          setImageUrls(processedImageUrls);
        }

        // Check if we have writeup content from the API response
        const writeupContent = details.field_painting_writeups || location.state?.item?.field_painting_writeups;

        setPainting({
          title: details.title || "Untitled",
          type: details.field_dc_type || "Unknown Type",
          image: processedImageUrls.length > 0 ? processedImageUrls[0] : "",
          writeup: writeupContent ? formatContent(writeupContent) : "No description available",
        });
      } else {
        // If no API results, try to use the data passed from the previous page
        const passedItem = location.state?.item;
        if (passedItem) {
          let processedImageUrls = [];
          if (passedItem.field_paintings_image) {
            processedImageUrls = [Api.getFileUrl(passedItem.field_paintings_image)];
          } else if (passedItem.field_painting_portfolio_thumbna) {
            processedImageUrls = [Api.getFileUrl(passedItem.field_painting_portfolio_thumbna)];
          }
          setImageUrls(processedImageUrls);

          setPainting({
            title: passedItem.title || "Untitled",
            type: passedItem.type || "Unknown Type",
            image: processedImageUrls.length > 0 ? processedImageUrls[0] : "",
            writeup: passedItem.field_painting_writeups ? formatContent(passedItem.field_painting_writeups) : "No description available",
          });
        } else {
          console.error("❌ No matching painting found.");
          setError("Painting details not found");
        }
      }
    } catch (error) {
      console.error("❌ Error fetching painting details:", error);
      setError("Failed to load painting details. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Function to format content, process images, and ensure proper paragraph formatting
  const formatContent = (htmlString) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;

    // Process images
    const imgElements = Array.from(tempDiv.getElementsByTagName("img"));
    imgElements.forEach((img) => {
      const src = img.getAttribute("src");
      
      if (src) {
        const fullUrl = Api.getFileUrl(src).replace(/([^:]\/)\/+/g, "$1");
        img.setAttribute("src", fullUrl);
        img.classList.add("img-fluid", "rounded", "mb-3");
        
        // Wrap image in a div for better control
        const wrapper = document.createElement("div");
        wrapper.classList.add("text-center", "my-4");
        img.parentNode.insertBefore(wrapper, img);
        wrapper.appendChild(img);
      }
    });

    // If the content doesn't have proper paragraph tags, add them
    if (tempDiv.getElementsByTagName("p").length === 0) {
      // Split content by double line breaks to identify paragraphs
      const content = tempDiv.innerHTML;
      tempDiv.innerHTML = "";
      
      // Split by common paragraph break patterns
      const paragraphs = content
        .split(/(?:\r?\n){2,}|<br\s*\/?>\s*<br\s*\/?>/)
        .filter(text => text.trim() !== "");
      
      // Create proper paragraph elements
      paragraphs.forEach(paragraphText => {
        const p = document.createElement("p");
        p.innerHTML = paragraphText.trim().replace(/\r?\n/g, "<br>");
        p.classList.add("mb-4", "painting-text");
        p.style.lineHeight = "1.8";
        p.style.fontSize = "1rem";
        p.style.textAlign = "justify";
        tempDiv.appendChild(p);
      });
    } else {
      // Ensure all existing paragraphs have proper styling
      const paragraphs = Array.from(tempDiv.getElementsByTagName("p"));
      paragraphs.forEach(p => {
        p.classList.add("mb-4", "painting-text");
        p.style.lineHeight = "1.8";
        p.style.fontSize = "1rem";
        p.style.textAlign = "justify";
        
        // Add spacing between paragraphs
        p.style.marginBottom = "1.5rem";
      });
    }

    // Handle any remaining text nodes that aren't in paragraphs
    const textNodes = Array.from(tempDiv.childNodes).filter(
      node => node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== ""
    );

    // Wrap plain text nodes in paragraph tags
    textNodes.forEach(textNode => {
      if (textNode.textContent.trim() !== "") {
        const paragraph = document.createElement("p");
        paragraph.classList.add("mb-4", "painting-text");
        paragraph.style.lineHeight = "1.8";
        paragraph.style.fontSize = "1rem";
        paragraph.style.textAlign = "justify";
        
        // Replace the text node with the new paragraph
        const parent = textNode.parentNode;
        parent.insertBefore(paragraph, textNode);
        paragraph.appendChild(textNode);
      }
    });

    return tempDiv.innerHTML;
  };

  // Extract additional images from writeup HTML
  useEffect(() => {
    if (painting.writeup) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = painting.writeup;
      
      const imgElements = Array.from(tempDiv.getElementsByTagName("img"));
      const writeupImageUrls = imgElements
        .map(img => img.getAttribute("src"))
        .filter(src => src && !imageUrls.includes(src));
      
      if (writeupImageUrls.length > 0) {
        setImageUrls(prevUrls => [...prevUrls, ...writeupImageUrls]);
      }
    }
  }, [painting.writeup]);

  return (
    <>
      {/* Breadcrumb Navigation */}
      <Container fluid>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/allcategories">Categories</Breadcrumb.Item>
          <Breadcrumb.Item href="/paintings">Paintings</Breadcrumb.Item>
          <Breadcrumb.Item active>{painting.title || "Loading..."}</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <Container className="painting-detail-container" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}>
        <Row>
          <Col className="text-center">
            <h1>{painting.title}</h1>
            <img
              src={Divider}
              alt="Caption Divider"
              style={{
                marginTop: "-17px",
                width: "90px",
                height: "15px",
                backgroundColor: "transparent",
              }}
            />
          </Col>
        </Row>

        {isLoading ? (
          <div className="loading-container">
            <p>Loading painting details...</p>
          </div>
        ) : error ? (
          <div className="error-container">
            <p className="error-message">{error}</p>
          </div>
        ) : (
          <>
            {/* Image Carousel */}
            {imageUrls.length > 0 && (
              <Row className="mt-4 mb-4">
                <Col>
                  <Carousel 
                    className="painting-carousel"
                    style={{ 
                      backgroundColor: "#f8f9fa", 
                      borderRadius: "8px", 
                      overflow: "hidden" 
                    }}
                    fade={true}
                    interval={5000}
                    prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "50%", padding: "15px" }} />}
                    nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "50%", padding: "15px" }} />}
                  >
                    {imageUrls.map((url, index) => (
                      <Carousel.Item 
                        key={index}
                        className="carousel-fade-item"
                      >
                        <div className="d-flex justify-content-center" style={{ height: "400px" }}>
                          <img
                            className="d-block carousel-fade-image"
                            src={url}
                            alt={`${painting.title} - Image ${index + 1}`}
                            style={{ 
                              maxHeight: "100%", 
                              maxWidth: "100%", 
                              objectFit: "contain",
                              margin: "0 auto",
                              transition: "opacity 0.5s ease-in-out"
                            }}
                          />
                        </div>
                        <Carousel.Caption>
                          <p className="bg-dark p-2 rounded" style={{ display: "inline-block", opacity: "0.8" }}>
                            Image {index + 1} of {imageUrls.length}
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    ))}
                  </Carousel>

                  {/* Custom CSS for black carousel controls */}
                  <style jsx="true">{`
                    .carousel-control-prev-icon,
                    .carousel-control-next-icon {
                      background-color: rgba(0, 0, 0, 0.7);
                      border-radius: 50%;
                      padding: 10px;
                    }
                    
                    .carousel-control-prev,
                    .carousel-control-next {
                      width: 5%;
                      opacity: 0.8;
                    }
                    
                    .carousel-control-prev:hover,
                    .carousel-control-next:hover {
                      opacity: 1;
                    }
                  `}</style>
                </Col>
              </Row>
            )}

            {/* Painting Writeup */}
            <Row>
              <Col>
                <div 
                  className="painting-writeup"
                  dangerouslySetInnerHTML={{ __html: painting.writeup }}
                  style={{ 
                    backgroundColor: "#fff",
                    padding: "20px",
                    lineHeight: "1.8",
                    maxWidth: "900px",
                    margin: "0 auto"
                  }}
                ></div>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
}

export default PaintingsResultpage;