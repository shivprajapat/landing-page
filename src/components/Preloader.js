
import React from 'react'
import { Loader } from '../Assets'
import { Div } from '../UIKit'
export default function Preloader() {
    return (
        <Div className='preloader'>
            <Div className="loader">
                <img src={Loader} alt="" />
            </Div>
        </Div>
    )
}