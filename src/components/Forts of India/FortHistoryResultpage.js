import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import Api from "../api";

function FortHistoryResultpage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [snippet, setSnippet] = useState({
    title: location.state?.title || '',
    currentPage: location.state?.currentPage || 0,
    itemsPerPage: location.state?.itemsPerPage || 25,
    writeup: '',
    type: '',
    thumbnail: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!location.state?.title) {
      navigate('/forthistory');
      return;
    }

    if (!snippet.title) {
      setError("No story data received. Please select a story from the history page.");
      return;
    }

    fetchSnippetDetails(snippet.title);
  }, [location.state, navigate, snippet.title]);

  const fetchSnippetDetails = async (title) => {
    setIsLoading(true);
    setError(null);
    try {
      let query = `search=${encodeURIComponent(title)}&page=${snippet.currentPage || 0}&items_per_page=${snippet.itemsPerPage || 25}`;
      
      console.log("🔍 Fetching story with query:", query);
      console.log("🔍 Looking for title:", title);

      const data = await Api.getHistoryOfForts(query);
      console.log("📦 API Response:", data);

      if (data.rows?.search_results?.length > 0) {
        const details = data.rows.search_results.find(
          item => item.title.toLowerCase().trim() === title.toLowerCase().trim()
        );

        if (details) {
          console.log("✅ Found matching story:", details);
          console.log("📝 Body content:", details.body);
          
          setSnippet(prev => ({
            ...prev,
            title: details.title || "Untitled",
            thumbnail: details.field_story_image ? Api.getFileUrl(details.field_story_image) : "",
            writeup: details.body ? insertImagesIntoBody(details.body) : "No content available",
            type: details.field_dc_type || prev.type,
            body: details.body
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
      console.error("❌ Error fetching story details:", error);
      setError("Failed to fetch story details. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Function to replace image `src` with full URLs inside the writeup
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
        // Handle single images as before
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
      <Row>
        <Col>
          {isLoading ? (
            <p>Loading Stories details...</p>
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : (
            <>
              <h2 className="mb-4 text-center">{snippet.title}</h2>
              {snippet.writeup ? (
                <div 
                  dangerouslySetInnerHTML={{ __html: snippet.writeup }}
                  className="story-content"
                />
              ) : (
                <p>No content available</p>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default FortHistoryResultpage;