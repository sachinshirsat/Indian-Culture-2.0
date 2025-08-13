import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Breadcrumb } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "../../image/search.svg";
import Divider from "../../image/SwirlDivider.png";
import { X } from "feather-icons-react";
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

function VirtualWalkthrough({ name, ...props }) {
  const [videoList, setVideoList] = useState([]);
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
      handleSearchSubmit({ type: 'click' }); // Rerun the search
    } else {
      fetchPageData(savedPage);
    }
  }, []);

  const fetchPageData = async (page) => {
    try {
      setIsSearching(true);

      // Construct the query string
      let query = `page=${page}&items_per_page=${itemsPerPage}`;

      const data = await Api.getVirtualWalkthrough(query);

      if (data.pager && data.rows && data.rows.search_results) {
        const searchResults = data.rows.search_results.map((item) => ({
          src: item.field_unesco_data_thumbnail_1
            ? Api.getFileUrl(item.field_unesco_data_thumbnail_1)
            : Api.getFileUrl(item.field_ic_video_streaming_url),
          title: item.title,
          type: item.field_parent_library_name,
        }));
        setVideoList(searchResults);
        setTotalItems(parseInt(data.pager.total_items, 10));
        setTotalPages(data.pager.total_pages);
      } else {
        setVideoList([]);
        setTotalItems(0);
        setTotalPages(0);
      }
    } catch (error) {
      setError("Failed to fetch video data. Please try again later.");
    } finally {
      setIsSearching(false);
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
        try {
          setIsSearching(true);
          const data = await Api.searchVirtualWalkthrough(searchText, 0);
          if (data.pager && data.rows && data.rows.search_results) {
            const searchResults = data.rows.search_results.map((item) => ({
              src: item.field_unesco_data_thumbnail_1
                ? Api.getFileUrl(item.field_unesco_data_thumbnail_1)
                : Api.getFileUrl(item.field_ic_video_streaming_url),
              title: item.title,
              type: item.field_parent_library_name,
            }));
            setVideoList(searchResults);
            setTotalItems(parseInt(data.pager.total_items, 10));
            setTotalPages(data.pager.total_pages);
          } else {
            setVideoList([]);
            setTotalItems(0);
            setTotalPages(0);
          }
        } catch (error) {
          setError("Failed to fetch search results. Please try again.");
        } finally {
          setIsSearching(false);
        }
      }
    }
  };

  useEffect(() => {
    if (currentPage === 0) {
      const fetchData = async () => {
        await fetchPageData(0);
      };
      fetchData();
    }
  }, [currentPage]);

  const handleViewClick = (item) => {
    // Save current state before navigating
    sessionStorage.setItem("currentPage", currentPage.toString());
    sessionStorage.setItem("searchText", searchText);

    navigate("/virtual-walkthrough-resultpage", {
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

  useEffect(() => {
    if (isSearching) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSearching]);

  useEffect(() => {
    return () => {
      if (!window.location.pathname.includes('video')) {
        sessionStorage.removeItem("searchText");
        sessionStorage.removeItem("currentPage");
        sessionStorage.removeItem("totalItems");
      }
    };
  }, []);

  return (
    <>
      <Container fluid>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/allcategories">Categories</Breadcrumb.Item>
          <Breadcrumb.Item active>Virtual Walkthrough</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <Container className="archive-header">
        <Row>
          <Col>
            <h1>Virtual Walkthrough</h1>
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
                    fetchPageData(0);
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
        ) : videoList.length > 0 ? (
          videoList.map((item, index) => (
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

export default VirtualWalkthrough;
