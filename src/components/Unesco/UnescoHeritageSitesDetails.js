import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Breadcrumb, Carousel } from "react-bootstrap";
import Api from "../api";
import Divider from "../../image/SwirlDivider.png";

function UnescoHeritageSitesDetails() {
  const location = useLocation();
  const [site, setSite] = useState(location.state?.item || {});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  // Function to strip HTML tags from text
  const stripHtmlTags = (htmlString) => {
    if (!htmlString) return "";
    return htmlString.replace(/<[^>]*>/g, '');
  };

  useEffect(() => {
    if (!site.title) {
      console.error("🚨 No site data received.");
      setError("No site data available");
      setIsLoading(false);
      return;
    }

    fetchSiteDetails(site.title);
  }, [site.title]);

  const fetchSiteDetails = async (title) => {
    setIsLoading(true);
    try {
      const data = await Api.getUnescoHeritageSitesByTitle(title);
      console.log("✅ API Response for site details:", data);

      if (data.rows?.search_results?.length > 0) {
        const details = data.rows.search_results[0];
        
        // Process image gallery URLs
        let processedImageUrls = [];
        if (details.field_unesco_image_gallery_1) {
          const images = details.field_unesco_image_gallery_1.split(',').map(url => url.trim());
          processedImageUrls = images.map(img => Api.getFileUrl(img));
          setImageUrls(processedImageUrls);
        }

        setSite({
          title: details.title || "Untitled",
          fromUnesco: stripHtmlTags(details.field_from_unesco) || "Information not available",
          moreInformation: stripHtmlTags(details.field_more_information) || "Additional information not available",
          image: processedImageUrls.length > 0 ? processedImageUrls[0] : "",
        });
      } else {
        // If no API results, try to use the data passed from the previous page
        const passedItem = location.state?.item;
        if (passedItem) {
          setSite({
            title: passedItem.title || "Untitled",
            fromUnesco: stripHtmlTags(passedItem.field_from_unesco) || "Information not available",
            moreInformation: stripHtmlTags(passedItem.field_more_information) || "Additional information not available",
            image: passedItem.src || "",
          });
        } else {
          console.error("❌ No matching site found.");
          setError("Site details not found");
        }
      }
    } catch (error) {
      console.error("❌ Error fetching site details:", error);
      setError("Failed to load site details. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Breadcrumb Navigation */}
      <Container fluid>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/allcategories">Categories</Breadcrumb.Item>
          <Breadcrumb.Item href="/unesco-heritage-sites">UNESCO Heritage Sites</Breadcrumb.Item>
          <Breadcrumb.Item active>{site.title || "Loading..."}</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <Container className="site-detail-container" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}>
        <Row>
          <Col className="text-center">
            <h1>{site.title}</h1>
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
            <p>Loading site details...</p>
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
                    className="site-carousel"
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
                      <Carousel.Item key={index}>
                        <div className="d-flex justify-content-center" style={{ height: "400px" }}>
                          <img
                            className="d-block"
                            src={url}
                            alt={`${site.title} - Image ${index + 1}`}
                            style={{ 
                              maxHeight: "100%", 
                              maxWidth: "100%", 
                              objectFit: "contain" 
                            }}
                          />
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Col>
              </Row>
            )}

            {/* Site Information */}
            <Row className="mt-4">
              <Col>
                <div className="site-info">
                  <h3>From UNESCO</h3>
                  <p style={{ whiteSpace: "pre-line" }}>{site.fromUnesco}</p>
                </div>
                <div className="site-info mt-4">
                  <h3>More Information</h3>
                  <p style={{ whiteSpace: "pre-line" }}>{site.moreInformation}</p>
                </div>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
}

export default UnescoHeritageSitesDetails;