import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Breadcrumb } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "../../image/search.svg";
import Divider from "../../image/SwirlDivider.png";
import { useNavigate } from "react-router-dom";
import { X } from "feather-icons-react";

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

function RarebooksOfForts() {
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
    const storedPage = sessionStorage.getItem("currentPage");
    const pageToFetch = storedPage ? parseInt(storedPage, 10) : 0;
    setCurrentPage(pageToFetch);
    fetchPageData(pageToFetch);
  }, []);

  const fetchPageData = async (page) => {
    try {
      setIsSearching(true);
      let query = `page=${page}&items_per_page=${itemsPerPage}`;
      const data = await Api.getRarebooksForts(query);

      if (data?.rows?.search_results?.length > 0) {
        const searchResults = data.rows.search_results.map((item) => ({
          src: item.pdf_thumbnail
            ? Api.getFileUrl(item.pdf_thumbnail)
            : "",
          title: item.title,
          type: item.field_dc_type,
        }));
        setImagesList(searchResults);
        setTotalItems(parseInt(data.total_results || 0, 10));
        setTotalPages(Math.ceil((data.total_results || 0) / itemsPerPage));
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
      const data = await Api.searchRarebooksForts(text, page);

      if (data?.rows?.search_results?.length > 0) {
        const searchResults = data.rows.search_results.map((item) => ({
          src: item.pdf_thumbnail ? Api.getFileUrl(item.pdf_thumbnail) : "",
          title: item.title,
          type: item.field_dc_type,
        }));
        setImagesList(searchResults);
        setTotalItems(parseInt(data.total_results || 0, 10));
        setTotalPages(Math.ceil((data.total_results || 0) / itemsPerPage));
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
      sessionStorage.setItem("currentPage", currentPage);
      fetchPageData(currentPage);
    }
  };

  const handleSearchSubmit = async (event) => {
    if (event.key === "Enter" || event.type === "click") {
      sessionStorage.setItem("currentPage", currentPage);

      if (searchText.trim()) {
        await fetchSearchResults(searchText.trim(), 0);
        setCurrentPage(0);
      } else {
        await fetchPageData(0);
      }
    }
  };

  const handleViewClick = (snippet) => {
    navigate('/rarebooksoffortsresultpage', {
      state: {
        title: snippet.title
      }
    });
  };

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 0 && pageNumber < totalPages) {
      setCurrentPage(pageNumber);
      sessionStorage.setItem("currentPage", pageNumber);
      fetchPageData(pageNumber);
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

  return (
    <>
      <Container fluid>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/allcategories">Categories</Breadcrumb.Item>
          <Breadcrumb.Item href="/fortsofindia">Forts of India</Breadcrumb.Item>
          <Breadcrumb.Item active>Rarebooks of Forts</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <Container className="archive-header">
        <Row>
          <Col>
            <h1>Rarebooks of Forts</h1>
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

      <Container className="fortindicover">
        <Row className="justify-content-md-center">
          <Col>
            <p>
            Rare books are repositories of knowledge of our past. In this section, we have identified and brought together some rare texts from our vast archive that provide exclusive insight into the forts of our country. These books range from primary records from the colonial times to works by indigenous scholars on the history, art and architecture of forts.
            </p>
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

export default RarebooksOfForts;