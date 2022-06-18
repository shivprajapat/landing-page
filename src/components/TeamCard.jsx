import React from 'react'

import { Div, H4, P } from '../UIKit'
const TeamCard = ({ img, title, description, day, hours }) => {
    return (
        <Div class="team-item">
            <Div className='img-box'>
                <img src={img} alt="team" className='img-fluid' />
            </Div>
            <Div className='dots'>
                <span></span> <span></span> <span></span>
            </Div>
            <Div className='content'>
                <H4>{title}</H4>
                <P>{description}
                </P>
                <Div className='week'>
                    <H4>{day} </H4>
                    <P>{hours} hs.</P>
                </Div>
            </Div>
        </Div>
    )
}

export default TeamCard