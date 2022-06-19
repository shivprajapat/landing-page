import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Heading from './Heading'
import { PracticeImg, PositionsImg, Border } from '../Assets'
import { Div, H3, H4, P } from '../UIKit'
const Practice = () => {
    return (
        <section className='practice' id='promo'>
            <Div className='practice_top section-padding'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6} xl={6} sm={12}>
                            <Div className='workshop_tab'>
                                <Heading title='dynamics' second='practice' />
                                <Div className='yoga-tab'>
                                    <H3>1. <b>HATHA</b> YOGA</H3>
                                    <P>Hatha is the most classic yoga. Its origin is in the Raya Yoga of Patanjali and other classical texts such as
                                        Bhagavad Gita and Hatha Yoga
                                        Pradipika.</P>

                                </Div>
                                <Div className='yoga-item'>
                                    <H4>10 modules<br />
                                        divided into 7 weekends
                                    </H4>
                                    <Div className='date'>
                                        <Div>
                                            <P>Start</P>
                                            <span>April 15</span>
                                            <span>20.00 hs</span>
                                        </Div>
                                        <Div>
                                            <P>price</P>
                                            <span>$900</span>
                                        </Div>
                                    </Div>
                                </Div>
                            </Div>
                        </Col>
                        <Col lg={6} xl={6} sm={12}>
                            <Div className='workshop_img'>
                                <img src={Border} alt='border' className='border img-fluid' />
                                <img src={PracticeImg} alt='PracticeImg' className='user img-fluid' />
                                <Div className='vertical-txt right'>
                                    <span>h</span>
                                    <span>a</span>
                                    <span>t</span>
                                    <span>h</span>
                                    <span>a</span>
                                </Div>
                            </Div>
                        </Col>

                    </Row>

                </Container>
            </Div>
            <Div className='practice_bottom'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={7} xl={6} sm={12}>
                            <Div className='workshop_img'>
                                <img src={Border} alt='border' className='border img-fluid' />
                                <img src={PositionsImg} alt='PositionsImg' className='user img-fluid' />
                                <Div className='vertical-txt left'>
                                    <span>h</span>
                                    <span>a</span>
                                    <span>t</span>
                                    <span>h</span>
                                    <span>a</span>
                                </Div>
                            </Div>
                        </Col>
                        <Col lg={5} xl={6} sm={12}>
                            <Div className='workshop_tab'>
                                <Heading title='dynamics' second='Positions' />
                                <Div className='yoga-tab'>
                                    <H3>2. <b>Kundalini</b> YOGA</H3>
                                    <P>Kundalini is the most classic yoga. Its
                                        origin is in the Raya Yoga of Patanjali and other classical texts such as
                                        Bhagavad Gita and Hatha Yoga
                                        Pradipika.</P>

                                </Div>
                                <Div className='yoga-item'>
                                    <H4>17 modules<br />
                                        divided into 7 weekends
                                    </H4>
                                    <Div className='date'>
                                        <Div>
                                            <P>Start</P>
                                            <span>April 15</span>
                                            <span>20.00 hs</span>
                                        </Div>
                                        <Div>
                                            <P>price</P>
                                            <span>$900</span>
                                        </Div>
                                    </Div>
                                </Div>
                            </Div>
                        </Col>
                    </Row>
                </Container>
            </Div>
        </section>
    )
}

export default Practice