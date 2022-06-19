import React, { Fragment } from 'react'
import { Banner, Meet, Summer, SummerImage, Life, Workshop, Practice } from '../components'
const Home = () => {
    return (
        <Fragment>
            <Banner />
            <Meet />
            <SummerImage />
            <Practice />
            <Life />
            <Summer />
            <Workshop />
        </Fragment>
    )
}

export default Home