import { React, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// -A, A, and +A functions start here
// import { increaseTextSize, resetTextSize, decreaseTextSize } from './textSizeContext';
import useTextSize from '../useTextSize';

// -A, A, and +A functions end here

import Flag from '../image/Flag_of_India.webp';



function Navbar() {
    // dark and light theme start here
    /*   const [theme, setTheme] = useState('light');
  
      const toggleTheme = () => {
          setTheme(theme === 'light' ? 'dark' : 'light');
      }; */
    // dark and light theme end here


    // -A, A, and +A functions start here
    const { textSize, increaseTextSize, resetTextSize, decreaseTextSize } = useTextSize(18);

    /* const defaultSize = 16;
    const limit = 20;
    const limit1 = 12

    const [textSize, setTextSize] = useState(defaultSize); */
    // -A, A, and +A functions end here

    return (
        <div>
            {/* dark and light class call here */}
            {/* <div className={`theme-${theme}`}> */}
            <div className='NavbarBgColor '>
                <div className='top-bar topbar'>
                    <Container id="container" fluid className="">
                        <Row className="row">
                            <Col className="col-12">
                                {/* Government of India with Flag */}
                                <span className="mx-md-2 d-inline-block"></span>
                                <a href="https://www.india.gov.in/" className="" target='_blank' rel="noreferrer" style={{ fontSize: `${textSize}px` }}>
                                    <span className="mr-2">
                                        <img src={Flag} className='tiranga tirangaflg' alt="Indian Flag" />
                                    </span>
                                    {/* Hide "Government of India" on mobile */}
                                    <span className="d-none d-md-inline-block">Government of India</span>
                                </a>

                                <span className="mx-md-2 d-inline-block"></span>

                                <div className="float-right">

                                    {/* Skip to Main Content Link (hidden on mobile) */}
                                    <a href="#Catagory" className="" style={{ marginRight: '0px', fontSize: `${textSize}px` }}>
                                        <span className="mr-2"></span>
                                        <span className="d-none d-md-inline-block">Skip to main content</span>
                                    </a>

                                    {/* Text Resizing Buttons (hidden on mobile) */}
                                    <a href="#/" onClick={increaseTextSize}>
                                        <span className="mr-2"></span>
                                        <span className="d-none d-md-inline-block btnborder">+A</span>
                                    </a>

                                    <a href="#/" onClick={resetTextSize}>
                                        <span className="mr-2"></span>
                                        <span className="d-none d-md-inline-block btnborder">A</span>
                                    </a>

                                    <a href="#/" onClick={decreaseTextSize}>
                                        <span className="mr-2"></span>
                                        <span className="d-none d-md-inline-block btnborder">-A</span>
                                    </a>

                                    <span className="mx-md-2 d-inline-block"></span>

                                    {/* Language Links (visible on all devices) */}
                                    <a href="#/">
                                        <span className="mr-2"></span>
                                        <span className="langborder">En</span>
                                    </a>

                                    <span className="topdivider" />

                                    <a href="#/">
                                        <span className="langborder">हिं</span>
                                    </a>

                                    <span className="mx-md-2 d-inline-block"></span>

                                </div>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </div>
            {/* </div> */}
        </div>

    )
}

export default Navbar
