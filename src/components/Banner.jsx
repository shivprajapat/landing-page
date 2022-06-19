import React from 'react'
import { Container,Col, Row } from 'react-bootstrap'
import { homeRoseIcon } from '../Assets'
import { Div, H1, H4, P } from '../UIKit'
const Banner = () => {
    return (
        <section className="home d-flex align-items-center">
            <Container>
                <Row className="align-items-center">
                    <Col lg={7} md={12} className="mx-auto">
                        <Div className="home-img">
                            <Div className="home-text">
                                <Div>
                                    <H4>Healthy <span>&</span> Fresh</H4>
                                    <H1>Yoga</H1>
                                    <P>Lorem ipsum dolor sit amet,<br /> consectetuer adipiscing</P>
                                    <Div className='img-box'>
                                        <img src={homeRoseIcon} alt='/' />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner