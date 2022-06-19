import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { homeRoseIcon, Logo } from "../Assets";
import { Div, H3, H5, P } from '../UIKit';

const Footer = () => {
    return (
        <footer className="footer" id='contact'>
            <Container>
                <Div className="inner-footer">
                    <Row>
                        <Col lg={6} md={6} className='mx-auto'>
                            <img src={homeRoseIcon} alt="logo" className="img-fluid" />
                            <H5>The asanas purify our body and keep it healthy, making it a suitable vehicle for the soul.</H5>

                        </Col>
                    </Row>
                </Div>
                <Row>
                    <Col lg={6} md={6}>
                        <Div className="footer-col">
                            <H3>About us</H3>
                            <P>Lorem ipsum dolor sit amet, consec<br />
                                tetur adipisicing elit, sed do eiusmod tempor incididunt ultimam quantum</P>
                            <img src={Logo} alt="logo" className="img-fluid" />

                        </Div>
                    </Col>
                    <Col lg={2} md={6}>
                        <Div className="footer-col">
                            <H3>About</H3>
                            <ul>
                                <li><a href="/">Team</a></li>
                                <li><a href="/">Join us</a></li>
                                <li><a href="/">Ethic</a></li>
                                <li><a href="/">Goals</a></li>
                            </ul>
                        </Div>
                    </Col>
                    <Col lg={2} md={6}>
                        <Div className="footer-col">
                            <H3>About</H3>
                            <ul>
                                <li><a href="/">Team</a></li>
                                <li><a href="/">Join us</a></li>
                                <li><a href="/">Ethic</a></li>
                                <li><a href="/">Goals</a></li>
                            </ul>
                        </Div>
                    </Col>
                    <Col lg={2} md={6}>
                        <Div className="footer-col">
                            <H3>About</H3>
                            <ul>
                                <li><a href="/">Team</a></li>
                                <li><a href="/">Join us</a></li>
                                <li><a href="/">Ethic</a></li>
                                <li><a href="/">Goals</a></li>
                            </ul>
                        </Div>
                    </Col>
                </Row>
            </Container>
            <Row>
                <Col lg={12}>
                    <P className="copyright-text"></P>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer