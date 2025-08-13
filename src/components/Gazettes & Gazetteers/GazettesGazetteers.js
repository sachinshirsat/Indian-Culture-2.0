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

function GazettesGazetteers({ name, ...props }) {
  const [show, setShow] = useState(false);
  const [gazettesList, setGazettesList] = useState([]);
  const [organisationCounts, setOrganisationCounts] = useState({});
  const [langCounts, setLangCounts] = useState({});
  const [cpyrhtCounts, setCpyrhtCounts] = useState({});
  const [distCounts, setDistCounts] = useState({});

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
    fetchOrganisationAndDcTypeCounts();
    
    // Check if we're returning from result page and have stored filters/page
    const savedFilters = JSON.parse(sessionStorage.getItem("selectedFilters")) || [];
    const savedPage = parseInt(sessionStorage.getItem("currentPage"), 10) || 0;
    const savedSearch = sessionStorage.getItem("searchText") || "";

    // Update states with saved values
    setSelectedFilters(savedFilters);
    setCurrentPage(savedPage);
    setSearchText(savedSearch);

    // Fetch data with saved filters and page
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

      // Filter separation
      const orgFilters = selectedFilters.filter(filter => filter.type === "categories");
      const langFilters = selectedFilters.filter(filter => filter.type === "date");
      const cpyrhtFilters = selectedFilters.filter(filter => filter.type === "state");
      const distFilters = selectedFilters.filter(filter => filter.type === "district");

      if (orgFilters.length > 0) {
        const orgFilterQuery = orgFilters.map(item => item.value).join(",");
        query += `&field_dc_type=${encodeURIComponent(orgFilterQuery)}`;
      }
      console.log("Categories records1:", orgFilters);

      if (langFilters.length > 0) {
        const langFilterQuery = langFilters.map(item => item.value).join(",");
        query += `&field_dc_date_issued=${encodeURIComponent(langFilterQuery)}`;
      }

      console.log("Categories records2:", langFilters);

      if (cpyrhtFilters.length > 0) {
        const cpyrhtFilterQuery = cpyrhtFilters.map(item => item.value).join(",");
        query += `&field_cdwa_location=${encodeURIComponent(cpyrhtFilterQuery)}`;
      }
      console.log("Categories records3:", cpyrhtFilters);

      if (distFilters.length > 0) {
        const distFilterQuery = distFilters.map(item => item.value).join(",");
        query += `&field_dc_coverage_spatial=${encodeURIComponent(distFilterQuery)}`;
      }
      console.log("Categories records4:", distFilters);

      console.log("🔍 API Query:", query);

      const data = await Api.getGazettesGazetteers(query);
      console.log("📦 API Response:", data);

      if (data.pager && data.pager.total_items && data.rows?.search_results) {
        const searchResults = data.rows.search_results.map((item) => {
          const images = item.field_pdf_digital_file_2 ? item.field_pdf_digital_file_2.split(',') : [];
          return {
            src: images.length > 0 ? Api.getFileUrl(images[0].trim()) : "", // Take the first image
            title: item.title,
            type: item.field_dc_type,
            organisation: item.field_parent_library_name,

          };
        });
        setGazettesList(searchResults);
        setTotalItems(parseInt(data.pager.total_items, 10));
        setTotalPages(data.pager.total_pages);
      } else {
        setGazettesList([]);
        setTotalItems(0);
        setTotalPages(0);
      }
    } catch (error) {
      console.error("❌ API Error:", error);
      setError("Failed to fetch Gazettes & Gazetteers data. Please try again later.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleFilterCheckboxChange = (type, value) => {
    const existingFilter = selectedFilters.find(
      (filter) => filter.type === type && filter.value === value
    );

    if (existingFilter) {
      setSelectedFilters(selectedFilters.filter(
        (filter) => !(filter.type === type && filter.value === value)
      ));
    } else {
      setSelectedFilters([...selectedFilters, { type, value }]);
    }
  };

  const fetchOrganisationAndDcTypeCounts = async () => {
    try {
      const categoriesData = await Api.getGazettesGazetteersCategories();
      console.log("Categories Data:", categoriesData); // Log the API response

      // Process organisation counts from 'records'
      const organisationCounts = categoriesData.categories.reduce((acc, record) => {
        const org = record.collection; // Assuming 'organisation' is the field name
        acc[org] = (acc[org] || 0) + record.count; // Use name_count from the record
        return acc;
      }, {});

      console.log("Categories Data1:", organisationCounts);

      // Process language counts from 'lang'
      const langCounts = categoriesData.date.reduce((acc, record) => {
        const lang = record.date; // Assuming 'dc_type' is the field name
        acc[lang] = (acc[lang] || 0) + record.count; // Count occurrences of each dc_type with prefix
        return acc;
      }, {});

      console.log("Categories Data2:", langCounts);

      // Process copyright counts from 'cpyrht'
      const cpyrhtCounts = categoriesData.state.reduce((acc, record) => {
        const cpyrht = record.state; // Assuming 'dc_type' is the field name
        acc[cpyrht] = (acc[cpyrht] || 0) + record.count; // Count occurrences of each dc_type with prefix
        return acc;
      }, {});

      console.log("Categories Data3:", cpyrhtCounts);

      // Process copyright counts from 'dist'
      const distCounts = categoriesData.district.reduce((acc, record) => {
        const dist = record.district; // Assuming 'dc_type' is the field name
        acc[dist] = (acc[dist] || 0) + record.count; // Count occurrences of each dc_type with prefix
        return acc;
      }, {});
      console.log("Categories Data4:", distCounts);

      setOrganisationCounts(organisationCounts);
      setLangCounts(langCounts);
      setCpyrhtCounts(cpyrhtCounts);
      setDistCounts(distCounts);
    } catch (error) {
      setError("Failed to fetch Organisation and Type counts.");
    }
  };

  const fetchSearchResults = async (text, page) => {
    try {
      setIsSearching(true);
      const data = await Api.searchGazettesGazetteers(text, page);
      if (data && data.pager && data.rows && data.rows.search_results) {
        const searchResults = data.rows.search_results.map((item) => {
          const images = item.field_pdf_digital_file_2 ? item.field_pdf_digital_file_2.split(',') : [];
          return {
            src: images.length > 0 ? Api.getFileUrl(images[0].trim()) : "", // Take the first image
            title: item.title,
            type: item.field_dc_type,
          };
        });
        setGazettesList(searchResults);
        setTotalItems(parseInt(data.pager.total_items, 10));
        setTotalPages(data.pager.total_pages);
      } else {
        setGazettesList([]);
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

  /* const handleFilterCheckboxChange = (option) => {
    if (selectedFilters.includes(option)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== option));
    } else {
      setSelectedFilters([...selectedFilters, option]);
    }
  }; */

  const handleApplyFilters = () => {
    setCurrentPage(0);
    fetchPageData(0); // Fetch records with applied filters
    handleClose();
  };

  const resetFilters = () => {
    setSelectedFilters([]);
    setCurrentPage(0);
    handleClose();
  };

  useEffect(() => {
    if (selectedFilters.length === 0 && currentPage === 0) {
      if (show === false) {
        const fetchData = async () => {
          await fetchPageData(0);
        };
        fetchData();
      }
    }
  }, [selectedFilters, currentPage, show]);

  const handleViewClick = (item) => {
    // Save current state before navigating
    sessionStorage.setItem("selectedFilters", JSON.stringify(selectedFilters));
    sessionStorage.setItem("currentPage", currentPage.toString());
    sessionStorage.setItem("searchText", searchText);

    navigate("/gazettesgazetteersresultpage", {
      state: { item },
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      // Only clear session storage when actually leaving the gazettes & gazetteers section
      if (!window.location.pathname.includes('gazettes')) {
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
          <Breadcrumb.Item active>Gazettes & Gazetteers</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <Container className="archive-header">
        <Row>
          <Col>
            <h1>Gazettes & Gazetteers</h1>
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
            <Offcanvas.Title>Gazettes & Gazetteers Filters</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body id="style-4">
            <div className="filter-section">
              <h5>Collections</h5>
              <div className="organisation-scroll">
                {Object.entries(organisationCounts).map(([org, count], index) => (
                  <div key={index} className={`filter-item ${selectedFilters.some(f => f.value === org && f.type === "categories") ? "selected" : ""}`}>
                    <label className="filter-panel">
                      <input
                        className="set-checkbox"
                        type="checkbox"
                        value={org}
                        checked={selectedFilters.some(f => f.value === org && f.type === "categories")}
                        onChange={() => handleFilterCheckboxChange("categories", org)}
                      />
                      <span className="checkmarkk">{org || "Unknown"} ({count})</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h5>Date</h5>
              <div className="dc-scroll">
                {Object.entries(langCounts).map(([lang, count], index) => (
                  <div key={index} className={`filter-item ${selectedFilters.some(f => f.value === lang && f.type === "date") ? "selected" : ""}`}>
                    <label className="filter-panel">
                      <input
                        className="set-checkbox"
                        type="checkbox"
                        value={lang}
                        checked={selectedFilters.some(f => f.value === lang && f.type === "date")}
                        onChange={() => handleFilterCheckboxChange("date", lang)}
                      />
                      <span className="checkmarkk">{lang} ({count})</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h5>State/Location</h5>
              <div className="dc-scroll">
                {Object.entries(cpyrhtCounts).map(([cpyrht, count], index) => (
                  <div key={index} className={`filter-item ${selectedFilters.some(f => f.value === cpyrht && f.type === "state") ? "selected" : ""}`}>
                    <label className="filter-panel">
                      <input
                        className="set-checkbox"
                        type="checkbox"
                        value={cpyrht}
                        checked={selectedFilters.some(f => f.value === cpyrht && f.type === "state")}
                        onChange={() => handleFilterCheckboxChange("state", cpyrht)}
                      />
                      <span className="checkmarkk">{cpyrht} ({count})</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h5>District/Sub-Location</h5>
              <div className="dc-scroll">
                {Object.entries(distCounts).map(([dist, count], index) => (
                  <div key={index} className={`filter-item ${selectedFilters.some(f => f.value === dist && f.type === "district") ? "selected" : ""}`}>
                    <label className="filter-panel">
                      <input
                        className="set-checkbox"
                        type="checkbox"
                        value={dist}
                        checked={selectedFilters.some(f => f.value === dist && f.type === "district")}
                        onChange={() => handleFilterCheckboxChange("district", dist)}
                      />
                      <span className="checkmarkk">{dist} ({count})</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </Offcanvas.Body>
          <hr />
          < Row>
            <Col className="filbtn">
              <Button variant="secondary" onClick={resetFilters}>
                Reset
              </Button>{" "}
              <Button variant="success" onClick={handleApplyFilters}>
                Apply
              </Button>
            </Col>
          </Row>
        </Offcanvas>
      </Container>

      <Container className="page-content">
        {isSearching ? (
          Array.from({ length: 5 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : gazettesList.length > 0 ? (
          gazettesList.map((item, index) => (
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

export default GazettesGazetteers;