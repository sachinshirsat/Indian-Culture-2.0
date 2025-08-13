import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Api from "../api";

function TypesOfForts() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [fortData, setFortData] = useState({
    title: '',
    body: '',
    field_forts_writup_images: ''
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFortData();
  }, []);

  const fetchFortData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await Api.getUnderstandingForts('');
      console.log("API Response:", response);

      if (response?.rows?.search_results?.length > 0) {
        // Get the third item which should be "TYPES OF FORTS"
        const typesOfFortsData = response.rows.search_results[2];
        
        if (typesOfFortsData) {
          console.log("Found Types of Forts data:", typesOfFortsData);
          setFortData({
            title: typesOfFortsData.title || "Untitled",
            body: typesOfFortsData.body || "No content available",
            field_forts_writup_images: typesOfFortsData.field_forts_writup_images || ""
          });
        } else {
          setError("No matching content found");
        }
      } else {
        setError("No results found");
      }
    } catch (error) {
      console.error("Error fetching fort data:", error);
      setError("Failed to fetch content. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Function to replace image `src` with full URLs inside the body
  const insertImagesIntoBody = (htmlString) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;

    // Find all rows that contain exactly 2 images
    const rows = tempDiv.querySelectorAll('.row');
    rows.forEach(row => {
      const images = row.getElementsByTagName('img');
      if (images.length === 2) {
        // Add Bootstrap classes for two-column layout
        row.classList.add('d-flex', 'justify-content-between', 'gap-3', 'mb-3');
        
        // Wrap each image in a column div
        Array.from(images).forEach(img => {
          const src = img.getAttribute("src");
          if (src) {
            let fullUrl = Api.getFileUrl(src);
            fullUrl = fullUrl.replace(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})\.\./, '$1');
            fullUrl = fullUrl.replace(/([^:]\/)\/+/g, "$1");
            
            // Create a wrapper div for the image
            const wrapper = document.createElement('div');
            wrapper.classList.add('col-6', 'p-0');
            
            // Update image attributes
            img.setAttribute("src", fullUrl);
            img.classList.add('img-fluid', 'rounded', 'w-100', 'h-auto');
            
            // Wrap the image
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);
          }
        });
      } else {
        // Handle single images
        const imgElements = row.getElementsByTagName("img");
        Array.from(imgElements).forEach((img) => {
          const src = img.getAttribute("src");
          if (src) {
            let fullUrl = Api.getFileUrl(src);
            fullUrl = fullUrl.replace(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})\.\./, '$1');
            fullUrl = fullUrl.replace(/([^:]\/)\/+/g, "$1");
            img.setAttribute("src", fullUrl);
            img.classList.add('img-fluid', 'rounded', 'mb-3', 'w-100');
          }
        });
      }
    });

    return tempDiv.innerHTML;
  };

  return (
    <Container className="story-card">
      {isLoading ? (
        <Row className="mb-4">
          <Col className="text-center">
            <p>Loading content...</p>
          </Col>
        </Row>
      ) : (
        <>
          <Row className="mb-4">
            <Col>
              <h1 className="text-center" style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: '#333',
                marginTop: '20px',
                marginBottom: '20px'
              }}>
                {fortData.title || 'Untitled'}
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              {error ? (
                <p className="text-danger">{error}</p>
              ) : fortData.body ? (
                <div 
                  dangerouslySetInnerHTML={{ __html: insertImagesIntoBody(fortData.body) }}
                  className="story-content"
                />
              ) : (
                <p>No content available</p>
              )}
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default TypesOfForts;