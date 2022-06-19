import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Exercise, Feeding, Meditation } from '../Assets'
import { Div, H3, P } from '../UIKit'

const Life = () => {
    return (
        <section className="life-section">
            <Container>
                <Div className="life-title">
                    <H3>HEALTHY</H3>
                    <P>LIFE</P>
                </Div>
                <Row className='justify-content-lg-between justify-content-md-center'>
                    <Col lg={4} md={6}>
                        <Div className="life-item">
                            <Div className="life-img">
                                <img src={Exercise} alt="Exercise" />
                            </Div>
                            <Div className="life-content">
                                <H3>EXERCISE</H3>
                                <P>Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie posuere</P>
                            </Div>
                        </Div>
                    </Col>
                    <Col lg={4} md={6}>
                        <Div className="life-item">
                            <Div className="life-img">
                                <img src={Feeding} alt="Feeding" />
                            </Div>
                            <Div className="life-content">
                                <H3>FEEDING</H3>
                                <P>Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie posuere</P>
                            </Div>
                        </Div>
                    </Col>
                    <Col lg={4} md={6}>
                        <Div className="life-item">
                            <Div className="life-img">
                                <img src={Meditation} alt="Meditation" />
                            </Div>
                            <Div className="life-content">
                                <H3>MEDITATION    </H3>
                                <P>Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie posuere</P>
                            </Div>
                        </Div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Life