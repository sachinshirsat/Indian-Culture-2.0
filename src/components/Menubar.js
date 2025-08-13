import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ICLogo from '../image/IClogoblack.webp';
import { Search as SearchIcon } from 'react-feather';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowLeftCircle } from "feather-icons-react";

function Menubar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showOffcanvas, setShowOffcanvas] = useState(false); // State to manage offcanvas visibility
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation(); // Initialize useLocation

  // Sample menu items and their corresponding paths
  const menuItems = {
    'Ajanta Caves': '/ajanta',
    'Archives': '/arclistpage',
    'Audios': '/audioslistpage',
    'Digital District Repository': '/ddr',
    'E-Books': '/ebooks',
    'Festivals of India': '/festivalsofindia',
    'Flagship Events': '/flagshipevent',
    'Food & Culture': '/foodnculture',
    'Forts of India': '/fortsofindia',
    'Freedom Archive': '/freedomarchive',
    'Gazettes and Gazetteers': '/gazettesgazetteers',
    'Historic Cities Of India': '/historic-cities',
    'Images': '/images',
    'Indian National Bibliography': '/bibliography',
    'Intangible Cultural Heritage': '/intangible-heritage',
    'Manuscripts': '/manuscriptslistpage',
    'Museum Collections': '/museumcollections',
    'Musical Instruments of India': '/musicalinstrument',
    'North-East Archive': '/northeastarchive',
    'Other Collections': '/othercollection',
    'Paintings': '/paintings',
    'Photo Archives': '/photoarchivelistpage',
    'Photo Essay': '/photo-essay',
    'Rarebooks': '/rarebooks',
    'Reports & Proceedings': '/reportsproceedings',
    'Research Papers': '/researchpapers',
    'Retrieved Artefacts of India': '/retrievedartefacts',
    'Snippets': '/snippets',
    'Stories': '/stories',
    'Textiles and Fabrics': '/textilenfabric',
    'Timeless Trends': '/timelesstrends',
    'UNESCO': '/unesco',
    'Union Catalogues': '/union-catalogues',
    'Videos': '/videoslistpage',
    'Virtual Walkthrough': '/virtual-walkthrough'
};

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMenuItems = Object.keys(menuItems).filter((menuItem) =>
    menuItem.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add 'ArcListpage' link to the filtered menu items
  const menuWithArcListPage = [...filteredMenuItems];

  // Check if the current path is the homepage
  const isHomePage = location.pathname === '/';

  const handleMenuItemClick = (path) => {
    // Clear all session storage
    sessionStorage.clear();
    
    // Close the offcanvas and navigate
    setShowOffcanvas(false);
    navigate(path);
  };

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          id='navbar'
          key={expand}
          bg="light"
          expand={expand}
          className="mb-3"
          style={{ boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.2)' }}
        >
          <Container fluid className='menubar-main-head'>
            <div className="d-flex align-items-center">
              {/* Back Button - Only visible if not on homepage */}
              {!isHomePage && (
                <div className="back-button-container me-3">
                  <ArrowLeftCircle 
                    size={24} 
                    onClick={() => navigate(-1)} 
                    className="back-button"
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              )}

              <Navbar.Brand href="/" className="logo-container">
                <img src={ICLogo} className='logo-responsive' alt="IC Logo" />
              </Navbar.Brand>
            </div>

            <Form className="d-flex menubar-sec-head">
              <div className="position-relative">
                <SearchIcon id='Searchbar' size={22} className="position-absolute top-50 start-0 translate-middle-y ms-2" />
                <Form.Control
                  type="search"
                  placeholder="Discover collections from Archives, Libraries and Museums of India."
                  className="me-2 elastic-input pl-5"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>

              <Navbar.Toggle className='nav-toggale' onClick={() => setShowOffcanvas(true)} aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                className='sidepanel'
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                show={showOffcanvas} // Control visibility with state
                onHide={() => setShowOffcanvas(false)} // Close offcanvas
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <Form className="d-flex">
                      <div className="position-relative">
                        <SearchIcon id='Searchbar' size={22} className="position-absolute top-50 start-0 translate-middle-y ms-2" />
                        <Form.Control
                          type="search"
                          placeholder="Search"
                          className="me-2 menuitems-input pl-5"
                          aria-label="Search"
                          value={searchTerm}
                          onChange={handleSearchChange}
                        />
                      </div>
                    </Form>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='sidepan' style={{ boxShadow: 'inset 0 1px 5px rgba(0, 0 , 0, 0.1)' }}>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    {menuWithArcListPage.map((item, index) => (
                      <Nav.Link 
                        key={index} 
                        onClick={() => {
                          const path = menuItems[item];
                          if (path) {
                            handleMenuItemClick(path);
                          }
                        }}
                      >
                        {item}
                      </Nav.Link>
                    ))}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Form>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Menubar;