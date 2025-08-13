import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import TypesOfFortsBanner from '../../image/Jaisalmer_0 4.png';

// import FFreedom1 from '../../image/FFRectangle 259.png';
// import FFreedom2 from '../../image/FFRectangle 260.png';
// import FFreedom3 from '../../image/FFRectangle 261.png';
// import FFreedom4 from '../../image/FFRectangle 262.png';
// import FFreedom5 from '../../image/FFRectangle 263.png';
// import FFreedom6 from '../../image/FFRectangle 264.png';
// import { ArrowLeft } from 'react-feather';

// import './TypesOfForts.css';

import { Info, Maximize2 } from 'react-feather';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import SwrilDivider from '../SwrilDivider';
import Api from '../api';

const SkeletonCard = () => {
  return (
    <>
      <Col md={6}>
        <div className="skeleton-card">
          <div className="skeleton-image"></div>
          <div className="skeleton-title"></div>
          <div className="skeleton-type"></div>
        </div>
      </Col>
      <Col md={6}>
        <div className="skeleton-card">
          <div className="skeleton-image"></div>
          <div className="skeleton-title"></div>
          <div className="skeleton-type"></div>
        </div>
      </Col>
    </>
  );
};

function FortsFreedom() {
    const [fortsData, setFortsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFortsData = async () => {
            try {
                setLoading(true);
                const response = await Api.getFortsOfIndia('limit=6');
                console.log('Raw API Response:', response);
                
                let data;
                try {
                    if (typeof response === 'string') {
                        data = JSON.parse(response);
                    } else {
                        data = response;
                    }
                    
                    if (data && data.rows) {
                        const fortsArray = Object.values(data.rows).flat().map(fort => ({
                            ...fort,
                            body: fort.body || '',
                            title: fort.title || 'Untitled' // Ensure title is included
                        }));
                        console.log('Processed forts array:', fortsArray);
                        setFortsData(fortsArray.slice(0, 6));
                    } else {
                        console.error('Unexpected data format:', data);
                    }
                } catch (parseError) {
                    console.error('Error parsing response:', parseError);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching forts data:', error);
                setLoading(false);
            }
        };

        fetchFortsData();
    }, []);

    console.log('Current fortsData:', fortsData);
    if (fortsData.length > 0) {
        console.log('First fort object:', fortsData[0]);
        console.log('Available fields:', Object.keys(fortsData[0]));
    }

    const fortsfreedomresultpage = (fort) => {
        navigate('/fortsfreedomresultpage', {
            state: {
                title: fort.title,
                thumbnail: fort.field_forts_of_india_thumbnail,
                type: fort.field_dc_type,
                body: fort.body,
                writeup: fort.body,
                currentPage: 0,
                itemsPerPage: 25
            }
        });
        // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
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
    return (
        <>

            <div className='parent-container'>
                <img src={TypesOfFortsBanner} className='fortindibanner' alt='Free Banner' />
            </div>
            <Container fluid className='skip'>
                <Row>
                    {/* <Col sm={1}>
                        <ArrowLeft className='backtoprevious' onClick={backtopre} size={35} />
                    </Col> */}
                    <Col >
                        {/* Adjust the column size for extra small and small screens */}
                        <Breadcrumb className="d-flex justify-content-left">
                            <Breadcrumb.Item href="#" onClick={redirecthomepage} >Home</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={backtocategory}>Categories</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={fortsofindia}>Forts of India</Breadcrumb.Item>
                            <Breadcrumb.Item active className='dead'>Forts and the Freedom Struggle</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
            <Container className='fortindi-header'>
                <Row>
                    <Col>
                        <div style={{
                            textAlign: 'center',
                            marginBottom: '30px',
                            marginTop: '20px'
                        }}>
                            <h1 style={{
                                fontSize: '36px',
                                fontWeight: 'bold',
                                color: '#333',
                                marginBottom: '15px'
                            }}>Forts and the Freedom Struggle</h1>
                            <SwrilDivider />
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    {loading ? (
                        Array.from({ length: 3 }).map((_, index) => (
                            <Row key={index} className="mb-4">
                                <SkeletonCard />
                            </Row>
                        ))
                    ) : (
                        fortsData && fortsData.length > 0 ? (
                            Array.from({ length: 3 }).map((_, rowIndex) => (
                                <Row key={rowIndex} className="mb-5">
                                    {Array.from({ length: 2 }).map((_, colIndex) => {
                                        const fortIndex = rowIndex * 2 + colIndex;
                                        const fort = fortsData[fortIndex];
                                        
                                        return fort ? (
                                            <Col md={6} key={colIndex}>
                                                <div className="ffreedomthumbnail" 
                                                    style={{
                                                        marginBottom: '30px',
                                                        height: '100%',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        cursor: 'pointer',
                                                        
                                                    }}
                                                    onClick={() => fortsfreedomresultpage(fort)}
                                                >
                                                    <div style={{
                                                        position: 'relative',
                                                        paddingBottom: '60%',
                                                        overflow: 'hidden'
                                                    }}>
                                                        <img 
                                                            src={fort.field_forts_of_india_thumbnail ? 
                                                                Api.getFileUrl(fort.field_forts_of_india_thumbnail) : ''}
                                                            alt={fort.title}
                                                            style={{
                                                                position: 'absolute',
                                                                top: 0,
                                                                left: 0,
                                                                width: '100%',
                                                                height: '100%',
                                                                objectFit: 'cover'
                                                            }}
                                                        />
                                                        <div style={{
                                                            position: 'absolute',
                                                            bottom: 0,
                                                            left: 0,
                                                            right: 0,
                                                            background: 'rgba(0, 0, 0, 0.7)',
                                                            color: 'white',
                                                            padding: '10px',
                                                            textAlign: 'center',
                                                            fontSize: '18px',
                                                            fontWeight: '500'
                                                        }}>
                                                            {fort.title}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        ) : <Col md={6} key={colIndex}></Col>;
                                    })}
                                </Row>
                            ))
                        ) : (
                            <div>No data available</div>
                        )
                    )}
                </Row>
            </Container>
           
            
        </>
    )
}

export default FortsFreedom
