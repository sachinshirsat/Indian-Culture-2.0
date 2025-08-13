import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Api from "../api";

function CompanyPaintingsInRashtrapatiBhavanResultpage() {
  const location = useLocation();
  const [snippet, setSnippet] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if we have an item in location state
    if (location.state?.item) {
      const item = location.state.item;
      // If we have an item from the previous page, use it directly
      setSnippet({
        title: item.title || "Untitled",
        type: item.type || "Unknown Type",
        thumbnail: item.src || "",
        writeup: "" // We'll need to fetch the writeup separately
      });
      
      // Fetch the full details including writeup
      fetchSnippetDetails(item.title);
    } else {
      // Get title from URL parameters if available
      const searchParams = new URLSearchParams(location.search);
      const titleFromUrl = searchParams.get('title');
      
      if (titleFromUrl) {
        fetchSnippetDetails(titleFromUrl);
      } else {
        // If no title is provided, fetch the first painting
        fetchDefaultPainting();
      }
    }
  }, [location]);

  const fetchDefaultPainting = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Fetch all paintings or the first one
      const data = await Api.getCompanyPaintingsInRashtrapatiBhavan();
      console.log("✅ API Response for default paintings:", data);
      
      if (data.rows?.search_results?.length > 0) {
        const details = data.rows.search_results[0]; // Get the first painting
        
        setSnippet({
          title: details.title || "Untitled",
          type: details.field_dc_type || "Unknown Type",
          thumbnail: details.field_paintings_image ? Api.getFileUrl(details.field_paintings_image) : "",
          writeup: insertImagesIntoBody(details.field_painting_writeups || "No writeup available"),
        });
      } else {
        setError("No paintings found in the collection.");
      }
    } catch (error) {
      console.error("❌ Error fetching default painting:", error);
      setError("Failed to load paintings. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSnippetDetails = async (title) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await Api.getCompanyPaintingsInRashtrapatiBhavanByTitle(title);
      console.log("✅ API Response for snippet details:", data); // Debugging log

      if (data.rows?.search_results?.length > 0) {
        const details = data.rows.search_results[0];

        setSnippet(prevSnippet => ({
          // Keep existing thumbnail if we already have it
          thumbnail: prevSnippet.thumbnail || (details.field_paintings_image ? Api.getFileUrl(details.field_paintings_image) : ""),
          title: details.title || "Untitled",
          type: details.field_dc_type || "Unknown Type",
          writeup: insertImagesIntoBody(details.field_painting_writeups || "No writeup available"),
        }));
      } else {
        setError(`No painting found with title: ${title}`);
      }
    } catch (error) {
      console.error("❌ Error fetching snippet details:", error);
      setError("Failed to load painting details. Please try again later.");
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

export default CompanyPaintingsInRashtrapatiBhavanResultpage;