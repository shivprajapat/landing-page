import React, { Fragment } from 'react'
import { Banner, Meet, Summer, SummerImage, Workshop } from '../components'
import Practice from '../components/Practice'
const Home = () => {
    return (
        <Fragment>
            <Banner />
            <Meet />
            <SummerImage />
            <Practice />
            <Summer />
            <Workshop />
        </Fragment>
    )
}

export default Home