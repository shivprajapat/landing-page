import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Heading from './Heading'
import { Anusara, Bharata, Kripalu } from '../Assets'
import TeamCard from './TeamCard'
import { Div } from '../UIKit'
const Summer = () => {
    return (
        <section className='summer section-padding'>
            <Container>
                <Heading title='look at our' second='Summer classes' />
                <Div className='meet_tab'>
                    <Row>
                        <Col xxl={10} className='mx-auto'>
                            <Row className='justify-content-lg-between justify-content-md-center'>
                                <Col xxl={3} lg={4} md={6} sm={12} data-aos="fade-up" data-aos-duration="2000">
                                    <TeamCard img={Anusara} title='Anusara' description='Lorem ipsum sit amet, consectetur  adipisicing...' day='Friday' hours='20:00' />
                                </Col>
                                <Col xxl={3} lg={4} md={6} sm={12} data-aos="fade-up" data-aos-duration="2000">
                                    <TeamCard img={Kripalu} title='Kripalu' description='Lorem ipsum sit amet, consectetur  adipisicing...' day='Tuesday' hours='18:00' />
                                </Col>
                                <Col xxl={3} lg={4} md={6} sm={12} data-aos="fade-up" data-aos-duration="2000">
                                    <TeamCard img={Bharata} title='Bharata' description='Lorem ipsum sit amet, consectetur  adipisicing...' day='Sunday' hours='13:30' />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Div className='more-btn'>
                        <button className='btnBlue'>show more</button>
                    </Div>
                </Div>
            </Container>
        </section>
    )
}

export default Summer