import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DOMPurify from 'dompurify';
import { useNavigate } from 'react-router-dom';

import UnderstandingFortsBanner from '../../image/Jaisalmer_0 1.png';
import UnderFrt1 from '../../image/Ellipse 41.png';
import UnderFrt2 from '../../image/Ellipse 42.png';
import UnderFrt3 from '../../image/Ellipse 43.png';

import { ArrowLeft } from 'react-feather';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import SwrilDivider from '../SwrilDivider';
import Api from '../api';

// Add SkeletonCard component
const SkeletonCard = () => {
  return (
    <>
      <div className="skeleton-card">
        <div className="skeleton-image"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-type"></div>
      </div>
      
    </>
  );
};

// import '../components/UnderstandingForts.css';

function UnderstandingForts() {
    const [fortsData, setFortsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFortsData = async () => {
            try {
                setIsLoading(true);
                const response = await Api.getUnderstandingForts('');
                
                if (response?.rows?.search_results) {
                    // Log data for all three sections
                    console.log('Section 1 image data:', response.rows.search_results[0]?.field_forts_writup_images);
                    console.log('Section 2 image data:', response.rows.search_results[1]?.field_forts_writup_images);
                    console.log('Section 3 image data:', response.rows.search_results[2]?.field_forts_writup_images);
                    
                    setFortsData(response.rows.search_results);
                } else {
                    console.error('No search_results in response:', response);
                    setIsLoading(false);
                    return;
                }
            } catch (error) {
                console.error('Error fetching forts data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFortsData();
    }, []);

    const whatisfort = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        navigate('/whatisfort');
    };

    const featuresforts = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        navigate('/featuresforts');
    };

    const typesofforts = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        navigate('/typesofforts');
    }

    const backtopre = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        navigate('/fortsofindia');
    };

    const backtocategory = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        navigate('/allcategories');
    };

    const redirecthomepage = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        navigate('/');
    };

    return (
        <>


            <div className='parent-container'>
                <img src={UnderstandingFortsBanner} className='fortindibanner' alt='Free Banner' />
            </div>
            <Container fluid className="skip">
                <Row>
                    {/* <Col sm={1}>
                        <ArrowLeft className='backtoprevious' onClick={backtopre} size={35} />
                    </Col> */}
                    <Col >
                        {/* Adjust the column size for extra small and small screens */}
                        <Breadcrumb className="d-flex justify-content-left">
                            <Breadcrumb.Item href="#" onClick={redirecthomepage} >Home</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={backtocategory}>
                                Categories
                            </Breadcrumb.Item>
                            <Breadcrumb.Item  onClick={backtopre}>Forts Of India</Breadcrumb.Item>
                            <Breadcrumb.Item active className='dead'>Understanding Forts</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
            <Container className='fortindi-header'>
                <Row >
                    <Col >
                        <h1>Understanding Forts</h1>
<SwrilDivider/>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            {/* First Section - What is a Fort */}
            <Container className='unfwhatheader' style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                <Row className="justify-content-md-center">
                    <Col xs lg="4" className='justify-content-center'>
                        <div className='unfwhatimg'>
                            {isLoading ? (
                                <SkeletonCard />
                            ) : (
                                <img 
                                    src={fortsData[0]?.field_forts_writup_images ? 
                                        Api.getFileUrl(fortsData[0].field_forts_writup_images.split(',')[0].trim()) : 
                                        UnderFrt1} 
                                    alt="What is a Fort" 
                                    className='' 
                                />
                            )}
                        </div>
                    </Col>
                    <Col>
                        {isLoading ? (
                            <SkeletonCard />
                        ) : (
                            <>
                                <h2>{fortsData[0]?.title}</h2>
                                <div className="storytxt">
                                    <p>{fortsData[0]?.field_understanding_fort_short_d || "Loading content..."}</p>
                                </div>
                                <button className="unfwhatbtn" onClick={whatisfort}>
                                    <span>Read More </span>
                                </button>
                            </>
                        )}
                    </Col>
                </Row>
            </Container>

            {/* Second Section - Features of Forts */}
            <Container className='unfwhatheader' style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                <Row className="justify-content-md-center">
                    <Col id='did'>
                        {isLoading ? (
                            <SkeletonCard />
                        ) : (
                            <>
                                <h2>{fortsData[1]?.title}</h2>
                                <div className="storytxt">
                                    <p>{fortsData[1]?.field_understanding_fort_short_d}</p>
                                </div>
                                <button className="unfwhatbtn" onClick={featuresforts}>
                                    <span>Read More </span>
                                </button>
                            </>
                        )}
                    </Col>
                    <Col xs lg="4" className='justify-content-center'>
                        <div className='unfwhatimg'>
                            {isLoading ? (
                                <SkeletonCard />
                            ) : (
                                <img 
                                    src={fortsData[1]?.field_forts_writup_images ? 
                                        Api.getFileUrl(fortsData[1].field_forts_writup_images.split(',')[0].trim()) : 
                                        UnderFrt2} 
                                    alt="Features of Forts" 
                                    className='' 
                                />
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Third Section - Types of Forts */}
            <Container className='unfwhatheader' style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                <Row className="justify-content-md-center">
                    <Col xs lg="4" className='justify-content-center'>
                        <div className='unfwhatimg'>
                            {isLoading ? (
                                <SkeletonCard />
                            ) : (
                                <img 
                                    src={fortsData[2]?.field_forts_writup_images ? 
                                        Api.getFileUrl(fortsData[2].field_forts_writup_images.split(',')[0].trim()) : 
                                        UnderFrt3} 
                                    alt="Types of Forts" 
                                    className='' 
                                />
                            )}
                        </div>
                    </Col>
                    <Col>
                        {isLoading ? (
                            <SkeletonCard />
                        ) : (
                            <>
                                <h2>{fortsData[2]?.title}</h2>
                                <div className="storytxt">
                                    <p>{fortsData[2]?.field_understanding_fort_short_d}</p>
                                </div>
                                <button className="unfwhatbtn" onClick={typesofforts}>
                                    <span>Read More </span>
                                </button>
                            </>
                        )}
                    </Col>
                </Row>
            </Container>

            {/*   <Container fluid>
                <hr />
            </Container> */}

            

            {console.log('Current fortsData:', fortsData)}
            {console.log('First item:', fortsData[0])}
            {console.log('First item attributes:', fortsData[0]?.attributes)}
            {console.log('Current isLoading:', isLoading)}

        </>
    )
}

export default UnderstandingForts
