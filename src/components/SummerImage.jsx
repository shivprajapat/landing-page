import React from 'react'
import { Summer } from '../Assets'
import { Div, H5, P } from '../UIKit'
import Heading from './Heading'

const SummerImage = () => {
    return (
        <section className='summer-image'>
            <img src={Summer} alt='' className='img-fluid' />
            <Div className='summer-content'>
                <Div className='off'>
                    <Div className='d-flex'>
                        <H5>10</H5>
                        <span>%</span>
                    </Div>
                    <P className='off_txt'>OFF</P>
                </Div>
                <Div className='image-txt'>
                    <Heading title='class' second='summer' />
                    <P>22.12.2020</P>
                    <P>24.03. 2021</P>
                </Div>
            </Div>
        </section>
    )
}

export default SummerImage