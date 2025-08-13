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


function AudiosListpage({ name, ...props }) {
  const [show, setShow] = useState(false);
  const [audioList, setAudioList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState(
    JSON.parse(sessionStorage.getItem("selectedFilters")) || []
  );
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
    sessionStorage.setItem("selectedFilters", JSON.stringify(selectedFilters));
    sessionStorage.setItem("searchText", searchText);
  }, [currentPage, selectedFilters, searchText]);

  useEffect(() => {
    const initializeData = async () => {
        await fetchCategories();
        
        // Check if we're returning from result page or page refresh
        const savedFilters = JSON.parse(sessionStorage.getItem("selectedFilters")) || [];
        const savedPage = parseInt(sessionStorage.getItem("currentPage"), 10) || 0;
        const savedSearch = sessionStorage.getItem("searchText") || "";

        // Update states with saved values
        setSelectedFilters(savedFilters);
        setCurrentPage(savedPage);
        setSearchText(savedSearch);

        // Important: First check for saved search text
        if (savedSearch.trim()) {
            // If we have a saved search, use it
            await fetchSearchResults(savedSearch, savedPage);
        } else if (savedFilters.length > 0) {
            // If no search but have filters
            await fetchPageData(savedPage);
        } else {
            // Default case: no search, no filters
            await fetchPageData(0);
        }
    };

    initializeData();
  }, []);

  const fetchPageData = async (page) => {
    try {
      setIsSearching(true);

      let query = `page=${page}&items_per_page=${itemsPerPage}`;

      if (selectedFilters.length > 0) {
        const filterQuery = selectedFilters.join(",");
        query += `&field_parent_library_name=${filterQuery}`;
      }

      const data = await Api.getAudios(query);

      if (
        data.pager &&
        data.pager.total_items &&
        data.rows &&
        data.rows.search_results
      ) {
        const searchResults = data.rows.search_results.map((item) => ({
          src: item.video_thumbnail_uri
            ? Api.getFileUrl(item.video_thumbnail_uri)
            : "",
          title: item.title,
          type: item.field_dc_type,
          category: item.category,
        }));
        setAudioList(searchResults);
        setTotalItems(parseInt(data.pager.total_items, 10));
        setTotalPages(data.pager.total_pages);
      } else {
        setAudioList([]);
        setTotalItems(0);
        setTotalPages(0);
      }
    } catch (error) {
      setError("Failed to fetch audio data. Please try again later.");
    } finally {
      setIsSearching(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await Api.getAudioCategories();
      setCategories(
        data.categories.map((category) => ({
          name: category.category,
          count: category.count,
        }))
      );
    } catch (error) {
      setError("Failed to fetch audio categories. Please try again later.");
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
    if (event.target.value.trim() === "") {
      setCurrentPage(0);
      fetchPageData(0);
    }
  };

  const handleSearchSubmit = async (event) => {
    if (event.key === "Enter" || event.type === "click") {
      setCurrentPage(0);
      if (searchText.trim()) {
        fetchSearchResults(searchText, 0);
      } else {
        fetchPageData(0); // Fetch all data if search is empty
      }
    }
  };

  const fetchSearchResults = async (text, page) => {
    try {
      setIsSearching(true);
      const data = await Api.searchAudios(text, page);
      if (data.pager && data.rows && data.rows.search_results) {
        const searchResults = data.rows.search_results.map((item) => ({
          src: item.video_thumbnail_uri
            ? Api.getFileUrl(item.video_thumbnail_uri)
            : "",
          title: item.title,
          type: item.field_dc_type,
          category: item.category,
        }));
        setAudioList(searchResults);
        setTotalItems(parseInt(data.pager.total_items, 10));
        setTotalPages(data.pager.total_pages);
      } else {
        setAudioList([]);
        setTotalItems(0);
        setTotalPages(0);
      }
    } catch (error) {
      setError("Failed to fetch search results. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleFilterCheckboxChange = (option) => {
    if (selectedFilters.includes(option)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== option));
    } else {
      setSelectedFilters([...selectedFilters, option]);
    }
    // Remove any immediate data fetching here
  };

  const handleApplyFilters = () => {
    setCurrentPage(0);
    fetchPageData(0); // Fetch records with applied filters
    handleClose();
  };

  //    this is perfect working code for Reset the filteres
  const resetFilters = () => {
    // Reset selected filters and current page
    setSelectedFilters([]);
    setCurrentPage(0);
    handleClose();
  };

  // Modify this effect to prevent immediate fetching
useEffect(() => {
  if (selectedFilters.length === 0 && currentPage === 0) {
    // Only fetch if filters were explicitly reset via the reset button
    if (show === false) { // Only fetch when the sidebar is closed (after reset)
      const fetchData = async () => {
        await fetchPageData(0);
        await fetchCategories();
      };
      fetchData();
    }
  }
}, [selectedFilters, currentPage, show]);

  //    this is perfect working code for Reset the filteres

  const handleViewClick = (item) => {
    // Save ALL current state before navigating
    sessionStorage.setItem("selectedFilters", JSON.stringify(selectedFilters));
    sessionStorage.setItem("currentPage", currentPage.toString());
    sessionStorage.setItem("searchText", searchText);
    sessionStorage.setItem("totalItems", totalItems.toString());
    sessionStorage.setItem("totalPages", totalPages.toString());

    navigate("/audioslistresultpage", {
        state: { item },
    });
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 0 && pageNumber < pageCount) {
      setCurrentPage(pageNumber);
      if (searchText.trim()) {
        fetchSearchResults(searchText, pageNumber);
      } else {
        fetchPageData(pageNumber);
      }
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   disable scrolling when isSearching is true and enable it again when loading is complete.
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
  //   disable scrolling when isSearching is true and enable it again when loading is complete.

  // Modify cleanup effect
  useEffect(() => {
    return () => {
        // Only clear session storage when navigating away from audio section
        // (not when refreshing or going to result page)
        if (!window.location.pathname.includes('audioslistresultpage')) {
            sessionStorage.removeItem("searchText");
            sessionStorage.removeItem("currentPage");
            sessionStorage.removeItem("selectedFilters");
            sessionStorage.removeItem("totalItems");
            sessionStorage.removeItem("totalPages");
            sessionStorage.removeItem("ICcategorylist");
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
          <Breadcrumb.Item active>Audios</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <Container className="archive-header">
        <Row>
          <Col>
            <h1>Audios</h1>
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
          <Filter 
              onClick={handleShow} 
              size="34" 
              className="filtericon"
              fill={selectedFilters.length > 0 ? "#000" : "none"}
              color="#000"
            />

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

        <Offcanvas
          show={show}
          onHide={handleClose}
          backdrop="static"
          className="sidepanel"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Audios Filter</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body id="style-4">
            <h5>Organisations</h5>
            <div className="organisation-scroll">
              {categories.length > 0 ? (
                categories.map((category, index) => (
                  <div
                    key={index}
                    className={`filter-item ${selectedFilters.includes(category.name) ? "selected" : ""
                      }`}
                  >
                    <label
                      className="filter-panel"
                      aria-label={`Checkbox ${index + 1}`}
                    >
                      <input
                        className="set-checkbox"
                        type="checkbox"
                        value={category.name}
                        checked={selectedFilters.includes(category.name)}
                        onChange={() => handleFilterCheckboxChange(category.name)}
                      />
                      <span className="checkmarkk">
                        {category.name} ({category.count})
                      </span>
                    </label>
                  </div>
                ))
              ) : (
                <p>Loading categories...</p>
              )}
            </div>
          </Offcanvas.Body>
          <hr />
          <Row>
            <Col className="filbtn">
              <Button variant="secondary" onClick={resetFilters}>
                Reset
              </Button>{" "}
              <Button variant="success" onClick={handleApplyFilters}>
                Apply
              </Button>{" "}
            </Col>
          </Row>
        </Offcanvas>
      </Container>

      <Container className="page-content">
        {isSearching ? (
          Array.from({ length: 5 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : audioList.length > 0 ? (
          audioList.map((item, index) => (
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

export default AudiosListpage;
