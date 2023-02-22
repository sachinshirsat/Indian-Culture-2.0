import { React, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import Flag from '../image/Flag_of_India.png';
import './TopNavbar.css';
import './Light.css';
import './Dark.css';


function Navbar() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // link to site
    /*  const handleClick = () => {
         window.location.href = 'https://www.india.gov.in/';
       }; */
    return (
        <div className={`theme-${theme}`}>
            <div className='NavbarBgColor '>
                <div className='top-bar '>
                    <Container fluid className=" card-color">
                        <Row className="row ">
                            <Col className="col-12">
                                {/* <a href="#/" class=""><span class="mr-2 "></span> <span class="d-none d-md-inline-block "><img src={Flag} className='tiranga' alt="Indian Flag" /> Government of India</span></a>
 */}                                <span className="mx-md-2 d-inline-block"></span>
                                <a href="https://www.india.gov.in/" className="" target='_blank' rel="noreferrer"><span class="mr-2"><img src={Flag} className='tiranga' alt="Indian Flag" /></span> <span className="d-none d-md-inline-block">Government of India</span></a>
                                <span className="mx-md-2 d-inline-block"></span>
                                {/* <a href="#/" class=""><span class="mr-2  icon-phone"></span> <span class="d-none d-md-inline-block">1+ (010) 0101 0101</span></a> */}


                                <div className="float-right" >
                                    {/* <button className='darknlight'>Light / Dark</button> */}
                                    {/* <span class="mx-md-2 d-inline-block"></span> */}
                                    <a href="#Catagory" className="" style={{ marginRight: '0px' }}><span className="mr-2" ></span> <span className="d-none d-md-inline-block" >Skip to main content</span></a>
                                    {/* <span class="mx-md-2 d-inline-block"></span> */}
                                    {/*                                     <span class="topdivider" />
 */}




                                    <label className="switch toggle">
                                        <input type="checkbox" />
                                        <span className="slider round" onClick={toggleTheme}></span>
                                    </label>


                                    {/*  <a href="#/" class=""><span class="mr-2  icon-facebook"></span> <span class="d-none d-md-inline-block">Facebook</span></a>
                                    <span class="mx-md-2 d-inline-block"></span>
                                    <a href="#/" class=""><span class="mr-2  icon-instagram"></span> <span class="d-none d-md-inline-block">Instagram</span></a>
                                    <span class="mx-md-2 d-inline-block"></span>
                                    <a href="#/" class=""><span class="mr-2  icon-twitter"></span> <span class="d-none d-md-inline-block">Twitter</span></a>
                                    <span class="mx-md-2 d-inline-block"></span> */}

                                    <a href="#/" className=""><span class="mr-2 "></span> <span className="d-none d-md-inline-block">+A</span></a>
                                    <span className="mx-md-2 d-inline-block"></span>
                                    <a href="#/" className=""><span class="mr-2  "></span> <span className="d-none d-md-inline-block">A</span></a>
                                    <span className="mx-md-2 d-inline-block"></span>
                                    <a href="#/" className=""><span class="mr-2  "></span> <span className="d-none d-md-inline-block">-A</span></a>
                                    <span className="mx-md-2 d-inline-block"></span>

                                    {/*                                     <span class="topdivider" />
 */}

                                    <a href="#/" class=""><span className="mr-2  "></span>
                                        <span className="d-none d-md-inline-block">Language</span></a>
                                    <span className="mx-md-2 d-inline-block"></span>
                                    {/*                                     <span class="topdivider" />
 */}

                                </div>

                            </Col>


                        </Row>

                    </Container>
                </div>
            </div>
        </div>

    )
}

export default Navbar
