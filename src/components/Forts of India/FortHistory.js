import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

// slider start here
/* import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; */

// import WhatisFortsBanner from '../images/Jaisalmer_0 2.png';

import FortHistoryThumb from '../../image/FortHis 235.png';
import FortHistoryThumb2 from '../../image/FortHis 236.png';
import FortHistoryThumb3 from '../../image/FortHis 237.png';

import FortHistoryBanner from '../../image/agra1.jpg';
import { ArrowLeft } from 'react-feather';
import Breadcrumb from 'react-bootstrap/Breadcrumb';    
import SwrilDivider from '../SwrilDivider';
import Api from '../api';

// import './FortHistory.css';

function FortHistory() {
    const [historyData, setHistoryData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHistoryData = async () => {
            try {
                const response = await Api.getHistoryOfForts('limit=10');
                console.log('Raw API Response:', response);

                // Access the search_results array from the nested structure
                const data = response?.rows?.search_results || [];

                console.log('Processed data:', data);
                setHistoryData(data);
            } catch (error) {
                console.error('Error fetching history data:', error);
                setHistoryData([]);
            }
        };

        fetchHistoryData();
    }, []);

    const FortHistoryResultpage = (item) => {
        console.log("Navigating with item:", item);
        navigate('/FortHistoryResultpage', {
            state: {
                title: item.title,
                currentPage: 0,
                itemsPerPage: 25
            }
        });
    };

    const backtopre = () => {
        window.open('/fortsofindia', '_parent');
    };

    const redirecthomepage = () => {
        window.open('/', '_parent');
    };

    const fortsofindia = () => {
        window.open('/fortsofindia', '_parent');
      };

      const backtocategory = () => {
        window.open('/allcategories', '_parent');
      };
	  
    // Add a check before mapping
    const renderHistoryItems = () => {
        if (!Array.isArray(historyData) || historyData.length === 0) {
            return <Col>No history data available</Col>;
        }

        return historyData.map((item, index) => (
            <Col key={index}>
                <div>
                    <div className="profilee-card-2">
                        <img 
                            src={Api.getFileUrl(item.field_forts_of_india_thumbnail)} 
                            className="img img-responsive" 
                            alt={item.title}
                            style={{ 
                                objectFit: 'cover',
                                objectPosition: 'center',
                                width: '100%',
                                height: '100%'
                            }}
                        />
                        <div className="profilee-name" style={{ left: '30px', top: '215px' }}>
                            <p>{item.title}</p>
                        </div>
                        <div className="profilee-username"></div>
                        <Button 
                            className='profilee-icons' 
                            variant="outline-light" 
                            onClick={() => FortHistoryResultpage(item)}
                        >
                            Explore
                        </Button>
                    </div>
                </div>
            </Col>
        ));
    };

    return (
        <>
            <div className='parent-container'>
                <img src={FortHistoryBanner} className='forthis-banner' alt='Free Banner' />
            </div>
            <Container fluid className='skip'>
                <Row>
                   {/*  <Col sm={1}>
                        <ArrowLeft className='backtoprevious' onClick={backtopre} size={45} />
                    </Col> */}
                    <Col >
                        {/* Adjust the column size for extra small and small screens */}
                        <Breadcrumb className="d-flex justify-content-left">
                            <Breadcrumb.Item href="#" onClick={redirecthomepage} >Home</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={backtocategory}>Categories</Breadcrumb.Item>
                            <Breadcrumb.Item  onClick={fortsofindia}>Forts Of India</Breadcrumb.Item>
                            <Breadcrumb.Item active className='dead'>History</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
            <Container className='fortindi-header'>
                <Row >
                    <Col >
                        <h1>History</h1>
<SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container className='fortindicover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>Indian history is a rich mosaic of people and traditions. The political history of this land has been an unending saga of the rise and fall of countless kingdoms and dynasties. The once mighty empires have inevitably been lost to time. The monuments and structures built by the rulers and conquerors, however, still stand as tangible reminders of this past. Forts, especially, remind us of the glory, innovation and might of these empires.</p>
                        <p>
                            From the Indus Valley Civilization to the days of the British rule, fortifications have been an abiding feature of our architectural heritage. Forts of the Indian subcontinent have architecturally evolved over time in tandem with the political developments of the country. Indigenous traditions have harmoniously blended with influences that travelled with conquerors from far off lands. The present section aims to offer a broad overview of the evolution of forts in this land.</p>
                    </Col>
                </Row>

            </Container>

            <Container>
                <Row className="justify-content-md-center">
                    {renderHistoryItems()}
                </Row>
            </Container>
        </>
    )
}

export default FortHistory
