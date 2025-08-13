import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'react-feather';
import { Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import SwrilDivider from '../SwrilDivider';
import Api from '../api';
import { useNavigate } from 'react-router-dom';

const SkeletonFeature = () => {
    return (
        <div className="features-thumbnail">
            <div className="features-thumbnail-image-container">
                <div className="skeleton-image"></div>
            </div>
            <div className="skeleton-title"></div>
        </div>
    );
};

const SkeletonFeatureRow = () => {
    return (
        <div className="features-thumbnail-container">
            {Array.from({ length: 4 }).map((_, index) => (
                <SkeletonFeature key={index} />
            ))}
        </div>
    );
};

function FeaturesForts() {
    const [featuresData, setFeaturesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFeaturesData = async () => {
            try {
                setIsLoading(true);
                const response = await Api.getFeaturesForts('');
                if (response?.rows?.search_results) {
                    setFeaturesData(response.rows.search_results);
                }
            } catch (error) {
                console.error('Error fetching features data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFeaturesData();
    }, []);

    const backtopre = () => {
        navigate('/understandingforts');
    };

    const redirectfortsofindia = () => {
        navigate('/fortsofindia');
    };

    const backtocategory = () => {
        navigate('/allcategories');
    };

    const redirecthomepage = () => {
        navigate('/');
    };

    const handleFeatureClick = (feature) => {
        localStorage.setItem('selectedFeature', JSON.stringify(feature));
        navigate('/feature-details');
    };

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Breadcrumb className="d-flex justify-content-left">
                            <Breadcrumb.Item onClick={redirecthomepage}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={backtocategory}>Categories</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={redirectfortsofindia}>Forts Of India</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={backtopre}>Understanding Forts</Breadcrumb.Item>
                            <Breadcrumb.Item active className='dead'>Features of Forts</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>

            <Container className='fortindi-header'>
                <Row>
                    <Col>
                        <h1>Features of Forts</h1>
                        <SwrilDivider/>
                    </Col>
                </Row>
            </Container>

            {isLoading ? (
                <>
                    <SkeletonFeatureRow />
                    <SkeletonFeatureRow />
                    <div className="features-thumbnail-container">
                        <SkeletonFeature />
                    </div>
                </>
            ) : (
                <>
                    <div className="features-thumbnail-container">
                        {featuresData.slice(0, 4).map((feature, index) => (
                            <div className="features-thumbnail" key={index}>
                                <div className="features-thumbnail-image-container">
                                    <img 
                                        className="features-thumbnail-image" 
                                        src={Api.getFileUrl(feature.forts_slider.split(',')[0].trim())}
                                        alt={`Thumbnail ${index + 1}`} 
                                        onClick={() => handleFeatureClick(feature)}
                                    />
                                </div>
                                <div className="features-thumbnail-title">{feature.title}</div>
                            </div>
                        ))}
                    </div>

                    <div className="features-thumbnail-container">
                        {featuresData.slice(4, 8).map((feature, index) => (
                            <div className="features-thumbnail" key={index}>
                                <div className="features-thumbnail-image-container">
                                    <img 
                                        className="features-thumbnail-image" 
                                        src={Api.getFileUrl(feature.forts_slider.split(',')[0].trim())}
                                        alt={`Thumbnail ${index + 5}`} 
                                        onClick={() => handleFeatureClick(feature)}
                                    />
                                </div>
                                <div className="features-thumbnail-title">{feature.title}</div>
                            </div>
                        ))}
                    </div>

                    <div className="features-thumbnail-container">
                        {featuresData.slice(8, 9).map((feature, index) => (
                            <div className="features-thumbnail" key={index}>
                                <div className="features-thumbnail-image-container">
                                    <img 
                                        className="features-thumbnail-image" 
                                        src={Api.getFileUrl(feature.forts_slider.split(',')[0].trim())}
                                        alt={`Thumbnail ${index + 9}`} 
                                        onClick={() => handleFeatureClick(feature)}
                                    />
                                </div>
                                <div className="features-thumbnail-title">{feature.title}</div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );
}

export default FeaturesForts;
