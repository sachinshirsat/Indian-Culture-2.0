import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import Api from "../api";

function FortsFreedomResultpage() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [snippet, setSnippet] = useState({
    title: '',
    thumbnail: '',
    writeup: '',
    type: ''
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const initialData = location.state || {};
    
    if (!initialData.title) {
      setError("No story data received");
      setIsLoading(false);
      return;
    }

    setSnippet(initialData);
    fetchSnippetDetails(initialData.title);
  }, []);

  const fetchSnippetDetails = async (title) => {
    setIsLoading(true);
    setError(null);
    try {
      // Build query with search parameter for the title
      let query = `search=${encodeURIComponent(title)}&page=${snippet.currentPage || 0}&items_per_page=${snippet.itemsPerPage || 25}`;
      
      console.log("🔍 Fetching story with query:", query);
      console.log("🔍 Looking for title:", title);

      // Use getFortsOfIndia instead of getFortsOfIndiaByTitle to search with the query
      const data = await Api.getFortsOfIndia(query);
      console.log("📦 API Response:", data);

      if (data.rows?.search_results?.length > 0) {
        // Case-insensitive title comparison
        const details = data.rows.search_results.find(
          item => item.title.toLowerCase().trim() === title.toLowerCase().trim()
        );

        if (details) {
          console.log("✅ Found matching story:", details);
          setSnippet(prev => ({
            ...prev,
            title: details.title || "Untitled",
            thumbnail: details.field_story_image ? Api.getFileUrl(details.field_story_image) : "",
            writeup: details.body ? insertImagesIntoBody(details.body) : "No content available",
            type: details.field_dc_type || prev.type
          }));
        } else {
          // If exact match not found, try to find partial match
          const partialMatch = data.rows.search_results.find(
            item => item.title.toLowerCase().includes(title.toLowerCase()) ||
                   title.toLowerCase().includes(item.title.toLowerCase())
          );

          if (partialMatch) {
            console.log("✅ Found partial matching story:", partialMatch);
            setSnippet(prev => ({
              ...prev,
              title: partialMatch.title || "Untitled",
              thumbnail: partialMatch.field_story_image ? Api.getFileUrl(partialMatch.field_story_image) : "",
              writeup: partialMatch.body ? insertImagesIntoBody(partialMatch.body) : "No content available",
              type: partialMatch.field_dc_type || prev.type
            }));
          } else {
            console.error("❌ No matching story found for title:", title);
            setError("No matching story found");
          }
        }
      } else {
        console.error("❌ No results in API response");
        setError("No results found");
      }
    } catch (error) {
      console.error("❌ Error fetching stories details:", error);
      setError("Failed to fetch story details. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Function to replace image `src` with full URLs inside the writeup
  const insertImagesIntoBody = (htmlString) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;

    // Center the 'Watch' text in h1 tags
    const headings = tempDiv.getElementsByTagName('h1');
    Array.from(headings).forEach(h1 => {
      if (h1.textContent.trim() === 'Watch') {
        h1.style.textAlign = 'center';
       /*  h1.style.fontWeight = 'bold';
        h1.style.marginBottom = '15px';
        h1.style.fontSize = '24px';
        h1.style.color = '#333'; */
      }
    });

    // Find all rows that contain images
    const rows = tempDiv.querySelectorAll('.row');
    rows.forEach(row => {
      const images = row.getElementsByTagName('img');
      if (images.length > 0) {
        // Add Bootstrap classes for full-width layout
        row.classList.add('mb-3');
        
        // Handle all images in the row
        Array.from(images).forEach(img => {
          const src = img.getAttribute("src");
          if (src) {
            let fullUrl = Api.getFileUrl(src);
            fullUrl = fullUrl.replace(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})\.\./, '$1');
            fullUrl = fullUrl.replace(/([^:]\/)\/+/g, "$1");
            
            // Create a wrapper div for the image
            const wrapper = document.createElement('div');
            wrapper.classList.add('col-12', 'p-0');
            
            // Update image attributes
            img.setAttribute("src", fullUrl);
            img.classList.add('img-fluid', 'rounded', 'w-100', 'h-auto');
            
            // Wrap the image
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);
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
            <p>Loading Stories details...</p>
          </Col>
        </Row>
      ) : (
        <>
          {snippet.thumbnail ? (
            // Show title with thumbnail
            <Row className="mb-4 position-relative">
              <Col>
                <div className="position-relative">
                  <img 
                    src={snippet.thumbnail} 
                    alt={snippet.title} 
                    className="img-fluid w-100 rounded"
                    style={{ maxHeight: '500px', objectFit: 'cover' }}
                  />
                  <div
                    className="position-absolute bottom-0 w-100 p-3"
                    style={{
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                      color: 'white',
                      textAlign: 'center'
                    }}
                  >
                    <h2 style={{
                      fontSize: '24px',
                      fontWeight: '500',
                      margin: 0,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                    }}>
                      {snippet.title}
                    </h2>
                  </div>
                </div>
              </Col>
            </Row>
          ) : (
            <Row className="mb-4">
              <Col>
                <h1 className="text-center" style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: '#333',
                  marginTop: '20px',
                  marginBottom: '20px'
                }}>
                  {snippet.title || 'Untitled'}
                </h1>
              </Col>
            </Row>
          )}
          <Row>
            <Col>
              {error ? (
                <p className="text-danger">{error}</p>
              ) : snippet.writeup ? (
                <div 
                  dangerouslySetInnerHTML={{ __html: snippet.writeup }}
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

export default FortsFreedomResultpage;