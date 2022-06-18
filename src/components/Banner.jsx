import React from 'react'
import {homeRoseIcon} from '../Assets'
import { Div, H1, H4, P } from '../UIKit'
const Banner = () => {
    return (
        <section className="home d-flex align-items-center">
            <Div className="container">
                <Div className="row align-items-center">
                    <Div className="col-md-7 mx-auto">
                        <Div className="home-img">
                            <Div className="circle"> <span></span> </Div>
                            <Div className="home-text">
                                <Div>
                                    <H4>Healthy & Fresh</H4>
                                    <H1>Yoga</H1>
                                    <P>Lorem ipsum dolor sit amet,<br /> consectetuer adipiscing</P>
                                    <Div className='img-box'>
                                        <img src={homeRoseIcon} alt='/' />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </section>
    )
}

export default Banner