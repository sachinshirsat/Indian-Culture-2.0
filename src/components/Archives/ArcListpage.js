import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Breadcrumb } from "react-bootstrap"; // Import Breadcrumb
import Offcanvas from "react-bootstrap/Offcanvas";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "../../image/search.svg";
import Divider from "../../image/SwirlDivider.png";
import { Filter, X } from "feather-icons-react";
import { useNavigate, useLocation } from "react-router-dom";
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

function ArcListpage({ name, ...props }) {
  const [show, setShow] = useState(false);
  const [ICcategorylist, setICcategorylist] = useState(() => {
    const savedData = sessionStorage.getItem("ICcategorylist");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [originalRecords, setOriginalRecords] = useState([]); // Store original records
  const [categories, setCategories] = useState([]);
  const [totalItems, setTotalItems] = useState(() => {
    const savedTotalItems = sessionStorage.getItem("totalItems");
    return savedTotalItems ? Number(savedTotalItems) : 0;
  });
  const [selectedFilters, setSelectedFilters] = useState(() => {
    // First check location state, then session storage
    if (props.location?.selectedFilters) {
      return props.location.selectedFilters;
    }
    const savedFilters = sessionStorage.getItem("selectedFilters");
    return savedFilters ? JSON.parse(savedFilters) : [];
  });
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = sessionStorage.getItem("currentPage");
    return savedPage ? parseInt(savedPage) : 0;
  });
  const [searchText, setSearchText] = useState(() => {
    return sessionStorage.getItem("searchText") || "";
  });
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);

  const itemsPerPage = 25;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      if (location.state.currentPage !== undefined) {
        setCurrentPage(location.state.currentPage);
        sessionStorage.setItem("currentPage", location.state.currentPage);
      }
      if (location.state.selectedFilters !== undefined) {
        setSelectedFilters(location.state.selectedFilters);
        // Immediately apply filters when coming back from result page
        const fetchWithFilters = async () => {
          try {
            setIsSearching(true);
            const filterQuery = location.state.selectedFilters.join(",");
            // Use the stored current page
            const pageToFetch = location.state.currentPage || 0;
            const data = await Api.getArchives(`${pageToFetch}${filterQuery ? `&field_dc_type=${filterQuery}` : ''}`);
            if (data.pager && data.pager.total_items && data.rows && data.rows.search_results) {
              const searchResults = data.rows.search_results.map((item) => ({
                src: item.field_pdf_digital_file_2 
                  ? Api.getFileUrl(item.field_pdf_digital_file_2)
                  : Api.getFileUrl(item.field_pdf_digital_file_1),
                title: item.title,
                type: item.field_dc_type,
              }));
              setICcategorylist(searchResults);
              setTotalItems(data.pager.total_items);
              setOriginalRecords(searchResults);
            }
          } catch (error) {
            setError("Failed to fetch filtered data. Please try again.");
            console.error("Filter fetch error:", error);
          } finally {
            setIsSearching(false);
          }
        };

        // Only fetch if there are selected filters
        if (location.state.selectedFilters.length > 0) {
          fetchWithFilters();
        } else {
          // If no filters, fetch initial data with stored page
          fetchPageData(location.state.currentPage || 0);
        }
      }
      if (location.state.searchText !== undefined) {
        setSearchText(location.state.searchText);
      }
      if (location.state.ICcategorylist !== undefined) {
        setICcategorylist(location.state.ICcategorylist);
      }
    } else {
      // If no location state, fetch data using the saved page number
      const savedPage = sessionStorage.getItem("currentPage");
      const pageToFetch = savedPage ? parseInt(savedPage) : 0;
      fetchPageData(pageToFetch);
    }
  }, [location.state]);

  useEffect(() => {
    sessionStorage.setItem("selectedFilters", JSON.stringify(selectedFilters));
    sessionStorage.setItem("searchText", searchText);
    sessionStorage.setItem("ICcategorylist", JSON.stringify(ICcategorylist));
    sessionStorage.setItem("totalItems", totalItems);
  }, [selectedFilters, searchText, ICcategorylist, totalItems]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getImageUrl = (url) => {
    if (!url) return null;
    // If the URL ends with .pdf.webp, try .pdf.png instead
    if (url.endsWith('.pdf.webp')) {
      return url.replace('.pdf.webp', '.pdf.png');
    }
    return url;
  };

  const fetchPageData = async (page) => {
    try {
      setIsSearching(true);
      let query = page;

      if (selectedFilters.length > 0) {
        const filterQuery = selectedFilters.join(",");
        query += `&field_dc_type=${filterQuery}`;
      }

      const data = await Api.getArchives(query);
      if (data.pager && data.pager.total_items && data.rows && data.rows.search_results) {
        const searchResults = data.rows.search_results.map((item) => ({
          src: item.field_pdf_digital_file_2 
            ? getImageUrl(Api.getFileUrl(item.field_pdf_digital_file_2))
            : getImageUrl(Api.getFileUrl(item.field_pdf_digital_file_1)),
          title: item.title,
          type: item.field_dc_type,
        }));
        setICcategorylist(searchResults);
        setOriginalRecords(searchResults);
        setTotalItems(data.pager.total_items);
      }
    } catch (error) {
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setIsSearching(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await Api.getCategories();
      setCategories(
        data.categories.map((category) => ({
          name: category.category,
          count: category.count,
        }))
      );
    } catch (error) {
      setError("Failed to fetch categories. Please try again later.");
    }
  };

  const fetchSearchResults = async (query, page) => {
    try {
      setIsSearching(true);
      const data = await Api.searchArchives(query, page);
      if (data.pager && data.pager.total_items && data.rows && data.rows.search_results) {
        const searchResults = data.rows.search_results.map((item) => ({
          src: item.field_pdf_digital_file_2 
            ? getImageUrl(Api.getFileUrl(item.field_pdf_digital_file_2))
            : getImageUrl(Api.getFileUrl(item.field_pdf_digital_file_1)),
          title: item.title,
          type: item.field_dc_type,
        }));
        setICcategorylist(searchResults);
        setTotalItems(data.pager.total_items);
        setOriginalRecords(searchResults);
      } else {
        setICcategorylist([]);
        setTotalItems(0);
      }
    } catch (error) {
      setError("Failed to fetch search results. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    setSearchText(value);

    // If the search text is cleared, reset to show all records
    if (value.trim() === "") {
      setCurrentPage(0); // Reset to the first page
      fetchPageData(0); // Fetch all records
      fetchCategories(); // Reset category counts
    }
  };

  const handleSearchSubmit = async (event) => {
    if (event.key === "Enter" || event.type === "click") {
      setCurrentPage(0); // Reset to the first page
      if (searchText.trim()) {
        await fetchSearchResults(searchText, 0);
      }
    }
  };

  const handleFilterCheckboxChange = (option) => {
    if (selectedFilters.includes(option)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== option));
    } else {
      setSelectedFilters([...selectedFilters, option]);
    }
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

  const handleApplyFilters = async () => {
    try {
      handleClose();
      setIsSearching(true);
      setCurrentPage(0);

      if (selectedFilters.length === 0) {
        await fetchPageData(0);
        return;
      }

      const filterQuery = selectedFilters.join(",");
      const data = await Api.getArchives(`0${filterQuery ? `&field_dc_type=${filterQuery}` : ''}`);
      
      if (data.pager && data.pager.total_items && data.rows && data.rows.search_results) {
        const searchResults = data.rows.search_results.map((item) => ({
          src: item.field_pdf_digital_file_2 
            ? getImageUrl(Api.getFileUrl(item.field_pdf_digital_file_2))
            : getImageUrl(Api.getFileUrl(item.field_pdf_digital_file_1)),
          title: item.title,
          type: item.field_dc_type,
        }));
        setICcategorylist(searchResults);
        setTotalItems(data.pager.total_items);
        setOriginalRecords(searchResults);
      } else {
        setICcategorylist([]);
        setTotalItems(0);
      }
    } catch (error) {
      setError("Failed to apply filters. Please try again.");
      console.error("Apply filters error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleViewClick = (item) => {
    navigate("/arclistresultpage", {
      state: { item, currentPage, selectedFilters, searchText, ICcategorylist },
    });
     // Scroll to the top of the page
     window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 0 && pageNumber < pageCount) {
      setCurrentPage(pageNumber);
      sessionStorage.setItem("currentPage", pageNumber.toString());
      fetchPageData(pageNumber);

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

  // Update the cleanup useEffect to properly handle session storage
  useEffect(() => {
    return () => {
      // Clear all session storage items related to this component
      const itemsToKeep = ['currentPage', 'selectedFilters']; // Items we want to persist between navigation
      const itemsToClear = [
        'searchText',
        'ICcategorylist',
        'totalItems'
      ];

      // Clear only specific items while keeping others
      itemsToClear.forEach(item => sessionStorage.removeItem(item));
    };
  }, []);

  // Add a new useEffect to handle session storage updates more efficiently
  useEffect(() => {
    // Batch update session storage items
    const updateSessionStorage = () => {
      const storageUpdates = {
        selectedFilters: JSON.stringify(selectedFilters),
        searchText: searchText,
        ICcategorylist: JSON.stringify(ICcategorylist),
        totalItems: totalItems.toString(),
        currentPage: currentPage.toString()
      };

      Object.entries(storageUpdates).forEach(([key, value]) => {
        if (value !== sessionStorage.getItem(key)) {
          sessionStorage.setItem(key, value);
        }
      });
    };

    // Use requestAnimationFrame to batch updates and prevent race conditions
    const timeoutId = requestAnimationFrame(updateSessionStorage);
    return () => cancelAnimationFrame(timeoutId);
  }, [selectedFilters, searchText, ICcategorylist, totalItems, currentPage]);

 


  return (
    <>
      {/* Breadcrumb Navigation */}
      <Container fluid>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/allcategories">Categories</Breadcrumb.Item>
          <Breadcrumb.Item active>Archives</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <Container className="archive-header">
        <Row>
          <Col>
            <h1>Archives</h1>
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
          id='sidepan'

        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Archives Filter</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body id="style-4" >
          <h5>Types</h5>
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
                    // className="custom-checkbox "
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
        ) : ICcategorylist.length > 0 ? (
          ICcategorylist.map((item, index) => (
            <div
              className="listcard listcard-image"
              onClick={() => handleViewClick(item)}
              key={index}
              style={{ "--imgsrc": `url(${item.src})` }}
            >
              <div className="content">
                <p className="adjust-left">{item.type}</p>
                <h2 className="title">{item.title}</h2>{" "}
                {/* Title is always visible */}
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
          <p>No Results Found</p>
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
                disabled={currentPage === pageCount - 1}
              />
              <Pagination.Last
                onClick={() => handlePageChange(pageCount - 1)}
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

export default ArcListpage;