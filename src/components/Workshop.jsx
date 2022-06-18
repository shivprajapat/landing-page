import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Heading from './Heading'
import { Hatha, Border } from '../Assets'
import { Div, P } from '../UIKit'
const Workshop = () => {
    return (
        <section className='workshop'>
            <Container>
                <P className='vertical-txt left'>initiation</P>
                <Row className='justify-content-between'>
                    <Col lg={5} xl={6} sm={12}>
                        <Div className='workshop_tab'>
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
                            <img src={Border} alt='Hatha' className='border img-fluid' />
                            <img src={Hatha} alt='Hatha' className='user img-fluid' />
                        </Div>
                    </Col>
                </Row>
                <P className='vertical-txt right'>Workshop</P>
            </Container>
        </section>
    )
}

export default Workshop