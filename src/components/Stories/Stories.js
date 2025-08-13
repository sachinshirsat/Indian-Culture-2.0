import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Breadcrumb } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "../../image/search.svg";
import Divider from "../../image/SwirlDivider.png";
import { useNavigate } from "react-router-dom";
import Api from "../api";
import { Filter, X } from "feather-icons-react";

const SkeletonCard = () => {
  return (
    <>
      <div className="skeleton-card">
        <div className="skeleton-image"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-type"></div>
      </div>
      <div className="skeleton-card">
        <div className="skeleton-image"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-type"></div>
      </div>
    </>
  );
};

function Stories() {
  const [imagesList, setImagesList] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);

  const itemsPerPage = 25;
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the current page from session storage
    const storedPage = sessionStorage.getItem("currentPage");
    const pageToFetch = storedPage ? parseInt(storedPage, 10) : 0;
    setCurrentPage(pageToFetch);
    fetchPageData(pageToFetch); // Fetch data for the stored page
  }, []);

  const fetchPageData = async (page) => {
      try {
        setIsSearching(true);
        let query = `page=${page}&items_per_page=${itemsPerPage}`;
  
        console.log("🔍 API Query:", query);
  
        const data = await Api.getstories(query);
        console.log("📦 API Response:", data);
  
        if (data.pager && data.pager.total_items && data.rows?.search_results) {
          const searchResults = data.rows.search_results.map((item) => ({
            src: item.field_story_image_1
              ? Api.getFileUrl(item.field_story_image_1)
              : item.field_story_image
                ? Api.getFileUrl(item.field_story_image)
                : "",
            title: item.title,
            type: item.field_dc_type,
          }));
          setImagesList(searchResults);
          setTotalItems(parseInt(data.pager.total_items, 10));
          setTotalPages(data.pager.total_pages);
        } else {
          setImagesList([]);
          setTotalItems(0);
          setTotalPages(0);
        }
      } catch (error) {
        console.error("❌ API Error:", error);
        setError("Failed to fetch snippets data. Please try again later.");
      } finally {
        setIsSearching(false);
      }
    };

  const fetchSearchResults = async (text, page) => {
    try {
      setIsSearching(true);
      const data = await Api.searchstories(text, page);
      if (data && data.pager && data.rows && data.rows.search_results) {
        const searchResults = data.rows.search_results.map((item) => ({
          src: item.field_story_image_1
            ? Api.getFileUrl(item.field_story_image_1)
            : item.field_story_image
              ? Api.getFileUrl(item.field_story_image)
              : "",
          title: item.title,
          type: item.field_dc_type,
        }));
        setImagesList(searchResults);
        setTotalItems(parseInt(data.pager.total_items, 10));
        setTotalPages(data.pager.total_pages);
      } else {
        setImagesList([]);
        setTotalItems(0);
        setTotalPages(0);
      }
    } catch (error) {
      console.error("Search error:", error);
      setError("Failed to fetch search results. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
    if (event.target.value.trim() === "") {
      // Store the current page in session storage when search is cleared
      sessionStorage.setItem("currentPage", currentPage);
      fetchPageData(currentPage); // Fetch data for the current page
    }
  };

  const handleSearchSubmit = async (event) => {
    if (event.key === "Enter" || event.type === "click") {
      // Store the current page in session storage when a search is submitted
      sessionStorage.setItem("currentPage", currentPage);

      if (searchText.trim()) {
        await fetchSearchResults(searchText.trim(), 0); // Fetch search results
        setCurrentPage(0); // Reset to the first page for search results
      } else {
        await fetchPageData(0); // Fetch all data if search is empty
      }
    }
  };

  const handleViewClick = (snippet) => {
    console.log("🔍 Navigating to StoriesResultPage with snippet:", snippet);
    navigate("/storiesresultpage", {
        state: {
            title: snippet.title,
            type: snippet.type,
            src: snippet.src,
            currentPage: currentPage,
            itemsPerPage: itemsPerPage,
            query: searchText.trim() ? searchText : '' // Include search query if any
        }
    });
     // Scroll to the top of the page
     window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 0 && pageNumber < totalPages) {
      setCurrentPage(pageNumber); // Update the current page state
      sessionStorage.setItem("currentPage", pageNumber); // Store the current page in session storage
      fetchPageData(pageNumber); // Fetch data for the selected page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const renderPaginationItems = () => {
    const paginationItems = [];
    for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
      if (
        pageIndex === 0 ||
        pageIndex === pageCount - 1 ||
        (pageIndex >= currentPage - 2 && pageIndex <= currentPage + 2)
      ) {
        paginationItems.push(
          <Pagination.Item
            key={pageIndex}
            active={pageIndex === currentPage}
            onClick={() => handlePageChange(pageIndex)}
          >
            {pageIndex + 1}
          </Pagination.Item>
        );
      } else if (
        (pageIndex === currentPage - 3 && pageIndex !== 1) ||
        (pageIndex === currentPage + 3 && pageIndex !== pageCount - 2)
      ) {
        paginationItems.push(
          <Pagination.Ellipsis key={pageIndex + "ellipsis"} />
        );
      }
    }
    return paginationItems;
  };

  useEffect(() => {
    return () => {
      // Clear search text from session storage when leaving the page
      sessionStorage.removeItem("searchText");
      sessionStorage.removeItem("currentPage");
      sessionStorage.removeItem("selectedFilters");
      sessionStorage.removeItem("ICcategorylist");
      sessionStorage.removeItem("totalItems");
    };
  }, []);
  
  return (
    <>
      {/* Breadcrumb Navigation */}
      <Container fluid>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/allcategories">Categories</Breadcrumb.Item>
          <Breadcrumb.Item active>Stories</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <Container className="archive-header">
        <Row>
          <Col>
            <h1>Stories</h1>
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
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col className="equal">
            <div className="search-box">
              <button
                className={`btn-search ${searchText.trim() !== "" ? "expanded" : ""}`}
                onClick={handleSearchSubmit}
              >
                <img src={SearchIcon} alt="Search icon"></img>
              </button>

              <input
                type="text"
                className={`input-search ${searchText.trim() !== "" ? "expanded" : ""}`}
                placeholder="Type to Search..."
                value={searchText}
                onChange={handleSearchInputChange}
                onKeyDown={handleSearchSubmit}
              />
              
              {searchText.trim() !== "" && (
                <button
                  className="btn-clear"
                  onClick={() => {
                    setSearchText("");
                    fetchPageData(0); // Reset to initial data
                  }}
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </Col>

          <Col className="leftplace">
            <p className="showing-result">
              {totalItems > 0
                ? `Showing ${currentPage * itemsPerPage + 1} - ${Math.min(
                  (currentPage + 1) * itemsPerPage,
                  totalItems
                )} results of ${totalItems}`
                : `Showing 0 results`}
            </p>
          </Col>
        </Row>

        {error && (
          <p className="error-message" style={{ color: "red" }}>
            {error}
          </p>
        )}
      </Container>

      <Container className="page-content">
        {isSearching ? (
          Array.from({ length: 5 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : imagesList.length > 0 ? (
          imagesList.map((item, index) => (
            <div
              className="listcard listcard-image"
              onClick={() => handleViewClick(item)}
              key={index}
              style={{ "--imgsrc": `url(${item.src})` }}
            >
              <div className="content">
                <p className="adjust-left">{item.type}</p>
                <h2 className="title">{item.title}</h2>
                <button
                  className="listbtn"
                  onClick={() => handleViewClick(item)}
                >
                  View
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>{isSearching ? "Loading..." : "No Results Found"}</p>
        )}
      </Container>

      <Container>
        <Row>
          <Col className="paginattion-place">
            <Pagination>
              <Pagination.First onClick={() => handlePageChange(0)} />
              <Pagination.Prev
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 0}
              />
              {renderPaginationItems()}
              <Pagination.Next
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
              />
              <Pagination.Last
                onClick={() => handlePageChange(totalPages - 1)}
              />
            </Pagination>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="archive-end">
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
      </Container>
    </>
  );
}

export default Stories;