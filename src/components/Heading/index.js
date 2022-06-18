import React from 'react'
import { Div, H2, H3 } from '../../UIKit'

const Heading = ({ title, second }) => {
    return (
        <Div className="heading_tab">
            <H2>{title}</H2>
            <H3>{second}</H3>
        </Div>
    )
}

export default Heading