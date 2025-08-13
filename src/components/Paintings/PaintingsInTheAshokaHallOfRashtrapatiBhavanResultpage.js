import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Api from "../api";

function PaintingsInTheAshokaHallOfRashtrapatiBhavanResultpage() {
  const location = useLocation();
  const [snippet, setSnippet] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if we have an item in location state
    if (location.state?.item) {
      const item = location.state.item;
      
      // Store the selected item in session storage to prevent loss on refresh
      sessionStorage.setItem('selectedPainting', JSON.stringify(item));
      
      // Set initial data from the item directly
      setSnippet({
        title: item.title || "Untitled",
        type: item.type || "Unknown Type",
        thumbnail: item.src || "",
        writeup: "" // We'll need to fetch the writeup separately
      });
      
      // Instead of trying to fetch by title or search term, 
      // let's directly use the data from the list view and only fetch the writeup
      fetchWriteupOnly(item);
    } else {
      // Check if we have a stored painting from session storage
      const storedPainting = sessionStorage.getItem('selectedPainting');
      
      if (storedPainting) {
        const item = JSON.parse(storedPainting);
        setSnippet({
          title: item.title || "Untitled",
          type: item.type || "Unknown Type",
          thumbnail: item.src || "",
          writeup: "" // We'll need to fetch the writeup separately
        });
        
        fetchWriteupOnly(item);
      } else {
        // Get title from URL parameters if available
        const searchParams = new URLSearchParams(location.search);
        const titleFromUrl = searchParams.get('title');
        
        if (titleFromUrl) {
          // Try direct API call with the exact title
          fetchExactPainting(titleFromUrl);
        } else {
          // If no title is provided, fetch the first painting
          fetchDefaultPainting();
        }
      }
    }
  }, [location]);

  // New function to fetch only the writeup for a painting we already have basic info for
  const fetchWriteupOnly = async (item) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Make a direct API call to get all paintings
      const data = await Api.getPaintingsInTheAshokaHallOfRashtrapatiBhavan();
      console.log("✅ API Response for all paintings:", data);
      
      if (data.rows?.search_results?.length > 0) {
        // Find the painting that matches our title
        const matchingPainting = data.rows.search_results.find(
          painting => painting.title === item.title
        );
        
        if (matchingPainting) {
          // Update only the writeup, keeping the rest of the data
          setSnippet(prevSnippet => ({
            ...prevSnippet,
            writeup: insertImagesIntoBody(matchingPainting.field_painting_writeups || "No writeup available"),
          }));
        } else {
          console.warn(`Could not find exact match for: ${item.title}`);
          // Keep the existing data but set a generic writeup
          setSnippet(prevSnippet => ({
            ...prevSnippet,
            writeup: "Detailed information not available for this painting."
          }));
        }
      } else {
        console.warn("No paintings found in the API response");
        // Keep the existing data but set a generic writeup
        setSnippet(prevSnippet => ({
          ...prevSnippet,
          writeup: "Detailed information not available for this painting."
        }));
      }
    } catch (error) {
      console.error("❌ Error fetching writeup:", error);
      // Keep the existing data but set an error writeup
      setSnippet(prevSnippet => ({
        ...prevSnippet,
        writeup: "Failed to load detailed information for this painting."
      }));
    } finally {
      setIsLoading(false);
    }
  };

  // New function to fetch a painting by exact title
  const fetchExactPainting = async (title) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Make a direct API call to get all paintings
      const data = await Api.getPaintingsInTheAshokaHallOfRashtrapatiBhavan();
      console.log("✅ API Response for all paintings:", data);
      
      if (data.rows?.search_results?.length > 0) {
        // Find the painting that matches our title
        const matchingPainting = data.rows.search_results.find(
          painting => painting.title === title
        );
        
        if (matchingPainting) {
          setSnippet({
            title: matchingPainting.title || "Untitled",
            type: matchingPainting.field_dc_type || "Unknown Type",
            thumbnail: matchingPainting.field_paintings_image 
              ? (() => {
                  const images = matchingPainting.field_paintings_image.split(',').map(url => url.trim());
                  const webpImage = images.find(url => url.toLowerCase().endsWith('.webp'));
                  return Api.getFileUrl(webpImage || images[0]);
                })()
              : "",
            writeup: insertImagesIntoBody(matchingPainting.field_painting_writeups || "No writeup available"),
          });
        } else {
          console.warn(`Could not find exact match for: ${title}`);
          fetchDefaultPainting();
        }
      } else {
        console.warn("No paintings found in the API response");
        fetchDefaultPainting();
      }
    } catch (error) {
      console.error("❌ Error fetching exact painting:", error);
      fetchDefaultPainting();
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDefaultPainting = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Log the API endpoint we're calling for debugging
      console.log("Fetching from paintings-in-the-ashoka-hall-of-rashtrapati-bhavan endpoint");
      
      const data = await Api.getPaintingsInTheAshokaHallOfRashtrapatiBhavan();
      console.log("✅ API Response for default paintings:", data);
      
      if (data.rows?.search_results?.length > 0) {
        const details = data.rows.search_results[0]; // Get the first painting
        
        setSnippet({
          title: details.title || "Untitled",
          type: details.field_dc_type || "Unknown Type",
          thumbnail: details.field_paintings_image 
            ? (() => {
                const images = details.field_paintings_image.split(',').map(url => url.trim());
                const webpImage = images.find(url => url.toLowerCase().endsWith('.webp'));
                return Api.getFileUrl(webpImage || images[0]);
              })()
            : "",
          writeup: insertImagesIntoBody(details.field_painting_writeups || "No writeup available"),
        });
      } else {
        setError("No paintings found in the collection. Please check the API endpoint.");
        console.error("API returned empty search_results array:", data);
      }
    } catch (error) {
      console.error("❌ Error fetching default painting:", error);
      setError("Failed to load paintings. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Function to replace image `src` with full URLs inside the writeup
  const insertImagesIntoBody = (htmlString) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;

    const imgElements = Array.from(tempDiv.getElementsByTagName("img"));

    imgElements.forEach((img) => {
      const src = img.getAttribute("src"); // Get 'src'
      
      if (src) {
        const fullUrl = Api.getFileUrl(src).replace(/([^:]\/)\/+/g, "$1"); // Ensure correct URL format
        img.setAttribute("src", fullUrl); // Replace 'src' with full URL
        img.classList.add("img-fluid", "rounded", "mb-3"); // Add Bootstrap styling
      }
    });

    return tempDiv.innerHTML; // Return updated HTML
  };

  return (
    <Container className="story-card">
      <Row>
        <Col>
          {isLoading ? (
            <p>Loading painting details...</p>
          ) : error ? (
            <div className="alert alert-danger">{error}</div>
          ) : (
            <>
              <h1 className="mb-4">{snippet.title}</h1>
              <Row>
                {/* Image column - 50% width */}
                <Col md={6} className="mb-4 mb-md-0">
                  {snippet.thumbnail && (
                    <img 
                      src={snippet.thumbnail} 
                      alt={snippet.title} 
                      className="img-fluid rounded w-100"
                    />
                  )}
                </Col>
                
                {/* Text column - 50% width */}
                <Col md={6}>
                  <div dangerouslySetInnerHTML={{ __html: snippet.writeup }}></div>
                </Col>
              </Row>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default PaintingsInTheAshokaHallOfRashtrapatiBhavanResultpage;