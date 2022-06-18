import React from 'react'
import { Summer } from '../Assets'
import { Div, P } from '../UIKit'
import Heading from './Heading'

const SummerImage = () => {
    return (
        <section className='summer-image'>
            <img src={Summer} alt='' className='img-fluid' />
            <Div className='summer-content'>
                <Div className='off'>
                    <P>10 %</P>
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