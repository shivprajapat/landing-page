import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Heading from './Heading'
import { Hatha, Ashtanga, Kundalini } from '../Assets'
import TeamCard from './TeamCard'
import { Div } from '../UIKit'
const Meet = () => {
    return (
        <section className='meet'>
            <Container>
                <Heading title='Meet our' second='yoga classes' />
                <Div className='meet_tab'>
                    <Row>
                        <Col lg={12} className='mx-auto'>
                            <Row className='justify-content-between'>
                                <Col lg={3} md={6} sm={12}>
                                    <TeamCard img={Hatha} title='Hatha' description='Lorem ipsum sit amet, consectetur  adipisicing...' day='Monday' hours='20:00' />
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <TeamCard img={Ashtanga} title='Ashtanga' description='Lorem ipsum sit amet, consectetur  adipisicing...' day='Monday' hours='20:00' />
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <TeamCard img={Kundalini} title='Kundalini' description='Lorem ipsum sit amet, consectetur  adipisicing...' day='Monday' hours='20:00' />
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

export default Meet