import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Heading from './Heading'
import { WorkshopImg, Border } from '../Assets'
import { Div, P } from '../UIKit'
const Workshop = () => {
    return (
        <section className='workshop'>
            <Container>

                <Row className='justify-content-between'>
                    <Col lg={5} xl={6} sm={12}>
                        <Div className='workshop_tab'>
                            <Div className='vertical-txt left'>
                                <span>i</span>
                                <span>n</span>
                                <span>i</span>
                                <span>t</span>
                                <span>i</span>
                                <span>a</span>
                                <span>t</span>
                                <span>i</span>
                                <span>o</span>
                                <span>n</span>
                            </Div>
                            <Heading title='yoga initiation' second='workshop' />
                            <P>TRY YOUR FIRST FREE <br /><b> YOGA CLASS</b></P>
                            <Div className='date'>
                                <P>22.12.2020
                                </P>
                                <P>24.03. 2021</P>
                            </Div>
                        </Div>
                    </Col>
                    <Col lg={7} xl={6} sm={12}>
                        <Div className='workshop_img'>
                            <img src={Border} alt='border' className='border img-fluid' />
                            <img src={WorkshopImg} alt='WorkshopImg' className='user img-fluid' />
                            <Div className='vertical-txt right'>
                                <span>w</span>
                                <span>o</span>
                                <span>r</span>
                                <span>k</span>
                                <span>s</span>
                                <span>o</span>
                                <span>p</span>
                            </Div>
                        </Div>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Workshop