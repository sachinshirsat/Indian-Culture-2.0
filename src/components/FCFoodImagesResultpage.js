import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table';

import Arcicon from '../image/FnCICon.png';
import FoodnCulturebanner from '../image/FoodImageBAn.png';
// import './FCFoodImagesResultpage.css';

function FCFoodImagesResultpage() {

    return (
        <>
            <div className='fnc-foodimage-result-parent-container'>
                <img src={FoodnCulturebanner} className='fnc-foodimage-result-banner' alt='Free Banner' />
                {/* <p className='foodnculban-text'>Indian Cuisine</p> */}
            </div>

            <Container >

                <Row style={{ marginTop: '20px' }}>
                    {/* <Col xs={1} className='arcicon'>
                        <img src={Arcicon} alt='Archive Icon' />

                    </Col> */}
                    <Col xs={0} className='fnc-foodimage-result-title' >
                        <img src={Arcicon} className='fnc-foodimage-result-icon' alt='Archive Icon' />
                        <div className='fnc-foodimage-result-vertical'></div>
                        Achari Mutton

                    </Col>


                </Row>
            </Container>

            <hr style={{ width: '100%', marginLeft: 'auto' }} />
            <Container className='fnc-foodimage-result-cover'>
                <Row>

                    <Col>
                        <p >
                            This is a delicious mutton recipe that is packed with flavours because of the lavish use of spices such as coriander, cumin, fennel, mustard seeds and so on. The unique spicy flavour of this dish depends on the use of whole spices roasted and then ground to powder, and the prolonged frying of these along with the meat.
                        </p>

                    </Col>

                </Row>
            </Container>

            <Accordion defaultActiveKey="0" className='fnc-foodimage-result-accord-component'>
                <Accordion.Item eventKey="0" className='fnc-foodimage-result-accord-item'>
                    <Accordion.Header className='fnc-foodimage-result-accord-item-header'>Dublin Core View</Accordion.Header>
                    <Accordion.Body>
                        <Table striped>
                            <thead>
                                <tr>

                                    <th>DC Field</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>dc.contributor.author</td>
                                    <td>Theophilus Metcalf, Agent Lieutenant Governor, North-West Province</td>

                                </tr>
                                <tr>
                                    <td>dc.date.accessioned</td>
                                    <td>28.02.2019</td>

                                </tr>
                                <tr>
                                    <td>dc.date.available</td>
                                    <td>28.02.2019</td>

                                </tr>
                                <tr>
                                    <td>dc.date.issued</td>
                                    <td>14th June 1850</td>

                                </tr>
                                <tr>
                                    <td>dc.description.abstract</td>
                                    <td>Historical account of Koh-i-noor by Metcalfe.</td>

                                </tr>
                                <tr>
                                    <td>dc.description.sponsorship</td>
                                    <td>Foreign.NAI</td>

                                </tr>
                                <tr>
                                    <td>dc.format.extent</td>
                                    <td>68,14,597 bytes</td>

                                </tr>
                                <tr>
                                    <td>dc.format.mimetype</td>
                                    <td>PDF</td>

                                </tr>
                                <tr>
                                    <td>dc.language.iso</td>
                                    <td>en</td>

                                </tr>


                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </>
    )
}

export default FCFoodImagesResultpage
