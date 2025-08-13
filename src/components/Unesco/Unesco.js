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

    function Unesco() {
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

      const data = await Api.getUnesco(query);
      console.log("📦 API Response:", data);

      if (data.rows && data.rows.search_results) {
        const searchResults = data.rows.search_results.map((item) => {
          console.log("Item title:", item.title); // Log each title
          return {
            nid: item.nid,
            src: item.field_unesco_category_thumbnail_1
              ? encodeURI(Api.getFileUrl(item.field_unesco_category_thumbnail_1))
              : item.field_unesco_category_thumbnail
                ? encodeURI(Api.getFileUrl(item.field_unesco_category_thumbnail))
                : "",
            title: item.title,
            type: item.field_dc_type,
          };
        });
        setImagesList(searchResults);
        setTotalItems(data.rows.search_results.length);
        setTotalPages(Math.ceil(data.rows.search_results.length / itemsPerPage));
      } else {
        setImagesList([]);
        setTotalItems(0);
        setTotalPages(0);
      }
    } catch (error) {
      console.error("❌ API Error:", error);
      setError("Failed to fetch UNESCO data. Please try again later.");
    } finally {
      setIsSearching(false);
    }
  };

  const fetchSearchResults = async (text, page) => {
    try {
      setIsSearching(true);
      const data = await Api.searchUnesco(text, page);
      if (data && data.rows && data.rows.search_results) {
        const searchResults = data.rows.search_results.map((item) => ({
          nid: item.nid,
          src: item.field_unesco_category_thumbnail_1
            ? encodeURI(Api.getFileUrl(item.field_unesco_category_thumbnail_1))
            : item.field_unesco_category_thumbnail
              ? encodeURI(Api.getFileUrl(item.field_unesco_category_thumbnail))
              : "",
          title: item.title,
          type: item.field_dc_type,
        }));
        setImagesList(searchResults);
        setTotalItems(data.rows.search_results.length);
        setTotalPages(Math.ceil(data.rows.search_results.length / itemsPerPage));
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
    console.log("🔍 Navigating with snippet:", snippet);
    console.log("Title value:", snippet.title);
    
    // Check if it's the World Heritage Sites record
    if (snippet.title === "World Heritage Sites") {
      navigate("/unesco-heritage-sites", {
        state: {
          title: snippet.title,
          type: snippet.type,
          src: snippet.src,
          currentPage: currentPage,
          itemsPerPage: itemsPerPage,
          query: searchText.trim() ? searchText : ''
        }
      });
    } 
    // Check if it's the Global Network of Learning Cities record
    else if (snippet.title === "Global Network of Learning Cities") {
      navigate("/unesco-global-network-of-learning-cities", {
        state: {
          title: snippet.title,
          type: snippet.type,
          src: snippet.src,
          currentPage: currentPage,
          itemsPerPage: itemsPerPage,
          query: searchText.trim() ? searchText : ''
        }
      });
    }
    // Check if it's the Global Geoparks record
    else if (snippet.title === "Global Geoparks") {
      navigate("/unesco-global-geoparks", {
        state: {
          title: snippet.title,
          type: snippet.type,
          src: snippet.src,
          currentPage: currentPage,
          itemsPerPage: itemsPerPage,
          query: searchText.trim() ? searchText : ''
        }
      });
    }
    // Check if it's the Memory of the World record
    else if (snippet.title === "Memory of the World") {
      navigate("/unesco-memory-of-the-world", {
        state: {
          title: snippet.title,
          type: snippet.type,
          src: snippet.src,
          currentPage: currentPage,
          itemsPerPage: itemsPerPage,
          query: searchText.trim() ? searchText : ''
        }
      });
    }
    // Check if it's the Creative Cities Network record
    else if (snippet.title === "Creative Cities Network") {
      navigate("/unesco-creative-cities-network", {
        state: {
          title: snippet.title,
          type: snippet.type,
          src: snippet.src,
          currentPage: currentPage,
          itemsPerPage: itemsPerPage,
          query: searchText.trim() ? searchText : ''
        }
      });
    }
    // Check if it's the Biospheres record
    else if (snippet.title === "Biosphere Reserves") {
      navigate("/unesco-biospheres", {
        state: {
          title: snippet.title,
          type: snippet.type,
          src: snippet.src,
          currentPage: currentPage,
          itemsPerPage: itemsPerPage,
          query: searchText.trim() ? searchText : ''
        }
      });
    }
    // Check if it's the Intangible Cultural Heritage record
    else if (snippet.title === "Intangible Cultural Heritage") {
      navigate("/unesco-intangible-cultural-heritage", {
        state: {
          title: snippet.title,
          type: snippet.type,
          src: snippet.src,
          currentPage: currentPage,
          itemsPerPage: itemsPerPage,
          query: searchText.trim() ? searchText : ''
        }
      });
    }
    // Check if it's the Atlas of the World's Languages record
    else if (snippet.title === "Atlas of the World's Languages in Danger") {
      navigate("/unesco-atlas-of-the-worlds", {
        state: {
          title: snippet.title,
          type: snippet.type,
          src: snippet.src,
          currentPage: currentPage,
          itemsPerPage: itemsPerPage,
          query: searchText.trim() ? searchText : ''
        }
      });
    }
   /*  else {
      // For other records, navigate to storiesresultpage
      navigate("/storiesresultpage", {
        state: {
          title: snippet.title,
          type: snippet.type,
          src: snippet.src,
          currentPage: currentPage,
          itemsPerPage: itemsPerPage,
          query: searchText.trim() ? searchText : ''
        }
      });
    }
     */
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
          <Breadcrumb.Item active>UNESCO</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <Container className="archive-header">
        <Row>
          <Col>
            <h1>UNESCO</h1>
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

export default Unesco;