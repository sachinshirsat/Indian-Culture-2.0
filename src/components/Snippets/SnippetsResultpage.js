import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Api from "../api";

function SnippetsResultPage() {
  const location = useLocation();
  const [snippet, setSnippet] = useState(location.state || {});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!snippet.title) {
      console.error("🚨 No snippet data received.");
      return;
    }

    fetchSnippetDetails(snippet.title);
  }, [snippet.title]);

  const fetchSnippetDetails = async (title) => {
    setIsLoading(true);
    try {
      const data = await Api.getSnippetsByTitle(title);
      console.log("✅ API Response for snippet details:", data); // Debugging log

      if (data.rows?.search_results?.length > 0) {
        const details = data.rows.search_results[0];

        setSnippet({
          title: details.title || "Untitled",
          type: details.field_dc_type || "Unknown Type",
          thumbnail: details.field_snippets_thumbnail ? Api.getFileUrl(details.field_snippets_thumbnail) : "",
          writeup: insertImagesIntoBody(details.field_snippets_writeups || "No writeup available"),
        });

      } else {
        console.error("❌ No matching snippet found.");
      }
    } catch (error) {
      console.error("❌ Error fetching snippet details:", error);
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
            <p>Loading snippet details...</p>
          ) : (
            <>
              {/* {snippet.thumbnail && <img src={snippet.thumbnail} alt={snippet.title} />} */}
              {/* <h1>{snippet.title}</h1> */}
              <div dangerouslySetInnerHTML={{ __html: snippet.writeup }}></div>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default SnippetsResultPage;