import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import SwrilDivider from '../SwrilDivider';
import Api from '../api';
import { X } from 'feather-icons';

function FeatureDetails() {
    const [featureData, setFeatureData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Get the feature data from localStorage
        const selectedFeature = localStorage.getItem('selectedFeature');
        if (selectedFeature) {
            setFeatureData(JSON.parse(selectedFeature));
            setIsLoading(false);
        } else {
            // If no feature is selected, redirect back to features page
            window.open('/featuresforts', '_parent');
        }
    }, []);

    const getImageUrl = (imagePath) => {
        if (!imagePath) return '';
        try {
            return Api.getFileUrl(imagePath.split(',')[0].trim());
        } catch (error) {
            console.error('Error processing image URL:', error);
            return '';
        }
    };

    const backtopre = () => {
        window.open('/featuresforts', '_parent');
    };

    const redirectfortsofindia = () => {
        window.open('/fortsofindia', '_parent');
    };

    const backtocategory = () => {
        window.open('/allcategories', '_parent');
    };

    const redirecthomepage = () => {
        window.open('/', '_parent');
    };

    const backtounderstandingforts = () => {
        window.open('/understandingforts', '_parent');
    };

    if (!featureData) {
        return null;
    }

    return (
        <>
            <div className='parent-container'>
                {isLoading ? (
                    <div className="banner-skeleton"></div>
                ) : featureData?.forts_slider ? (
                    <img 
                        src={getImageUrl(featureData.forts_slider)}
                        className='fd-wallbanner' 
                        alt={featureData?.title || 'Feature Banner'} 
                    />
                ) : (
                    <div className="banner-skeleton"></div>
                )}
            </div>

            <div className="fort-wall-float-container">
                <a href="#" className="icon one">Share</a>
                <a href="#" className="icon two">QR Code</a>
            </div>

            <Container fluid className="skip">
                <Row>
                    <Col>
                        <Breadcrumb className="d-flex justify-content-left">
                            <Breadcrumb.Item href="#" onClick={redirecthomepage}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={backtocategory}>Categories</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={redirectfortsofindia}>Forts Of India</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={backtounderstandingforts}>Understanding Forts</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={backtopre}>Features of Forts</Breadcrumb.Item>
                            <Breadcrumb.Item active className='dead'>{featureData.title}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>

            <Container className='fortindi-header'>
                <Row>
                    <Col>
                        <h1>{isLoading ? 'Loading...' : featureData.title}</h1>
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>

            <Container className='fortindicover todayhistoryheader'>
                <Row className="justify-content-md-center">
                    <Col>
                        {isLoading ? (
                            <div className="loading-placeholder">
                                <div className="skeleton-text"></div>
                            </div>
                        ) : (
                            <p>{featureData.description || 'No description available'}</p>
                        )}

                        <div className="full-height popupwin">
                            <input className="popupmodal-btn" type="checkbox" id="popupmodal-btn" name="popupmodal-btn" />
                            <label htmlFor="popupmodal-btn">UNRAVEL A FACT<i className="uil uil-expand-arrows"></i></label>
                            <div className="popupmodal">
                                <div className="popupmodal-wrap">
                                    {featureData?.features_image ? (
                                        <img 
                                            src={getImageUrl(featureData.features_image)}
                                            alt={featureData.title} 
                                        />
                                    ) : (
                                        <div className="popup-skeleton"></div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <style>
                {`
                    .loading-placeholder {
                        padding: 20px 0;
                    }
                    .skeleton-text {
                        height: 100px;
                        background-color: #e0e0e0;
                        border-radius: 4px;
                        animation: pulse 1.5s infinite;
                    }
                    .banner-skeleton {
                        width: 100%;
                        height: 400px;
                        background-color: #e0e0e0;
                        animation: pulse 1.5s infinite;
                    }
                    .popup-skeleton {
                        width: 100%;
                        height: 300px;
                        background-color: #e0e0e0;
                        border-radius: 4px;
                        animation: pulse 1.5s infinite;
                    }
                    @keyframes pulse {
                        0% { opacity: 0.6; }
                        50% { opacity: 1; }
                        100% { opacity: 0.6; }
                    }
                `}
            </style>
        </>
    );
}

export default FeatureDetails; 