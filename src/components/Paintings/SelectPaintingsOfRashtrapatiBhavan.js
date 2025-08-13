import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Breadcrumb } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "../../image/search.svg";
import Divider from "../../image/SwirlDivider.png";
import { Filter, X } from "feather-icons-react";
import { useNavigate } from "react-router-dom";
import Api from "../api";

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

function SelectPaintingsOfRashtrapatiBhavan({ name, ...props }) {
  const [imagesList, setImagesList] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(
    parseInt(sessionStorage.getItem("currentPage"), 10) || 0
  );
  const [searchText, setSearchText] = useState(
    sessionStorage.getItem("searchText") || ""
  );
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);

  const itemsPerPage = 25;
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem("currentPage", currentPage);
    sessionStorage.setItem("searchText", searchText);
  }, [currentPage, searchText]);

  useEffect(() => {
    // Check if we're returning from result page and have stored page
    const savedPage = parseInt(sessionStorage.getItem("currentPage"), 10) || 0;
    const savedSearch = sessionStorage.getItem("searchText") || "";

    // Update states with saved values
    setCurrentPage(savedPage);
    setSearchText(savedSearch);

    // Fetch data with saved page
    if (savedSearch.trim()) {
      fetchSearchResults(savedSearch, savedPage);
    } else {
      fetchPageData(savedPage);
    }
  }, []);

  const fetchPageData = async (page) => {
    try {
      setIsSearching(true);
      let query = `page=${page}&items_per_page=${itemsPerPage}`;

      console.log("🔍 API Query:", query);

      const data = await Api.getSelectPaintingsOfRashtrapatiBhavan(query);
      console.log("📦 API Response:", data);

      if (data.pager && data.pager.total_items && data.rows?.search_results) {
        const searchResults = data.rows.search_results.map((item) => ({
          src: item.field_paintings_image
            ? (() => {
                const images = item.field_paintings_image.split(',').map(url => url.trim());
                const webpImage = images.find(url => url.toLowerCase().endsWith('.webp'));
                return Api.getFileUrl(webpImage || images[0]);
              })()
            : "",
          title: item.title,
          type: item.field_dc_type,
          organisation: item.field_parent_library_name,
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
      setError("Failed to fetch museum collections data. Please try again later.");
    } finally {
      setIsSearching(false);
    }
  };

  const fetchSearchResults = async (text, page) => {
    try {
      setIsSearching(true);
      const data = await Api.searchSelectPaintingsOfRashtrapatiBhavan(text, page);
      if (data && data.pager && data.rows && data.rows.search_results) {
        const searchResults = data.rows.search_results.map((item) => ({
          src: item.field_paintings_image
            ? (() => {
                const images = item.field_paintings_image.split(',').map(url => url.trim());
                const webpImage = images.find(url => url.toLowerCase().endsWith('.webp'));
                return Api.getFileUrl(webpImage || images[0]);
              })()
            : "",
          title: item.title,
          type: item.field_dc_type,
          organisation: item.field_parent_library_name,
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
      setCurrentPage(0);
      fetchPageData(0); // Fetch all data if search is cleared
    }
  };

  const handleSearchSubmit = async (event) => {
    if (event.key === "Enter" || event.type === "click") {
      setCurrentPage(0); // Reset to the first page
      if (searchText.trim()) {
        await fetchSearchResults(searchText.trim(), 0); // Fetch search results
      } else {
        await fetchPageData(0); // Fetch all data if search is empty
      }
    }
  };

  const handleViewClick = (item) => {
    // Save current state before navigating
    sessionStorage.setItem("currentPage", currentPage.toString());
    sessionStorage.setItem("searchText", searchText);

    navigate("/select-paintings-of-rashtrapati-bhavan-resultpage", {
      state: { item },
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 0 && pageNumber < totalPages) {
      setCurrentPage(pageNumber); // Update the current page state

      // Fetch data for the selected page
      if (searchText.trim()) {
        fetchSearchResults(searchText.trim(), pageNumber); // Fetch search results for the selected page
      } else {
        fetchPageData(pageNumber); // Fetch data for the selected page
      }

      // Scroll to the top of the page
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
    if (isSearching) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure scroll is restored when component unmounts
    };
  }, [isSearching]);

  useEffect(() => {
    return () => {
      // Only clear session storage when actually leaving the images section
      if (!window.location.pathname.includes('image')) {
        sessionStorage.removeItem("searchText");
        sessionStorage.removeItem("currentPage");
        sessionStorage.removeItem("selectedFilters");
        sessionStorage.removeItem("ICcategorylist");
        sessionStorage.removeItem("totalItems");
      }
    };
  }, []);
  
  return (
    <>
      {/* Breadcrumb Navigation */}
      <Container fluid>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/allcategories">Categories</Breadcrumb.Item>
          <Breadcrumb.Item active>Select Paintings of Rashtrapati Bhavan</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <Container className="archive-header">
        <Row>
          <Col>
            <h1>Select Paintings of Rashtrapati Bhavan</h1>
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
          {/* <Col className="equal">
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
          </Col> */}

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

export default SelectPaintingsOfRashtrapatiBhavan;